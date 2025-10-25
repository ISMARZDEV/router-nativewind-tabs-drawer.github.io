import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  
  console.log({ params });

  const { id } = useLocalSearchParams();

  const product = products.find(p => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Producto'
    })
  })

  if ( !product) {
    return <Redirect href="/"/>
  }

  return (
    <View className="px-5 mt-2">
        <Text className="font-work-black text-2xl">{product.title}</Text>
        <Text className="mt-2">{product.description}</Text>
        <Text className="font-work-black mt-4">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
