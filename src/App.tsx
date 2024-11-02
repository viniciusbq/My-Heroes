import { Provider } from 'react-redux';
import { CustomRoutes } from './routes';
import { persistor, store } from './store';
import Loading from './components/load';
import Footer from './components/footer';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Loading />
          <CustomRoutes />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
