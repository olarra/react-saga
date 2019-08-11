import Reactotron from "reactotron-react-native";
import sagaPlugin from "reactotron-redux-saga";
import apisaucePlugin from "reactotron-apisauce";

Reactotron.configure({ name: "GiftCard" })
  .useReactNative()
  .use(apisaucePlugin())
  .use(sagaPlugin());

Reactotron.connect(); // Connect with reactotron
Reactotron.clear(); // Clear the logs.

const sagaMonitor = Reactotron.createSagaMonitor();
export { sagaMonitor };
