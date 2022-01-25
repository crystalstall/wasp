// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package testwasmlib

import (
	"github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib"
	"github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib/wasmtypes"
)

type TestWasmLibEvents struct{}

func (e TestWasmLibEvents) Test(address wasmtypes.ScAddress, name string) {
	wasmlib.NewEventEncoder("testwasmlib.test").
		Address(address).
		String(name).
		Emit()
}
