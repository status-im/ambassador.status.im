pragma solidity >=0.5.0 <0.6.0;

import "../openzeppelin/token/ERC721/ERC721Full.sol";
import "../common/Controlled.sol";
import "../common/TokenClaimer.sol";

/**
 * @author Ricardo Guilherme Schmidt (Status Research & Development GmbH)
 */
contract StatusAmbassadorBadge is Controlled, TokenClaimer, ERC721Full("Status Ambassador Badge","STAM") {

    mapping(uint256 => bytes) public contenthash;

    constructor() public {

    }

    /**
     * @notice controller can generate tokens at will
     * @param _owner account being included new token
     * @param _contenthash uri of token
     * @return tokenId created
     */
    function generateToken(address _owner, bytes calldata _contenthash)
        external
        onlyController
        returns (uint256 tokenId)
    {
        tokenId = this.totalSupply();
        contenthash[tokenId] = _contenthash;
        _mint(_owner, tokenId);
    }

    /**
     * @notice controller can update tokens at will
     * @param _tokenId token being updated
     * @param _contenthash uri of token
     */
    function updateToken(uint256 _tokenId, bytes calldata _contenthash)
        external
        onlyController
    {
        require(_exists(_tokenId), "Invalid tokenId");
        contenthash[_tokenId] = _contenthash;
    }

    /**
     * @notice controller can delete tokens at will
     * @param _tokenId token being deleted
     */
    function deleteToken(uint256 _tokenId)
        external
        onlyController
    {
        delete contenthash[_tokenId];
        _burn(_tokenId);
    }

    /**
     * @notice This method can be used by the controller to extract mistakenly
     *  sent tokens to this contract.
     * @param _token The address of the token contract that you want to recover
     *  set to 0 in case you want to extract ether.
     */
    function claimTokens(address _token)
        external
        onlyController
    {
        withdrawBalance(_token, controller);
    }


}