import { View, Text, ScrollView, StyleSheet, Pressable, Alert, Image, } from 'react-native'

export default function Courses() {
  const addToCart = () => {
    Alert.alert("Alert", "Successfully added to cart");
  };
  return (
    <ScrollView>
      <Text style={styles.title}>Course Title</Text>
      <Image
        source={{
          uri: "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
        }}
        style={styles.image}
      />
      <View style={styles.descContainer}>
        <Text style={styles.description}>Product Description</Text>
        <Text style={styles.description}>Product Description</Text>
        <Text style={styles.description}>Product Description</Text>
      </View>
      <View style={styles.price}>
        <Pressable style={styles.button} onPress={addToCart}>
          <Text style={styles.buttonAchat}>Add To Cart</Text>
        </Pressable>
        <Text style={styles.textPrice}>1999 $</Text>
      </View>
    </ScrollView>
  )
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
  buttonAchat: {
    color: "white",
    fontSize: 10,
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
