// Solidity program to implement
// the above approach
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract initial 
{
    string public message = "Hello World";
  
    function setMessage(string memory _newMessage) public 
    {
        message = _newMessage;
    }
    
    uint storedData;
    
    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
