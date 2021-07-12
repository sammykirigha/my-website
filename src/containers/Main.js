import React, { Component } from "react";
import './Main.css';
import { StyleProvider, StylesContext } from '../contexts/StylesContext';
import Header from "../components/header";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDark: false
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
                 value = {{isDark: this.state.isDark, changeTheme: this.changeTheme}}
                >
                   <Header />
                </StyleProvider>
            </div>
        )
    }
}