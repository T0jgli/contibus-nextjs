import React from 'react'
import { useSelector } from 'react-redux'
import { selectMuzeumData } from '../../lib/AppSlice';
import { Fade } from "react-awesome-reveal";

import Carddeck from './Carddeck';
import { useRouter } from 'next/router';

const Muzeum = () => {
    const router = useRouter()
    const muzeumdata = useSelector(selectMuzeumData)

    let idd = 0;
    return (
        <div className="fadeIn animated">
            <Fade triggerOnce direction="down">
                <h3 className="text-center text-muted my-4" id="buses-text">{router.locale === "en" ? ("Our museum") : ("Múzeumunk")}</h3>
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
