import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { networkConfig } from '../helpers/hardhat-config'
import { ethers } from 'hardhat'
import { ContractReceipt, ContractTransaction } from 'ethers'

const deployMintToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { log } = deployments
  const { deployer } = await getNamedAccounts()

  log('----------------------------------------------------')
  log(`Network ${network.name}`)
  log(`Deployer ${deployer}`)

  const erc1155 = await ethers.getContract('Land', deployer)
  log(`Contract address ${erc1155.address}`)

  const tx: ContractTransaction = await erc1155.mint(1, 500)
  log('----------------------------------------------------')
  log(`minting token 1 with initial supply of 500 (tx ${tx.hash}) ...`)
  await tx.wait(networkConfig[network.name].blockConfirmations || 1)
  log(`Mint success 🎉`)

  const tx2: ContractTransaction = await erc1155.mint(2, 250)
  log('----------------------------------------------------')
  log(`minting token 2 with initial supply of 250 (tx ${tx2.hash}) ...`)
  await tx2.wait(networkConfig[network.name].blockConfirmations || 1)
  log(`Mint success 🎉`)

  const tx3: ContractTransaction = await erc1155.mint(3, 50)
  log('----------------------------------------------------')
  log(`minting token 3 with initial supply of (tx ${tx3.hash}) ...`)
  await tx3.wait(networkConfig[network.name].blockConfirmations || 1)
  log(`Mint success 🎉`)
}

export default deployMintToken
deployMintToken.tags = ['mint']
