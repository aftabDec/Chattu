const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI )
        console.log("  connected to mongodb")
    } catch (error) {
      console.log("failed to connect mongodb",error)
    }
    
}
module.exports = connectDb