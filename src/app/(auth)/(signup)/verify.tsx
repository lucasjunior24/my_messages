import { Text, View, Pressable, StyleSheet } from "react-native";
import { colors, colors_neutrals, fontSize } from "@/src/constants/colors";
import { defaultStyles, utilsStyles } from "@/src/styles";
import { Stack } from "expo-router";

interface Props {
    phone: string;
    signin: string;
}
export default function VerifyScreen({ phone, signin }: Props) {
    return (
        <View style={defaultStyles.container}>
            <Stack.Screen
                options={{
                    title: "Confirmar Código",
                    headerShadowVisible: false,
                }}
            />
            <Text style={utilsStyles.header}>Código de 6 digitos</Text>
            <Text>
                Código foi inviado para{""}
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "500",
                        color: colors_neutrals.RED,
                    }}
                >
                    {phone}
                </Text>
                , a menos que você já tenha uma conta
            </Text>
            <Text
                style={[
                    utilsStyles.descriptionText,
                    {
                        fontSize: 16,
                        color: colors.BLACK,
                    },
                ]}
            >
                Enviamos um SMS com o código para o número acima
            </Text>
            <Text style={[utilsStyles.descriptionText, { marginBottom: 40 }]}>
                Para concluir a verificação e validação do seu número de
                telfone, digite o código com 5 difitos.
            </Text>

            <Pressable
                style={[
                    utilsStyles.pillButton,
                    {
                        marginTop: 20,
                    },
                ]}
            >
                <Text
                    style={[
                        utilsStyles.buttonText,
                        {
                            fontSize: 14,
                        },
                    ]}
                >
                    Não recebi um código de verificação
                </Text>
            </Pressable>
        </View>
    );
}

const stylesVerify = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
