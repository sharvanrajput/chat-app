import Layout from "@/components/Layout/Layout";
import Title from "@/components/shared/Title";
import React from "react";


function Home() {
  return (
    <>
      <Title title="Chat app" description={" this is my chat app"} />
      <div>
        home
        
      </div>
    </>
  );
}

export default Layout(Home);
