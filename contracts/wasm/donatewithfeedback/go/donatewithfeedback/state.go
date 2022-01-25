// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package donatewithfeedback

import "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib/wasmtypes"

type ArrayOfImmutableDonation struct {
	proxy wasmtypes.Proxy
}

func (a ArrayOfImmutableDonation) Length() uint32 {
	return a.proxy.Length()
}

func (a ArrayOfImmutableDonation) GetDonation(index uint32) ImmutableDonation {
	return ImmutableDonation{proxy: a.proxy.Index(index)}
}

type ImmutableDonateWithFeedbackState struct {
	proxy wasmtypes.Proxy
}

func (s ImmutableDonateWithFeedbackState) Log() ArrayOfImmutableDonation {
	return ArrayOfImmutableDonation{proxy: s.proxy.Root(StateLog)}
}

func (s ImmutableDonateWithFeedbackState) MaxDonation() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(StateMaxDonation))
}

func (s ImmutableDonateWithFeedbackState) TotalDonation() wasmtypes.ScImmutableUint64 {
	return wasmtypes.NewScImmutableUint64(s.proxy.Root(StateTotalDonation))
}

type ArrayOfMutableDonation struct {
	proxy wasmtypes.Proxy
}

func (a ArrayOfMutableDonation) AppendDonation() MutableDonation {
	return MutableDonation{proxy: a.proxy.Append()}
}

func (a ArrayOfMutableDonation) Clear() {
	a.proxy.ClearArray()
}

func (a ArrayOfMutableDonation) Length() uint32 {
	return a.proxy.Length()
}

func (a ArrayOfMutableDonation) GetDonation(index uint32) MutableDonation {
	return MutableDonation{proxy: a.proxy.Index(index)}
}

type MutableDonateWithFeedbackState struct {
	proxy wasmtypes.Proxy
}

func (s MutableDonateWithFeedbackState) AsImmutable() ImmutableDonateWithFeedbackState {
	return ImmutableDonateWithFeedbackState(s)
}

func (s MutableDonateWithFeedbackState) Log() ArrayOfMutableDonation {
	return ArrayOfMutableDonation{proxy: s.proxy.Root(StateLog)}
}

func (s MutableDonateWithFeedbackState) MaxDonation() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(StateMaxDonation))
}

func (s MutableDonateWithFeedbackState) TotalDonation() wasmtypes.ScMutableUint64 {
	return wasmtypes.NewScMutableUint64(s.proxy.Root(StateTotalDonation))
}
