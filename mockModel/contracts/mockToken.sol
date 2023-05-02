// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract mockToken is ERC20 {
  constructor() ERC20('mockToken', 'mTOK') public {
    _mint(msg.sender, 1000000*1e18);
  }
}