package wasmsolo

import (
	iotago "github.com/iotaledger/iota.go/v3"
	"github.com/iotaledger/wasp/packages/hashing"
	"github.com/iotaledger/wasp/packages/iscp"
	"github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib"
)

// SoloConvertor converts ISCP data types to WasmLib data types
type SoloConvertor struct{}

func (cvt SoloConvertor) ScAddress(address iotago.Address) wasmlib.ScAddress {
	return wasmlib.NewScAddressFromBytes(address.Bytes())
}

func (cvt SoloConvertor) ScAgentID(agentID *iscp.AgentID) wasmlib.ScAgentID {
	return wasmlib.NewScAgentIDFromBytes(agentID.Bytes())
}

func (cvt SoloConvertor) ScChainID(chainID *iscp.ChainID) wasmlib.ScChainID {
	return wasmlib.NewScChainIDFromBytes(chainID.Bytes())
}

func (cvt SoloConvertor) ScHash(hash hashing.HashValue) wasmlib.ScHash {
	return wasmlib.NewScHashFromBytes(hash.Bytes())
}

func (cvt SoloConvertor) ScHname(hname iscp.Hname) wasmlib.ScHname {
	return wasmlib.NewScHnameFromBytes(hname.Bytes())
}

func (cvt SoloConvertor) ScRequestID(requestID iscp.RequestID) wasmlib.ScRequestID {
	return wasmlib.NewScRequestIDFromBytes(requestID.Bytes())
}
