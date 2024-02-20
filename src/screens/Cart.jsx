import React from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {addToHistory} from "../redux/Purchases"
import { removeAllCourses, removeCours } from "../redux/Courses";

export default function Cart() {
  const dispatch = useDispatch()
  const courses = useSelector(state=>state.Courses.courses)
  const SelectedCourses = courses.filter(cours => cours.selected === true);
  const totalPrice = SelectedCourses
  .reduce((acc, cours) => acc + cours.price, 0)
  .toFixed(2);
  const names = SelectedCourses.map((cours) => cours.title);
  const prices = SelectedCourses.map((cours) => cours.price);


  handlePaiment = () => {
    Alert.alert("Alert", "Paiment Successfull!");
    const date =moment().format('L,LTS');
    const newPurchase = {totalPrice,date,names,prices}
    dispatch(addToHistory(newPurchase));
    dispatch(removeAllCourses());
  };

  handleDelete = (id) => {
    Alert.alert("Alert", "Cours Removed!")
    dispatch(removeCours(id));
  };
  return (
    <ScrollView>
      {SelectedCourses.length === 0 ? (
        <View>
          <Text style={Styles.textVide}>Empty Cart</Text>
        </View>
      ) : (
        SelectedCourses.map((cours, index) => (
          <View key={index}>
            <View style={Styles.cours}>
              <Text style={Styles.text}>{cours.title}</Text>
              <View style={Styles.action}>
                <Text style={Styles.text}>${cours.price}</Text>
                <MaterialIcons
                  name="delete-sweep"
                  size={24}
                  color="red"
                  onPress={() => handleDelete(cours.id)}
                />
              </View>
            </View>
          </View>
        ))
      )}
    
      <View style={Styles.paye}>
        <Text style={Styles.total}>
          Total : <Text style={Styles.price}>${totalPrice}</Text>
        </Text>
        {SelectedCourses.length === 0 ? (
        <Pressable disabled style={Styles.buttonDisabled} >
          <Text style={Styles.buttonText}>Pay</Text>
        </Pressable>
        ) : (
          <Pressable  style={Styles.button} onPress={handlePaiment}>
            <Text style={Styles.buttonText}>Pay</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}

const Styles = {
  cours: {
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
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  paye: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#ED7F10",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "green",
  },
  textVide: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  buttonDisabled: {
    backgroundColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
};
