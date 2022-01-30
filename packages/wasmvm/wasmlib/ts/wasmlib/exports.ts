// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// Provide host with details about funcs and views in this smart contract

import {ScFuncContext, ScViewContext} from "./context";
import {exportName, exportWasmTag} from "./host";

// Note that we do not use the Wasm export symbol table on purpose
// because Wasm does not allow us to determine whether the symbols
// are meant as view or func, or meant as extra public callbacks
// generated by the compilation of the the Wasm code.
// There are only 2 symbols the ISCP host will actually look for
// in the export table:
// on_load (which must be defined by the SC code) and
// on_call (which is defined here as part of WasmLib)

type ScFuncContextFunc = (f: ScFuncContext) => void;
type ScViewContextFunc = (v: ScViewContext) => void;

let funcs: Array<ScFuncContextFunc> = [];
let views: Array<ScViewContextFunc> = [];

// general entrypoint for the host to call any SC function
// the host will pass the index of one of the entry points
// that was provided by onLoad during SC initialization
export function onCall(index: i32): void {
    if ((index & 0x8000) != 0) {
        // immutable view function, invoke with a view context
        let view = views[index & 0x7fff];
        view(new ScViewContext());
        return;
    }

    // mutable full function, invoke with a func context
    let func = funcs[index];
    func(new ScFuncContext());
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// context for onLoad function to be able to tell host which
// funcs and views are available as entry points to the SC
export class ScExports {
    // constructs the symbol export context for the onLoad function
    constructor() {
        exportWasmTag()
    }

    // defines the external name of a smart contract func
    // and the entry point function associated with it
    addFunc(name: string, f: ScFuncContextFunc): void {
        let index = funcs.length;
        funcs.push(f);
        exportName(index, name);
    }

    // defines the external name of a smart contract view
    // and the entry point function associated with it
    addView(name: string, v: ScViewContextFunc): void {
        let index = views.length as i32;
        views.push(v);
        exportName(index | 0x8000, name);
    }
}

