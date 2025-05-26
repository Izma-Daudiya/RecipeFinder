import { Client, Databases, Storage, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") 
  .setProject("6834438300096a7a2a88"); 

const databases = new Databases(client);
const storage = new Storage(client);

export const RECIPE_DB_ID = "683445150004eb8180df";
export const RECIPE_COLLECTION_ID = "683449dd002b3581aa87"; 
export const BUCKET_ID = "68344840003562fce331";

export { client, databases, storage, ID };
