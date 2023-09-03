import { View, Text, TextInput } from "react-native";

interface InputProps {
  placeholder: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  secureTextEntry?: boolean;
}

export default function Input({
  placeholder,
  setAction,
  secureTextEntry,
}: InputProps) {
  return (
    <View className="bg-neutral-800 px-2.5 py-2 rounded-lg">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"grey"}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => setAction(text)}
        className="pl-2 text-white text-base tracking-wider"
      />
    </View>
  );
}
