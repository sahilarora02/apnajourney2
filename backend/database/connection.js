import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://apnajourney:Ntdq0ANhqqKaiBSA@apnaj.noav4.mongodb.net/?retryWrites=true&w=majority&appName=apnaj';
let db;

export async function connectToMongoDB() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        db = client.db('apnaj'); 
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export function getDB() {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
}
