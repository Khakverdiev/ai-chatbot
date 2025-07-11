import { useTheme } from "@/components/ThemeProvider";
import { Slot } from "expo-router";
import React from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IntroLayout = () => {
  const { theme, isDark } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Slot />
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
    </SafeAreaView>
  );
};

export default IntroLayout;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: Platform.OS === "ios" ? 0 : 24,
  },
});
