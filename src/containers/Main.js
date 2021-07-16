import React, { Component } from "react";
import './Main.css';
import { StyleProvider } from '../contexts/StylesContext';
import Header from "../components/header/header";
import Greeting from "./greetings/Greetings";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer"
import Top from "./topbutton/Top";


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDark: true
        }
    }

    componentDidMount() {
        if (localStorage.getItem("isDark") === null) {
            const darkPref = window.matchMedia("(prefers-color-scheme : dark)")
            localStorage.setItem("isDark", darkPref.matches);
        }
        this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
    }

    changeTheme = () => {
        this.setState({ isDark: !this.state.isDark }, () => {
            localStorage.setItem("isDark", this.state.isDark);
        })
    }

    render() {
        return (
            <div className={this.state.isDark ? "dark-mode" : null}>
                <StyleProvider
                 value = {{isDark: this.state.isDark, changeTheme: this.changeTheme}}>
                    <Header />
                    <Greeting />
                    <Skills />
                    <StackProgress />
                    <Education />
                    <Contact />
                    <Footer />
                    <Top />
                </StyleProvider>
            </div>
        )
    }
}