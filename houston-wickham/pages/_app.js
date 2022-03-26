import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        theme='colored'
        position='top-center'
      />
    </>
  );
}

export default MyApp;
