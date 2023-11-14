// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SampleContract {

  uint256 number;

  function set(uint256 num) public {
      number = num;
  }

  function get() public view returns (uint256) {
      return number;
  }
}
