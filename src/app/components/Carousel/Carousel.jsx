"use client";

import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import { Container, Title, SubTitle } from "./Styles";
import Slider from "./Slider";

export default function Carousel() {
    const sliderRef = useRef(null);

    useEffect(() => {
        if (!sliderRef.current) return;

        // Initialize Glide
        const glide = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 20,
        focusAt: "center",
        autoplay: false,
        breakpoints: {
            1024: { perView: 2 },
            600: { perView: 1 },
        },
        });

        glide.mount();

        // Cleanup to prevent memory leaks and duplicate instances
        return () => {
        glide.destroy();
        };
    }, []);

    return (
        <Container>
            <div style={{
                width: "35vw"
            }}>
                <Title>Selected Work</Title>
                <SubTitle>
                    Selected projects showcasing a blend of AI video production, 
                    post-production, and visual direction.
                </SubTitle>
            </div>
            <Slider ref={sliderRef}/>
        </Container>
    )
} 