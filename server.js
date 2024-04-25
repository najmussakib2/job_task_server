import mongoose from 'mongoose';
import app from './app.js';
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();