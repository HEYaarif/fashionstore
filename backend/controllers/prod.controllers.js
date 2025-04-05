const Customer = require('../models/prod.models')

//* Signup data
let signup = async(req, res, next)=>{
    try {
        let {name, number, email, password} = req.body
        console.log(req.body)

        let isCustomer = await  Customer.findOne({$or: [{number}, {email}]})

        if(isCustomer){
            return res.status(409).json({error:true, message: "Customer Already exists with given number and email", data: null})

        }
        let customer = await Customer.create({name, number, email, password})
        res.status(200).json({error:false, message:"Customer Added Successfully", data:customer})
   
    } catch (err) {
        next(err)
        
    }
}

//* Login data
let login = async (req, res, next)=>{
    try {
        let {username, password} = req.body
        console.log(req.body)

        let isCustomer = await Customer.findOne({$or: [{number:username}, {email:username}]})

        if(isCustomer){

            if(password === isCustomer.password){
                return res.status(200).json({error:false, message:"Login Successfull"})
            }
            return res.status(401).json({error:true, message:"Password Not Matching"})
        }

        return res.status(401).json({error:true, message:"User Not Found"})
        
    } catch (err) {
        next(err) 
    }
}

module.exports = {signup, login}

