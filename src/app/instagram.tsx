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

export default function InstagramScreen() {
  const router = useRouter();

  // Lista dos tópicos do Instagram com suas chaves de vídeo correspondentes
  const instagramItems = [
    {
      title: "Publicar fotos",
      description: "Aprenda a postar fotos.",
      subtitle: "Toque no ícone de mais (+) para escolher e postar sua foto.",
      videoKey: "postando_foto_instagram",
<<<<<<< HEAD
=======
      icon: require("../../assets/instfoto.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Ver stories",
      description: "Aprenda a ver stories.",
<<<<<<< HEAD
      subtitle:
        "Toque nas bolinhas no topo da tela para ver os stories dos amigos.",
      videoKey: "ver_story_instagram",
=======
      subtitle: "Toque nas bolinhas no topo da tela para ver os stories dos amigos.",
      videoKey: "ver_story_instagram",
      icon: require("../../assets/inststory.png"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    },
    {
      title: "Enviar mensagens",
      description: "Aprenda a enviar mensagens.",
<<<<<<< HEAD
      subtitle:
        "Toque no ícone de avião de papel no canto superior para conversar.",
      videoKey: "mensagem_instagram",
    },
    {
      title: "Denuncie suspeitos",
      description: "Bloqueie contatos suspeitos.",
      subtitle: "Acesse o perfil da pessoa e toque em denunciar ou bloquear.",
      videoKey: "denunciar_instagram",
    },
    {
      title: "Golpes no Instagram",
      description: "Veja como evitar golpes.",
      subtitle: "Desconfie de ofertas boas demais e perfis falsos.",
      videoKey: "evitando_golpes_instagram",
    },
  ];

  const handleOpenVideo = (item: (typeof instagramItems)[0]) => {
=======
      subtitle: "Toque no ícone de avião de papel no canto superior para conversar.",
      videoKey: "mensagem_instagram",
      icon: require("../../assets/instmensagem.png"),
    },
    {
      title: "Seguir colegas",
      description: "Aprenda a seguir colegas.",
      subtitle: "Acesse o perfil da pessoa e toque em seguir.",
      videoKey: "seguir_colegas_instagram",
      icon: require("../../assets/instadicionat.png"),
    },
    {
      title: "Curtir publicações",
      description: "Aprenda a curtir publicações.",
      subtitle: "Toque no coração para curtir uma publicação.",
      videoKey: "curtir_publicacoes_instagram",
      icon: require("../../assets/instlike.png"),
    },
  ];

  const handleOpenVideo = (item: typeof instagramItems[0]) => {
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
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
<<<<<<< HEAD
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handleOpenVideo(item)}
          >
            <View style={styles.iconBox}>
              <Image
                source={require("../../assets/instagram.png")}
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
=======
            </TouchableOpacity>
          </View>
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
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
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: "#9333ea",
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
    backgroundColor: "#9333ea",
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
    backgroundColor: "#7e22ce",
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
