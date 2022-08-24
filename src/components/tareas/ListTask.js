import { useState, useEffect } from "react";
import { CheckBox } from "@rneui/base";
import { View, Text } from "react-native";
import { Button, Card } from "@rneui/themed";
import tasks from "./src/data/task.json";
import { styles } from "../../assets/css/styleList";

export default function App() {
  const [task, setTask] = useState([]);
  const [reload, setReload] = useState(false);

  const isCompleteed = (paramId) => {
    !task[paramId].isCompleted
      ? (task[paramId].isCompleted = true)
      : (task[paramId].isCompleted = false);
    setTask(task);

    console.log(task);
  };

  useEffect(() => {
    setTask(tasks);
    setReload(false);
  }, [reload]);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title style={styles.title}>Mis Tareas</Card.Title>
        <Card.Divider />
        {task.map((tarea, i) => {
          return (
            <>
              <View key={i}>
                <View>
                  <Text style={styles.task}>{tarea.title}</Text>
                </View>
                <View style={styles.check}>
                  <CheckBox
                    checked={task[i].isCompleted}
                    checkedColor="#0F0"
                    onPress={() => {
                      setTask(task);
                      setReload(true);
                      isCompleteed(i);
                    }}
                    size={35}
                    uncheckedColor="#F00"
                  />
                </View>
              </View>
            </>
          );
        })}

        <Button title="Nueva Tarea" />
      </Card>
    </View>
  );
}
