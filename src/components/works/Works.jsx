import React, {useState} from 'react';
import './works.scss'

const Works = () => {
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ]
    const [currentSlider, setCurrentSlider] = useState(0)
    if (currentSlider >= data.length) {
        setCurrentSlider(0)
    }
    if (currentSlider < 0) {
        setCurrentSlider(data.length - 1)
    }

    console.log(data.length)
    return (
        <div className={'works'} id={'works'}>
            <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
                {data.map((i) => {
                    return <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={i.icon} alt=""/>
                                    </div>
                                    <h2>{i.title}</h2>
                                    <p>{i.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={i.img}
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <img src="assets/arrow.png" className={'arrow left'} alt=""
                 onClick={() => setCurrentSlider(currentSlider - 1)}/>
            <img src="assets/arrow.png" className={'arrow right'} alt=""
                 onClick={() => setCurrentSlider(currentSlider + 1)}/>
        </div>
    );
};

export default Works;
