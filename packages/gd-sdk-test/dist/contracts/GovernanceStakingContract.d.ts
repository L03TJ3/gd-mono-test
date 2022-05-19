import Web3 from 'web3';
/**
 * Returns instance of UBIScheme contract.
 * @param {Web3} web3 Web3 instance.
 * @param {string?} address Deployed contract address in given chain ID.
 * @constructor
 */
export declare function governanceStakingContract(web3: Web3, address?: string): import("web3-eth-contract").Contract;
export declare function getGovernanceStakingContracts(): Promise<{
    address: string;
    release: string;
}[]>;
//# sourceMappingURL=GovernanceStakingContract.d.ts.map