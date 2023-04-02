// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/Chikara.sol";

contract ChikaraTest is Test {
    Chikara public chikara;

    function setUp() public {
        chikara = new Chikara();
    }
}
