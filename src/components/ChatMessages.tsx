const ChatMessages = ({ yourMessages }: any) => {
    return (
        <section className="w-100 h-100 pt-5">
            {
                yourMessages.map((message: any) => {
                    return (
                        <div className="bg-dark">
                            <p className="container text-start text-white bg-dark p-3 pt-5 pb-5">{message}</p>
                        </div>
                    ) 
                })
            }

            {
                yourMessages.length === 0 && <p className="h-100 d-flex align-items-center justify-content-center fs-5 text-pink text-center">You have no messages yet</p>
            }
        </section>
    );
}

export default ChatMessages;