import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import Feed from "./screens/Feed";
import HomePage from "./screens/HomePage";
import Message from "./screens/Message";
import MessageScreen from "./screens/MessageScreen";

const Stack = createNativeStackNavigator();

const CustomHeaderBackground = () => {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation()

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require("./assets/images/Chevron.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Second icon pressed")}>
        <Image source={require("./assets/images/Menu.png")} />
      </TouchableOpacity>
    </View>
  );
};

const CustomMessage = () => {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation()

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
      }}
    >
      <TouchableOpacity onPress={() => console.log("Second icon pressed")}>
        <Image
          style={{ marginLeft: 20 }}
          source={require("./assets/images/logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
        <Image
          style={{ marginRight: 20 }}
          source={require("./assets/images/Group.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const CustomMessageScreen = () => {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation()

  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "#42C561",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 25,
          padding: 20,
        }}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ tintColor: "white" }}
              source={require("./assets/images/Chevron.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <Image source={require("./assets/images/Group.png")} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "white" }}>School Friends</Text>
            <Text style={{ color: "white" }}>online</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => console.log("Second icon pressed")}>
            <Image
              style={{ tintColor: "white" }}
              source={require("./assets/images/Video.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Second icon pressed")}>
            <Image
              style={{ tintColor: "white" }}
              source={require("./assets/images/Phone.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Second icon pressed")}>
            <Image
              style={{ tintColor: "white" }}
              source={require("./assets/images/Menu.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="Sign Up"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* <StatusBar style="auto" /> */}
        <Stack.Screen
          name="Login"
          component={Feed}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerBackground: CustomHeaderBackground,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Message"
          component={Message}
          options={{
            headerBackground: CustomMessage,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{
            headerBackground: CustomMessageScreen,
            headerBackTitleVisible: false,
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
