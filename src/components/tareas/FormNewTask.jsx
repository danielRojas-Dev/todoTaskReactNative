import React, { useState } from "react";

import { styles } from "../../assets/css/styleList";
import { View, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FormNewTask = ({ navigation, route }) => {
  const { tareas } = route.params;

  const [task, setTask] = tareas;

  const [newTask, setNewTask] = useState("");

  const insertTask = (...paramTask) => {
    const News = [...paramTask, { title: newTask, isCompleted: false }];
    setTask(News);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setNewTask(e);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          insertTask(...tareas);
          navigation.navigate("Tareas", { tareasNew: newTask });
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormNewTask;
