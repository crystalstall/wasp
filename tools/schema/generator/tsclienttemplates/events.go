package tsclienttemplates

var eventsTs = map[string]string{
	// *******************************
	"events.ts": `
$#emit importWasmClient

const $pkgName$+Handlers = new Map<string, (evt: $PkgName$+Events, msg: string[]) => void>([
$#each events eventHandler
]);

export class $PkgName$+Events implements wasmclient.IEventHandler {
$#each events eventHandlerMember

	public callHandler(topic: string, params: string[]): void {
		const handler = $pkgName$+Handlers.get(topic);
		if (handler !== undefined) {
			handler(this, params);
		}
	}
$#each events funcSignature
}
$#each events eventClass
`,
	// *******************************
	"eventHandler": `
	["$package.$evtName", (evt: $PkgName$+Events, msg: string[]) => evt.$evtName(new Event$EvtName(msg))],
`,
	// *******************************
	"eventHandlerMember": `
	$evtName: (Event$EvtName) => void = () => {};
`,
	// *******************************
	"funcSignature": `

	public on$PkgName$EvtName(handler: (Event$EvtName) => void): void {
		this.$evtName = handler;
	}
`,
	// *******************************
	"eventClass": `

export class Event$EvtName extends wasmclient.Event {
$#each event eventClassField
	
	public constructor(msg: string[]) {
		super(msg);
$#each event eventHandlerField
	}
}
`,
	// *******************************
	"eventClassField": `
	public readonly $fldName: wasmclient.$FldType;
`,
	// *******************************
	"eventHandlerField": `
		this.$fldName = this.next$FldType();
`,
}
