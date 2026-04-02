import React, { forwardRef } from "react"
import { LButton, RButton } from "./Styles";
import Card from "./Card";
import Image from "next/image";
import triangle from '../../triangle.png'

const Slider = forwardRef((props, ref) => {
    console.log(ref);

    return (
        <div style={{
                margin: "30px 0 0 0",
                width: "70vw"
            }} ref={ref} className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <Card className="glide__slide border p-10 bg-blue-100 text-center"></Card>
                        <Card className="glide__slide border p-10 bg-blue-100 text-center"></Card>
                        <Card className="glide__slide border p-10 bg-blue-100 text-center"></Card>
                        <Card className="glide__slide border p-10 bg-blue-100 text-center"></Card>
                        <Card className="glide__slide border p-10 bg-blue-100 text-center"></Card>
                        <Card className="glide__slide border p-10 bg-blue-100 text-center"></Card>
                    </ul>
                </div>

                <div className="glide__arrows" data-glide-el="controls">
                    <LButton className="glide__arrow glide__arrow--left" data-glide-dir="<"><Image src={triangle}></Image></LButton>
                    <RButton className="glide__arrow glide__arrow--right" data-glide-dir=">"><Image style={{
                        transform: "rotate(180deg)",
                    }} src={triangle}></Image></RButton>
                </div>
        </div>
    );
});

export default Slider;