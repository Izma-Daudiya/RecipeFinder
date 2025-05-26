import { Client, Databases, Storage, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") 
  .setProject("6834438300096a7a2a88"); 

const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage, ID };
