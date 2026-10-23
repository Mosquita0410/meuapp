import { useRouter } from "expo-router";
<<<<<<< HEAD
=======
import React from "react";
import { speakCardText } from "../utils/speech";
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
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
<<<<<<< HEAD
      icon: require("../../assets/perigo.png"),
=======
      icon: require("../../assets/golplink.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Confirme contatos",
      description: "Verifique a identidade.",
<<<<<<< HEAD
      icon: require("../../assets/sistema.png"),
=======
      icon: require("../../assets/golpalien.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Denuncie suspeitos",
      description: "Bloqueie contatos suspeitos.",
<<<<<<< HEAD
      icon: require("../../assets/perigo.png"),
=======
      icon: require("../../assets/golpblock.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Ative a senha",
      description: "Mantenha seu celular seguro.",
<<<<<<< HEAD
      icon: require("../../assets/sistema.png"),
=======
      icon: require("../../assets/golpcadeado.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Golpes",
      description: "Veja os mais famosos golpes.",
<<<<<<< HEAD
      video: require("../../assets/images/Videos/3 Evitando golpes Instagram .mp4"),
=======
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
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

<<<<<<< HEAD
            <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
=======
            <TouchableOpacity
              style={styles.audioButton}
              activeOpacity={0.7}
              onPress={() => speakCardText(`${item.title}. ${item.description}`)}
              accessibilityRole="button"
              accessibilityLabel={`Ouvir: ${item.title}. ${item.description}`}
            >
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
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
<<<<<<< HEAD
    paddingHorizontal: 16,
    paddingVertical: 14,
=======
    paddingHorizontal: 20,
    paddingVertical: 18,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
<<<<<<< HEAD
    fontSize: 22,
=======
    fontSize: 26,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },
  scrollContent: {
<<<<<<< HEAD
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
=======
    width: "100%",
    maxWidth: 640,
    alignSelf: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    borderWidth: 1.5,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
<<<<<<< HEAD
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
    elevation: 2,
  },
  iconBox: {
    width: 40,
=======
    minHeight: 112,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
  },
  iconBox: {
    width: 56,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
<<<<<<< HEAD
    width: 32,
    height: 32,
  },
  textBox: {
    flex: 1,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 14,
=======
    width: 48,
    height: 48,
  },
  textBox: {
    flex: 1,
    marginHorizontal: 12,
  },
  cardTitle: {
    fontSize: 18,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    fontWeight: "bold",
    color: "#1E293B",
  },
  cardSub: {
<<<<<<< HEAD
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  audioButton: {
    backgroundColor: "#dc2626",
    borderRadius: 20,
    padding: 8,
  },
  audioIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
=======
    fontSize: 15,
    color: "#64748B",
    marginTop: 4,
  },
  audioButton: {
    backgroundColor: "transparent",
    padding: 4,
  },
  audioIcon: {
    width: 44,
    height: 44,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  },
  footer: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 16,
<<<<<<< HEAD
    paddingVertical: 12,
=======
    paddingVertical: 16,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "#b91c1c",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    borderRadius: 12,
<<<<<<< HEAD
    width: "70%",
    paddingVertical: 10,
=======
    width: "80%",
    paddingVertical: 14,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
<<<<<<< HEAD
    fontSize: 18,
    fontWeight: "bold",
  },
});
=======
    fontSize: 20,
    fontWeight: "bold",
  },
});
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
