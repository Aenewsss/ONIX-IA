import ChatMessages from "@components/ChatMessages";
import Footer from "@components/Footer";
import Input from "@components/Input";
import Sidebar from "@components/Sidebar";
import { useState } from "react";

const Chat = () => {

    const [yourMessages, setYourMessages] = useState<string[]>([]);
    const [GPTMessages, setGPTMessages] = useState<string[]>([]);


    return (
        <section className="chat-page d-flex flex-column justify-content-center h-100vh align-items-center ">
            <Sidebar />

            <ChatMessages yourMessages={yourMessages}/>

            <Input yourMessages={yourMessages} setYourMessages={setYourMessages}/>

            <Footer />
        </section>
    );
}

export default Chat;