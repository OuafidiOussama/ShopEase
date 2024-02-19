import { Alert, Pressable, ScrollView, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

export default function Cart() {
  handlePaiment = () =>{
    Alert.alert("Alert", "Paid")
  }
  return (
    <ScrollView>
      <View>
        <View style={Styles.cours}>
          <Text style={Styles.text}>Cours Name</Text>
          <View style={Styles.action}>
            <Text style={Styles.text}>199 $</Text>
            <MaterialIcons
              name="delete-sweep"
              size={24}
              color="red"
            />
          </View>
        </View>
      </View>
    <View style={Styles.paye}>
      <Text style={Styles.total}>
        Total : <Text style={Styles.price}>199 $</Text>
      </Text>
      <Pressable  style={Styles.button} onPress={handlePaiment}>
        <Text style={Styles.buttonText}>Payer</Text>
      </Pressable>
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
