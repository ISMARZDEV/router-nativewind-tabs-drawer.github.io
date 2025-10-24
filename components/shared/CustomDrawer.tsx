import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
// import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Text } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-pirmary font-work-black text-3xl">IM</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
