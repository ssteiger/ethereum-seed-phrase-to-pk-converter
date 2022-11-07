require('dotenv').config()
import { logger } from './utils'
import generateRandomMnemonic from './scripts/generateRandomMnemonic'
import convertSeedPhraseToPk from './scripts/convertSeedPhraseToPk'

async function main() {
  //await generateRandomMnemonic()
  await convertSeedPhraseToPk()
}

main().catch(err => {
  logger.error(err.stack)
  process.exit(1)
})
