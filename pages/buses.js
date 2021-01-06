import Head from 'next/head'
import dynamic from 'next/dynamic';
import Spinner from "../components/GlobalComponents/Spinner"

const Busesbody = dynamic(() => import("../components/BusesComponents/Busesbody"), { loading: () => <Spinner /> });
import Carousel from '../components/GlobalComponents/Carousel';

import { pageVariants } from '../components/GlobalComponents/Initaltransition';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Buses = () => {
  const router = useRouter()
  return (
    <motion.section initial="initial"
      animate="animate"
      variants={pageVariants}>
      <Carousel />
      <Busesbody />
      <Head>
        <title>{router.locale === "en" ? ("Our Buses - Contibus - Specialist Coach Travel") : ("Autóbuszaink - Contibus - Az utazás szakértői")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:image" content="https://contibus-nextjs.vercel.app/img/3.jpg" />
        <meta name="twitter:image" content="https://contibus-nextjs.vercel.app/img/3.jpg" />
        <meta property="og:url" content="https://contibus-nextjs.vercel.app/buses" />
        <link rel="alternate" hrefLang="en" href="https://contibus-nextjs.vercel.app/en/buses" />
        <link rel="alternate" hrefLang="hu" href="https://contibus-nextjs.vercel.app/buses" />
      </Head>
    </motion.section>
  )
}

export default Buses