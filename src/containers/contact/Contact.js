import React, { useContext } from "react";
import {Fade} from "react-reveal"
import './Contact.css';
import email from "../../assets/lottie/email.json"
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { contactInfo, illustration  } from "../../portifolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StylesContext";


export default function Contact() {
    const { isDark } = useContext(StyleContext)
    return (
        <Fade bottom duaration={1000} distance="20px">
            <div className="main contact-margin-top" id="contact">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="heading contact-title">{contactInfo.title}</h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode contact-subtitle"
                                    : "subTitle contact-subtitle"
                            }
                        >
                            {contactInfo.subtitle}
                        </p>
                        <div className={
                            isDark ? "dark-mode contact-text-div" : "contact-text-div"
                        }
                        >
                            <a className="contact-detail" href={"tel:" + contactInfo.number}>
                                {contactInfo.number}
                            </a>
                            <br />
                            <br />
                            <a className="contact-detail-email"
                                href={"mailto:" + contactInfo.email_address}
                            >
                               {contactInfo.email_address} 
                            </a>
                            <br />
                            <br />
                            <SocialMedia />
                        </div>
                    </div>
                    <div className="contact-image-div">
                        {illustration.animated ? (
                            <DisplayLottie animationData={email} />
                        ) : (
                                <img
                                    alt="Man working"
                                    src={require("../../assets/images/contactMailDark.svg")}
                                />
                        )}
                    </div>
                </div>
            </div>
        </Fade>
    )
}