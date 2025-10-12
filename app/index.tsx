import { Redirect } from "expo-router";

const App = () => {
  return <Redirect href="/home" />;

  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5 ">
  //       <Text className="text-2xl font-bold mb-4 font-work-black text-primary">
  //         ¡Hola Mundo!
  //       </Text>
  //       <Text className="text-4xl font-bold mb-4 font-work-medium text-secorndary-100">
  //         ¡Hola Mundo!
  //       </Text>
  //       <Text className="text-5xl font-bold mb-4 font-work-light text-tertiary">
  //         ¡Hola Mundo!
  //       </Text>

  //       <Link href='/products'>Productos</Link>

  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
