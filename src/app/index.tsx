import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { colors, colors_neutrals, fontSize } from "../constants/colors";
import { useHeaderHeight } from "@react-navigation/elements";
import { useRoute } from "@react-navigation/native";
import { assets } from "../assets";
import { Link } from "expo-router";

export default function Index() {
  const headerHeight = useHeaderHeight();
  const route = useRoute();
  return (
    <View style={[stylesHome.container, { marginTop: headerHeight + 90 }]}>
      <Image style={stylesHome.image} source={assets.images.splash} />
      <Text style={stylesHome.title}>Bem vindo ao Mensagiro</Text>

      <View style={stylesHome.infoContainer}>
        <Text style={stylesHome.titleInfo}>
          Familiares, amigos e outras pessoas que usam nosso serviço podem ter
          carregado seu número no Martin's. Nesse caso, eles poderão ver você em
          seus contatos após você se inscrever.
        </Text>
        <Link href={"/#"} asChild style={stylesHome.buttonLearnMore}></Link>
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
    bottom: 0,
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
