import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {

    // Intentar usar el router de Expo primero
    if (canGoBack && router.canGoBack()) {
      router.back();
      return;
    }
    
    // Fallback: usar navigation
    // if (canGoBack && navigation.canGoBack()) {
    //   navigation.goBack();
    //   return;
    // }
    
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerBackVisible: false,
        animation: "slide_from_right",
        contentStyle: {
          backgroundColor: "white",
        },
        headerTitleAlign: "center",
        headerLeft: ({ tintColor, canGoBack }) => (
          <TouchableOpacity
            onPress={() => onHeaderLeftClick(canGoBack)}
            activeOpacity={1}
            className="ml-4 self-center mr-4" 
          >
            <Ionicons
              name={canGoBack ? 'arrow-back-outline' : "grid-outline"}
              size={20}
              color={tintColor}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default StackLayout;
