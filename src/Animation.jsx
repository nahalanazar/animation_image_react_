import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
    const imageTilesRef = useRef(null);

    useEffect(() => {
        const imageTiles = Array.from(imageTilesRef.current.children);

        imageTiles.forEach((tile, index) => {
            gsap.to(tile, {
                scrollTrigger: {
                    trigger: imageTilesRef.current,
                    start: "top top",
                    end: "+=300%",
                    scrub: true,
                    toggleActions: "play none none reverse",
                },
                y: index % 2 === 0 ? "+=1000px" : "-=1000px", 
                ease: "none"
            });
        });
    }, []);

    return (
        <>
            <div className="parallax-container">
                <div className="content-above">
                    <p>This is content above the image tiles</p>
                </div>

                <div className="overlay"></div>

                <div ref={imageTilesRef} className="image-tiles">
                    <div className="image-tile"><img src="/images/line 1.svg" alt="1" /></div>
                    <div className="image-tile"><img src="/images/line 2.svg" alt="2" /></div>
                    <div className="image-tile"><img src="/images/line 3.svg" alt="3" /></div>
                    <div className="image-tile"><img src="/images/line 4.svg" alt="4" /></div>
                    <div className="image-tile"><img src="/images/line 5.svg" alt="5" /></div>
                    <div className="image-tile"><img src="/images/line 6.svg" alt="6" /></div>
                    <div className="image-tile"><img src="/images/line 7.svg" alt="7" /></div>
                    <div className="image-tile"><img src="/images/line 8.svg" alt="8" /></div>
                </div>

                <div className="centered-text">
                    <h2>Be inspired</h2>
                    <h1>Your ideas, our tools</h1>
                </div>

                <div className="content-below">
                    <p>This is content below the image tiles</p>
                </div>
            </div>
        </>
    );
}

export default Animation;
