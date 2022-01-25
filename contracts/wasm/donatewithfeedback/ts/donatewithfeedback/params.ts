// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class ImmutableDonateParams extends wasmlib.ScMapID {
    feedback(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamFeedback));
	}
}

export class MutableDonateParams extends wasmlib.ScMapID {
    feedback(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamFeedback));
	}
}

export class ImmutableWithdrawParams extends wasmlib.ScMapID {
    amount(): wasmlib.ScImmutableUint64 {
		return new wasmlib.ScImmutableUint64(this.mapID, wasmlib.Key32.fromString(sc.ParamAmount));
	}
}

export class MutableWithdrawParams extends wasmlib.ScMapID {
    amount(): wasmlib.ScMutableUint64 {
		return new wasmlib.ScMutableUint64(this.mapID, wasmlib.Key32.fromString(sc.ParamAmount));
	}
}

export class ImmutableDonationParams extends wasmlib.ScMapID {
    nr(): wasmlib.ScImmutableUint32 {
		return new wasmlib.ScImmutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamNr));
	}
}

export class MutableDonationParams extends wasmlib.ScMapID {
    nr(): wasmlib.ScMutableUint32 {
		return new wasmlib.ScMutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamNr));
	}
}
