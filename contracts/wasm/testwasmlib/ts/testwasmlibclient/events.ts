// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmclient from "./wasmclient"
import * as app from "./testwasmlib"

export const eventHandlers: wasmclient.EventHandlers = {
	"testwasmlib.test": msg => app.onTestWasmLibTest(new EventTest(msg)),
};

export class EventTest extends wasmclient.Event {
	public readonly address: wasmclient.Address;
	public readonly name: wasmclient.String;
	
	public constructor(msg: string[]) {
		super(msg)
		this.address = this.nextAddress();
		this.name = this.nextString();
	}
}
