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
  TouchableHighlight,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Hello Youtube",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to....",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Friends Gang",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to....",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Coders World",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to....",
  },
  {
    id: "58694a0f-3da1-h656-bd96-145571e29d72",
    title: "School Friends",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to....",
  },
  {
    id: "58694a0f-654f-471f-bd96-145571e29d72",
    title: "Non-Stop Chat",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to....",
  },
  {
    id: "55894a0f-654f-471f-bd96-145571e29d72",
    title: "Kings of Kings",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to....",
  },
  {
    id: "55894a0f-65df-476t-bd96-145571e29d72",
    title: "Chatter Box",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to....",
  },
];

const Item = ({ title, description }) => (
  <View style={styles.item}>
    <View>
      <Image source={require("../../assets/images/Group5.png")} />
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
      }}
    >
      <View>
        <View>
          <Text
            style={{
              color: "#555555",
              fontWeight: 700,
            }}
          >
            {title}
          </Text>
        </View>
        <Text style={{ width: 220 }}>{description}</Text>
      </View>
      <Text style={styles.title}>27 min</Text>
    </View>
  </View>
);

const Message = () => {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation()

  const handleSafeAreaViewPress = () => {
    // Add your logic here for handling the press on SafeAreaView
    console.log("SafeAreaView pressed!");
    navigation.navigate("MessageScreen");
  };

  return (
    <TouchableHighlight onPress={handleSafeAreaViewPress}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: 700 }}>Messages</Text>
          <Image source={require("../../assets/images/Comments.png")} />
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} description={item.description} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </TouchableHighlight>
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
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 12,
    color: "#42C561",
  },
});
export default Message;
