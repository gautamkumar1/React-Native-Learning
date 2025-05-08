import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import Logo from '@/components/Logo';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Signin() {
  const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-gray-900"
        >
            <View className="flex-1 p-6 justify-center">
                <View className="items-center mb-12">
                    <Logo />
                    <Text className="text-white text-2xl font-bold mt-4">TaskFlow</Text>
                    <Text className="text-gray-400 text-sm mt-1">Organize your day, simplify your life</Text>
                    <View className="h-px w-20 bg-blue-500 mt-2"></View>
                </View>
                
                <View className="space-y-4">
                    <Text className="text-white text-xl font-semibold mb-4">Sign in</Text>
                    
                    <View>
                        <Text className="text-gray-300 text-sm mb-2 ml-1">Email</Text>
                        <View className="bg-gray-800 rounded-xl px-4 py-3 flex-row items-center">
                            <Ionicons name="mail-outline" size={20} color="#9ca3af" />
                            <TextInput
                                className="flex-1 text-white ml-3"
                                placeholder="your@email.com"
                                placeholderTextColor="#6b7280"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>
                    
                    <View>
                        <Text className="text-gray-300 text-sm mb-2 ml-1">Password</Text>
                        <View className="bg-gray-800 rounded-xl px-4 py-3 flex-row items-center">
                            <Ionicons name="lock-closed-outline" size={20} color="#9ca3af" />
                            <TextInput
                                className="flex-1 text-white ml-3"
                                placeholder="••••••••"
                                placeholderTextColor="#6b7280"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons 
                                    name={showPassword ? "eye-off-outline" : "eye-outline"} 
                                    size={20} 
                                    color="#9ca3af" 
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity 
                            className={`bg-blue-500 py-4 rounded-xl items-center mt-4 ${isLoading ? 'opacity-70' : ''}`}
                            onPress={handleSignIn}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Text className="text-white font-bold">Signing in...</Text>
                            ) : (
                                <Text className="text-white font-bold">Sign In</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View className="flex-row justify-center mt-8">
                    <Text className="text-gray-400">Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/signup')}>
                        <Text className="text-blue-400 font-medium">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}