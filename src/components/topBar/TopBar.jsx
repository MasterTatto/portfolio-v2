import React from 'react';
import './topBar.scss'
import {Mail, Person} from '@material-ui/icons';

const TopBar = (props) => {
    return (
        <div className={`topbar ${props.menuOpen ? 'active' : ''}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className={'logo'}>MasterTatto</a>
                    <div className="itemContainer">
                        <Person className={'icon'}/>
                        <span>+375-25-926-42-49</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className={'icon'}/>
                        <span>gromvolk97@gmail.com</span>
                    </div>

                </div>

                <div className="right">
                    <div className="hamburger"
                         onClick={() => props.menuOpen ? props.setMenuOpen(false) : props.setMenuOpen(true)}>
                        <span className={'line1'}></span>
                        <span className={'line2'}></span>
                        <span className={'line3'}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
