import { Wallet, utils } from 'ethers'
import { logger } from '../utils'

export default async function generateRandomMnemonic() {
  console.log('\n')
  logger.info('generating new mnemonic seed ...')
  const wallet = Wallet.fromMnemonic(utils.entropyToMnemonic(utils.randomBytes(32)))

  console.log('\n')
  console.log('new address:         ', wallet.address)
  console.log('new mnemonic.phrase: ', wallet.mnemonic.phrase)
  console.log('new privateKey:      ', wallet.privateKey)
  console.log('\n')

  logger.info('generating new mnemonic seed: done')
  console.log('\n')
}
