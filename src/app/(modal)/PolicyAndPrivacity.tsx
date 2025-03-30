import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function PolicyAndPrivacity() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Politica e Privacidade",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Politica e Privacidade
      </Text>
    </View>
  );
}
