import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-image-lightbox/style.css";

import "../styles/index.scss";

import DefaultLayout from "../components/DefaultLayout";
import { wrapper, store } from "../lib/redux/store";
import { Provider } from "react-redux";

if (process.env.NODE_ENV == "production") {
} else {
    if (typeof window !== "undefined" && window.Cypress) {
        window.store = store;
    }
}

const _app = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <DefaultLayout>
                <Component {...props.pageProps} />
            </DefaultLayout>
        </Provider>
    );
};

export default _app;
