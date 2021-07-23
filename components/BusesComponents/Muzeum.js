import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Spinner from "../GlobalComponents/Spinner";
import { muzeumAnimation } from "../GlobalComponents/Initaltransition";
import { motion } from "framer-motion";

const Carddeck = dynamic(() => import("./Carddeck"), { loading: () => <Spinner /> });

const Muzeum = () => {
    const { locale } = useRouter();
    const muzeumdata = useSelector((state) => state.app.muzeumData);

    let idd = 0;
    return (
        <motion.div id="muzeum-cards" initial="initial" animate="animate" variants={muzeumAnimation} exit="exit" key="muzeum">
            <Fade triggerOnce direction="down">
                <h3 className="text-center text-muted my-4" id="buses-text">
                    {locale === "en" ? "Our museum" : "Múzeumunk"}
                </h3>
            </Fade>
            {muzeumdata?.map((item, index, array) => {
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
                            what={"Muzeum"}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </motion.div>
    );
};

export default Muzeum;
