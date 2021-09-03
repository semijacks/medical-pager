import Head from "next/head";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelContainer, ChannelListContainer, Auth } from "../components";

const apiKey = process.env.API_KEY;

const client = StreamChat.getInstance(apiKey);

const authToken = false;

export default function Home() {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Head>
        <title>Medical Pager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}
