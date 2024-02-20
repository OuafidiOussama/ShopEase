import React from "react";
import { Text, View } from "react-native";

export default function HistoryLine({name, price}) {
  return (
    <View style={Styles.info}>
      <Text style={Styles.coursName}>{name}</Text>
      <Text style={Styles.price}>${price}</Text>
    </View>
  );
}

const Styles = {
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  price: {
    color: "gray",
    fontSize: 15,
    fontWeight: "bold",
  },
  coursName: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
};
