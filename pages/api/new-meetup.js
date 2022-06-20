import React from "react";
import { MongoClient } from "mongodb";

async function handler (req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://amey:hyperr123@cluster0.smmqf.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(data);
    client.close()

    res.status(201).json({ message: 'Meeetup inserted'})
  }
};

export default handler;
