import Head from "next/head";
import dynamic from "next/dynamic";
import Spinner from "../components/GlobalComponents/Spinner";

const Formoffer = dynamic(() => import("../components/OfferComponents/Formoffer"), { loading: () => <Spinner /> });
const Gallery = dynamic(() => import("../components/GlobalComponents/Gallery"), { loading: () => <Spinner /> });
import Carousel from "../components/GlobalComponents/Carousel";

import { pageVariants } from "../components/GlobalComponents/Initaltransition";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Offer = () => {
    const { locale } = useRouter();
    return (
        <motion.section initial="initial" animate="animate" variants={pageVariants} className="motion">
            <Carousel />
            <Formoffer />
            <Gallery />
            <Head>
                <title>{locale === "en" ? "Offer - ContiBus - Specialist Coach Travel" : "Ajánlatkérés - ContiBus - Az utazás szakértői"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://contibus.hu/img/3.jpg" />
                <meta name="twitter:image" content="https://contibus.hu/img/3.jpg" />
                <meta property="og:url" content="https://contibus.hu/offer" />
                <link rel="alternate" hrefLang="en" href="https://contibus.hu/en/offer" />
                <link rel="alternate" hrefLang="hu" href="https://contibus.hu/offer" />
            </Head>
        </motion.section>
    );
};

export default Offer;
