import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-image-lightbox/style.css';

import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@fullcalendar/timegrid/main.css' // @fullcalendar/timegrid is a direct import
import '@fullcalendar/list/main.css' // @fullcalendar/timegrid is a direct import

import '../styles/index.scss'

import DefaultLayout from '../components/DefaultLayout'
import ReactGA from 'react-ga';
import { wrapper } from '../lib/store';

ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_GAID)


const _app = ({ Component, pageProps }) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default wrapper.withRedux(_app);