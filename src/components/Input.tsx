import { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import { chatService } from "../services/chat.service";

const Input = ({ setYourMessages, yourMessages, GPTMessages, setGPTMessages }: any) => {

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [voiceText, setVoiceText] = useState<string>("");

    const recordVoice = () => {
        if (listening) {
            SpeechRecognition.stopListening()
            resetTranscript()
        } else {
            SpeechRecognition.startListening({ language: "pt-br" })
        }
    }


    async function getGptResponse(message: string) {
        const result = chatService.sendMessage(message).then(response => setGPTMessages([...GPTMessages, response]))
    }

    const verifyListening = () => {
        if (voiceText.length > 0 && !listening) {
            setYourMessages([...yourMessages, voiceText]);
            resetTranscript();
            getGptResponse(voiceText)
            return
        }
    }

    useEffect(() => {
        verifyListening();
    }, [listening]);


    useEffect(() => {
        setVoiceText(transcript);
    }, [transcript]);

    return (
        <div className="mb-5 pb-3 w-100 container fixed-bottom">
            <input onChange={e => setVoiceText(e.target.value)} value={voiceText} type="text" className="pt-2 pb-2 text-white form-control w-100 bg-dark border-0 box-shadow" name="" id="" aria-describedby="helpId" placeholder="Say what you wanna know" />
            <button onClick={recordVoice} className="mic-button btn btn-default bg-trasparent p-0 position-absolute scale-1">
                <img width={30} src="/icons/microphone.svg" alt="microphone.svg" />
            </button>

            {
                !browserSupportsSpeechRecognition && <span className="text-danger">Browser doesn't support speech recognition.</span>
            }
        </div>
    );
}

export default Input;