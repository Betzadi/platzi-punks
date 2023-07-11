// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract PlatziPunks is ERC721, ERC721Enumerable {
    using Counters for Counters.Counter;

    Counters.Counter private _idCounter;
    uint256 public maxSupply;

    constructor(uint256 _maxSupply) ERC721("PlatziPunks", "PLPKS") {
        maxSupply = _maxSupply;
    }

    function mint() public {
        uint256 current = _idCounter.current();
        require(current < maxSupply, "No PlatziPunks left :(");

        _safeMint(msg.sender, current);
        _idCounter.increment();
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721 METADATA : URI QUERY 404 no found");

        string memory jsonURI = Base64.encode(
            abi.encodePacked(
                '{"name":"PlatziPunks #"',
                    tokenId,
                '","description":"Platzi Punks are randomized Avataaars stored on chain to teach DApp development on Platzi", "image": "//TODO: Calculate url"}'
            )
        );

        return string(abi.encodePacked("data:application/json;base64,",jsonURI));
    }

    // Override required
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
