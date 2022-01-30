// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class ImmutableGetFactorResults extends wasmtypes.ScProxy {
    factor(): wasmtypes.ScImmutableUint64 {
		return new wasmtypes.ScImmutableUint64(this.proxy.root(sc.ResultFactor));
	}
}

export class MutableGetFactorResults extends wasmtypes.ScProxy {
    factor(): wasmtypes.ScMutableUint64 {
		return new wasmtypes.ScMutableUint64(this.proxy.root(sc.ResultFactor));
	}
}

export class ImmutableGetOwnerResults extends wasmtypes.ScProxy {
    owner(): wasmtypes.ScImmutableAgentID {
		return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.ResultOwner));
	}
}

export class MutableGetOwnerResults extends wasmtypes.ScProxy {
    owner(): wasmtypes.ScMutableAgentID {
		return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.ResultOwner));
	}
}
