// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the schema definition file instead

import * as wasmtypes from "../wasmtypes";
import * as sc from "./index";

export class ImmutableFoundryCreateNewResults extends wasmtypes.ScProxy {
    foundrySN(): wasmtypes.ScImmutableUint32 {
        return new wasmtypes.ScImmutableUint32(this.proxy.root(sc.ResultFoundrySN));
    }
}

export class MutableFoundryCreateNewResults extends wasmtypes.ScProxy {
    foundrySN(): wasmtypes.ScMutableUint32 {
        return new wasmtypes.ScMutableUint32(this.proxy.root(sc.ResultFoundrySN));
    }
}

export class ArrayOfImmutableNftID extends wasmtypes.ScProxy {

    length(): u32 {
        return this.proxy.length();
    }

    getNftID(index: u32): wasmtypes.ScImmutableNftID {
        return new wasmtypes.ScImmutableNftID(this.proxy.index(index));
    }
}

export class ImmutableAccountNFTsResults extends wasmtypes.ScProxy {
    nftIDs(): sc.ArrayOfImmutableNftID {
        return new sc.ArrayOfImmutableNftID(this.proxy.root(sc.ResultNftIDs));
    }
}

export class ArrayOfMutableNftID extends wasmtypes.ScProxy {

    appendNftID(): wasmtypes.ScMutableNftID {
        return new wasmtypes.ScMutableNftID(this.proxy.append());
    }

    clear(): void {
        this.proxy.clearArray();
    }

    length(): u32 {
        return this.proxy.length();
    }

    getNftID(index: u32): wasmtypes.ScMutableNftID {
        return new wasmtypes.ScMutableNftID(this.proxy.index(index));
    }
}

export class MutableAccountNFTsResults extends wasmtypes.ScProxy {
    nftIDs(): sc.ArrayOfMutableNftID {
        return new sc.ArrayOfMutableNftID(this.proxy.root(sc.ResultNftIDs));
    }
}

export class MapAgentIDToImmutableBytes extends wasmtypes.ScProxy {

    getBytes(key: wasmtypes.ScAgentID): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.key(wasmtypes.agentIDToBytes(key)));
    }
}

export class ImmutableAccountsResults extends wasmtypes.ScProxy {
    allAccounts(): sc.MapAgentIDToImmutableBytes {
        return new sc.MapAgentIDToImmutableBytes(this.proxy);
    }
}

export class MapAgentIDToMutableBytes extends wasmtypes.ScProxy {

    clear(): void {
        this.proxy.clearMap();
    }

    getBytes(key: wasmtypes.ScAgentID): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.key(wasmtypes.agentIDToBytes(key)));
    }
}

export class MutableAccountsResults extends wasmtypes.ScProxy {
    allAccounts(): sc.MapAgentIDToMutableBytes {
        return new sc.MapAgentIDToMutableBytes(this.proxy);
    }
}

export class MapTokenIDToImmutableBigInt extends wasmtypes.ScProxy {

    getBigInt(key: wasmtypes.ScTokenID): wasmtypes.ScImmutableBigInt {
        return new wasmtypes.ScImmutableBigInt(this.proxy.key(wasmtypes.tokenIDToBytes(key)));
    }
}

export class ImmutableBalanceResults extends wasmtypes.ScProxy {
    balances(): sc.MapTokenIDToImmutableBigInt {
        return new sc.MapTokenIDToImmutableBigInt(this.proxy);
    }
}

export class MapTokenIDToMutableBigInt extends wasmtypes.ScProxy {

    clear(): void {
        this.proxy.clearMap();
    }

    getBigInt(key: wasmtypes.ScTokenID): wasmtypes.ScMutableBigInt {
        return new wasmtypes.ScMutableBigInt(this.proxy.key(wasmtypes.tokenIDToBytes(key)));
    }
}

export class MutableBalanceResults extends wasmtypes.ScProxy {
    balances(): sc.MapTokenIDToMutableBigInt {
        return new sc.MapTokenIDToMutableBigInt(this.proxy);
    }
}

export class ImmutableBalanceBaseTokenResults extends wasmtypes.ScProxy {
    balance(): wasmtypes.ScImmutableUint64 {
        return new wasmtypes.ScImmutableUint64(this.proxy.root(sc.ResultBalance));
    }
}

export class MutableBalanceBaseTokenResults extends wasmtypes.ScProxy {
    balance(): wasmtypes.ScMutableUint64 {
        return new wasmtypes.ScMutableUint64(this.proxy.root(sc.ResultBalance));
    }
}

export class ImmutableBalanceNativeTokenResults extends wasmtypes.ScProxy {
    tokens(): wasmtypes.ScImmutableBigInt {
        return new wasmtypes.ScImmutableBigInt(this.proxy.root(sc.ResultTokens));
    }
}

export class MutableBalanceNativeTokenResults extends wasmtypes.ScProxy {
    tokens(): wasmtypes.ScMutableBigInt {
        return new wasmtypes.ScMutableBigInt(this.proxy.root(sc.ResultTokens));
    }
}

export class ImmutableFoundryOutputResults extends wasmtypes.ScProxy {
    foundryOutputBin(): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.root(sc.ResultFoundryOutputBin));
    }
}

export class MutableFoundryOutputResults extends wasmtypes.ScProxy {
    foundryOutputBin(): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.root(sc.ResultFoundryOutputBin));
    }
}

export class ImmutableGetAccountNonceResults extends wasmtypes.ScProxy {
    accountNonce(): wasmtypes.ScImmutableUint64 {
        return new wasmtypes.ScImmutableUint64(this.proxy.root(sc.ResultAccountNonce));
    }
}

export class MutableGetAccountNonceResults extends wasmtypes.ScProxy {
    accountNonce(): wasmtypes.ScMutableUint64 {
        return new wasmtypes.ScMutableUint64(this.proxy.root(sc.ResultAccountNonce));
    }
}

export class MapTokenIDToImmutableBytes extends wasmtypes.ScProxy {

    getBytes(key: wasmtypes.ScTokenID): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.key(wasmtypes.tokenIDToBytes(key)));
    }
}

export class ImmutableGetNativeTokenIDRegistryResults extends wasmtypes.ScProxy {
    mapping(): sc.MapTokenIDToImmutableBytes {
        return new sc.MapTokenIDToImmutableBytes(this.proxy);
    }
}

export class MapTokenIDToMutableBytes extends wasmtypes.ScProxy {

    clear(): void {
        this.proxy.clearMap();
    }

    getBytes(key: wasmtypes.ScTokenID): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.key(wasmtypes.tokenIDToBytes(key)));
    }
}

export class MutableGetNativeTokenIDRegistryResults extends wasmtypes.ScProxy {
    mapping(): sc.MapTokenIDToMutableBytes {
        return new sc.MapTokenIDToMutableBytes(this.proxy);
    }
}

export class ImmutableNftDataResults extends wasmtypes.ScProxy {
    nftData(): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.root(sc.ResultNftData));
    }
}

export class MutableNftDataResults extends wasmtypes.ScProxy {
    nftData(): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.root(sc.ResultNftData));
    }
}

export class ImmutableTotalAssetsResults extends wasmtypes.ScProxy {
    assets(): sc.MapTokenIDToImmutableBigInt {
        return new sc.MapTokenIDToImmutableBigInt(this.proxy);
    }
}

export class MutableTotalAssetsResults extends wasmtypes.ScProxy {
    assets(): sc.MapTokenIDToMutableBigInt {
        return new sc.MapTokenIDToMutableBigInt(this.proxy);
    }
}