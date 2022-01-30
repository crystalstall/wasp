// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as wasmtypes from "wasmlib/wasmtypes";
import * as sc from "./index";

export class MapStringToImmutableBytes extends wasmtypes.ScProxy {

    getBytes(key: string): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.key(wasmtypes.stringToBytes(key)));
    }
}

export class ImmutableStoreBlobParams extends wasmtypes.ScProxy {
    blobs(): sc.MapStringToImmutableBytes {
		return new sc.MapStringToImmutableBytes(this.proxy);
	}
}

export class MapStringToMutableBytes extends wasmtypes.ScProxy {

    clear(): void {
        this.proxy.clearMap();
    }

    getBytes(key: string): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.key(wasmtypes.stringToBytes(key)));
    }
}

export class MutableStoreBlobParams extends wasmtypes.ScProxy {
    blobs(): sc.MapStringToMutableBytes {
		return new sc.MapStringToMutableBytes(this.proxy);
	}
}

export class ImmutableGetBlobFieldParams extends wasmtypes.ScProxy {
    field(): wasmtypes.ScImmutableString {
		return new wasmtypes.ScImmutableString(this.proxy.root(sc.ParamField));
	}

    hash(): wasmtypes.ScImmutableHash {
		return new wasmtypes.ScImmutableHash(this.proxy.root(sc.ParamHash));
	}
}

export class MutableGetBlobFieldParams extends wasmtypes.ScProxy {
    field(): wasmtypes.ScMutableString {
		return new wasmtypes.ScMutableString(this.proxy.root(sc.ParamField));
	}

    hash(): wasmtypes.ScMutableHash {
		return new wasmtypes.ScMutableHash(this.proxy.root(sc.ParamHash));
	}
}

export class ImmutableGetBlobInfoParams extends wasmtypes.ScProxy {
    hash(): wasmtypes.ScImmutableHash {
		return new wasmtypes.ScImmutableHash(this.proxy.root(sc.ParamHash));
	}
}

export class MutableGetBlobInfoParams extends wasmtypes.ScProxy {
    hash(): wasmtypes.ScMutableHash {
		return new wasmtypes.ScMutableHash(this.proxy.root(sc.ParamHash));
	}
}
