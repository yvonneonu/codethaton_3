import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = () => {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation()

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <View style={{ marginTop: 10 }}>
          <Image source={require("../../assets/images/Group.png")} />
        </View>

        <Text style={{ color: "#42C561" }}> Vetrivel Ravi</Text>
        <Text> vetrivel.galaxy@gmail.com</Text>

        <View
          style={{
            flexDirection: "row",
            display: "flex",
            gap: 40,
            width: "80%",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Message")}>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 50,
                  height: 50,
                  borderRadius: 6,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../assets/images/Topic.png")} />
              </View>
            </TouchableOpacity>
            <Text>Message</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 50,
                height: 50,
                borderRadius: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../assets/images/Video.png")} />
            </View>
            <Text>Video Call</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 50,
                height: 50,
                borderRadius: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../assets/images/Phone.png")} />
            </View>
            <Text>Call</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 50,
                height: 50,
                borderRadius: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../assets/images/More.png")} />
            </View>
            <Text>More</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "80%",
            marginTop: 10,
          }}
        >
          <Text>Media Shared</Text>
          <Text>VIEW ALL</Text>
        </View>

        <View
          style={{
            width: "80%",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Image source={require("../../assets/images/Nature.png")} />
          <Image source={require("../../assets/images/image.png")} />
          <Image source={require("../../assets/images/Group33.png")} />
        </View>

        <View
          style={{
            width: "80%",
            // justifyContent: "space-between",
            flexDirection: "column",
            marginTop: 10,
            display: "flex",
            gap: 17,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                style={{ height: 20 }}
                source={require("../../assets/images/KnightShield.png")}
              />

              <Text> Privacy</Text>
            </View>
            <Image
              style={{ height: 20 }}
              source={require("../../assets/images/ChevronRight.png")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                style={{ height: 20 }}
                source={require("../../assets/images/Chat.png")}
              />

              <Text> Groups</Text>
            </View>
            <Image
              style={{ height: 20 }}
              source={require("../../assets/images/ChevronRight.png")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                style={{ height: 20 }}
                source={require("../../assets/images/Music.png")}
              />

              <Text> Media’s & Downloads</Text>
            </View>
            <Image
              style={{ height: 20 }}
              source={require("../../assets/images/ChevronRight.png")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                style={{ height: 20 }}
                source={require("../../assets/images/Person.png")}
              />

              <Text> Acoount</Text>
            </View>
            <Image
              style={{ height: 20 }}
              source={require("../../assets/images/ChevronRight.png")}
            />
          </View>
        </View>
        <Text style={{ color: "#42C561" }}>Logout</Text>
      </View>
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
  image: {
    // flex: 0.5,
    // width: "100%",
    height: "100%",
  },
  secondSec: {
    backgroundColor: "white",
    height: 550,
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
    height: "20%",
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
export default HomePage;
