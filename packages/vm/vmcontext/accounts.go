package vmcontext

import (
	"github.com/iotaledger/goshimmer/packages/ledgerstate"
)

func (vmctx *VMContext) GetIncoming() *ledgerstate.ColoredBalances {
	return vmctx.getCallContext().transfer
}

func (vmctx *VMContext) GetBalance(col ledgerstate.Color) uint64 {
	return vmctx.getBalance(col)
}

func (vmctx *VMContext) GetMyBalances() *ledgerstate.ColoredBalances {
	return vmctx.getMyBalances()
}

// TransferToAddress includes output of colored tokens into the transaction
// i.e. it is a transfer of tokens from chain to layer 1 ledger
//func (vmctx *VMContext) TransferToAddress(targetAddr ledgerstate.Address, transfer *coretypes.ColoredBalances) bool {
//	privileged := vmctx.CurrentContractHname() == accounts.Interface.Hname()
//	fmt.Printf("TransferToAddress: %s privileged = %v\n", targetAddr.String(), privileged)
//	if !privileged {
//		// if caller is accounts, it must debit from account by itself
//		agentID := vmctx.MyAgentID()
//		vmctx.pushCallContext(accounts.Interface.Hname(), nil, nil) // create local context for the state
//		defer vmctx.popCallContext()
//
//		if !accounts.DebitFromAccount(vmctx.State(), &agentID, &transfer) {
//			return false
//		}
//	}
//	return vmctx.txBuilder.TransferToAddress(targetAddr, transfer) == nil
//}
