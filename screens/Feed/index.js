import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import {
  Button,
  ImageBackground,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import image from "../../assets/images/bg1.png";

const Feed = () => {
  const [number, onChangeNumber] = React.useState("");
  const navigation = useNavigation(); // Get the navigation prop using useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.text}></View>

        <View>
          <ScrollView>
            <View style={styles.secondSec}>
              <Image
                style={{ marginTop: 20 }}
                source={require("../../assets/images/logo.png")}
              />
              <Text>Welcome Back</Text>

              <Image source={require("../../assets/images/Group.png")} />

              <View
                style={{
                  borderWidth: 1,
                  borderBottomWidth: 1,
                  flexDirection: "row",
                  justifyContent: "stert",
                  borderRadius: 10,
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Image
                  style={{ marginLeft: 10 }}
                  source={require("../../assets/images/Letter.png")}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Email Here"
                />
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderBottomWidth: 1,
                  flexDirection: "row",
                  justifyContent: "stert",
                  borderRadius: 10,
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Image
                  style={{ marginLeft: 10 }}
                  source={require("../../assets/images/Lock.png")}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Password"
                />

                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    position: "absolute",
                    right: 10,
                  }}
                >
                  <Image
                    // style={{ marginLeft: 10 }}
                    source={require("../../assets/images/Lock.png")}
                  />
                </View>
              </View>

              <View style={{ width: 268, height: 50 }}>
                <Button
                  title="Sign In"
                  color="#42C561"
                  onPress={() => navigation.navigate("HomePage")} // Corrected closing parentheses
                />
              </View>

              <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <Text>Doesn’t have an account ?</Text>
                <Text style={{ color: "#42C561" }}>Create here</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  stretch: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    height: "100%",
  },

  secondSec: {
    backgroundColor: "white",
    height: 600,
    borderTopLeftRadius: 50,
    display: "flex",
    alignItems: "center",
    gap: 20,
  },

  imagesecond: {
    height: "20%",
    // borderRadius: 100,
    width: "100%",
    backgroundColor: "yellow",
  },

  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    height: "28%",
  },

  textName: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: 400,
    height: 61,
    borderWidth: 1,
  },

  input: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    width: "100%",
  },
});
export default Feed;
