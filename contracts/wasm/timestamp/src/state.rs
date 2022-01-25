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
pub struct ImmutabletimestampState {
    pub(crate) id: i32,
}

impl ImmutabletimestampState {
    pub fn timestamp(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.id, STATE_TIMESTAMP.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutabletimestampState {
    pub(crate) id: i32,
}

impl MutabletimestampState {
    pub fn as_immutable(&self) -> ImmutabletimestampState {
		ImmutabletimestampState { id: self.id }
	}

    pub fn timestamp(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.id, STATE_TIMESTAMP.get_key_id())
	}
}
