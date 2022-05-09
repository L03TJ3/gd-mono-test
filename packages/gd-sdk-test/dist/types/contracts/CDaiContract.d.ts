import Web3 from "web3";
import { Contract } from "web3-eth-contract";
/**
 * Returns instance of CDAI contract.
 * @param {Web3} web3 Web3 instance.
 * @param {string?} address Deployed contract address in given chain ID.
 * @constructor
 */
export declare function cDaiContract(web3: Web3, address?: string): Promise<Contract>;
//# sourceMappingURL=CDaiContract.d.ts.map