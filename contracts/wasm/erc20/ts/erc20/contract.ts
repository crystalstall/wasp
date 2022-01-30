// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class ApproveCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncApprove);
	params: sc.MutableApproveParams = new sc.MutableApproveParams(wasmlib.ScView.nilProxy);
}

export class ApproveContext {
	events: sc.Erc20Events = new sc.Erc20Events();
	params: sc.ImmutableApproveParams = new sc.ImmutableApproveParams(wasmlib.paramsProxy());
	state: sc.MutableErc20State = new sc.MutableErc20State(wasmlib.ScState.proxy());
}

export class InitCall {
	func: wasmlib.ScInitFunc = new wasmlib.ScInitFunc(sc.HScName, sc.HFuncInit);
	params: sc.MutableInitParams = new sc.MutableInitParams(wasmlib.ScView.nilProxy);
}

export class InitContext {
	events: sc.Erc20Events = new sc.Erc20Events();
	params: sc.ImmutableInitParams = new sc.ImmutableInitParams(wasmlib.paramsProxy());
	state: sc.MutableErc20State = new sc.MutableErc20State(wasmlib.ScState.proxy());
}

export class TransferCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncTransfer);
	params: sc.MutableTransferParams = new sc.MutableTransferParams(wasmlib.ScView.nilProxy);
}

export class TransferContext {
	events: sc.Erc20Events = new sc.Erc20Events();
	params: sc.ImmutableTransferParams = new sc.ImmutableTransferParams(wasmlib.paramsProxy());
	state: sc.MutableErc20State = new sc.MutableErc20State(wasmlib.ScState.proxy());
}

export class TransferFromCall {
	func: wasmlib.ScFunc = new wasmlib.ScFunc(sc.HScName, sc.HFuncTransferFrom);
	params: sc.MutableTransferFromParams = new sc.MutableTransferFromParams(wasmlib.ScView.nilProxy);
}

export class TransferFromContext {
	events: sc.Erc20Events = new sc.Erc20Events();
	params: sc.ImmutableTransferFromParams = new sc.ImmutableTransferFromParams(wasmlib.paramsProxy());
	state: sc.MutableErc20State = new sc.MutableErc20State(wasmlib.ScState.proxy());
}

export class AllowanceCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewAllowance);
	params: sc.MutableAllowanceParams = new sc.MutableAllowanceParams(wasmlib.ScView.nilProxy);
	results: sc.ImmutableAllowanceResults = new sc.ImmutableAllowanceResults(wasmlib.ScView.nilProxy);
}

export class AllowanceContext {
	params: sc.ImmutableAllowanceParams = new sc.ImmutableAllowanceParams(wasmlib.paramsProxy());
	results: sc.MutableAllowanceResults = new sc.MutableAllowanceResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableErc20State = new sc.ImmutableErc20State(wasmlib.ScState.proxy());
}

export class BalanceOfCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewBalanceOf);
	params: sc.MutableBalanceOfParams = new sc.MutableBalanceOfParams(wasmlib.ScView.nilProxy);
	results: sc.ImmutableBalanceOfResults = new sc.ImmutableBalanceOfResults(wasmlib.ScView.nilProxy);
}

export class BalanceOfContext {
	params: sc.ImmutableBalanceOfParams = new sc.ImmutableBalanceOfParams(wasmlib.paramsProxy());
	results: sc.MutableBalanceOfResults = new sc.MutableBalanceOfResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableErc20State = new sc.ImmutableErc20State(wasmlib.ScState.proxy());
}

export class TotalSupplyCall {
	func: wasmlib.ScView = new wasmlib.ScView(sc.HScName, sc.HViewTotalSupply);
	results: sc.ImmutableTotalSupplyResults = new sc.ImmutableTotalSupplyResults(wasmlib.ScView.nilProxy);
}

export class TotalSupplyContext {
	results: sc.MutableTotalSupplyResults = new sc.MutableTotalSupplyResults(wasmlib.ScView.nilProxy);
	state: sc.ImmutableErc20State = new sc.ImmutableErc20State(wasmlib.ScState.proxy());
}

export class ScFuncs {
    static approve(ctx: wasmlib.ScFuncCallContext): ApproveCall {
        const f = new ApproveCall();
		f.params = new sc.MutableApproveParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static init(ctx: wasmlib.ScFuncCallContext): InitCall {
        const f = new InitCall();
		f.params = new sc.MutableInitParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static transfer(ctx: wasmlib.ScFuncCallContext): TransferCall {
        const f = new TransferCall();
		f.params = new sc.MutableTransferParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static transferFrom(ctx: wasmlib.ScFuncCallContext): TransferFromCall {
        const f = new TransferFromCall();
		f.params = new sc.MutableTransferFromParams(wasmlib.newCallParamsProxy(f.func));
        return f;
    }

    static allowance(ctx: wasmlib.ScViewCallContext): AllowanceCall {
        const f = new AllowanceCall();
		f.params = new sc.MutableAllowanceParams(wasmlib.newCallParamsProxy(f.func));
		f.results = new sc.ImmutableAllowanceResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }

    static balanceOf(ctx: wasmlib.ScViewCallContext): BalanceOfCall {
        const f = new BalanceOfCall();
		f.params = new sc.MutableBalanceOfParams(wasmlib.newCallParamsProxy(f.func));
		f.results = new sc.ImmutableBalanceOfResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }

    static totalSupply(ctx: wasmlib.ScViewCallContext): TotalSupplyCall {
        const f = new TotalSupplyCall();
		f.results = new sc.ImmutableTotalSupplyResults(wasmlib.newCallResultsProxy(f.func));
        return f;
    }
}
