// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmclient from "./wasmclient"
import * as events from "./events"

const ArgAddress = "address";
const ArgAgentID = "agentID";
const ArgBlockIndex = "blockIndex";
const ArgBool = "bool";
const ArgBytes = "bytes";
const ArgChainID = "chainID";
const ArgColor = "color";
const ArgHash = "hash";
const ArgHname = "hname";
const ArgIndex = "index";
const ArgInt16 = "int16";
const ArgInt32 = "int32";
const ArgInt64 = "int64";
const ArgInt8 = "int8";
const ArgName = "name";
const ArgParam = "this";
const ArgRecordIndex = "recordIndex";
const ArgRequestID = "requestID";
const ArgString = "string";
const ArgUint16 = "uint16";
const ArgUint32 = "uint32";
const ArgUint64 = "uint64";
const ArgUint8 = "uint8";
const ArgValue = "value";

const ResCount = "count";
const ResIotas = "iotas";
const ResLength = "length";
const ResRandom = "random";
const ResRecord = "record";
const ResValue = "value";

///////////////////////////// arrayClear /////////////////////////////

export class ArrayClearFunc extends wasmclient.ClientFunc {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	name(v: string): void {
		this.args.setString(ArgName, v);
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgName);
		return await super.post(0x88021821, this.args);
	}
}

///////////////////////////// arrayCreate /////////////////////////////

export class ArrayCreateFunc extends wasmclient.ClientFunc {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	name(v: string): void {
		this.args.setString(ArgName, v);
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgName);
		return await super.post(0x1ed5b23b, this.args);
	}
}

///////////////////////////// arraySet /////////////////////////////

export class ArraySetFunc extends wasmclient.ClientFunc {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	index(v: wasmclient.Int32): void {
		this.args.setInt32(ArgIndex, v);
	}
	
	name(v: string): void {
		this.args.setString(ArgName, v);
	}
	
	value(v: string): void {
		this.args.setString(ArgValue, v);
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgIndex);
		this.args.mandatory(ArgName);
		this.args.mandatory(ArgValue);
		return await super.post(0x2c4150b3, this.args);
	}
}

///////////////////////////// paramTypes /////////////////////////////

export class ParamTypesFunc extends wasmclient.ClientFunc {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	address(v: wasmclient.Address): void {
		this.args.setAddress(ArgAddress, v);
	}
	
	agentID(v: wasmclient.AgentID): void {
		this.args.setAgentID(ArgAgentID, v);
	}
	
	bool(v: boolean): void {
		this.args.setBool(ArgBool, v);
	}
	
	bytes(v: wasmclient.Bytes): void {
		this.args.setBytes(ArgBytes, v);
	}
	
	chainID(v: wasmclient.ChainID): void {
		this.args.setChainID(ArgChainID, v);
	}
	
	color(v: wasmclient.Color): void {
		this.args.setColor(ArgColor, v);
	}
	
	hash(v: wasmclient.Hash): void {
		this.args.setHash(ArgHash, v);
	}
	
	hname(v: wasmclient.Hname): void {
		this.args.setHname(ArgHname, v);
	}
	
	int16(v: wasmclient.Int16): void {
		this.args.setInt16(ArgInt16, v);
	}
	
	int32(v: wasmclient.Int32): void {
		this.args.setInt32(ArgInt32, v);
	}
	
	int64(v: wasmclient.Int64): void {
		this.args.setInt64(ArgInt64, v);
	}
	
	int8(v: wasmclient.Int8): void {
		this.args.setInt8(ArgInt8, v);
	}
	
	param(v: wasmclient.Bytes): void {
		this.args.setBytes(ArgParam, v);
	}
	
	requestID(v: wasmclient.RequestID): void {
		this.args.setRequestID(ArgRequestID, v);
	}
	
	string(v: string): void {
		this.args.setString(ArgString, v);
	}
	
	uint16(v: wasmclient.Uint16): void {
		this.args.setUint16(ArgUint16, v);
	}
	
	uint32(v: wasmclient.Uint32): void {
		this.args.setUint32(ArgUint32, v);
	}
	
	uint64(v: wasmclient.Uint64): void {
		this.args.setUint64(ArgUint64, v);
	}
	
	uint8(v: wasmclient.Uint8): void {
		this.args.setUint8(ArgUint8, v);
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		return await super.post(0x6921c4cd, this.args);
	}
}

///////////////////////////// random /////////////////////////////

export class RandomFunc extends wasmclient.ClientFunc {
	
	public async post(): Promise<wasmclient.RequestID> {
		return await super.post(0xe86c97ca, null);
	}
}

///////////////////////////// triggerEvent /////////////////////////////

export class TriggerEventFunc extends wasmclient.ClientFunc {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	address(v: wasmclient.Address): void {
		this.args.setAddress(ArgAddress, v);
	}
	
	name(v: string): void {
		this.args.setString(ArgName, v);
	}
	
