import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
require("dotenv").config();
const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;
const localPrivateKey = process.env.DEPLOYER_SIGNER_LOCAL_PRIVATE_KEY;
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      accounts: [`${localPrivateKey}`],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: [`${privateKey}`],
    },
  },
};

export default config;
