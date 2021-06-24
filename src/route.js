// import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import App from "./App";
import Description from "./Description";
const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={App}
          options={{
            title: "Video List",
            headerStyle: {
              backgroundColor: "#000"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "#eee"
            }
          }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{
            title: "Description",
            headerStyle: {
              backgroundColor: "#000"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "#eee"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
