import { Contract, Signer } from "ethers";

const SIGNING_DOMAIN_NAME = "LazyNFT-Voucher"
const SIGNING_DOMAIN_VERSION = "1"

/**
 * JSDoc typedefs.
 * 
 * @typedef {object} NFTVoucher
 * @property {BigNumber | number} tokenId the id of the un-minted NFT
 * @property {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT
 * @property {string} uri the metadata URI to associate with this NFT
 * @property {ethers.BytesLike} signature an EIP-712 signature of all fields in the NFTVoucher, apart from signature itself.
 */

/**
 * LazyMinter is a helper class that creates NFTVoucher objects and signs them, to be redeemed later by the LazyNFT contract.
 */
export default class LazyMinter {

    contract: Contract;
    signer: Signer;
    domain: any;

    /**
     * Create a new LazyMinter targeting a deployed instance of the LazyNFT contract.
     * 
     * @param {Object} options
     * @param {Contract} contract an ethers Contract that's wired up to the deployed contract
     * @param {Signer} signer a Signer whose account is authorized to mint NFTs on the deployed contract
     */
    constructor(contract: Contract, signer: Signer) {
        this.contract = contract
        this.signer = signer
    }

    /**
     * Creates a new NFTVoucher object and signs it using this LazyMinter's signing key.
     * 
     * @param {ethers.BigNumber | number} tokenId the id of the un-minted NFT
     * @param {string} uri the metadata URI to associate with this NFT
     * @param {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT. defaults to zero
     * 
     * @returns {NFTVoucher}
     */
    async createVoucher(tokenId: string, uri: string, minPrice: bigint) {
        const voucher = { tokenId, uri, minPrice }
        const domain = await this._signingDomain()
        const types = {
            NFTVoucher: [
                {name: "tokenId", type: "uint256"},
                {name: "minPrice", type: "uint256"},
                {name: "uri", type: "string"},  
            ]
        }
        const signature = await this.signer.signTypedData(domain, types, voucher)
        return {...voucher, signature}
    }

    /**
     * @private
     * @returns {object} the EIP-721 signing domain, tied to the chainId of the signer
     */
    async _signingDomain() {
        if (this.domain != null) return this.domain;
        const chainId = await this.contract.getChainID();
        this.domain = {
            name: SIGNING_DOMAIN_NAME,
            version: SIGNING_DOMAIN_VERSION,
            verifyingContract: this.contract.address,
            chainId
        }
        return this.domain;
    }
}
