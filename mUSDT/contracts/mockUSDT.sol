// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract mockUSDT is ERC20 {
  constructor() ERC20('mockUSDT', 'mUSDT') public {
    _mint(msg.sender, 1000000000000*1e18);
  }
}