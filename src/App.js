import MyRoutes from "./MyRoutes";
import {store} from "./components/reducers/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./components/reducers/store";


function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
