import mongoose from 'mongoose'
const connection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
    console.log('database is connected')

    }catch(error){
        console.log('not connected')

    }
    
}
export default connection
