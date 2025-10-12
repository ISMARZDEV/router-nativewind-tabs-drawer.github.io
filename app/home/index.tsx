import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        {/* OPCIÓN 1 */}
        <CustomButton
          className="mb-4"
          color="primary"
          onPress={() => router.push("./products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          variant="text-only"
          color="primary"
          onPress={() => router.push("./products")}
        >
          Productos
        </CustomButton>

        {/* OPCIÓN 2 */}
        {/* <Link href="/products" asChild className="mb-3">
          <CustomButton
            color="primary"
            onPress={() => router.push("./products")}
          >
            Productos
          </CustomButton>
        </Link> */}

        {/* <Link className="mb-5" href="/products">
          Productos {""}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil {""}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes {""}
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
