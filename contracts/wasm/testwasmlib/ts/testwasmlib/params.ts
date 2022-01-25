// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class ImmutableArrayAppendParams extends wasmlib.ScMapID {
    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}

    value(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamValue));
	}
}

export class MutableArrayAppendParams extends wasmlib.ScMapID {
    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}

    value(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamValue));
	}
}

export class ImmutableArrayClearParams extends wasmlib.ScMapID {
    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class MutableArrayClearParams extends wasmlib.ScMapID {
    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class ImmutableArraySetParams extends wasmlib.ScMapID {
    index(): wasmlib.ScImmutableUint32 {
		return new wasmlib.ScImmutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamIndex));
	}

    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}

    value(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamValue));
	}
}

export class MutableArraySetParams extends wasmlib.ScMapID {
    index(): wasmlib.ScMutableUint32 {
		return new wasmlib.ScMutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamIndex));
	}

    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}

    value(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamValue));
	}
}

export class ImmutableMapClearParams extends wasmlib.ScMapID {
    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class MutableMapClearParams extends wasmlib.ScMapID {
    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class ImmutableMapSetParams extends wasmlib.ScMapID {
    key(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamKey));
	}

    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}

    value(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamValue));
	}
}

export class MutableMapSetParams extends wasmlib.ScMapID {
    key(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamKey));
	}

    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}

    value(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamValue));
	}
}

export class MapStringToImmutableBytes {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getBytes(key: string): wasmlib.ScImmutableBytes {
        return new wasmlib.ScImmutableBytes(this.objID, wasmlib.Key32.fromString(key));
    }
}

export class ImmutableParamTypesParams extends wasmlib.ScMapID {
    address(): wasmlib.ScImmutableAddress {
		return new wasmlib.ScImmutableAddress(this.mapID, wasmlib.Key32.fromString(sc.ParamAddress));
	}

    agentID(): wasmlib.ScImmutableAgentID {
		return new wasmlib.ScImmutableAgentID(this.mapID, wasmlib.Key32.fromString(sc.ParamAgentID));
	}

    bool(): wasmlib.ScImmutableBool {
		return new wasmlib.ScImmutableBool(this.mapID, wasmlib.Key32.fromString(sc.ParamBool));
	}

    bytes(): wasmlib.ScImmutableBytes {
		return new wasmlib.ScImmutableBytes(this.mapID, wasmlib.Key32.fromString(sc.ParamBytes));
	}

    chainID(): wasmlib.ScImmutableChainID {
		return new wasmlib.ScImmutableChainID(this.mapID, wasmlib.Key32.fromString(sc.ParamChainID));
	}

    color(): wasmlib.ScImmutableColor {
		return new wasmlib.ScImmutableColor(this.mapID, wasmlib.Key32.fromString(sc.ParamColor));
	}

    hash(): wasmlib.ScImmutableHash {
		return new wasmlib.ScImmutableHash(this.mapID, wasmlib.Key32.fromString(sc.ParamHash));
	}

    hname(): wasmlib.ScImmutableHname {
		return new wasmlib.ScImmutableHname(this.mapID, wasmlib.Key32.fromString(sc.ParamHname));
	}

    int16(): wasmlib.ScImmutableInt16 {
		return new wasmlib.ScImmutableInt16(this.mapID, wasmlib.Key32.fromString(sc.ParamInt16));
	}

    int32(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamInt32));
	}

    int64(): wasmlib.ScImmutableInt64 {
		return new wasmlib.ScImmutableInt64(this.mapID, wasmlib.Key32.fromString(sc.ParamInt64));
	}

    int8(): wasmlib.ScImmutableInt8 {
		return new wasmlib.ScImmutableInt8(this.mapID, wasmlib.Key32.fromString(sc.ParamInt8));
	}

    param(): sc.MapStringToImmutableBytes {
		return new sc.MapStringToImmutableBytes(this.mapID);
	}

    requestID(): wasmlib.ScImmutableRequestID {
		return new wasmlib.ScImmutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}

    string(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamString));
	}

    uint16(): wasmlib.ScImmutableUint16 {
		return new wasmlib.ScImmutableUint16(this.mapID, wasmlib.Key32.fromString(sc.ParamUint16));
	}

    uint32(): wasmlib.ScImmutableUint32 {
		return new wasmlib.ScImmutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamUint32));
	}

    uint64(): wasmlib.ScImmutableUint64 {
		return new wasmlib.ScImmutableUint64(this.mapID, wasmlib.Key32.fromString(sc.ParamUint64));
	}

    uint8(): wasmlib.ScImmutableUint8 {
		return new wasmlib.ScImmutableUint8(this.mapID, wasmlib.Key32.fromString(sc.ParamUint8));
	}
}

export class MapStringToMutableBytes {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getBytes(key: string): wasmlib.ScMutableBytes {
        return new wasmlib.ScMutableBytes(this.objID, wasmlib.Key32.fromString(key));
    }
}

export class MutableParamTypesParams extends wasmlib.ScMapID {
    address(): wasmlib.ScMutableAddress {
		return new wasmlib.ScMutableAddress(this.mapID, wasmlib.Key32.fromString(sc.ParamAddress));
	}

