import { Stack } from "expo-router";

const SignUpLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="signup"
                options={{
                    title: "Seu número de telefone",
                }}
            />
            <Stack.Screen
                name="verify"
                options={{
                    title: "Confirme seu codigo",
                }}
            />
        </Stack>
    );
};
export default SignUpLayout;
