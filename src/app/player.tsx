import { useLocalSearchParams, useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
<<<<<<< HEAD
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

function LocalVideoPlayer({ source }: { source: number }) {
  const player = useVideoPlayer(source, (videoPlayer) => {
    videoPlayer.loop = true;
    videoPlayer.play();
  });

  return (
    <VideoView
      player={player}
      style={styles.videoPlayer}
      nativeControls
      contentFit="contain"
    />
  );
}

=======
import React, { useEffect, useState } from "react";
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

>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
export default function PlayerScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    title?: string;
    subtitle?: string;
    headerColor?: string;
    videoKey?: string;
  }>();

<<<<<<< HEAD
  const videoSources: Record<string, number> = {
    postando_foto_instagram: require("../../assets/images/Videos/1_Postando foto Instagram .mp4"),
    denunciar_instagram: require("../../assets/images/Videos/2 Denunciar Instagram .mp4"),
    evitando_golpes_instagram: require("../../assets/images/Videos/3 Evitando golpes Instagram .mp4"),
    mensagem_instagram: require("../../assets/images/Videos/4 Mensagem Instagram .mp4"),
    ver_story_instagram: require("../../assets/images/Videos/5 Ver story Instagram .mp4"),
    adicionar_contatos_whatsapp: require("../../assets/images/Videos/6 Adicionar contatos whatsapp .mp4"),
    bloquear_contatos_whatsapp: require("../../assets/images/Videos/7 Bloquear contatos whatsapp .mp4"),
    criar_grupo_whatsapp: require("../../assets/images/Videos/8 Criar grupo whatsapp .mp4"),
    enviar_mensagem_whatsapp: require("../../assets/images/Videos/9 Enviar mensagem whatsapp .mp4"),
    ligacao_whatsapp: require("../../assets/images/Videos/10 Ligação pelo whatsapp .mp4"),
    ajustar_brilho: require("../../assets/images/Videos/Ajustar brilho .mp4"),
    instalado_aplicativos: require("../../assets/images/Videos/instalado aplicativos .mp4"),
    ligacao_celular: require("../../assets/images/Videos/Ligação pelo celular .mp4"),
    salvar_contato: require("../../assets/images/Videos/Salvar contato .mp4"),
    wifi: require("../../assets/images/Videos/wi-fi.mp4"),
=======
  // Mapeamento de todos os vídeos da sua pasta assets/Videos/
  const videoSources: Record<string, any> = {
    postando_foto_instagram: require("../../assets/Videos/1_Postando foto Instagram .mp4"),
    seguir_colegas_instagram: require("../../assets/Videos/3 Seguindo perfil Instagram.mp4"),
    curtir_publicacoes_instagram: require("../../assets/Videos/2 Curtir e compartilhar Instagram_.mp4"),
    mensagem_instagram: require("../../assets/Videos/4 Mensagem Instagram .mp4"),
    ver_story_instagram: require("../../assets/Videos/5 Ver story Instagram .mp4"),
    adicionar_contatos_whatsapp: require("../../assets/Videos/6 Adicionar contatos whatsapp .mp4"),
    bloquear_contatos_whatsapp: require("../../assets/Videos/7 Bloquear contatos whatsapp .mp4"),
    criar_grupo_whatsapp: require("../../assets/Videos/8 Criar grupo whatsapp .mp4"),
    enviar_mensagem_whatsapp: require("../../assets/Videos/9 Enviar mensagem whatsapp .mp4"),
    ligacao_whatsapp: require("../../assets/Videos/10 Ligação pelo whatsapp .mp4"),
    ajustar_brilho: require("../../assets/Videos/Ajustar brilho .mp4"),
    instalado_aplicativos: require("../../assets/Videos/instalado aplicativos .mp4"),
    ligacao_celular: require("../../assets/Videos/Ligação pelo celular .mp4"),
    salvar_contato: require("../../assets/Videos/Salvar contato .mp4"),
    wifi: require("../../assets/Videos/wi-fi.mp4"),
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  };

  const title = params.title || "Passo a Passo";
  const subtitle = params.subtitle || "Confira as instruções no vídeo acima.";
  const headerColor = params.headerColor || "#1E50BA";
  const videoSource = params.videoKey ? videoSources[params.videoKey] : null;
<<<<<<< HEAD
=======
  const player = useVideoPlayer(
    videoSource ?? videoSources.postando_foto_instagram,
    (videoPlayer) => {
      videoPlayer.loop = true;
      if (videoSource) {
        videoPlayer.play();
      }
    },
  );
  const [videoAspectRatio, setVideoAspectRatio] = useState(9 / 16);

  useEffect(() => {
    const updateAspectRatio = (videoTrack: typeof player.videoTrack) => {
      const { width, height } = videoTrack?.size ?? { width: 0, height: 0 };
      if (width > 0 && height > 0) {
        setVideoAspectRatio(width / height);
      }
    };

    updateAspectRatio(player.videoTrack);
    const subscription = player.addListener("videoTrackChange", ({ videoTrack }) => {
      updateAspectRatio(videoTrack);
    });

    return () => subscription.remove();
  }, [player]);
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor={headerColor} />

      {/* Topo com o Título do Passo */}
      <View style={[styles.header, { backgroundColor: headerColor }]}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <ScrollView
        style={styles.mainContent}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Card do Player */}
        <View style={styles.videoCardContainer}>
