import { MContainer } from "../Styles";
import Image from "next/image";
import Home from '../../../../../public/Home.png'
import { useState } from "react";
import MElements from "./MElements";

export default function MHeader({sendDisplayValue}) {
    const [display, setDisplay] = useState('none');

    function handleClick() {
        if(display == 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
        sendDisplayValue(display);
    }

    return(
        <MContainer>
            <button onClick={() => handleClick()}><Image alt="Header" src={Home}></Image></button>
        </MContainer>
    )
}