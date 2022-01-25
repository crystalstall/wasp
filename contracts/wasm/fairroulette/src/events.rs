// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]

use wasmlib::*;

pub struct FairRouletteEvents {
}

impl FairRouletteEvents {

	pub fn bet(&self, address: &ScAddress, amount: u64, number: u16) {
		let mut encoder = EventEncoder::new("fairroulette.bet");
		encoder.address(&address);
		encoder.uint64(amount);
		encoder.uint16(number);
		encoder.emit();
	}

	pub fn payout(&self, address: &ScAddress, amount: u64) {
		let mut encoder = EventEncoder::new("fairroulette.payout");
		encoder.address(&address);
		encoder.uint64(amount);
		encoder.emit();
	}

	pub fn round(&self, number: u32) {
		let mut encoder = EventEncoder::new("fairroulette.round");
		encoder.uint32(number);
		encoder.emit();
	}

	pub fn start(&self) {
		EventEncoder::new("fairroulette.start").emit();
	}

	pub fn stop(&self) {
		EventEncoder::new("fairroulette.stop").emit();
	}

	pub fn winner(&self, number: u16) {
		let mut encoder = EventEncoder::new("fairroulette.winner");
		encoder.uint16(number);
		encoder.emit();
	}
}
