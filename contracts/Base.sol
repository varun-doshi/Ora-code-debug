//SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

contract Base{

    uint256 public count=10;

    event CountChanged(uint256);

    constructor(){}

    function subValue() public{
        count-=1;
        emit CountChanged(count);
    }

    function addValue() public{
        count+=1;
    }

}