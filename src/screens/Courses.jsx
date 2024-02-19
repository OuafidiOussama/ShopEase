import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Alert,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { addCoursToCart } from "../redux/Courses";

export default function Courses(cours) {
  const { title, description, image, price, id } = cours.route.params.cours.item;
  const dispatch = useDispatch()
  const addToCart = () => {
    Alert.alert("Alert", "Successfully added to cart");
    dispatch(addCoursToCart(id))
  };
  return (
    <ScrollView>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.descContainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.price}>
        <Pressable style={styles.button} onPress={addToCart}>
          <Text style={styles.purchaceButton}>Add To Cart</Text>
        </Pressable>
        <Text style={styles.textPrice}>${price}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  description: {
    padding: 10,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,

    fontSize: 16,
  },
  descContainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  price: {
    fontSize: 16,
    backgroundColor: "#00755E",
    paddingBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPrice: {
    color: "#00FF00",
    borderColor: "red",
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  purchaceButton: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "#00755E",
  },
});
