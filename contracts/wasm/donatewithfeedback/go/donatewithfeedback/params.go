// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package donatewithfeedback

import "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib/wasmtypes"

type ImmutableDonateParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableDonateParams) Feedback() wasmtypes.ScImmutableString {
	return wasmtypes.NewScImmutableString(s.proxy.Root(ParamFeedback))
}

type MutableDonateParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableDonateParams) Feedback() wasmtypes.ScMutableString {
	return wasmtypes.NewScMutableString(s.proxy.Root(ParamFeedback))
}

type ImmutableWithdrawParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableWithdrawParams) Amount() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamAmount))
}

type MutableWithdrawParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableWithdrawParams) Amount() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(ParamAmount))
}

type ImmutableDonationParams struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableDonationParams) Nr() wasmtypes.ScImmutableUint32 {
	return wasmtypes.NewScImmutableUint32(s.proxy.Root(ParamNr))
}

type MutableDonationParams struct {
	proxy wasmtypes.Proxy
}

func (s MutableDonationParams) Nr() wasmtypes.ScMutableUint32 {
	return wasmtypes.NewScMutableUint32(s.proxy.Root(ParamNr))
}
