import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Card } from "@rneui/themed";
import { styles } from "../../assets/css/styleList";
import ListItem from "./ListItem";

import tasks from "../../data/task.json";

export default function ListTask({ navigation, route }) {
  const [task, setTask] = useState([]);
  const [reload, setReload] = useState(false);

  // const { tareasNew } = route.params;

  console.log(route);

  useEffect(() => {
    setTask(tasks);
    setReload(false);
  }, [reload]);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title style={styles.title}>Mis Tareas</Card.Title>
        <Card.Divider />
        {task.map((tareita, i) => {
          return (
            <ListItem
              tareita={tareita}
              task={task}
              key={i}
              id={i}
              setTask={setTask}
              setReload={setReload}
              tareasNew={tareasNew}
            />
          );
        })}

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Nueva Tarea", {
              tareas: [task, setTask],
            })
          }
        >
          <Text>Nueva Tarea</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}
