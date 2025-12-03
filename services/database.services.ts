import * as mongoDB from "mongodb";

export const collections: { contacts?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING!
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const contactsCollection: mongoDB.Collection = db.collection(
    process.env.CONTACTS_COLLECTION_NAME!
  );

  collections.contacts = contactsCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${contactsCollection.collectionName}`
  );
}
