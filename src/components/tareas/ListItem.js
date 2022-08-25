import { View, Text } from "react-native";
import { CheckBox } from "@rneui/base";
import { styles } from "../../assets/css/styleList";

export default function ListItem({ task, setReload, setTask }) {
  const isCompleteed = (paramId) => {
    !task[paramId].isCompleted
      ? (task[paramId].isCompleted = true)
      : (task[paramId].isCompleted = false);
    setTask(task);
    console.log(task);
  };

  return (
    <View key={100}>
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
    </View>
  );
}
