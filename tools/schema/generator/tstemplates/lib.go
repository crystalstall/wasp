package tstemplates

var libTs = map[string]string{
	// *******************************
	"lib.ts": `
$#emit tsImports

export function on_call(index: i32): void {
    return wasmlib.onCall(index);
}

export function on_load(): void {
    let exports = new wasmlib.ScExports();
$#each func libExportFunc
}
$#each func libThunk
`,
	// *******************************
	"libExportFunc": `
    exports.add$Kind(sc.$Kind$FuncName,$funcPad $kind$FuncName$+Thunk);
`,
	// *******************************
	"libThunk": `

function $kind$FuncName$+Thunk(ctx: wasmlib.Sc$Kind$+Context): void {
	ctx.log("$package.$kind$FuncName");
	let f = new sc.$FuncName$+Context();
$#if result initResultsDict
$#emit accessCheck
$#each mandatory requireMandatory
	sc.$kind$FuncName(ctx, f);
$#if result returnResultDict
	ctx.log("$package.$kind$FuncName ok");
}
`,
	// *******************************
	"initResultsDict": `
    const results = new wasmlib.ScDict([]);
	f.results = new sc.Mutable$FuncName$+Results(results.asProxy());
`,
	// *******************************
	"returnResultDict": `
	ctx.results(results);
`,
	// *******************************
	"requireMandatory": `
	ctx.require(f.params.$fldName().exists(), "missing mandatory $fldName");
`,
	// *******************************
	"accessCheck": `
$#set accessFinalize accessOther
$#emit caseAccess$funcAccess
$#emit $accessFinalize
`,
	// *******************************
	"caseAccess": `
$#set accessFinalize accessDone
`,
	// *******************************
	"caseAccessself": `
$#if funcAccessComment accessComment
	ctx.require(ctx.caller().equals(ctx.accountID()), "no permission");

$#set accessFinalize accessDone
`,
	// *******************************
	"caseAccesschain": `
$#if funcAccessComment accessComment
	ctx.require(ctx.caller().equals(ctx.chainOwnerID()), "no permission");

$#set accessFinalize accessDone
`,
	// *******************************
	"caseAccesscreator": `
$#if funcAccessComment accessComment
	ctx.require(ctx.caller().equals(ctx.contractCreator()), "no permission");

$#set accessFinalize accessDone
`,
	// *******************************
	"accessOther": `
$#if funcAccessComment accessComment
	const access = f.state.$funcAccess();
	ctx.require(access.exists(), "access not set: $funcAccess");
	ctx.require(ctx.caller().equals(access.value()), "no permission");

`,
	// *******************************
	"accessDone": `
`,
	// *******************************
	"accessComment": `

	$funcAccessComment
`,
}
