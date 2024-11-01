import { Provider } from 'react-redux';
import { CustomRoutes } from './routes';
import store from './store';
import Loading from './components/load';

function App() {
  return (
    <>
      <Provider store={store}>
        <Loading />
        <CustomRoutes />
      </Provider>
    </>
  );
}

export default App;
