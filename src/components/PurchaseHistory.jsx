import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import HistoryLine from "./HistoryLine";

export default function PurchaseHistory() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <View style={Styles.info}>
        <Text style={Styles.text}>199 $</Text>
        <Text style={Styles.text}>05 07 2023 07:18</Text>
      </View>
      {isShowing ? (
        <Ionicons
          style={Styles.plus}
          name="add-circle"
          size={24}
          color="black"
          onPress={() => setIsShowing(false)}
        />
      ) : (
        <>
          <AntDesign
            style={Styles.plus}
            name="minuscircle"
            size={24}
            color="black"
            onPress={() => setIsShowing(true)}
          />
          <View style={Styles.line}></View>
          <HistoryLine />
          <HistoryLine />
          <HistoryLine />
        </>
      )}
    </>
  );
}

const Styles = {
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plus: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginTop: 10,
  },
  lineSmall: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginTop: 10,
  },
};
