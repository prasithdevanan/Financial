
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
    return (
        <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-white px-6">

            <View className="flex-1 justify-center">

                {/* Header */}
                <View className="mb-10">
                    <Text className="text-3xl font-bold text-black">
                        Welcome Back!
                    </Text>
                    <Text className="text-gray-500 text-base mt-2">
                        Sign in to continue to your account.
                    </Text>
                </View>

                {/* Email */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                    </Text>

                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                        textContentType="emailAddress"
                        className="text-black border border-gray-300 rounded-xl px-4 py-4 text-base"
                    />
                </View>

                {/* Password */}
                <View className="mb-3">
                    <Text className="text-sm font-semibold text-gray-700 mb-2">
                        Password
                    </Text>

                    <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry
                        autoComplete="current-password"
                        textContentType="password"
                        className="text-black border border-gray-300 rounded-xl px-4 py-4 text-base"
                    />
                </View>

                {/* Forgot Password */}
                <TouchableOpacity className="items-end mb-7">
                    <Text className="text-blue-600 font-semibold">
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                {/* Sign In Button */}
                <TouchableOpacity
                    className="bg-blue-600 py-4 rounded-xl items-center"
                >
                    <Text className="text-white font-bold text-base">
                        Sign In
                    </Text>
                </TouchableOpacity>

                {/* Divider */}
                <View className="flex-row items-center my-7">
                    <View className="flex-1 h-[1px] bg-gray-200" />
                    <Text className="mx-4 text-gray-400">OR</Text>
                    <View className="flex-1 h-[1px] bg-gray-200" />
                </View>

                {/* Google Login */}
                <TouchableOpacity
                    className="flex-row items-center justify-center border border-gray-300 rounded-xl py-4"
                    onPress={() => {
                        // Integrate Google Sign-In here
                    }}
                >
                    <Ionicons name="logo-google" size={20} color="#DB4437" />
                    <Text className="text-gray-800 font-semibold ml-3">
                        Continue with Google
                    </Text>
                </TouchableOpacity>

                {/* Register */}
                <View className="flex-row justify-center mt-8">
                    <Text className="text-gray-500">
                        Don't have an account?{" "}
                    </Text>

                    <Pressable onPress={() => router.push("/(auth)/signup")}>
                        <Text className="text-blue-600 font-bold">
                            Sign Up
                        </Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default SignInScreen;
