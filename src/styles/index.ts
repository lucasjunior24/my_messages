import { StyleSheet } from "react-native";
import { colors, colors_neutrals, fontSize } from "@/src/constants/colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.WHITE,
  },
  text: {
    color: colors.GRAY_600,
    fontSize: fontSize.base,
  },
  block: {
    borderRadius: 10,
    marginHorizontal: 6,
    backgroundColor: colors.WHITE,
  },
  item: {
    gap: 10,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    marginLeft: 50,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.LIGHT_GRAY,
  },
});

export const utilsStyles = StyleSheet.create({
  centeredRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  slider: {
    height: 10,
    borderRadius: 2,
  },
  itemSeparator: {
    opacity: 0.3,
    borderColor: colors.TEXT_MUTED,
    borderWidth: StyleSheet.hairlineWidth,
  },
  emptyContentText: {
    ...defaultStyles.text,
    marginTop: 20,
    textAlign: "center",
    color: colors.TEXT_MUTED,
  },
  emptyContentImage: {
    width: 200,
    height: 200,
    opacity: 0.3,
    marginTop: 40,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.BACKGROUND,
  },
  header: {
    fontSize: 30,
    fontWeight: "700",
  },
  pillButton: {
    padding: 10,
    height: 60,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textLink: {
    color: colors_neutrals.BLUE,
    fontSize: 18,
    fontWeight: "500",
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 20,
    color: colors.GRAY_500,
  },
  buttonText: {
    color: colors_neutrals.RED,
    fontSize: 18,
    fontWeight: "500",
  },
  pillButtonText: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextSmall: {
    color: colors_neutrals.RED,
    fontSize: 16,
    fontWeight: "500",
  },
  sectionHeader: {
    margin: 20,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  block: {
    borderRadius: 16,
    marginHorizontal: 20,
    backgroundColor: colors.WHITE,
    padding: 14,
    gap: 20,
  },
});