    agentID(): wasmlib.ScMutableAgentID {
		return new wasmlib.ScMutableAgentID(this.mapID, wasmlib.Key32.fromString(sc.ParamAgentID));
	}

    bool(): wasmlib.ScMutableBool {
		return new wasmlib.ScMutableBool(this.mapID, wasmlib.Key32.fromString(sc.ParamBool));
	}

    bytes(): wasmlib.ScMutableBytes {
		return new wasmlib.ScMutableBytes(this.mapID, wasmlib.Key32.fromString(sc.ParamBytes));
	}

    chainID(): wasmlib.ScMutableChainID {
		return new wasmlib.ScMutableChainID(this.mapID, wasmlib.Key32.fromString(sc.ParamChainID));
	}

    color(): wasmlib.ScMutableColor {
		return new wasmlib.ScMutableColor(this.mapID, wasmlib.Key32.fromString(sc.ParamColor));
	}

    hash(): wasmlib.ScMutableHash {
		return new wasmlib.ScMutableHash(this.mapID, wasmlib.Key32.fromString(sc.ParamHash));
	}

    hname(): wasmlib.ScMutableHname {
		return new wasmlib.ScMutableHname(this.mapID, wasmlib.Key32.fromString(sc.ParamHname));
	}

    int16(): wasmlib.ScMutableInt16 {
		return new wasmlib.ScMutableInt16(this.mapID, wasmlib.Key32.fromString(sc.ParamInt16));
	}

    int32(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamInt32));
	}

    int64(): wasmlib.ScMutableInt64 {
		return new wasmlib.ScMutableInt64(this.mapID, wasmlib.Key32.fromString(sc.ParamInt64));
	}

    int8(): wasmlib.ScMutableInt8 {
		return new wasmlib.ScMutableInt8(this.mapID, wasmlib.Key32.fromString(sc.ParamInt8));
	}

    param(): sc.MapStringToMutableBytes {
		return new sc.MapStringToMutableBytes(this.mapID);
	}

    requestID(): wasmlib.ScMutableRequestID {
		return new wasmlib.ScMutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}

    string(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamString));
	}

    uint16(): wasmlib.ScMutableUint16 {
		return new wasmlib.ScMutableUint16(this.mapID, wasmlib.Key32.fromString(sc.ParamUint16));
	}

    uint32(): wasmlib.ScMutableUint32 {
		return new wasmlib.ScMutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamUint32));
	}

    uint64(): wasmlib.ScMutableUint64 {
		return new wasmlib.ScMutableUint64(this.mapID, wasmlib.Key32.fromString(sc.ParamUint64));
	}

    uint8(): wasmlib.ScMutableUint8 {
		return new wasmlib.ScMutableUint8(this.mapID, wasmlib.Key32.fromString(sc.ParamUint8));
	}
}

export class ImmutableTriggerEventParams extends wasmlib.ScMapID {
    address(): wasmlib.ScImmutableAddress {
		return new wasmlib.ScImmutableAddress(this.mapID, wasmlib.Key32.fromString(sc.ParamAddress));
	}

    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class MutableTriggerEventParams extends wasmlib.ScMapID {
    address(): wasmlib.ScMutableAddress {
		return new wasmlib.ScMutableAddress(this.mapID, wasmlib.Key32.fromString(sc.ParamAddress));
	}

    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class ImmutableArrayLengthParams extends wasmlib.ScMapID {
    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class MutableArrayLengthParams extends wasmlib.ScMapID {
    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class ImmutableArrayValueParams extends wasmlib.ScMapID {
    index(): wasmlib.ScImmutableUint32 {
		return new wasmlib.ScImmutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamIndex));
	}

    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class MutableArrayValueParams extends wasmlib.ScMapID {
    index(): wasmlib.ScMutableUint32 {
		return new wasmlib.ScMutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamIndex));
	}

    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class ImmutableBlockRecordParams extends wasmlib.ScMapID {
    blockIndex(): wasmlib.ScImmutableUint32 {
		return new wasmlib.ScImmutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}

    recordIndex(): wasmlib.ScImmutableUint32 {
		return new wasmlib.ScImmutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamRecordIndex));
	}
}

export class MutableBlockRecordParams extends wasmlib.ScMapID {
    blockIndex(): wasmlib.ScMutableUint32 {
		return new wasmlib.ScMutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}

    recordIndex(): wasmlib.ScMutableUint32 {
		return new wasmlib.ScMutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamRecordIndex));
	}
}

export class ImmutableBlockRecordsParams extends wasmlib.ScMapID {
    blockIndex(): wasmlib.ScImmutableUint32 {
		return new wasmlib.ScImmutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class MutableBlockRecordsParams extends wasmlib.ScMapID {
    blockIndex(): wasmlib.ScMutableUint32 {
		return new wasmlib.ScMutableUint32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class ImmutableMapValueParams extends wasmlib.ScMapID {
    key(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamKey));
	}

    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}

export class MutableMapValueParams extends wasmlib.ScMapID {
    key(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamKey));
	}

    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.ParamName));
	}
}
