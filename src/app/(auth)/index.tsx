import { Text, View, StyleSheet, Pressable, Image } from "react-native";

import { useHeaderHeight } from "@react-navigation/elements";
import { useRoute } from "@react-navigation/native";

import { Link } from "expo-router";
import { colors, colors_neutrals } from "@/src/constants/colors";
import { assets } from "@/src/assets";

export default function Index() {
  const headerHeight = useHeaderHeight();
  const route = useRoute();
  return (
    <View style={[stylesHome.container, { marginTop: headerHeight + 40 }]}>
      <Image style={stylesHome.image} source={assets.images.splash} />
      <Text style={stylesHome.title}>Bem vindo ao Mensagiro</Text>

      <View style={stylesHome.infoContainer}>
        <Text style={stylesHome.titleInfo}>
          Familiares, amigos e outras pessoas que usam nosso serviço podem ter
          carregado seu número no Martin's. Nesse caso, eles poderão ver você em
          seus contatos após você se inscrever.
        </Text>
        <Link href={"/#"} asChild style={stylesHome.buttonLearnMore}>
          <Text style={stylesHome.titleLearnMore}>Saiba mais</Text>
        </Link>
      </View>

      <View style={stylesHome.infoContainer}>
        <Text style={[stylesHome.titleInfo, { color: colors.BLACK }]}>
          Leia nossa{" "}
          <Link
            style={stylesHome.buttonLearnMore}
            href={"/(modal)/PolicyAndPrivacity"}
            asChild
          >
            <Text style={{ color: colors_neutrals.RED }}>
              Politica e Privacidade{" "}
            </Text>
          </Link>
          toque em{" "}
          <Text style={{ fontWeight: "bold" }}>Concordar e continuar </Text>
          para aceitar os{" "}
          <Link
            style={stylesHome.buttonLearnMore}
            href={"/(modal)/TermrsAndService"}
            asChild
          >
            <Text style={{ color: colors_neutrals.RED }}>
              termos e serviços.{" "}
            </Text>
          </Link>
        </Text>
      </View>

      <Pressable
        style={{
          padding: 10,
          marginTop: 60,
          borderWidth: 1,
          borderRadius: 50,
          borderColor: colors_neutrals.RED,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            color: colors_neutrals.RED,
          }}
        >
          Concordar e Continuar
        </Text>
      </Pressable>

      <View
        style={{
          marginTop: "auto",
          marginBottom: 20,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: colors.GRAY_400,
          }}
        >
          Desenvolvedor{" "}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors_neutrals.RED,
          }}
        >
          Lucas de Souza
        </Text>
      </View>
    </View>
  );
}

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 320,
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    color: colors.INK_200,
    fontWeight: "bold",
    fontSize: 24,
  },
  infoContainer: {
    width: "80%",
    marginTop: 20,
  },
  titleInfo: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    color: colors.INK_200,
  },
  buttonLearnMore: {
    right: 8,
    bottom: -15,
    position: "absolute",
  },
  titleLearnMore: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "light",
    color: colors_neutrals.RED,
    cursor: "pointers",
  },
});
