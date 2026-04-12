import Layout from "@/components/Layout/Layout";
import Title from "@/components/shared/Title";
import React from "react";


function Home() {
  return (
    <>
      <Title title="Chat app" description={" this is my chat app"} />
      <div className="text-2xl h-screen flex justify-center items-center" >
        Select a friend to chat

      </div>
    </>
  );
}

export default Layout(Home);
