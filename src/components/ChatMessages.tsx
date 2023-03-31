import { useCallback, useEffect } from "react";

const ChatMessages = ({ yourMessages, GPTMessages }: any) => {

    useEffect(() => {
        document.body.scrollTo({top: 1000, behavior: "smooth"})
    }, [yourMessages, GPTMessages]);

    const loadChatMessages = useCallback(() => {
        return yourMessages.map((yourMessage: any, indexY: number) => {
            return GPTMessages.map((gptMessage: any, indexG: number) => {
                if (indexY == indexG) {
                    return (
                        <div key={(indexY + indexG + indexG) * (indexG + indexY)} className="pb-5">
                            <div className="bg-dark">
                                <p className="container text-start text-white bg-dark p-3 pt-5 pb-5">{yourMessage}</p>
                            </div>
                            <div className="bg-black pb-5">
                                <p className="container text-start text-white p-3 pt-5 pb-5">{gptMessage}</p>
                            </div>
                        </div>
                    )
                }
            })
        })
    }, [yourMessages, GPTMessages])

    return (
        <section className="w-100 h-100 pt-5">
            {loadChatMessages()}

            {
                yourMessages.length === 0 && <p className="h-100 d-flex align-items-center justify-content-center fs-5 text-pink text-center">You have no messages yet</p>
            }
        </section>
    );
}

export default ChatMessages;