import { useRouter } from "expo-router";
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
    },
    {
      title: "Ver stories",
      description: "Aprenda a ver stories.",
      subtitle:
        "Toque nas bolinhas no topo da tela para ver os stories dos amigos.",
      videoKey: "ver_story_instagram",
    },
    {
      title: "Enviar mensagens",
      description: "Aprenda a enviar mensagens.",
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
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => handleOpenVideo(item)}
          >
            <View style={styles.iconBox}>
              <Image
                source={require("../../assets/instagram.png")}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.textBox}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.description}</Text>
            </View>

            <View style={styles.audioButton}>
              <Image
                source={require("../../assets/som.png")}
                style={styles.audioIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
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
    backgroundColor: "#9333ea",
    borderRadius: 20,
    padding: 8,
  },
  audioIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
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
