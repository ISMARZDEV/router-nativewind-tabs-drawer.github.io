
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='mt-10'>
        <Text className="text-2xl font-bold mb-4">
          ¡Hola Mundo!
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;