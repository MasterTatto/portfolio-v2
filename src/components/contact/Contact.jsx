import React, {useState} from 'react';
import './contact.scss'

const Contact = () => {
    const [message, setMessage] = useState(false);

    function handlerClick() {
        setMessage(true)
    }

    return (
        <div className={'contact'} id={'contact'}>
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form>
                    <input type="text" placeholder={'Email'}/>
                    <textarea placeholder={'Message'}></textarea>
                    <button onClick={() => handlerClick()}>Send</button>
                    {message ? <span>Thanks,message send</span> : ''}
                </form>
            </div>
        </div>
    );
};

export default Contact;
