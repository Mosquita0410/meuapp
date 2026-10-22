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

export default function CelularScreen() {
  const router = useRouter();

  // Lista dos tópicos de Funções do Celular com as chaves correspondentes para o player
  const celularItems = [
    {
      title: "Fazer chamadas",
      description: "Aprenda a fazer ligações.",
      subtitle: "Abra o aplicativo de telefone e digite o número desejado.",
      videoKey: "ligacao_celular",
      icon: require("../../assets/celtelefone.png"),
    },
    {
      title: "Adicionar contatos",
      description: "Aprenda a salvar novos contatos.",
      subtitle: "Digite o número e salve com o nome do seu contato.",
      videoKey: "salvar_contato",
      icon: require("../../assets/celpessoa.png"),
    },
    {
      title: "Conectar wifi",
      description: "Aprenda a conectar o wifi no celular.",
      subtitle: "Acesse as configurações e selecione a rede sem fio disponível.",
      videoKey: "wifi",
      icon: require("../../assets/celwifi.png"),
    },
    {
      title: "Ajustar brilho",
      description: "Aprenda a ajustar o brilho do celular.",
      subtitle: "Arraste a barra para cima ou para baixo para clarear ou escurecer a tela.",
      videoKey: "ajustar_brilho",
      icon: require("../../assets/celsol.png"),
    },
    {
      title: "Baixar aplicativos",
      description: "Aprenda a baixar aplicativos.",
      subtitle: "Procure o aplicativo na loja e toque em instalar.",
      videoKey: "instalado_aplicativos",
      icon: require("../../assets/celbaixar.png"),
    },
  ];

  const handleOpenVideo = (item: typeof celularItems[0]) => {
    router.push({
      pathname: "/player",
      params: {
        title: item.title,
        subtitle: item.subtitle,
        headerColor: "#1E50BA", // Azul padrão
        videoKey: item.videoKey,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />

      {/* Cabeçalho Azul (Identidade Funções do Celular) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Funções do Celular</Text>
      </View>

      {/* Lista de Opções */}
      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {celularItems.map((item, index) => (
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
    backgroundColor: "#1E50BA", // Azul Padrão
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
    backgroundColor: "#1E50BA",
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "#2A5CD6",
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