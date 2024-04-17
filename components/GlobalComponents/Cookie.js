import { useEffect } from "react";

import { MDBBtn, MDBAlert } from "mdbreact";
import { useState } from "react";
import { useRouter } from "next/router";

const Cookie = () => {
    const { locale } = useRouter();
    const [show, setshow] = useState(false);
    const [ready, setready] = useState(false);

    function addGtag() {
        if (process?.env.NODE_ENV === "production") {
            const script = document.createElement("script");
            script.src = `https://www.googletagmanager.com/gtag/js?id=${process?.env.NEXT_PUBLIC_GOOGLE_GAID}`;
            script.setAttribute("rel", "preconnect");
            document?.head.appendChild(script);
            const gtag = document.createElement("script");
            gtag.textContent = `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'update', {
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                ad_storage: 'denied',
                analytics_storage: 'granted'
            });            
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_GAID}', {
                page_path: window.location.pathname,
            });`;
            document?.head.appendChild(gtag);
        }
    }

    useEffect(() => {
        setready(true);
        if (localStorage.getItem("EnableCookies") !== "true") {
            setTimeout(() => {
                setshow(true);
            }, 750);
        } else {
            addGtag();
        }
    }, []);
    return (
        <>
            {ready && (
                <MDBAlert className={show ? "show cookiealert border-0 p-0" : "cookiealert border-0 p-0"} id="cookieModal">
                    <div className="cookiealert-container container">
                        <div className="justify-content-center align-items-center text-center row">
                            <p className=" font-weight-bolder white-text text-center pt-3">
                                <span aria-labelledby="cookie" role="img">
                                    &#x1F36A;
                                </span>
                                {locale === "en" ? (
                                    <span>
                                        {" "}
                                        We use cookies to ensure you get the best experience on our website. By clicking the accept button, you accept
                                        the
                                        <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacycookietext font-weight-bolder">
                                            {" "}
                                            privacy policy
                                        </a>
                                        .
                                    </span>
                                ) : (
                                    <span>
                                        {" "}
                                        Az oldal sütiket használ a felhasználói élmény fokozása céljából. Az elfogadom gombra kattintva elfogadja az{" "}
                                        <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacycookietext font-weight-bolder">
                                            {" "}
                                            adatvédelmi tájékoztatót
                                        </a>
                                        .
                                    </span>
                                )}
                            </p>
                            <MDBBtn
                                style={{ color: "black" }}
                                color="warning"
                                size="md"
                                outline
                                className="font-weight-bolder roundedbtn acceptcookies d-block"
                                onClick={() => {
                                    setshow(false);
                                    localStorage.setItem("EnableCookies", "true");
                                    addGtag();
                                }}
                            >
                                {locale === "en" ? "Accept" : "Elfogadom"}
                            </MDBBtn>
                        </div>
                    </div>
                </MDBAlert>
            )}
        </>
    );
};

export default Cookie;
