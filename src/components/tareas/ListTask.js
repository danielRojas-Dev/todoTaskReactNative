import { View } from "react-native";
import { useEffect, useState } from "react";
import { Button, Card } from "@rneui/themed";
import { styles } from "../../assets/css/styleList";
import ListItem from "./ListItem";
import tasks from "../../data/task.json";

export default function ListTask() {
  const [task, setTask] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setTask(tasks);
    setReload(false);
  }, [reload]);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title style={styles.title}>Mis Tareas</Card.Title>
        <Card.Divider />
        <ListItem task={task} setTask={setTask} setReload={setReload} />
        <Button title="Nueva Tarea" />
      </Card>
    </View>
  );
}
