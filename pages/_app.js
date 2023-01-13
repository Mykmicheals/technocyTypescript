import { Provider } from 'react-redux'
import '../styles/globals.css'
import store from '../src/store/index';
import Header from '../src/components/Header'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Header />
    <Component {...pageProps} />
  </Provider>

}

export default MyApp
