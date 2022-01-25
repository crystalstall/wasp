// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class MapAgentIDToImmutableAllowancesForAgent {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getAllowancesForAgent(key: wasmlib.ScAgentID): sc.ImmutableAllowancesForAgent {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_MAP);
        return new sc.ImmutableAllowancesForAgent(subID);
    }
}

export class ImmutableErc20State extends wasmlib.ScMapID {
    allAllowances(): sc.MapAgentIDToImmutableAllowancesForAgent {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateAllAllowances), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToImmutableAllowancesForAgent(mapID);
	}

    balances(): sc.MapAgentIDToImmutableUint64 {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateBalances), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToImmutableUint64(mapID);
	}

    supply(): wasmlib.ScImmutableUint64 {
		return new wasmlib.ScImmutableUint64(this.mapID, wasmlib.Key32.fromString(sc.StateSupply));
	}
}

export class MapAgentIDToMutableAllowancesForAgent {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getAllowancesForAgent(key: wasmlib.ScAgentID): sc.MutableAllowancesForAgent {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_MAP);
        return new sc.MutableAllowancesForAgent(subID);
    }
}

export class MutableErc20State extends wasmlib.ScMapID {
    asImmutable(): sc.ImmutableErc20State {
		const imm = new sc.ImmutableErc20State();
		imm.mapID = this.mapID;
		return imm;
	}

    allAllowances(): sc.MapAgentIDToMutableAllowancesForAgent {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateAllAllowances), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToMutableAllowancesForAgent(mapID);
	}

    balances(): sc.MapAgentIDToMutableUint64 {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateBalances), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToMutableUint64(mapID);
	}

    supply(): wasmlib.ScMutableUint64 {
		return new wasmlib.ScMutableUint64(this.mapID, wasmlib.Key32.fromString(sc.StateSupply));
	}
}
