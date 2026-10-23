import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Tira qualquer barra feia de cabeçalho do Expo
        contentStyle: { backgroundColor: "#1E50BA" }, // Cor de fundo base
      }}
    />
  );
}