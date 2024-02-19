import { FlatList, Text } from "react-native";
import CoursCard from "../components/CoursCard";
import { useSelector } from "react-redux";

export default function Collection() {
  const courses = useSelector((state) => state.Courses.courses);
  const notSelectedCourses = courses.filter(
    (cours) => cours.selected === false
  );
  return courses.length === 0 ? (
    <Text style={styles.text}>There's no Courses on the plateform Please Come Back after! </Text>
  ) : (
    <FlatList
      data={notSelectedCourses}
      keyExtractor={(cours) => cours.id}
      renderItem={(cours) => <CoursCard cours={cours} />}
    />
  );
}

const styles = {
  text: {
    marginTop: "60%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    margin: 10,
  },
};
