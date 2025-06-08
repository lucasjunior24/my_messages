import { Stack } from "expo-router";

const SignUpLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="signup"
                options={{
                    title: "Seu número de telefone",
                    headerBackVisible: false,
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name="verify"
                options={{
                    title: "Confirme seu codigo",
                    headerBackVisible: false,
                    headerTitleAlign: "center",
                }}
            />
        </Stack>
    );
};
export default SignUpLayout;
