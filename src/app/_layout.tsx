import { Stack, SplashScreen, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function InitialLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    });

    const router = useRouter();

    useEffect(() => {
        if (error) {
            throw error;
        }
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        />
    );
}

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <InitialLayout />
        </GestureHandlerRootView>
    );
}
