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

export default function WhatsappScreen() {
  const router = useRouter();

<<<<<<< HEAD
=======
  // Lista de opções do WhatsApp com os ícones específicos atualizados
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  const whatsappItems = [
    {
      title: "Enviar mensagens",
      description: "Aprenda a enviar mensagens.",
      subtitle: "Digite sua mensagem e toque na seta verde para enviar.",
      videoKey: "enviar_mensagem_whatsapp",
<<<<<<< HEAD
=======
      icon: require("../../assets/whamensagem.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Adicionar contatos",
      description: "Aprenda a salvar novos contatos.",
<<<<<<< HEAD
      subtitle:
        "Salve o número na agenda do celular para aparecer no WhatsApp.",
      videoKey: "adicionar_contatos_whatsapp",
=======
      subtitle: "Salve o número na agenda do celular para aparecer no WhatsApp.",
      videoKey: "adicionar_contatos_whatsapp",
      icon: require("../../assets/whapessoa.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Ligação",
      description: "Aprenda a fazer uma ligação.",
      subtitle: "Toque no ícone de telefone no topo da conversa.",
      videoKey: "ligacao_whatsapp",
<<<<<<< HEAD
=======
      icon: require("../../assets/whaligação.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Criar um grupo",
      description: "Aprenda a criar um grupo.",
      subtitle: "Selecione 'Novo grupo' e adicione seus amigos.",
      videoKey: "criar_grupo_whatsapp",
<<<<<<< HEAD
=======
      icon: require("../../assets/whagrupo.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Bloquear contatos",
      description: "Aprenda a bloquear contatos.",
      subtitle: "Bloqueie contatos que você não conhece.",
      videoKey: "bloquear_contatos_whatsapp",
<<<<<<< HEAD
    },
  ];

  const handleOpenVideo = (item: (typeof whatsappItems)[0]) => {
=======
      icon: require("../../assets/whabloqueio.png"),
    },
  ];

  const handleOpenVideo = (item: typeof whatsappItems[0]) => {
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    router.push({
      pathname: "/player",
      params: {
        title: item.title,
        subtitle: item.subtitle,
<<<<<<< HEAD
        headerColor: "#22c55e",
=======
        headerColor: "#22c55e", // Verde WhatsApp
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
        videoKey: item.videoKey,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#22c55e" />

<<<<<<< HEAD
=======
      {/* Cabeçalho Verde */}
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Funções do WhatsApp</Text>
      </View>

<<<<<<< HEAD
=======
      {/* Lista de Opções com ícones verdes específicos */}
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {whatsappItems.map((item, index) => (
<<<<<<< HEAD
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handleOpenVideo(item)}
          >
            <View style={styles.iconBox}>
              <Image
                source={require("../../assets/whatsapp.png")}
=======
          <View key={index} style={styles.card}>
            <TouchableOpacity
              style={styles.cardContent}
              activeOpacity={0.7}
              onPress={() => handleOpenVideo(item)}
            >
            <View style={styles.iconBox}>
              <Image
                source={item.icon}
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.description}</Text>
            </View>
<<<<<<< HEAD

            <View style={styles.audioButton}>
=======
            </TouchableOpacity>

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
<<<<<<< HEAD
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

=======
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Botão Início */}
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
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
<<<<<<< HEAD
  safeArea: { flex: 1, backgroundColor: "#E5E9F0" },
  header: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  headerTitle: { color: "#FFFFFF", fontSize: 22, fontWeight: "bold" },
  mainContent: { flex: 1, backgroundColor: "#E5E9F0" },
  scrollContent: { padding: 16 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
=======
  safeArea: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },
  header: {
    backgroundColor: "#22c55e",
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
  iconBox: { width: 40, alignItems: "center", justifyContent: "center" },
  iconImage: { width: 32, height: 32 },
  textBox: { flex: 1, marginHorizontal: 10 },
  cardTitle: { fontSize: 14, fontWeight: "bold", color: "#1E293B" },
  cardSub: { fontSize: 12, color: "#64748B", marginTop: 2 },
  audioButton: { backgroundColor: "#22c55e", borderRadius: 20, padding: 8 },
  audioIcon: { width: 20, height: 20, tintColor: "#FFFFFF" },
  footer: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 12,
=======
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
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 16,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "#16a34a",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    borderRadius: 12,
<<<<<<< HEAD
    width: "70%",
    paddingVertical: 10,
    alignItems: "center",
  },
  backButtonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
});
=======
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
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
