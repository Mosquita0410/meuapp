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

export default function WhatsappScreen() {
  const router = useRouter();

  // Lista de opções do WhatsApp com os ícones específicos atualizados
  const whatsappItems = [
    {
      title: "Enviar mensagens",
      description: "Aprenda a enviar mensagens.",
      subtitle: "Digite sua mensagem e toque na seta verde para enviar.",
      videoKey: "enviar_mensagem_whatsapp",
      icon: require("../../assets/whamensagem.png"),
    },
    {
      title: "Adicionar contatos",
      description: "Aprenda a salvar novos contatos.",
      subtitle: "Salve o número na agenda do celular para aparecer no WhatsApp.",
      videoKey: "adicionar_contatos_whatsapp",
      icon: require("../../assets/whapessoa.png"),
    },
    {
      title: "Ligação",
      description: "Aprenda a fazer uma ligação.",
      subtitle: "Toque no ícone de telefone no topo da conversa.",
      videoKey: "ligacao_whatsapp",
      icon: require("../../assets/whaligação.png"),
    },
    {
      title: "Criar um grupo",
      description: "Aprenda a criar um grupo.",
      subtitle: "Selecione 'Novo grupo' e adicione seus amigos.",
      videoKey: "criar_grupo_whatsapp",
      icon: require("../../assets/whagrupo.png"),
    },
    {
      title: "Bloquear contatos",
      description: "Aprenda a bloquear contatos.",
      subtitle: "Bloqueie contatos que você não conhece.",
      videoKey: "bloquear_contatos_whatsapp",
      icon: require("../../assets/whabloqueio.png"),
    },
  ];

  const handleOpenVideo = (item: typeof whatsappItems[0]) => {
    router.push({
      pathname: "/player",
      params: {
        title: item.title,
        subtitle: item.subtitle,
        headerColor: "#22c55e", // Verde WhatsApp
        videoKey: item.videoKey,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#22c55e" />

      {/* Cabeçalho Verde */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Funções do WhatsApp</Text>
      </View>

      {/* Lista de Opções com ícones verdes específicos */}
      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {whatsappItems.map((item, index) => (
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

      {/* Botão Início */}
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
    backgroundColor: "#22c55e",
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
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "#16a34a",
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