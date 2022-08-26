import { View, Text } from "react-native";
import { CheckBox } from "@rneui/base";
import { styles } from "../../assets/css/styleList";

export default function ListItem({ tareita, task, id, setReload, setTask }) {
  // console.log(tareasNew);

  const isCompleteed = (paramId) => {
    !task[paramId].isCompleted
      ? (task[paramId].isCompleted = true)
      : (task[paramId].isCompleted = false);
    // !tareasNew ? setTask(task) : setTask(tareasNew);
    console.log(task);
  };

  return (
    <View key={id}>
      <View>
        <Text style={styles.task}>{tareita.title}</Text>
      </View>
      <View style={styles.check}>
        <CheckBox
          checked={tareita.isCompleted}
          checkedColor="#0F0"
          onPress={() => {
            setTask(task);
            setReload(true);
            isCompleteed(id);
          }}
          size={35}
          uncheckedColor="#F00"
        />
      </View>
    </View>
  );
}
