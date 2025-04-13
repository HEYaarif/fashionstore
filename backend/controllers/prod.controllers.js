const Customer = require('../models/prod.models')
const Address = require('../models/add.model')
const encrypData = require('../utils/encryData')
const compareEncryptedData = require('../utils/compareEncdata')

//* Signup data
let signup = async (req, res, next) => {
    try {
        let { name, number, email, password, profile } = req.body
        console.log(req.body)

        let isCustomer = await Customer.findOne({ $or: [{ number }, { email }] })

        if (isCustomer) {
            return res.status(409).json({ error: true, message: "Customer Already exists with given number and email", data: null })
        }

        let hashedPassword = await encrypData(password)

        let customer = await Customer.create({ name, number, email, password : hashedPassword, profile })
        res.status(200).json({ error: false, message: "Signup Successfully", data: customer })

    } catch (err) {
        next(err)

    }
}

//* Login data
let login = async (req, res, next) => {
    try {
        let { username, password } = req.body
        console.log(req.body)

        let isCustomer = await Customer.findOne({ $or: [{ number: username }, { email: username }] })

        if (isCustomer) {
            let isPassword = await compareEncryptedData(password, isCustomer.password)

            if (isPassword) {
                return res.status(200).json({ error: false, message: "Login Successfully" })
            }
            return res.status(401).json({ error: true, message: "Password Not Matching" })
        }

        return res.status(401).json({ error: true, message: "User Not Found" })

    } catch (err) {
        next(err)
    }
}

let address = async (req, res, next) => {
    try {
        let { name, number, pinCode, address, locality } = req.body
        console.log(req.body)

        const isCustomer = await Customer.findOne({ number })

        if (isCustomer) {
            res.status(409).json({ error: true, message: "Customer already exits with given number", data: null })
        }

        let newAddress = await Address.create({ name, number, pinCode, address, locality, customerId:Customer._id })
        res.status(200).json({ error: false, message: "Address created successfully", data: newAddress })


    } catch (err) {
        next(err)

    }
}

module.exports = { signup, login, address }

