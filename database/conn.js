import mongoose from "mongoose";


export default async function connect() {
    await mongoose.connect(`$(process.env.MONGOBD_URL)`)
    console.log('database is connected')
}

