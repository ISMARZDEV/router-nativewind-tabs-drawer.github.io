import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerBackVisible: true,
        animation: "slide_from_right",
        contentStyle: {
          backgroundColor: "white",
        },
        headerTitleAlign: "center",
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
          title: "perfil",
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
