import { useEffect } from "react";
import { store, persistor } from "@store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./app.scss";

const App = ({ children }) => {
  // const all = store.getState();

  // // TODO scoket call
  // useEffect(() => {
  //   const userInfo = all.user.userInfo;
  //   console.log(userInfo, "app");
  // }, [all.user.userInfo]);

  return (
    <Provider store={store}>
      <PersistGate loading={children} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default App;
