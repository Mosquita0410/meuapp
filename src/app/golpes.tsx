import { useRouter } from "expo-router";
import React from "react";
import { speakCardText } from "../utils/speech";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GolpesScreen() {
  const router = useRouter();

  // Lista dos tópicos da seção Como Evitar Golpes
  const golpesItems = [
    {
      title: "Links suspeitos",
      description: "Links enviados por estranhos.",
      icon: require("../../assets/golplink.png"),
    },
    {
      title: "Confirme contatos",
      description: "Verifique a identidade.",
      icon: require("../../assets/golpalien.png"),
    },
    {
      title: "Denuncie suspeitos",
      description: "Bloqueie contatos suspeitos.",
      icon: require("../../assets/golpblock.png"),
    },
    {
      title: "Ative a senha",
      description: "Mantenha seu celular seguro.",
      icon: require("../../assets/golpcadeado.png"),
    },
    {
      title: "Golpes",
      description: "Veja os mais famosos golpes.",
      icon: require("../../assets/perigo.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#dc2626" />

      {/* Cabeçalho Vermelho (Identidade de Alerta / Como evitar golpes) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Como evitar golpes</Text>
      </View>

      {/* Lista de Opções */}
      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {golpesItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconBox}>
              <Image
                source={item.icon}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.description}</Text>
            </View>

            <TouchableOpacity
              style={styles.audioButton}
              activeOpacity={0.7}
              onPress={() => speakCardText(`${item.title}. ${item.description}`)}
              accessibilityRole="button"
              accessibilityLabel={`Ouvir: ${item.title}. ${item.description}`}
            >
              <Image
                source={require("../../assets/som.png")}
                style={styles.audioIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Botão de Voltar para a Home */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Início</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },
  header: {
    backgroundColor: "#dc2626", // Vermelho Alerta
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
    elevation: 2,
  },
  iconBox: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 32,
    height: 32,
  },
  textBox: {
    flex: 1,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
  },
  cardSub: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  audioButton: {
    backgroundColor: "transparent",
  },
  audioIcon: {
    width: 34,
    height: 34,
  },
  footer: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "#b91c1c",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    borderRadius: 12,
    width: "70%",
    paddingVertical: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});