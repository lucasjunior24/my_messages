import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

interface Props {
    visible: boolean;
    message: string;
    phoneNumber: string;
    infoMessage?: string;
    onCancel: () => void;
    onConfirm: () => void;
}

const CustonNotification = ({
    message,
    onCancel,
    onConfirm,
    phoneNumber,
    visible,
    infoMessage,
}: Props) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styleModal.overlay}>
                <View style={styleModal.container}>
                    <Text style={styleModal.message}>
                        {message.toLocaleUpperCase()}
                    </Text>
                    <Text style={styleModal.phoneNumber}>{phoneNumber} </Text>
                    <Text style={styleModal.infoMessageTitle}>
                        {infoMessage}
                    </Text>
                    <View style={styleModal.buttonContainer}>
                        <Pressable
                            style={[
                                styleModal.button,
                                {
                                    borderRightWidth: 1,
                                    borderRightColor: colors.GRAY_200,
                                },
                            ]}
                            onPress={onCancel}
                        >
                            <Text style={styleModal.buttonText}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styleModal.button,
                                {
                                    borderRightWidth: 1,
                                    borderRightColor: colors.GRAY_200,
                                },
                            ]}
                            onPress={onConfirm}
                        >
                            <Text style={styleModal.buttonText}>Confirmar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styleModal = StyleSheet.create({
    overlay: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    container: {
        width: "70%",
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
    },
    message: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    phoneNumber: {
        fontSize: 16,
        marginTop: 25,
        marginBottom: 35,
        textAlign: "center",
        fontWeight: "bold",
    },
    infoMessageTitle: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: "center",
        color: colors.GRAY_500,
    },
    buttonContainer: {
        marginTop: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        flex: 1,
        padding: 10,
        borderTopWidth: 1,
        alignItems: "center",
        borderTopColor: colors.GRAY_200,
    },
    buttonText: {
        fontSize: 16,
        color: colors.GRAY_800,
    },
});

export default CustonNotification;
