import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import {
  Button,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  TextInput,
} from "react-native";
import { chatData } from "../../assets/chatData"; // Update the correct path

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#42C561",
          height: "100%",
          top: -10,
          width: "100%",
        }}
      ></View>

      <View
        style={{
          marginTop: 40,
          backgroundColor: "white",

          borderTopLeftRadius: 40,
          height: "100%",
        }}
      >
        <ScrollView>
          {chatData.map((item) => (
            <View
              key={item.id}
              style={[
                styles.item,
                item.name === "Mercy" ? styles.rightItem : styles.leftItem,
              ]}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={item.img} style={{ width: 40, height: 40 }} />
                <View>
                  <View
                    style={[
                      styles.messageContainer,
                      item.name === "Mercy"
                        ? styles.rightMessage
                        : styles.leftMessage,
                    ]}
                  >
                    <Text style={{ width: 220 }}>{item.message}</Text>
                  </View>

                  <View
                    style={[
                      item.name === "Mercy"
                        ? styles.rightTextMessage
                        : styles.leftTextMessage,
                    ]}
                  >
                    <Text style={styles.title}>{item.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            padding: 20,
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "80%",
              backgroundColor: "#D9D9D9",
              padding: 15,
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Image source={require("../../assets/images/Happy.png")} />
              <TextInput
                style={{ width: "70%" }}
                placeholder="Type here..."
                multiline={true}
              />
            </View>
            <Image source={require("../../assets/images/Microphone.png")} />
          </View>

          <Image source={require("../../assets/images/EmailSend.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginTop: 10,
    justifyContent: "center",
    marginBottom: 20,
  },
  item: {
    // padding: 20,
    flexDirection: "row",
    alignItems: "center",
    // gap: 10,
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
    // paddingBottom: 40,
  },
  rightItem: {
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  leftItem: {
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 12,
    marginTop: 5,
  },

  messageContainer: {
    padding: 10,
    borderRadius: 20,
  },
  rightMessage: {
    marginLeft: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    backgroundColor: "#f1f1f1", // Left-aligned message background color
  },
  leftMessage: {
    marginRight: 20,

    backgroundColor: "#42C561", // Right-aligned message background color
    marginTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  leftTextMessage: {
    alignSelf: "flex-end",
  },
  rightTextMessage: {
    marginLeft: 20,
  },
});
export default MessageScreen;
