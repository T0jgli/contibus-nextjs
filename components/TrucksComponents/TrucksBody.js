import { MDBIcon } from "mdbreact";
import { useRouter } from "next/router";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import Carddeck from "../BusesComponents/Carddeck";

const TrucksBody = () => {
    const trucksData = useSelector((state) => state.app.trucksData);
    const { locale } = useRouter();
    let idd = 0;

    return (
        <>
            <div className="text-center py-4 main mb-5 busesothers">
                <div className="container">
                    <h4 className="py-3">
                        {locale === "en"
                            ? "In 2021, we have expanded our activities with freight transport!"
                            : "2021-ben bővítettük tevékenységünket teherszállítással!"}
                    </h4>
                    <p>
                        {locale === "en"
                            ? "We currently have 4 vehicles. Our vehicles have a total weight of 12,15,18,18 tonna. We are waiting for our future customers!"
                            : "Jelenleg 4 db járművel rendelkezünk. Gépjárműveink 12,15,18,18 össztömegűek. Várjuk leendő megrendelőinket!"}
                    </p>
                    <a href="https://www.facebook.com/Neoline-ContiTrans-101101795149788" target="_blank" rel="noopener noreferrer">
                        <MDBIcon fab icon="facebook-square" size="2x" className="" style={{ cursor: "pointer" }} />
                    </a>
                </div>
            </div>
            <Fade direction="down" triggerOnce>
                <h3 className="text-center text-muted my-4" id="buses-text">
                    {locale === "en" ? "Our trucks" : "Teherautóink"}
                </h3>
            </Fade>
            <div className="text-center my-5 mx-auto px-lg-0" id="trucks-container">
                {trucksData?.map((item, index, array) => {
                    if ((index + 1) % 2 !== 0) {
                        idd++;
                        return (
                            <Carddeck
                                key={index}
                                idd={idd}
                                itemid={index + 1}
                                item={item}
                                nextitemid={index + 2}
                                nextitem={array[index + 1]}
                                what={"Trucks"}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </>
    );
};

export default TrucksBody;
