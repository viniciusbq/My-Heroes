import { Provider } from 'react-redux';
import { CustomRoutes } from './routes';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <CustomRoutes />
      </Provider>
    </>
  );
}

export default App;
