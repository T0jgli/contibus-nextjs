import { useEffect } from "react";

import Navbar from "./GlobalComponents/Navbar";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Spinner from "./GlobalComponents/Spinner";
import FullscreenLoading from "./GlobalComponents/Initaltransition";
import { pageview } from "../lib/helpers/gtag";

const Footer = dynamic(() => import("./GlobalComponents/Footer"), { loading: () => <Spinner /> });
const Scrolltopbutton = dynamic(() => import("./GlobalComponents/Scrolltopbutton"), { loading: () => <Spinner /> });
const Cookie = dynamic(() => import("./GlobalComponents/Cookie"));
const Snackbars = dynamic(() => import("./GlobalComponents/Snackbars"));

const DefaultLayout = ({ children }) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Navbar />
            {children}
            <Cookie />

            <Footer />
            <div className="d-none d-md-block">
                <Scrolltopbutton />
            </div>
            <FullscreenLoading />
            <Snackbars />
        </>
    );
};

export default DefaultLayout;
