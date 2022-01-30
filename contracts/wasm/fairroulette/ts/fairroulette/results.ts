// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class ImmutableLastWinningNumberResults extends wasmtypes.ScProxy {
    lastWinningNumber(): wasmtypes.ScImmutableUint16 {
		return new wasmtypes.ScImmutableUint16(this.proxy.root(sc.ResultLastWinningNumber));
	}
}

export class MutableLastWinningNumberResults extends wasmtypes.ScProxy {
    lastWinningNumber(): wasmtypes.ScMutableUint16 {
		return new wasmtypes.ScMutableUint16(this.proxy.root(sc.ResultLastWinningNumber));
	}
}

export class ImmutableRoundNumberResults extends wasmtypes.ScProxy {
    roundNumber(): wasmtypes.ScImmutableUint32 {
		return new wasmtypes.ScImmutableUint32(this.proxy.root(sc.ResultRoundNumber));
	}
}

export class MutableRoundNumberResults extends wasmtypes.ScProxy {
    roundNumber(): wasmtypes.ScMutableUint32 {
		return new wasmtypes.ScMutableUint32(this.proxy.root(sc.ResultRoundNumber));
	}
}

export class ImmutableRoundStartedAtResults extends wasmtypes.ScProxy {
    roundStartedAt(): wasmtypes.ScImmutableUint32 {
		return new wasmtypes.ScImmutableUint32(this.proxy.root(sc.ResultRoundStartedAt));
	}
}

export class MutableRoundStartedAtResults extends wasmtypes.ScProxy {
    roundStartedAt(): wasmtypes.ScMutableUint32 {
		return new wasmtypes.ScMutableUint32(this.proxy.root(sc.ResultRoundStartedAt));
	}
}

export class ImmutableRoundStatusResults extends wasmtypes.ScProxy {
    roundStatus(): wasmtypes.ScImmutableUint16 {
		return new wasmtypes.ScImmutableUint16(this.proxy.root(sc.ResultRoundStatus));
	}
}

export class MutableRoundStatusResults extends wasmtypes.ScProxy {
    roundStatus(): wasmtypes.ScMutableUint16 {
		return new wasmtypes.ScMutableUint16(this.proxy.root(sc.ResultRoundStatus));
	}
}
