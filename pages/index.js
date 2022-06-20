import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return(
  <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name="Meetups" content="Meet real people in amazing locations"/>
    </Head>
   <MeetupList meetups={props.meetups} />;
   </Fragment>
)};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://amey:hyperr123@cluster0.smmqf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
