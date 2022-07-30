import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Carousel from "../components/GlobalComponents/Carousel";
import { pageVariants } from "../components/GlobalComponents/Initaltransition";
import TrucksBody from "../components/TrucksComponents/TrucksBody";
import { settrucksData } from "../lib/redux/reducers";
import SetContentFulData from "../lib/SetContentFulData";

const trucks = ({ trucksData }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(settrucksData(trucksData));
        setLoading(false);
    }, []);

    return (
        <>
            <motion.section initial="initial" animate="animate" variants={pageVariants}>
                {!loading && <Carousel />}
                <TrucksBody />
            </motion.section>
            <Head>
                <title>
                    {router.locale === "en" ? "Our Trucks - ContiBus - Specialist Coach Travel" : "Teherautóink - ContiBus - Az utazás szakértői"}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://contibus.hu/img/3.jpg" />
                <meta name="twitter:image" content="https://contibus.hu/img/3.jpg" />
                <meta property="og:url" content="https://contibus.hu" />
            </Head>
        </>
    );
};

export async function getServerSideProps({ res }) {
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=600, stale-while-revalidate=59");

    const trucksData = await SetContentFulData("trucks", "sys.createdAt");

    return {
        props: {
            trucksData: trucksData || null,
        },
    };
}

export default trucks;
