import React from 'react'
import { Provider } from 'react-redux';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-image-lightbox/style.css';


import '../styles/print.scss'
import '../styles/index.css';
import "../styles/buses.scss"

import DefaultLayout from '../components/DefaultLayout'
import ReactGA from 'react-ga';
import store from '../lib/store';

ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_GAID)


const _app = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  )

}

export default _app

