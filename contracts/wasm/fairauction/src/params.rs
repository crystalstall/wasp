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
use crate::structs::*;
use crate::typedefs::*;

#[derive(Clone, Copy)]
pub struct ImmutableFinalizeAuctionParams {
    pub(crate) id: i32,
}

impl ImmutableFinalizeAuctionParams {
    pub fn color(&self) -> ScImmutableColor {
		ScImmutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableFinalizeAuctionParams {
    pub(crate) id: i32,
}

impl MutableFinalizeAuctionParams {
    pub fn color(&self) -> ScMutableColor {
		ScMutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct ImmutablePlaceBidParams {
    pub(crate) id: i32,
}

impl ImmutablePlaceBidParams {
    pub fn color(&self) -> ScImmutableColor {
		ScImmutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutablePlaceBidParams {
    pub(crate) id: i32,
}

impl MutablePlaceBidParams {
    pub fn color(&self) -> ScMutableColor {
		ScMutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableSetOwnerMarginParams {
    pub(crate) id: i32,
}

impl ImmutableSetOwnerMarginParams {
    pub fn owner_margin(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.id, PARAM_OWNER_MARGIN.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableSetOwnerMarginParams {
    pub(crate) id: i32,
}

impl MutableSetOwnerMarginParams {
    pub fn owner_margin(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.id, PARAM_OWNER_MARGIN.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableStartAuctionParams {
    pub(crate) id: i32,
}

impl ImmutableStartAuctionParams {
    pub fn color(&self) -> ScImmutableColor {
		ScImmutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}

    pub fn description(&self) -> ScImmutableString {
		ScImmutableString::new(self.id, PARAM_DESCRIPTION.get_key_id())
	}

    pub fn duration(&self) -> ScImmutableUint32 {
		ScImmutableUint32::new(self.id, PARAM_DURATION.get_key_id())
	}

    pub fn minimum_bid(&self) -> ScImmutableUint64 {
		ScImmutableUint64::new(self.id, PARAM_MINIMUM_BID.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableStartAuctionParams {
    pub(crate) id: i32,
}

impl MutableStartAuctionParams {
    pub fn color(&self) -> ScMutableColor {
		ScMutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}

    pub fn description(&self) -> ScMutableString {
		ScMutableString::new(self.id, PARAM_DESCRIPTION.get_key_id())
	}

    pub fn duration(&self) -> ScMutableUint32 {
		ScMutableUint32::new(self.id, PARAM_DURATION.get_key_id())
	}

    pub fn minimum_bid(&self) -> ScMutableUint64 {
		ScMutableUint64::new(self.id, PARAM_MINIMUM_BID.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableGetInfoParams {
    pub(crate) id: i32,
}

impl ImmutableGetInfoParams {
    pub fn color(&self) -> ScImmutableColor {
		ScImmutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableGetInfoParams {
    pub(crate) id: i32,
}

impl MutableGetInfoParams {
    pub fn color(&self) -> ScMutableColor {
		ScMutableColor::new(self.id, PARAM_COLOR.get_key_id())
	}
}
