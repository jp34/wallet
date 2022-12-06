pragma solidity >=0.7.0 <0.9.0;

contract payload 
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
