// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class DonateCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncDonate);
	params: sc.MutableDonateParams = new sc.MutableDonateParams(wasmlib.ScView.nilProxy);
}

export class DonateContext {
	params: sc.ImmutableDonateParams = new sc.ImmutableDonateParams(wasmlib.paramsProxy());
	state: sc.MutableDonateWithFeedbackState = new sc.MutableDonateWithFeedbackState(wasmlib.ScState.proxy());
}

export class WithdrawCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncWithdraw);
	params: sc.MutableWithdrawParams = new sc.MutableWithdrawParams(wasmlib.ScView.nilProxy);
}

export class WithdrawContext {
	params: sc.ImmutableWithdrawParams = new sc.ImmutableWithdrawParams(wasmlib.paramsProxy());
	state: sc.MutableDonateWithFeedbackState = new sc.MutableDonateWithFeedbackState(wasmlib.ScState.proxy());
}

export class DonationCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewDonation);
	params: sc.MutableDonationParams = new sc.MutableDonationParams(wasmlib.ScView.nilProxy);
	results: sc.ImmutableDonationResults = new sc.ImmutableDonationResults(wasmlib.ScView.nilProxy);
}

export class DonationContext {
	params: sc.ImmutableDonationParams = new sc.ImmutableDonationParams(wasmlib.paramsProxy());
	results: sc.MutableDonationResults = new sc.MutableDonationResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableDonateWithFeedbackState = new sc.ImmutableDonateWithFeedbackState(wasmlib.ScState.proxy());
}

export class DonationInfoCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewDonationInfo);
	results: sc.ImmutableDonationInfoResults = new sc.ImmutableDonationInfoResults(wasmlib.ScView.nilProxy);
}

export class DonationInfoContext {
	results: sc.MutableDonationInfoResults = new sc.MutableDonationInfoResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableDonateWithFeedbackState = new sc.ImmutableDonateWithFeedbackState(wasmlib.ScState.proxy());
}

export class ScFuncs {
    static donate(ctx: wasmlib.ScFuncCallContext): DonateCall {
        const f = new DonateCall();
		f.params = new sc.MutableDonateParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static withdraw(ctx: wasmlib.ScFuncCallContext): WithdrawCall {
        const f = new WithdrawCall();
		f.params = new sc.MutableWithdrawParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static donation(ctx: wasmlib.ScViewCallContext): DonationCall {
        const f = new DonationCall();
		f.params = new sc.MutableDonationParams(wasmlib.newCallParamsProxy(f.func));
		f.results = new sc.ImmutableDonationResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }

    static donationInfo(ctx: wasmlib.ScViewCallContext): DonationInfoCall {
        const f = new DonationInfoCall();
		f.results = new sc.ImmutableDonationInfoResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }
}
