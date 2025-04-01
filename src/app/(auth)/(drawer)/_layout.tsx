import { Stack } from "expo-router";

const DrawerLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="signup"
        options={{
          title: "Seu número de telefone",
        }}
      />
    </Stack>
  );
};
export default DrawerLayout;
