import { useState } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "../services/auth";
import Input from "../components/Input";
import { setToken } from "../features/authSlice/authSlice";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    const credentials = {
      email,
      password,
    };
    const res: any = await login({ credentials });

    if (res.error) {
      ToastAndroid.show(res.error.data.message, ToastAndroid.SHORT);
    }

    dispatch(setToken(res?.data?.accessToken));
  };

  return (
    <View className="flex-1 justify-center bg-neutral-900">
      <SafeAreaView className="mx-5 mt-8 mb-5">
        <Text className="text-3xl text-white font-bold">Login</Text>
      </SafeAreaView>
      <View className="mx-5 space-y-5">
        <View>
          <Input placeholder="Email Adress" setAction={setEmail} />
        </View>
        <View>
          <Input
            placeholder="Password"
            setAction={setPassword}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#EAB308] mx-5 mt-6 px-2 py-2.5 rounded-md"
        onPress={onLogin}
      >
        <Text className="text-center text-white text-base font-semibold">
          Login
        </Text>
      </TouchableOpacity>
      <View className="border-b border-b-neutral-500/30 mt-12 mx-6">
        <Text className="absolute -bottom-2.5 right-32 text-base bg-neutral-900 px-4 text-neutral-400">
          or login with
        </Text>
      </View>
    </View>
  );
}
