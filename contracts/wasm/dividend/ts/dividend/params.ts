// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class ImmutableInitParams extends wasmtypes.ScProxy {
    owner(): wasmtypes.ScImmutableAgentID {
		return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.ParamOwner));
	}
}

export class MutableInitParams extends wasmtypes.ScProxy {
    owner(): wasmtypes.ScMutableAgentID {
		return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.ParamOwner));
	}
}

export class ImmutableMemberParams extends wasmtypes.ScProxy {
    address(): wasmtypes.ScImmutableAddress {
		return new wasmtypes.ScImmutableAddress(this.proxy.root(sc.ParamAddress));
	}

    factor(): wasmtypes.ScImmutableUint64 {
		return new wasmtypes.ScImmutableUint64(this.proxy.root(sc.ParamFactor));
	}
}

export class MutableMemberParams extends wasmtypes.ScProxy {
    address(): wasmtypes.ScMutableAddress {
		return new wasmtypes.ScMutableAddress(this.proxy.root(sc.ParamAddress));
	}

    factor(): wasmtypes.ScMutableUint64 {
		return new wasmtypes.ScMutableUint64(this.proxy.root(sc.ParamFactor));
	}
}

export class ImmutableSetOwnerParams extends wasmtypes.ScProxy {
    owner(): wasmtypes.ScImmutableAgentID {
		return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.ParamOwner));
	}
}

export class MutableSetOwnerParams extends wasmtypes.ScProxy {
    owner(): wasmtypes.ScMutableAgentID {
		return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.ParamOwner));
	}
}

export class ImmutableGetFactorParams extends wasmtypes.ScProxy {
    address(): wasmtypes.ScImmutableAddress {
		return new wasmtypes.ScImmutableAddress(this.proxy.root(sc.ParamAddress));
	}
}

export class MutableGetFactorParams extends wasmtypes.ScProxy {
    address(): wasmtypes.ScMutableAddress {
		return new wasmtypes.ScMutableAddress(this.proxy.root(sc.ParamAddress));
	}
}