<<<<<<< HEAD
          <View
            style={[styles.videoHeaderBar, { backgroundColor: headerColor }]}
          >
=======
          <View style={[styles.videoHeaderBar, { backgroundColor: headerColor }]}>
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
            <Text style={styles.videoHeaderBarText}>Passo a passo</Text>
          </View>

          {/* Moldura / Player do Vídeo */}
<<<<<<< HEAD
          <View style={styles.phoneFrame}>
            {videoSource ? (
              <LocalVideoPlayer source={videoSource} />
=======
          <View style={[styles.phoneFrame, { aspectRatio: videoAspectRatio }]}>
            {videoSource ? (
              <VideoView
                player={player}
                style={styles.videoPlayer}
                nativeControls
                contentFit="contain"
                playsInline
              />
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
            ) : (
              <Text style={styles.noVideoText}>Vídeo em breve!</Text>
            )}
          </View>
        </View>

        {/* Banner com a Dica e o Botão de Áudio */}
        <View style={styles.instructionBanner}>
          <TouchableOpacity style={styles.smallAudioBtn} activeOpacity={0.7}>
            <Image
<<<<<<< HEAD
              source={require("../../assets/estrela.png")}
=======
              source={require("../../assets/estrelaazulbb.png")}
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.instructionText}>{subtitle}</Text>
<<<<<<< HEAD
          <TouchableOpacity style={styles.audioButtonSmall} activeOpacity={0.7}>
=======
          <TouchableOpacity
            style={styles.audioButtonSmall}
            activeOpacity={0.7}
            onPress={() => speakCardText(`${title}. ${subtitle}`)}
            accessibilityRole="button"
            accessibilityLabel={`Ouvir: ${title}. ${subtitle}`}
          >
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
            <Image
              source={require("../../assets/som.png")}
              style={styles.audioIconSmall}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Rodapé - Voltar */}
      <View style={[styles.footer, { backgroundColor: headerColor }]}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
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
<<<<<<< HEAD
=======
    width: "100%",
    maxWidth: 640,
    alignSelf: "center",
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    padding: 16,
    alignItems: "center",
  },
  videoCardContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#333333",
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3,
  },
  videoHeaderBar: {
    paddingVertical: 10,
    alignItems: "center",
  },
  videoHeaderBarText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneFrame: {
    width: "100%",
<<<<<<< HEAD
    height: 380,
=======
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  videoPlayer: {
    width: "100%",
    height: "100%",
  },
  noVideoText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  instructionBanner: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  smallAudioBtn: {
    padding: 4,
  },
  instructionText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    marginHorizontal: 8,
  },
  audioButtonSmall: {
<<<<<<< HEAD
    backgroundColor: "#1E50BA",
    borderRadius: 16,
    padding: 8,
  },
  audioIconSmall: {
    width: 18,
    height: 18,
    tintColor: "#FFFFFF",
=======
    backgroundColor: "transparent",
  },
  audioIconSmall: {
    width: 34,
    height: 34,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 16 : 10,
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
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
