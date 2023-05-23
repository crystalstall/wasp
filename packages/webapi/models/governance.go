package models

import "github.com/iotaledger/wasp/packages/vm/gas"

/*
Both Gov* structs should be removed at some point.
The corecontract implementations should be moved outside the webapi, therefore using the webapi ChainInfo/Metadata structs should be avoided.
*/
type GovChainMetadata struct {
	EVMJsonRPCURL   string `json:"evmJsonRpcUrl" swagger:"desc(The EVM json rpc url),required"`
	EVMWebSocketURL string `json:"evmWebSocketUrl" swagger:"desc(The EVM websocket url)),required"`

	ChainName        string `json:"chainName" swagger:"desc(The name of the chain),required"`
	ChainDescription string `json:"chainDescription" swagger:"desc(The description of the chain.),required"`
	ChainOwnerEmail  string `json:"chainOwnerEmail" swagger:"desc(The email of the chain owner.),required"`
	ChainWebsite     string `json:"chainWebsite" swagger:"desc(The official website of the chain.),required"`
}

type GovChainInfoResponse struct {
	ChainID      string           `json:"chainID" swagger:"desc(ChainID (Bech32-encoded).),required"`
	ChainOwnerID string           `json:"chainOwnerId" swagger:"desc(The chain owner address (Bech32-encoded).),required"`
	GasFeePolicy *gas.FeePolicy   `json:"gasFeePolicy" swagger:"desc(The gas fee policy),required"`
	GasLimits    *gas.Limits      `json:"gasLimits" swagger:"desc(The gas limits),required"`
	PublicURL    string           `json:"publicUrl" swagger:"desc(The fully qualified public url leading to the chains metadata),required"`
	Metadata     GovChainMetadata `json:"metadata" swagger:"desc(The metadata of the chain),required"`
}

type GovAllowedStateControllerAddressesResponse struct {
	Addresses []string `json:"addresses" swagger:"desc(The allowed state controller addresses (Bech32-encoded))"`
}

type GovChainOwnerResponse struct {
	ChainOwner string `json:"chainOwner" swagger:"desc(The chain owner (Bech32-encoded))"`
}
