import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import verify from '../helpers/verify'
import { networkConfig, developmentChains } from '../helpers/hardhat-config'

const FEE_NUMERATOR = 250

const deployToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  log('----------------------------------------------------')
  log(`Network ${network.name}`)
  log(`Deployer ${deployer}`)
  log('Deploying Token and waiting for confirmations...')

  const token = await deploy('Land', {
    from: deployer,
    args: [FEE_NUMERATOR],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })

  log(`Token address ${token.address}`)
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(token.address, [FEE_NUMERATOR])
  }
}

export default deployToken
deployToken.tags = ['staging']
