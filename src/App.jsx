import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonias from "./components/testimonials/Testimonias";
import Contact from "./components/contact/Contact";
import './app.scss'
import {useState} from "react";
import Menu from "./components/menu/menu";

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='app'>
            <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="section">

                <Intro/>
                <Portfolio/>
                <Works/>
                <Testimonias/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
