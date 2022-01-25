// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// Provide host with details about funcs and views in this smart contract

use crate::context::*;
use crate::host::*;
use crate::keys::*;
use crate::mutable::*;

// Note that we do not use the Wasm export symbol table on purpose
// because Wasm does not allow us to determine whether the symbols
// are meant as view or func, or meant as extra public callbacks
// generated by the compilation of the the Wasm code.
// There are only 2 symbols the ISCP host will actually look for
// in the export table:
// on_load (which must be defined by the SC code) and
// on_call (which is defined here as part of WasmLib)

static mut FUNCS: Vec<fn(&ScFuncContext)> = vec![];
static mut VIEWS: Vec<fn(&ScViewContext)> = vec![];

#[no_mangle]
// general entrypoint for the host to call any SC function
// the host will pass the index of one of the entry points
// that was provided by on_load during SC initialization
fn on_call(index: i32) {
    let ctx = ScFuncContext {};
    ctx.require(get_object_id(OBJ_ID_ROOT, KEY_STATE, TYPE_MAP) == OBJ_ID_STATE, "object id mismatch");
    ctx.require(get_object_id(OBJ_ID_ROOT, KEY_PARAMS, TYPE_MAP) == OBJ_ID_PARAMS, "object id mismatch");
    ctx.require(get_object_id(OBJ_ID_ROOT, KEY_RESULTS, TYPE_MAP) == OBJ_ID_RESULTS, "object id mismatch");

    unsafe {
        if (index & 0x8000) != 0 {
            // immutable view function, invoke with a view context
            VIEWS[(index & 0x7fff) as usize](&ScViewContext {});
            return;
        }

        // mutable full function, invoke with a func context
        FUNCS[index as usize](&ctx);
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// context for on_load function to be able to tell host which
// funcs and views are available as entry points to the SC
pub struct ScExports {
    exports: ScMutableStringArray,
}

impl ScExports {
    // constructs the symbol export context for the on_load function
    pub fn new() -> ScExports {
        let exports = ROOT.get_string_array(&KEY_EXPORTS);
        // tell host what value our special predefined key is
        // this helps detect versioning problems between host
        // and client versions of WasmLib
        exports.get_string(KEY_ZZZZZZZ.0 as u32).set_value("Rust:KEY_ZZZZZZZ");
        ScExports { exports: exports }
    }

    // defines the external name of a smart contract func
    // and the entry point function associated with it
    pub fn add_func(&self, name: &str, f: fn(&ScFuncContext)) {
        unsafe {
            let index = FUNCS.len() as u32;
            FUNCS.push(f);
            self.exports.get_string(index).set_value(name);
        }
    }

    // defines the external name of a smart contract view
    // and the entry point function associated with it
    pub fn add_view(&self, name: &str, v: fn(&ScViewContext)) {
        unsafe {
            let index = VIEWS.len() as u32;
            VIEWS.push(v);
            self.exports.get_string(index | 0x8000).set_value(name);
        }
    }
}

