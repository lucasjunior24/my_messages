import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors, colors_neutrals } from "./colors";

const stackScreen: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerTransparent: true,
  headerShadowVisible: false,
  headerTintColor: colors.BLACK,
  headerBlurEffect: "prominent",
  headerTitleStyle: {
    color: colors_neutrals.RED,
  },
  headerLargeStyle: {
    backgroundColor: colors.BACKGROUND,
  },
  headerLargeTitleStyle: {
    color: colors_neutrals.RED,
  },
};
export default stackScreen;
