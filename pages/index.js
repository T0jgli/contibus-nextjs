import Head from "next/head";
import dynamic from "next/dynamic";
import Spinner from "../components/GlobalComponents/Spinner";

const Info = dynamic(() => import("../components/HomeComponents/Info"), { loading: () => <Spinner /> });
const Gallery = dynamic(() => import("../components/GlobalComponents/Gallery"), { loading: () => <Spinner /> });
const Info2 = dynamic(() => import("../components/HomeComponents/Info2"), { loading: () => <Spinner /> });
const Streak = dynamic(() => import("../components/HomeComponents/Streak"), { loading: () => <Spinner /> });
const Cards = dynamic(() => import("../components/HomeComponents/Cards"), { loading: () => <Spinner /> });
import Carousel from "../components/GlobalComponents/Carousel";

import { pageVariants } from "../components/GlobalComponents/Initaltransition";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Testimonials from "../components/HomeComponents/Testimonials";

const Home = () => {
    const { locale } = useRouter();
    return (
        <motion.section initial="initial" animate="animate" variants={pageVariants} className="motion">
            <Carousel />
            <Info />
            <Gallery />
            <Info2 />
            <Testimonials />
            <Streak />
            <Cards />
            <Head>
                <title>{locale === "en" ? "ContiBus - Specialist Coach Travel" : "ContiBus - Az utazás szakértői"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta property="og:image" content="https://contibus.hu/img/3.jpg" />
                <meta name="twitter:image" content="https://contibus.hu/img/3.jpg" />
                <meta property="og:url" content="https://contibus.hu" />
            </Head>
        </motion.section>
    );
};

export default Home;
