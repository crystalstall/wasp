// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class ArrayOfImmutableString extends wasmtypes.ScProxy {

    length(): u32 {
        return this.proxy.length();
    }

    getString(index: u32): wasmtypes.ScImmutableString {
        return new wasmtypes.ScImmutableString(this.proxy.index(index));
    }
}

export class ImmutableStringArray extends ArrayOfImmutableString {
};

export class ArrayOfMutableString extends wasmtypes.ScProxy {

	appendString(): wasmtypes.ScMutableString {
		return new wasmtypes.ScMutableString(this.proxy.append());
	}

    clear(): void {
        this.proxy.clearArray();
    }

    length(): u32 {
        return this.proxy.length();
    }

    getString(index: u32): wasmtypes.ScMutableString {
        return new wasmtypes.ScMutableString(this.proxy.index(index));
    }
}

export class MutableStringArray extends ArrayOfMutableString {
};

export class MapStringToImmutableString extends wasmtypes.ScProxy {

    getString(key: string): wasmtypes.ScImmutableString {
        return new wasmtypes.ScImmutableString(this.proxy.key(wasmtypes.stringToBytes(key)));
    }
}

export class ImmutableStringMap extends MapStringToImmutableString {
};

export class MapStringToMutableString extends wasmtypes.ScProxy {

    clear(): void {
        this.proxy.clearMap();
    }

    getString(key: string): wasmtypes.ScMutableString {
        return new wasmtypes.ScMutableString(this.proxy.key(wasmtypes.stringToBytes(key)));
    }
}

export class MutableStringMap extends MapStringToMutableString {
};
