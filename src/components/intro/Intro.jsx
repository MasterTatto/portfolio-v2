import React, {useEffect, useRef} from 'react';
import './intro.scss'
import {Avatar} from "@material-ui/core";
import {init} from 'ityped'

const Intro = () => {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            typeSpeed: 100,
            strings: ['HTML5', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Redux']
        })
    }, [])
    return (
        <div className={'intro'} id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <Avatar src='assets/me.jpg' alt="man" className={'img'}/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, i'm</h2>
                    <h1>Alex Thunder</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    );
}

export default Intro;
