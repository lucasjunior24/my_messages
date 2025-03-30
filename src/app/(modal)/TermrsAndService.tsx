import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function TermrsAndService() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Termos e Serviço",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Termos e Serviço</Text>
    </View>
  );
}
