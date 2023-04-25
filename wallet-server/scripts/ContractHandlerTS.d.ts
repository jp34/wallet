import { ethers } from "ethers";

interface Voucher {
  tokenId: number;
  minPrice: ethers.BigNumberish;
  uri: string;
}

interface LazyNFTInterface {
  address: string;
  abi: any;
  availableToWithdraw(): Promise<ethers.BigNumberish>;
  getMyNFTs(): Promise<any>;
  getListedTokenForId(tokenId: number): Promise<any>;
  tokenURI(tokenId: number): Promise<string>;
  withdraw(): Promise<any>;
}

interface BuyerContractInterface {
  redeem(buyerAddress: string, voucher: Voucher, overrides: {value: ethers.BigNumberish}): Promise<any>;
}

interface LazyMinterInterface {
  contract: any;
  signer: any;
  createVoucher(id: number, uri: string, price: ethers.BigNumberish): Promise<Voucher>;
}

declare class ContractHandler {
  private contractAddress: string;
  private contractABI: any;
  private providerLink: string;
  private provider: any;
  private signer: ethers.Wallet | null;
  private buyerContract: BuyerContractInterface | null;
  private contract: LazyNFTInterface | null;

  constructor();

  private init(): Promise<void>;

  public makeVoucher(id: number, uri: string, price: ethers.BigNumberish): Promise<Voucher>;

  public redeemVoucher(buyer: ethers.Wallet, voucher: Voucher): Promise<any>;

  public checkWithdrawalBalance(): Promise<string>;

  public withdraw(): Promise<string>;

  public patientEtherTransfer(patientAddress: string, amount: ethers.BigNumberish): Promise<any>;

  public getNFTFromTokenId(signer: ethers.Wallet, tokenId: number): Promise<any>;

  public getAccountNFTs(): Promise<any>;

  private getTokenMetadata(tokenId: number): Promise<any>;

  private getMetadataURI(tokenId: number): Promise<string>;
}

export {
  ContractHandler
};