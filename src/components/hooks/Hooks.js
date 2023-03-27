import { useEffect, useState } from "react";
import Talker from "./../../talker/Talker";

function getScreenSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

export function useInnerScreenSize() {
    const [size, changeSize] = useState(getScreenSize());

    useEffect(() => {
        function handleResize() {
            changeSize(getScreenSize());
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

    return size;
}

export function useTalkerMonitor(listenEnabled = false, speakEnabled = false) {
    const [talker, setTalker] = useState(new Talker());
    const [isListenEnabled, setTalkerListen] = useState(listenEnabled);
    const [isSpeakEnabled, setTalkerSpeak] = useState(speakEnabled);

    return {
        talker,
        setTalker,
        isListenEnabled,
        setTalkerListen,
        isSpeakEnabled,
        setTalkerSpeak
    };
}