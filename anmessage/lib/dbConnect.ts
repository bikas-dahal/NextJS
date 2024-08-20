import { log } from "console";
import mongoose, { ConnectOptions } from "mongoose";

type connectionObject ={
    isConnected?: number;
}

const connection: connectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Connection already established');
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '')

        log(db)
        connection.isConnected = db.connections.length[0].readyState
        log('Connection established Successfully')


         
    } catch (error) {
        log('Database connection error', error)
        process.exit(1)
    }

}

export default dbConnect