import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

import { colors } from "@/styles/colors";

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
        tabBarActiveTintColor: colors.green[600],
        tabBarInactiveTintColor: colors.gray[900],
        tabBarPressColor: colors.green[650],
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.green[600],
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
