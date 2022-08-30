// import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Header } from "./SharedLayout.styled.js";
import { Link, LinkList } from '../styles/Links.styled';

import { LangContext } from "../LangContextProvider/";
import { useContext } from "react";
import SwitcherLanguage from "../SwitcherLanguage/";

const SharedLayout = () => {
    const { lang } = useContext(LangContext);

    const textHome = lang === 'en' ? "Home" : "Домашня";
    const textMovies = lang === 'en' ? "Movies" : "Фільми";
    return (
        <>
            <Header>

                <div className="logo">
                    <a href="https://www.themoviedb.org/" referrerPolicy="no-referrer" alt="API site">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" /></a>
                </div>
                <div>
                    <nav style={{ display: "inline-block" }}>
                        <LinkList>
                            <li>
                                <Link to="/">{textHome}</Link>
                            </li>
                            <li>
                                <Link to="/Movies">{textMovies}</Link>
                            </li>
                        </LinkList>
                    </nav>
                    <SwitcherLanguage />
                </div>
            </Header>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}

export default SharedLayout;