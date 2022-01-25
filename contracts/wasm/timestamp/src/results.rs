// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;
use wasmlib::host::*;

use crate::*;
use crate::keys::*;

#[derive(Clone, Copy)]
pub struct ImmutableGetTimestampResults {
    pub(crate) id: i32,
}

impl ImmutableGetTimestampResults {
    pub fn timestamp(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.id, RESULT_TIMESTAMP.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableGetTimestampResults {
    pub(crate) id: i32,
}

impl MutableGetTimestampResults {
    pub fn timestamp(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.id, RESULT_TIMESTAMP.get_key_id())
	}
}
