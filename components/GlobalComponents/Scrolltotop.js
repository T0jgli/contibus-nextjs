import { useEffect } from "react";
import ReactGA from 'react-ga'
import { useRouter } from "next/router";

const Scrolltotop = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
}

export default Scrolltotop