	public async post(): Promise<wasmclient.RequestID> {
		this.args.mandatory(ArgAddress);
		this.args.mandatory(ArgName);
		return await super.post(0xd5438ac6, this.args);
	}
}

///////////////////////////// arrayLength /////////////////////////////

export class ArrayLengthView extends wasmclient.ClientView {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	name(v: string): void {
		this.args.setString(ArgName, v);
	}

	public async call(): Promise<ArrayLengthResults> {
		this.args.mandatory(ArgName);
		return new ArrayLengthResults(await this.callView("arrayLength", this.args));
	}
}

export class ArrayLengthResults extends wasmclient.ViewResults {

	length(): wasmclient.Int32 {
		return this.res.getInt32(ResLength);
	}
}

///////////////////////////// arrayValue /////////////////////////////

export class ArrayValueView extends wasmclient.ClientView {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	index(v: wasmclient.Int32): void {
		this.args.setInt32(ArgIndex, v);
	}
	
	name(v: string): void {
		this.args.setString(ArgName, v);
	}

	public async call(): Promise<ArrayValueResults> {
		this.args.mandatory(ArgIndex);
		this.args.mandatory(ArgName);
		return new ArrayValueResults(await this.callView("arrayValue", this.args));
	}
}

export class ArrayValueResults extends wasmclient.ViewResults {

	value(): string {
		return this.res.getString(ResValue);
	}
}

///////////////////////////// blockRecord /////////////////////////////

export class BlockRecordView extends wasmclient.ClientView {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	blockIndex(v: wasmclient.Int32): void {
		this.args.setInt32(ArgBlockIndex, v);
	}
	
	recordIndex(v: wasmclient.Int32): void {
		this.args.setInt32(ArgRecordIndex, v);
	}

	public async call(): Promise<BlockRecordResults> {
		this.args.mandatory(ArgBlockIndex);
		this.args.mandatory(ArgRecordIndex);
		return new BlockRecordResults(await this.callView("blockRecord", this.args));
	}
}

export class BlockRecordResults extends wasmclient.ViewResults {

	record(): wasmclient.Bytes {
		return this.res.getBytes(ResRecord);
	}
}

///////////////////////////// blockRecords /////////////////////////////

export class BlockRecordsView extends wasmclient.ClientView {
	args: wasmclient.Arguments = new wasmclient.Arguments();
	
	blockIndex(v: wasmclient.Int32): void {
		this.args.setInt32(ArgBlockIndex, v);
	}

	public async call(): Promise<BlockRecordsResults> {
		this.args.mandatory(ArgBlockIndex);
		return new BlockRecordsResults(await this.callView("blockRecords", this.args));
	}
}

export class BlockRecordsResults extends wasmclient.ViewResults {

	count(): wasmclient.Int32 {
		return this.res.getInt32(ResCount);
	}
}

///////////////////////////// getRandom /////////////////////////////

export class GetRandomView extends wasmclient.ClientView {

	public async call(): Promise<GetRandomResults> {
		return new GetRandomResults(await this.callView("getRandom", null));
	}
}

export class GetRandomResults extends wasmclient.ViewResults {

	random(): wasmclient.Int64 {
		return this.res.getInt64(ResRandom);
	}
}

///////////////////////////// iotaBalance /////////////////////////////

export class IotaBalanceView extends wasmclient.ClientView {

	public async call(): Promise<IotaBalanceResults> {
		return new IotaBalanceResults(await this.callView("iotaBalance", null));
	}
}

export class IotaBalanceResults extends wasmclient.ViewResults {

	iotas(): wasmclient.Int64 {
		return this.res.getInt64(ResIotas);
	}
}

///////////////////////////// TestWasmLibService /////////////////////////////

export class TestWasmLibService extends wasmclient.Service {

	constructor(cl: wasmclient.ServiceClient) {
		super(cl, 0x89703a45, events.eventHandlers);
	}

	public arrayClear(): ArrayClearFunc {
		return new ArrayClearFunc(this);
	}

	public arrayCreate(): ArrayCreateFunc {
		return new ArrayCreateFunc(this);
	}

	public arraySet(): ArraySetFunc {
		return new ArraySetFunc(this);
	}

	public paramTypes(): ParamTypesFunc {
		return new ParamTypesFunc(this);
	}

	public random(): RandomFunc {
		return new RandomFunc(this);
	}

	public triggerEvent(): TriggerEventFunc {
		return new TriggerEventFunc(this);
	}

	public arrayLength(): ArrayLengthView {
		return new ArrayLengthView(this);
	}

	public arrayValue(): ArrayValueView {
		return new ArrayValueView(this);
	}

	public blockRecord(): BlockRecordView {
		return new BlockRecordView(this);
	}

	public blockRecords(): BlockRecordsView {
		return new BlockRecordsView(this);
	}

	public getRandom(): GetRandomView {
		return new GetRandomView(this);
	}

	public iotaBalance(): IotaBalanceView {
		return new IotaBalanceView(this);
	}
}
