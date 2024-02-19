import { Text, View } from "react-native";

export default function HistoryLine() {
  return (
    <View style={Styles.info}>
      <Text style={Styles.coursName}>Course Name</Text>
      <Text style={Styles.price}>199 $</Text>
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
