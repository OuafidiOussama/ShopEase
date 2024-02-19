import { ScrollView } from "react-native";
import PurchaseHistory from "../components/PurchaseHistory";

export default function MyLibrary() {
  return (
    <ScrollView style={Styles.container}>
      <PurchaseHistory />
      <PurchaseHistory />
    </ScrollView>
  );
}

const Styles = {
  container: {
    backgroundColor: "snow",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexDirection: "column",
  },
};
