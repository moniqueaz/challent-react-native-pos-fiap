import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "#3F9D61",
        tabBarInactiveTintColor: "#171725",
        tabBarPressColor: "#3f9d6124",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#3F9D61",
          width: 50,
          marginHorizontal: 40,
          height: 3,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "Vendas" }} />
      <MaterialTopTabs.Screen
        name="producao/index"
        options={{ title: "Produção" }}
      />
      <MaterialTopTabs.Screen name="metas/index" options={{ title: "Metas" }} />
    </MaterialTopTabs>
  );
};

export default Layout;
