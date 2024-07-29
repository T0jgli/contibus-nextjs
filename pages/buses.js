import Head from "next/head";
import dynamic from "next/dynamic";
import Spinner from "../components/GlobalComponents/Spinner";

const Busesbody = dynamic(() => import("../components/BusesComponents/Busesbody"), { loading: () => <Spinner /> });
import Carousel from "../components/GlobalComponents/Carousel";

import { pageVariants } from "../components/GlobalComponents/Initaltransition";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setbusesData, setmuzeumData } from "../lib/redux/reducers";
import SetContentFulData from "../lib/SetContentFulData";

const Buses = ({ busesData, muzeumData }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(setbusesData(busesData));
        dispatch(setmuzeumData(muzeumData));
        setLoading(false);
    }, []);

    return (
        <motion.section initial="initial" animate="animate" variants={pageVariants} className="motion">
            {!loading && <Carousel />}
            <Busesbody />
            <Head>
                <title>
                    {router.locale === "en" ? "Our Buses - ContiBus - Specialist Coach Travel" : "Autóbuszaink - ContiBus - Az utazás szakértői"}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://contibus.hu/img/3.jpg" />
                <meta name="twitter:image" content="https://contibus.hu/img/3.jpg" />
                <meta property="og:url" content="https://contibus.hu/buses" />
                <link rel="alternate" hrefLang="en" href="https://contibus.hu/en/buses" />
                <link rel="alternate" hrefLang="hu" href="https://contibus.hu/buses" />
            </Head>
        </motion.section>
    );
};

export async function getStaticProps() {
    const busesData = await SetContentFulData("busesData", "-fields.oradij");
    const muzeumData = await SetContentFulData("muzeumdata", "sys.createdAt");

    return {
        props: {
            busesData: busesData || null,
            muzeumData: muzeumData || null,
        },
        revalidate: 2000,
    };
}

export default Buses;
