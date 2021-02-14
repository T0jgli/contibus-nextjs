import { MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdbreact'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Fade } from 'react-awesome-reveal'


const Info2 = () => {
    const router = useRouter()
    return (
        <MDBContainer>
            <Fade triggerOnce>
                <h2 className="text-center my-5 pt-3">{router.locale === "en" ? ("Travelling around the world") : ("Rólunk")}</h2>
            </Fade>

            <Fade delay={200} triggerOnce>
                <p className="text-center mb-5 pb-3 section-description desctext">
                    {router.locale === "en" ? (`We are often renewing our bus fleet, so our customers can still travel at luxury level. 
                    Depending on the number of passenger we have elevated or double-decker buses or just minibuses with all the extras (air conditioning, toilet, DVD).`) :
                        (`Autóbuszparkunkat folyamatosan újítjuk, 
                    továbbra is luxus színvonalon utazhatnak kiválasztott úticéljuk felé, 
                    létszámtól függően, mikrobusszal, emelt szintű vagy emeletes, kényelmes, minden extrával (légkondicionáló, toalett, dvd) 
                    ellátott autóbuszainkon.`)}
                </p>
            </Fade>

            <Fade delay={400} triggerOnce>
                <MDBRow className="text-center">
                    <MDBCol md="4" className="mb-5">
                        <MDBIcon icon="camera-retro" className="logo" style={{ fontSize: "4rem", color: "#fb3" }} />
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>{router.locale === "en" ? ("Experience") : ("Tapasztalat")}</h4>
                        <p className="grey-text">{router.locale === "en" ? (`We have nearly 30 years of experience in travel. 
                            We are constantly listening to the feedback of our customers, thus ensuring the highest quality service.`) :
                            (`Közel 30 éves tapasztalattal rendelkezünk az utaztatásban. 
                            Folyamatosan hallgatunk ügyfeleink visszajelzéseire, ezáltal biztosítva a legminőségibb szolgáltatást.`)}</p>
                    </MDBCol>

                    <MDBCol md="4" className="mb-5">
                        <MDBIcon icon="user-shield" className="logo" style={{ fontSize: "4rem", color: "#fb3" }} />
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>{router.locale === "en" ? ("Safety") : ("Biztonság")}</h4>
                        <p className="grey-text">{router.locale === "en" ? (`The technical status and aesthetic condition of our vehicles is impeccable. 
                        Our drivers strictly adhere to the rest time, guaranteeing that you feel safe during your trip.`) :
                            (`Járműveink műszaki és esztétikai állapota kifogástalan. 
                            Gépkocsivezetőink szigorúan betartják a pihenési időt, garantálva, hogy utazása során biztonságban érezze magát.`)}</p>
                    </MDBCol>

                    <MDBCol md="4" className="mb-5">
                        <MDBIcon icon="heart" className="logo" style={{ fontSize: "4rem", color: "#fb3" }} />
                        <h4 className="my-4 mx-0" style={{ fontWeight: "500" }}>{router.locale === "en" ? ("Adventure") : ("Élmény")}</h4>
                        <p className="grey-text">{router.locale === "en" ? (`Our services also include the organization of individual trips, 
                        with which we can provide our passengers with an unforgettable experience. You can request a quotation by clicking`) :
                            (`Szolgatásaink közé tartozik az egyedik utazások lebonyolítása is, melyekkel felejthetetlen élményt tudunk nyújtani utasainknak. Kérjen árajánlatot `)} <Link href="/offer" passHref><a className="privacytext" onClick={() => router.push("/offer")}>{router.locale === "en" ? ("here.") : ("ide")}</a></Link>{router.locale !== "en" && (" kattintva")}</p>
                    </MDBCol>
                </MDBRow>

            </Fade>
        </MDBContainer>
    )
}

export default Info2
