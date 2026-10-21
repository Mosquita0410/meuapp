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

export default function InstagramScreen() {
  const router = useRouter();

  // Lista dos tópicos do Instagram com suas chaves de vídeo correspondentes
  const instagramItems = [
    {
      title: "Publicar fotos",
      description: "Aprenda a postar fotos.",
      subtitle: "Toque no ícone de mais (+) para escolher e postar sua foto.",
      videoKey: "postando_foto_instagram",
      icon: require("../../assets/instfoto.png"),
    },
    {
      title: "Ver stories",
      description: "Aprenda a ver stories.",
      subtitle: "Toque nas bolinhas no topo da tela para ver os stories dos amigos.",
      videoKey: "ver_story_instagram",
      icon: require("../../assets/inststory.png"),
    },
    {
      title: "Enviar mensagens",
      description: "Aprenda a enviar mensagens.",
      subtitle: "Toque no ícone de avião de papel no canto superior para conversar.",
      videoKey: "mensagem_instagram",
      icon: require("../../assets/instmensagem.png"),
    },
    {
      title: "Denuncie suspeitos",
      description: "Bloqueie contatos suspeitos.",
      subtitle: "Acesse o perfil da pessoa e toque em denunciar ou bloquear.",
      videoKey: "denunciar_instagram",
      icon: require("../../assets/instadicionat.png"),
    },
    {
      title: "Golpes no Instagram",
      description: "Veja como evitar golpes.",
      subtitle: "Desconfie de ofertas boas demais e perfis falsos.",
      videoKey: "evitando_golpes_instagram",
      icon: require("../../assets/instlike.png"),
    },
  ];

  const handleOpenVideo = (item: typeof instagramItems[0]) => {
    router.push({
      pathname: "/player",
      params: {
        title: item.title,
        subtitle: item.subtitle,
        headerColor: "#9333ea", // Cor roxa do Instagram
        videoKey: item.videoKey,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#9333ea" />

      {/* Cabeçalho Roxo/Rosa (Identidade do Instagram) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Funções do Instagram</Text>
      </View>

      {/* Lista de Opções */}
      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {instagramItems.map((item, index) => (
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
    backgroundColor: "#9333ea", // Roxo do Instagram
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
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: "#9333ea",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "#7e22ce",
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