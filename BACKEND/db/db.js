import { MongoInvitation } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017'; //l'URL dU serveur MongoDB
const invitation = new MongoInvitation(url);

async function run() {
    try {
        // Connexion au client
        await client.connect();
        console.log("Connecté au serveur MongoDB");

        const database = invitations.db('AnniversaireDB'); 
        const collection = database.collection('invitations'); 

        // Créer un document
        const doc = {
            age: "8",
            date: 30,
            startTime: "13:00",
            endTime: "14:00",
            address:"Libreville",
            sender:"kevine",
            contact:"oui"

        };

        // Insérer le document
        const result = await collection.insertOne(doc);
        console.log(`Document inséré avec l'ID : ${result.insertedId}`);
    } finally {
        await invitations.close();
    }
}

run().catch(console.error);