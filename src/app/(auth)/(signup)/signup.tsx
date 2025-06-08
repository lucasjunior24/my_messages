import { assets } from "@/src/assets";
import CustonNotification from "@/src/components/CustomNotification";
import { colors, colors_neutrals } from "@/src/constants/colors";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    TextInput,
} from "react-native";

const SignUpScreen = () => {
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [notification, setNotification] = useState(false);

    async function onSignIn() {
        if (phoneNumber.length === 0 || country.length === 0) {
            return;
        }
        setNotification(true);
    }

    function handleOnCancel() {
        setNotification(false);
    }
    function handleOnConfirm() {
        setNotification(false);

        const fullPhoneNumber = `${country}${phoneNumber}`;
        router.push({
            pathname: "/(auth)/(signup)/verify",
            params: {
                phone: fullPhoneNumber,
                signin: "true",
            },
        });
    }
    return (
        <View style={signupStyles.container}>
            <CustonNotification
                message=""
                onCancel={handleOnCancel}
                onConfirm={handleOnConfirm}
                phoneNumber=""
                visible={true}
                infoMessage=""
            />
            <View style={signupStyles.content}>
                <Text style={signupStyles.contentInfoTitle}>
                    Mensageiro precisará verificar seu numero de telefone,
                    atenção (você pode ser taxado pela sua operadora.)
                </Text>

                <View style={signupStyles.contentFormTelefone}>
                    <Pressable style={signupStyles.contentFormButton}>
                        <Text style={signupStyles.contentTitleCountry}>
                            Brail
                        </Text>
                        <Image
                            source={assets.icons.arrow_right_two}
                            style={signupStyles.contentImage}
                        />
                    </Pressable>

                    <View
                        style={{
                            height: 2,
                            width: "100%",
                            marginVertical: 5,
                            backgroundColor: colors.WHITE,
                        }}
                    />
                    <View style={[signupStyles.contentFormButton, {}]}>
                        <TextInput
                            style={{
                                width: 40,
                                maxWidth: 40,
                                paddingVertical: 5,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            autoCorrect={false}
                            placeholder="+55"
                            returnKeyType="next"
                            keyboardType="numeric"
                            value={country}
                            onChangeText={setCountry}
                            placeholderTextColor={colors.GRAY_500}
                        />

                        <TextInput
                            style={signupStyles.contentFormInput}
                            autoCorrect={false}
                            returnKeyType="send"
                            autoCapitalize="none"
                            keyboardType="phone-pad"
                            placeholder="Número de telefone"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            placeholderTextColor={colors.GRAY_500}
                        />
                    </View>
                </View>

                <Text style={signupStyles.information}>
                    Voce deve ter{" "}
                    <Text
                        style={{
                            fontWeight: "500",
                            color: colors_neutrals.RED,
                        }}
                    >
                        Pelo menos 16 anos de idade{" "}
                    </Text>
                    para criar uma conta. saiba mas sobre nossa
                    <Link href={"/#"} asChild>
                        <Text style={signupStyles.titleCompany}>
                            {" "}
                            Companhia Mensageiro
                        </Text>
                    </Link>
                </Text>
            </View>
        </View>
    );
};
export default SignUpScreen;

const signupStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.WHITE,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    contentInfoTitle: {
        fontSize: 14,
        marginBottom: 10,
        fontWeight: "400",
        textAlign: "center",
        marginHorizontal: 15,
        color: colors.GRAY_500,
    },
    contentFormTelefone: {
        height: 90,
        width: "100%",
        borderRadius: 10,
        marginVertical: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
        backgroundColor: colors.GRAY_100,
    },

    contentFormButton: {
        height: 35,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    contentTitleCountry: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
    },
    contentImage: {
        width: 20,
        height: 20,
        tintColor: colors.GRAY_500,
    },
    contentFormInput: {
        flex: 1,
        height: 30,
        padding: 5,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.GRAY_100,
    },
    information: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: "400",
        color: colors.BLACK,
        textAlign: "center",
        marginHorizontal: 10,
    },
    titleCompany: {
        fontSize: 12,
        fontWeight: "500",
        color: colors_neutrals.RED,
    },
});
