import { Wallet } from 'ethers'
import { logger } from '../utils'

export default async function convertSeedPhraseToPk() {
  console.log('\n')
  logger.info(`converting mnemonic seed phrase to pk ...`)
  console.log('\n')

  const mnemonicWallet = Wallet.fromMnemonic(process.env.MY_MNEMONIC)

  console.log(' mnemonic:', process.env.MY_MNEMONIC)
  console.log('\n')
  console.log(' pk:', mnemonicWallet.privateKey)
  console.log('\n')
}
