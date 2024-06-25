// pages/_app.js
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
    );
}

export default MyApp;
