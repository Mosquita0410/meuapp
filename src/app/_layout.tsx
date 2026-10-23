import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
<<<<<<< HEAD
        headerShown: false, 
        contentStyle: { backgroundColor: "#1E50BA" }, 
=======
        headerShown: false, // Tira qualquer barra feia de cabeçalho do Expo
        contentStyle: { backgroundColor: "#1E50BA" }, // Cor de fundo base
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
      }}
    />
  );
}