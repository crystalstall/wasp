// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class ImmutableGetHelloWorldResults extends wasmtypes.ScProxy {
    helloWorld(): wasmtypes.ScImmutableString {
		return new wasmtypes.ScImmutableString(this.proxy.root(sc.ResultHelloWorld));
	}
}

export class MutableGetHelloWorldResults extends wasmtypes.ScProxy {
    helloWorld(): wasmtypes.ScMutableString {
		return new wasmtypes.ScMutableString(this.proxy.root(sc.ResultHelloWorld));
	}
}
