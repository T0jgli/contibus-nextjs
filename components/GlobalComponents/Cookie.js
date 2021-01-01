import React, { useEffect } from 'react'

import { MDBAlert, MDBRow, MDBContainer, MDBBtn } from 'mdbreact'
import { useState } from 'react'
import { useRouter } from 'next/router'


const Cookie = () => {
    const router = useRouter()
    const [show, setshow] = useState(false)
    const [ready, setready] = useState(false)

    useEffect(() => {
        setready(true)
        if (localStorage.getItem("EnableCookies") !== "true") {
            setTimeout(() => {
                setshow(true)
            }, 750);
        }

    }, [])
    return (
        <>
            {ready && (
                <MDBAlert className={show ? ("show cookiealert border-0 p-0") : ("cookiealert border-0 p-0")} id="cookieModal">
                    <MDBContainer className="cookiealert-container">
                        <MDBRow className="justify-content-center align-items-center text-center">
                            <p className=" font-weight-bolder white-text text-center pt-3"><span aria-labelledby="cookie" role="img">&#x1F36A;
                </span>{router.locale === "en" ? (<span> We use cookies to ensure you get the best experience on our website. By browsing this site, you accept the
                                    <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacycookietext font-weight-bolder"> privacy policy</a>.</span>) :
                                    (<span> Az oldal sütiket használ a felhasználói élmény fokozása céljából.
                                    A weblap további böngészésével elfogadja az
                                        <a target="_blank" href="/files/adatvedelmi_nyilatkozat.pdf" className="privacycookietext font-weight-bolder"> adatvédelmi tájékoztatót</a>.
                                    </span>)}</p>
                            <MDBBtn style={{ color: "black" }} color="warning" size="md" className="font-weight-bolder roundedbtn acceptcookies d-block" onClick={() => {
                                setshow(false)
                                localStorage.setItem("EnableCookies", "true")
                            }}>
                                {router.locale === "en" ? ("I understand") : ("Rendben")}</MDBBtn>
                        </MDBRow>
                    </MDBContainer>
                </MDBAlert>
            )}
        </>
    )
}

export default Cookie