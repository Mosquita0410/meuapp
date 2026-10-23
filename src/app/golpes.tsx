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

  // Vídeos novos de segurança, exibidos na ordem numérica dos arquivos.
  const golpesItems = [
    {
      title: "Golpes",
      description: "Aprenda a reconhecer os golpes mais comuns.",
      subtitle: "Veja exemplos de golpes e saiba como se proteger.",
      videoKey: "golpes",
      icon: require("../../assets/golplink.png"),
    },
    {
      title: "Denunciar no Instagram",
      description: "Aprenda a denunciar perfis e conteúdos suspeitos.",
      subtitle: "Siga os passos para denunciar um perfil suspeito no Instagram.",
      videoKey: "denunciar_instagram_golpes",
      icon: require("../../assets/golpalien.png"),
    },
    {
      title: "O que fazer diante de um golpe",
      description: "Saiba como agir se você for vítima de um golpe.",
      subtitle: "Veja os passos recomendados para agir diante de um golpe.",
      videoKey: "o_que_fazer_diante_de_um_golpe",
      icon: require("../../assets/golpblock.png"),
    },
    {
      title: "Bloqueio de tela",
      description: "Aprenda a proteger o acesso ao seu celular.",
      subtitle: "Configure o bloqueio de tela para aumentar a segurança do aparelho.",
      videoKey: "bloqueio_tela",
      icon: require("../../assets/golpcadeado.png"),
    },
    {
      title: "Ligações suspeitas",
      description: "Aprenda a identificar e lidar com chamadas suspeitas.",
      subtitle: "Veja como reconhecer uma ligação suspeita e se proteger.",
      videoKey: "ligacoes_suspeitas",
      icon: require("../../assets/perigo.png"),
    },
  ];

  const handleOpenVideo = (item: (typeof golpesItems)[number]) => {
    router.push({
      pathname: "/player",
      params: {
        title: item.title,
        subtitle: item.subtitle,
        headerColor: "#dc2626",
        videoKey: item.videoKey,
      },
    });
  };

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
            <TouchableOpacity
              style={styles.cardContent}
              activeOpacity={0.7}
              onPress={() => handleOpenVideo(item)}
            >
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
            </TouchableOpacity>

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
    paddingHorizontal: 20,
    paddingVertical: 18,
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },
  scrollContent: {
    width: "100%",
    maxWidth: 640,
    alignSelf: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 112,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 48,
    height: 48,
  },
  textBox: {
    flex: 1,
    marginHorizontal: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  cardSub: {
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
  },
  footer: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "#b91c1c",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    borderRadius: 12,
    width: "80%",
    paddingVertical: 14,
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
