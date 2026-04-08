import Layout from "@/components/Layout/Layout";
import Title from "@/components/shared/Title";
import React from "react";

function Chat() {
  return (
    <>
      <Title title="Chat app" description={" this is my chat app"} />
      <div>chat</div>
    </>
  );
}
export default Layout(Chat);
