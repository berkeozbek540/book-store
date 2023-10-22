import dotenv from 'dotenv';
dotenv.config();

export const PORT = 5555;
let username = process.env.MONGODB_USERNAME;
let password = process.env.MONGODB_PASSWORD;

export const mongoDBURL =
  'mongodb+srv://' +
  username +
  ':' +
  password +
  '@book-store-mern.ndxirod.mongodb.net/books-collection?retryWrites=true&w=majority';
