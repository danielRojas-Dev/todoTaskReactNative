import { createDrawerNavigator } from "@react-navigation/drawer";

const NavBar = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavBar.Navigator>
      <NavBar.Screen name="Feed" />
      <NavBar.Screen name="Article" />
    </NavBar.Navigator>
  );
}
