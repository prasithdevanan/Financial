import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainScreen() {
  return (
    <SafeAreaView edges={['top', 'bottom']} className="flex-1 bg-white px-6">
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold text-black">
          Welcome to the Main Screen!
        </Text>
        <Text className="text-gray-500 text-base mt-2">
          You have successfully signed in.
        </Text>
        <Text>
          This is the main content of the app. You can navigate to different sections from here.
        </Text>
      </View>
    </SafeAreaView>
  )
}