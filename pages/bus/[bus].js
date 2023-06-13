import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { pageVariants } from "../../components/GlobalComponents/Initaltransition";
import Spinner from "../../components/GlobalComponents/Spinner";

import Carousel from "../../components/GlobalComponents/Carousel";
const OneBusBody = dynamic(() => import("../../components/BusesComponents/OneBusBody"), { loading: () => <Spinner /> });

import { MDBBtn } from "mdbreact";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import { setIDs, setOneContentfulData } from "../../lib/SetContentFulData";
import { useEffect, useState } from "react";

const OneBus = ({ busData }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <motion.section initial="initial" animate="animate" variants={pageVariants}>
            {!loading && <Carousel />}
            <img src="/img/3.jpg" className="img-fluid mx-auto d-none logo" width="220px" id="contibus-logo" alt="logo" />
            <Fade triggerOnce direction="up">
                <div className="flex-center mt-5 mx-auto">
                    <MDBBtn
                        id="back-button"
                        color="warning"
                        onClick={() => {
                            router.back();
                        }}
                        className="my-1 black-text roundedbtn font-weight-bolder"
                    >
                        « {router.locale === "en" ? "Back" : "Vissza"}
                    </MDBBtn>
                </div>
            </Fade>
            <OneBusBody thisbus={busData} />
        </motion.section>
    );
};

export async function getStaticProps(context) {
    const busData = await setOneContentfulData("busesData", context.params.bus);

    return {
        props: {
            busData: busData ? busData[0] : null,
        },
    };
}
export async function getStaticPaths({ locales }) {
    let paths = [];
    const entries = await setIDs("busesData");
    entries.forEach((e) => {
        for (const locale of locales) {
            paths.push({
                params: {
                    bus: e.fields.id,
                },
                locale,
            });
        }
    });

    return {
        paths: paths,
        fallback: true, // can also be true or 'blocking'
    };
}

export default OneBus;
