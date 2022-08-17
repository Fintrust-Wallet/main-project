// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

//To create a multi Sig wallet
contract KingAlexMultiSigWallet {
    
    //Event when a transation is submitted
    //Event when a transaction is confirmed
    //EVent when a transaction is revoked
    //Event when a transactiion is executed

    //array of address for owners

    //mapping of address to bool showing if a user is a owner
    //uint showing number of confirmation required

    //a transaction struct that contains an address that transaction is being sent to, value, bytes data, bool showing if transaction has been exceuted, and then number of confirmations 
    // mapping from transction index => owner => bool (showing if a user has already confirmed a particular transaction)

    //array of transaction

    //only owner modifier
    //modifier to check that a transaction index exists
    //modifier to check that a transaction has not already been executed
    //modifier to confirm that transaction has not already been confirmed
    
    //constructor takes in an array of addresses  and also a number that represents the number of confirmations needed for a transcation 
    
    //Can be called by only a member of the owners-array
    //This function basically creates a new transcation
    //and finally emits submitTranscation
    // function submitTransaction(
    //     address _to,
    //     uint _value,
    //     bytes memory _data
    // ) public onlyOwner


  //Owners call this function to confirm a particular transcation created by another owner
  //emits confirm Transaction
//     function confirmTransaction(uint _txIndex)
//         public
//         onlyOwner
//         txExists(_txIndex)
//         notExecuted(_txIndex)
//         notConfirmed(_txIndex)
// }

//allows an owner to Execute a transaction after it has received enough numbers of confirmations form othher owners
//In this case transaction will send the creator of the transaction the value he requested
//emits executeTransaction
// function executeTransaction(uint _txIndex)
//         public
//         onlyOwner
//         txExists(_txIndex)
//         notExecuted(_txIndex);


//The opposite of confirming a transction
//Emits RevokeConfirmations
// function revokeConfirmation(uint _txIndex)
//         public
//         onlyOwner
//         txExists(_txIndex)
//         notExecuted(_txIndex)

//Gets all the owners of the wallet
//function getOwners()

//Gets the number of transactions that have been done
//function getTransactionCount()

//Gets a particuler transaction
//function getTransaction(uint _txIndex)


//Propose a withdrawal
//confirm a withdrawal
//reject a withdrawal


//

}