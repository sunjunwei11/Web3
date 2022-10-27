const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    const wallet = new ethers.Wallet(
        "5a6b070297a782cb7ac1421f394f56a4932598e7b69b369d777eee78025a0b11"
    )
    const encryptedJsonKey = await wallet.encrypt(
        "666", // Password
        process.env.PRIVATE_KEY
    )
    console.log(encryptedJsonKey)
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
