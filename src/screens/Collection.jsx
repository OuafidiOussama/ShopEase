import { FlatList } from "react-native";
import data from "../data/Data";
import { useEffect, useState } from "react";
import CoursCard from "../components/CoursCard";

export default function Collection() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    setCourses(data);
  }, []);

  return (
    <FlatList
      data={courses}
      keyExtractor={(cours) => cours.id}
      renderItem={(cours) => <CoursCard cours={cours} />}
    />
  );
}
