import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function signIn() {
    return (
        <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-white px-2">
            <View>
                <Text className="text-xl text-center font-medium">SignIn</Text>

                <View>
                    <Text className="text-lg">Email</Text>  
                    <TextInput 
                    placeholder="Email" 
                    KeyboardType="email-address"
                    className="text-black border border-gray-300 rounded-lg px-2"/>
                </View>
            </View>
        </SafeAreaView>
    )
}