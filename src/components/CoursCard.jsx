import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function CoursCard({cours}) {
    const {item} = cours
    console.log(item);
  return (
    <Pressable style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
      <View style={styles.actions}>
        <Entypo name="eye" size={35} color="#1E90FF" />
        <Ionicons name="bag" size={35} color="#1E90FF"/>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
      padding: 10,
      alignItems: "center",
  },
  image: {
      width: "100%",
      height: 300,
      resizeMode: "cover",
  },

  text: {
      color: "green",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
  },
  price: {
      color: "black",
      fontSize: 15,
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 10,

  },
  actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
      marginTop: 20,
  },
  });
