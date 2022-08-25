import { createDrawerNavigator } from "@react-navigation/drawer";
import ListTask from "./tareas/ListTask";
import Home from "./Home/Home";

const NavBar = createDrawerNavigator();
export function MyDrawer() {
  return (
    <NavBar.Navigator>
      <NavBar.Screen name="Home" component={Home} />
      <NavBar.Screen name="Tareas" component={ListTask} />
    </NavBar.Navigator>
  );
}
