import React from "react";
import './index.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className="copy">&copy; 2022 - Nathan Flach</p>
            <p className="links">Get in touch with me: <a href="mailto:nathan.flach96@gmail.com" target={"_blank"} rel="noreferrer">email</a>, <a href="https://www.linkedin.com/in/nathanflach/" target={"_blank"} rel="noreferrer">linkedin</a>, or <a href="https://twitter.com/nathan_flach" target={"_blank"} rel="noreferrer">twitter</a></p>
        </footer>
    );
}

export default Footer;