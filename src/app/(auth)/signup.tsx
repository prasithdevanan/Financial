
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-white px-6">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingVertical: 30 }}
            >

                {/* Header */}
                <View className="mb-8">
                    <Text className="text-3xl font-bold text-black">
                        Create Account
                    </Text>
                    <Text className="text-gray-500 text-base mt-2">
                        Sign up to get started with your account.
                    </Text>
                </View>

                {/* Full Name */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                    </Text>

                    <TextInput
                        placeholder="Enter your full name"
                        placeholderTextColor="#9CA3AF"
                        autoCapitalize="words"
                        textContentType="name"
                        className="text-black border border-gray-300 rounded-xl px-4 py-4 text-base"
                    />
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
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-gray-700 mb-2">
                        Password
                    </Text>

                    <View className="flex-row items-center border border-gray-300 rounded-xl px-4">
                        <TextInput
                            placeholder="Create a password"
                            placeholderTextColor="#9CA3AF"
                            secureTextEntry={!showPassword}
                            autoComplete="new-password"
                            textContentType="newPassword"
                            className="flex-1 text-black py-4 text-base"
                        />

                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons
                                name={showPassword ? "eye-off-outline" : "eye-outline"}
                                size={22}
                                color="#6B7280"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Confirm Password */}
                <View className="mb-6">
                    <Text className="text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password
                    </Text>

                    <View className="flex-row items-center border border-gray-300 rounded-xl px-4">
                        <TextInput
                            placeholder="Confirm your password"
                            placeholderTextColor="#9CA3AF"
                            secureTextEntry={!showConfirmPassword}
                            autoComplete="new-password"
                            className="flex-1 text-black py-4 text-base"
                        />

                        <TouchableOpacity
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            <Ionicons
                                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                                size={22}
                                color="#6B7280"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Sign Up Button */}
                <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center">
                    <Text className="text-white font-bold text-base">
                        Create Account
                    </Text>
                </TouchableOpacity>

                {/* Divider */}
                <View className="flex-row items-center my-7">
                    <View className="flex-1 h-[1px] bg-gray-200" />
                    <Text className="mx-4 text-gray-400">OR</Text>
                    <View className="flex-1 h-[1px] bg-gray-200" />
                </View>

                {/* Google Sign Up */}
                <TouchableOpacity
                    className="flex-row items-center justify-center border border-gray-300 rounded-xl py-4"
                    onPress={() => {
                        // Integrate Google Sign-In here
                    }}
                >
                    <Ionicons name="logo-google" size={20} color="#DB4437" />
                    <Text className="text-gray-800 font-semibold ml-3">
                        Sign up with Google
                    </Text>
                </TouchableOpacity>

                {/* Sign In */}
                <View className="flex-row justify-center mt-8">
                    <Text className="text-gray-500">
                        Already have an account?{" "}
                    </Text>

                    <Pressable onPress={() => router.push("/(auth)/signIn")}>
                        <Text className="text-blue-600 font-bold">
                            Sign In
                        </Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;
