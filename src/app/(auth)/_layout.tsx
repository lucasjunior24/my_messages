import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="(signup)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(drawer)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};
export default AuthLayout;
