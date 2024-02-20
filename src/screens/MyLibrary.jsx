import React from "react";
import {  ScrollView } from "react-native";
import PurchaseHistory from "../components/PurchaseHistory";
import { useSelector } from "react-redux";

export default function MyLibrary() {
  const history = useSelector(state => state.Purchases.purchases);
  return (
    <ScrollView style={Styles.container}>
      {history.length === 0 ? (
        <View>
          <Text style={Styles.text}>You Haven't made any purchases yet!</Text>
        </View>
      ): (
        history.map((purchase, index)=> <PurchaseHistory key={index} purchase={purchase} />)
      )}
    </ScrollView>
  );
}

const Styles = {
  container: {
    // backgroundColor: "snow",
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
