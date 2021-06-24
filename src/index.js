import { AppRegistry } from "react-native";
import route from "./route";

AppRegistry.registerComponent("App", () => route);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
