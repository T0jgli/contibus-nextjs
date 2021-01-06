import { useSelector } from 'react-redux'
import { selectMuzeumData } from '../../lib/AppSlice';
import { Fade } from "react-awesome-reveal";

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Spinner from "../GlobalComponents/Spinner"

const Carddeck = dynamic(() => import("./Carddeck"), { loading: () => <Spinner /> });

const Muzeum = () => {
    const { locale } = useRouter()
    const muzeumdata = useSelector(selectMuzeumData)

    let idd = 0;
    return (
        <div className="fadeIn animated">
            <Fade triggerOnce direction="down">
                <h3 className="text-center text-muted my-4" id="buses-text">{locale === "en" ? ("Our museum") : ("Múzeumunk")}</h3>
            </Fade>
            {muzeumdata.map((item, index, array) => {
                if ((index + 1) % 2 !== 0) {
                    idd++
                    return (
                        <Carddeck key={index} idd={idd} itemid={index + 1} item={item} nextitemid={index + 2} nextitem={array[index + 1]} what={"Muzeum"} />
                    )
                }
                else {
                    return null;
                }

            })}
        </div>
    )
}

export default Muzeum
