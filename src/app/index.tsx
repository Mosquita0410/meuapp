import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
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

export default function App() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);
<<<<<<< HEAD
  const [currentScreen, setCurrentScreen] = useState("home");
  // Opções de telas: "home", "dicas", "sobre", "basico", "celular", "whatsapp", "instagram", "golpes"
=======
  const [currentScreen, setCurrentScreen] = useState("home"); // "home", "dicas", "sobre", "basico"
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 1. TELA DE SPLASH
  if (showSplash) {
    return (
      <LinearGradient
        colors={["#2c5282", "#3b82f6", "#2563eb"]}
        style={styles.container}
      >
        <SafeAreaView style={styles.splashContent}>
          <View style={styles.topContainer}>
            <Text style={styles.versionText}>Versão 1.0.0</Text>
          </View>
<<<<<<< HEAD
=======

>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
          <View style={styles.centerContainer}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
<<<<<<< HEAD
=======

>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
          <View style={styles.bottomContainer}>
            <Text style={styles.creditsTitle}>Criado por:</Text>
            <Text style={styles.creditsName}>Ana Cavalcante</Text>
            <Text style={styles.creditsName}>Anderson Sarmento</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }

<<<<<<< HEAD
  // 2. TELA: FUNÇÕES DO CELULAR
  if (currentScreen === "celular") {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />
        <View style={styles.header}>
          <Text style={styles.headerTitleCenter}>Funções do Celular</Text>
        </View>
        <ScrollView
          style={styles.mainContent}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[
            {
              t: "Fazer chamadas",
              d: "Aprenda a fazer ligações.",
              icone: require("../../assets/telefone.png"),
            },
            {
              t: "Adicionar contatos",
              d: "Aprenda a salvar novos contatos.",
              icone: require("../../assets/whatsapp.png"),
            },
            {
              t: "Conectar wifi",
              d: "Aprenda a conectar o wifi no celular.",
              icone: require("../../assets/sistema.png"),
            },
            {
              t: "Ajustar brilho",
              d: "Aprenda a ajustar o brilho do celular.",
              icone: require("../../assets/telefone.png"),
            },
            {
              t: "Baixar aplicativos",
              d: "Aprenda a baixar aplicativos.",
              icone: require("../../assets/sistema.png"),
            },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image
                  source={item.icone}
                  style={styles.tipIconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1, marginHorizontal: 8 }}>
                <Text style={styles.basicTitle}>{item.t}</Text>
                <Text style={styles.basicSub}>{item.d}</Text>
              </View>
              <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
                <Image
                  source={require("../../assets/som.png")}
                  style={styles.audioIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("home")}
          >
            <Text style={styles.exitButtonText}>Início</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // 3. TELA: FUNÇÕES DO WHATSAPP
  if (currentScreen === "whatsapp") {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />
        <View style={styles.header}>
          <Text style={styles.headerTitleCenter}>Funções do WhatsApp</Text>
        </View>
        <ScrollView
          style={styles.mainContent}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[
            {
              t: "Enviar mensagens",
              d: "Aprenda a enviar mensagens.",
              icone: require("../../assets/whatsapp.png"),
            },
            {
              t: "Adicionar contatos",
              d: "Aprenda a salvar novos contatos.",
              icone: require("../../assets/whatsapp.png"),
            },
            {
              t: "Ligação",
              d: "Aprenda a fazer uma ligação.",
              icone: require("../../assets/telefone.png"),
            },
            {
              t: "Criar um grupo",
              d: "Aprenda a criar um grupo.",
              icone: require("../../assets/sistema.png"),
            },
            {
              t: "Bloquear contatos",
              d: "Aprenda a bloquear contatos.",
              icone: require("../../assets/sistema.png"),
            },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image
                  source={item.icone}
                  style={styles.tipIconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1, marginHorizontal: 8 }}>
                <Text style={styles.basicTitle}>{item.t}</Text>
                <Text style={styles.basicSub}>{item.d}</Text>
              </View>
              <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
                <Image
                  source={require("../../assets/som.png")}
                  style={styles.audioIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("home")}
          >
            <Text style={styles.exitButtonText}>Início</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // 4. TELA: FUNÇÕES DO INSTAGRAM
  if (currentScreen === "instagram") {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />
        <View style={styles.header}>
          <Text style={styles.headerTitleCenter}>Funções do Instagram</Text>
        </View>
        <ScrollView
          style={styles.mainContent}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[
            {
              t: "Publicar fotos",
              d: "Aprenda a postar fotos.",
              icone: require("../../assets/instfoto.png"),
            },
            {
              t: "Ver stories",
              d: "Aprenda a ver stories.",
              icone: require("../../assets/inststory.png"),
            },
            {
              t: "Denuncie suspeitos",
              d: "Bloqueie contatos suspeitos.",
              icone: require("../../assets/instmensagem.png"),
            },
            {
              t: "Ative a senha",
              d: "Mantenha seu celular seguro.",
              icone: require("../../assets/instlike.png"),
            },
            {
              t: "Golpes",
              d: "Veja os mais famosos golpes.",
              icone: require("../../assets/instadicionar.png"),
            },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image
                  source={item.icone}
                  style={styles.tipIconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1, marginHorizontal: 8 }}>
                <Text style={styles.basicTitle}>{item.t}</Text>
                <Text style={styles.basicSub}>{item.d}</Text>
              </View>
              <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
                <Image
                  source={require("../../assets/som.png")}
                  style={styles.audioIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("home")}
          >
            <Text style={styles.exitButtonText}>Início</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // 5. TELA: COMO EVITAR GOLPES
  if (currentScreen === "golpes") {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />
        <View style={styles.header}>
          <Text style={styles.headerTitleCenter}>Como evitar golpes</Text>
        </View>
        <ScrollView
          style={styles.mainContent}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[
            {
              t: "Links suspeitos",
              d: "Links enviados por estranhos.",
              icone: require("../../assets/perigo.png"),
            },
            {
              t: "Confirme contatos",
              d: "Verifique a identidade.",
              icone: require("../../assets/sistema.png"),
            },
            {
              t: "Denuncie suspeitos",
              d: "Bloqueie contatos suspeitos.",
              icone: require("../../assets/perigo.png"),
            },
            {
              t: "Ative a senha",
              d: "Mantenha seu celular seguro.",
              icone: require("../../assets/sistema.png"),
            },
            {
              t: "Golpes",
              d: "Veja os mais famosos golpes.",
              icone: require("../../assets/perigo.png"),
            },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image
                  source={item.icone}
                  style={styles.tipIconImage}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1, marginHorizontal: 8 }}>
                <Text style={styles.basicTitle}>{item.t}</Text>
                <Text style={styles.basicSub}>{item.d}</Text>
              </View>
              <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
                <Image
                  source={require("../../assets/som.png")}
                  style={styles.audioIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("home")}
          >
            <Text style={styles.exitButtonText}>Início</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // 6. TELA DE DICAS ÚTEIS
=======
  // 2. TELA DE DICAS ÚTEIS (Com os novos ícones azuis)
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  if (currentScreen === "dicas") {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />
        <View style={styles.header}>
          <Text style={styles.headerTitleCenter}>Dicas úteis</Text>
        </View>
<<<<<<< HEAD
        <ScrollView
          style={styles.mainContent}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[
            {
              texto: "Mantenha seu celular protegido com senha",
              icone: require("../../assets/sistema.png"),
            },
            {
              texto: "Conecte-se ao Wi-Fi para economizar seus dados.",
              icone: require("../../assets/sistema.png"),
            },
            {
              texto: "Carregue seu celular regularmente.",
              icone: require("../../assets/telefone.png"),
            },
            {
              texto: "Apague aplicativos que não usa mais.",
              icone: require("../../assets/perigo.png"),
            },
            {
              texto: "Em caso de dúvidas, peça ajuda a alguém de confiança.",
              icone: require("../../assets/interrogacao.png"),
            },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image
                  source={item.icone}
                  style={styles.tipIconImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.tipText}>{item.texto}</Text>
              <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
                <Image
                  source={require("../../assets/som.png")}
                  style={styles.audioIcon}
                  resizeMode="contain"
                />
=======
        <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {[
            { texto: "Mantenha seu celular protegido com senha", icone: require("../../assets/cadeadoazul.png") },
            { texto: "Conecte-se ao Wi-Fi para economizar seus dados.", icone: require("../../assets/wifiazul.png") },
            { texto: "Carregue seu celular regularmente.", icone: require("../../assets/bateriazul.png") },
            { texto: "Apague aplicativos que não usa mais.", icone: require("../../assets/lixeiraazul.png") },
            { texto: "Em caso de dúvidas, peça ajuda a alguém de confiança.", icone: require("../../assets/interrogaçãoazul.png") },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image source={item.icone} style={styles.tipIconImage} resizeMode="contain" />
              </View>
              <Text style={styles.tipText}>{item.texto}</Text>
              <TouchableOpacity
                style={styles.audioButton}
                activeOpacity={0.7}
                onPress={() => speakCardText(item.texto)}
                accessibilityRole="button"
                accessibilityLabel={`Ouvir: ${item.texto}`}
              >
                <Image source={require("../../assets/som.png")} style={styles.audioIcon} resizeMode="contain" />
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
<<<<<<< HEAD
          <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("home")}
          >
            <Text style={styles.exitButtonText}>Início</Text>
=======
          <TouchableOpacity style={styles.exitButton} activeOpacity={0.7} onPress={() => setCurrentScreen("home")}>
            <Text style={styles.exitButtonText}>Voltar</Text>
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

<<<<<<< HEAD
  // 7. TELA SOBRE O APP
=======
  // 3. TELA SOBRE O APP
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  if (currentScreen === "sobre") {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />
        <View style={styles.header}>
          <Text style={styles.headerTitleCenter}>Sobre o app</Text>
        </View>
<<<<<<< HEAD
        <ScrollView
          style={styles.mainContent}
          contentContainerStyle={styles.aboutContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.aboutCardLogo}>
            <Image
              source={require("../../assets/logo.png")}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <Text style={styles.versionSmall}>Versão 1.0.0</Text>
          </View>
          <Text style={styles.aboutDescription}>
            Este aplicativo foi criado para ajudar você a aprender a usar seu
            celular de forma fácil e prática.
          </Text>
          <TouchableOpacity style={styles.actionButtonRow} activeOpacity={0.7}>
            <Text style={styles.actionButtonText}>⭐ Avaliar o app</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonRow} activeOpacity={0.7}>
            <Text style={styles.actionButtonText}>🔗 Compartilhe</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("home")}
          >
            <Text style={styles.exitButtonText}>Início</Text>
=======
        <ScrollView style={styles.mainContent} contentContainerStyle={styles.aboutContent} showsVerticalScrollIndicator={false}>
          <View style={styles.aboutCardLogo}>
            <Image source={require("../../assets/logoazul.png")} style={{ width: 104, height: 104 }} resizeMode="contain" />
            <Text style={styles.versionSmall}>Versão 1.0.0</Text>
          </View>
          <Text style={styles.aboutDescription}>
            Este aplicativo foi criado para ajudar você a aprender a usar seu celular de forma fácil e prática.
          </Text>
          <TouchableOpacity style={styles.actionButtonRow} activeOpacity={0.7}>
            <Image
              source={require("../../assets/estrelaazulbb.png")}
              style={styles.actionButtonIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionButtonText}>Avaliar o app</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonRow} activeOpacity={0.7}>
            <Image
              source={require("../../assets/compartilharazul.png")}
              style={styles.actionButtonIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionButtonText}>Compartilhe</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.exitButton} activeOpacity={0.7} onPress={() => setCurrentScreen("home")}>
            <Text style={styles.exitButtonText}>Voltar</Text>
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

<<<<<<< HEAD
  // 8. TELA BÁSICO
=======
  // 4. TELA BÁSICO
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  if (currentScreen === "basico") {
    return (
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />
        <View style={styles.header}>
          <Text style={styles.headerTitleCenter}>Básico</Text>
        </View>
<<<<<<< HEAD
        <ScrollView
          style={styles.mainContent}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[
            {
              t: "Links suspeitos",
              d: "Links enviados por estranhos.",
              icone: require("../../assets/perigo.png"),
            },
            {
              t: "Confirme contatos",
              d: "Verifique a identidade.",
              icone: require("../../assets/sistema.png"),
            },
            {
              t: "Denuncie suspeitos",
              d: "Bloqueie contatos suspeitos.",
              icone: require("../../assets/perigo.png"),
            },
            {
              t: "Ative a senha",
              d: "Mantenha seu celular seguro.",
              icone: require("../../assets/sistema.png"),
            },
            {
              t: "Golpes",
              d: "Se atualize dos novos golpes",
              icone: require("../../assets/perigo.png"),
            },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image
                  source={item.icone}
                  style={styles.tipIconImage}
                  resizeMode="contain"
                />
=======
        <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {[
            { t: "Clique", d: "Não clique na tela com força.", icone: require("../../assets/bascdedo.png") },
            { t: "Arraste", d: "Pressione o dedo e arrastepara passar as telas.", icone: require("../../assets/bascarrastar.png") },
            { t: "Tempo de clique", d: "Clique na tela por pouco tempo para selecionar uma função.", icone: require("../../assets/basctempo.png") },
            { t: "Botões", d: "Os botões ao lado sao de som e ligar o aparelho.", icone: require("../../assets/bascsenha.png") },
            { t: "Golpes", d: "Se atualize dos novos golpes", icone: require("../../assets/perigo.png") },
          ].map((item, index) => (
            <View key={index} style={styles.tipCard}>
              <View style={styles.tipIconBox}>
                <Image source={item.icone} style={styles.tipIconImage} resizeMode="contain" />
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
              </View>
              <View style={{ flex: 1, marginHorizontal: 8 }}>
                <Text style={styles.basicTitle}>{item.t}</Text>
                <Text style={styles.basicSub}>{item.d}</Text>
              </View>
<<<<<<< HEAD
              <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
                <Image
                  source={require("../../assets/som.png")}
                  style={styles.audioIcon}
                  resizeMode="contain"
                />
=======
              <TouchableOpacity
                style={styles.audioButton}
                activeOpacity={0.7}
                onPress={() => speakCardText(`${item.t}. ${item.d}`)}
                accessibilityRole="button"
                accessibilityLabel={`Ouvir: ${item.t}. ${item.d}`}
              >
                <Image source={require("../../assets/som.png")} style={styles.audioIcon} resizeMode="contain" />
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
<<<<<<< HEAD
          <TouchableOpacity
            style={styles.exitButton}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("home")}
          >
            <Text style={styles.exitButtonText}>Início</Text>
=======
          <TouchableOpacity style={styles.exitButton} activeOpacity={0.7} onPress={() => setCurrentScreen("home")}>
            <Text style={styles.exitButtonText}>Voltar</Text>
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

<<<<<<< HEAD
  // 9. TELA PRINCIPAL (HOME)
=======
  // 5. TELA PRINCIPAL (HOME)
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#1E50BA" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.headerLogo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>BEM VINDO (A)!</Text>
      </View>

      {/* Conteúdo rolável */}
      <ScrollView
        style={styles.mainContent}
<<<<<<< HEAD
        contentContainerStyle={styles.scrollContent}
=======
        contentContainerStyle={[styles.scrollContent, styles.homeScrollContent]}
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
        showsVerticalScrollIndicator={false}
      >
        {/* Banner de áudio */}
        <View style={styles.audioBanner}>
          <Text style={styles.audioText}>
            Olá, vamos aprender a usar seu celular de forma fácil e prática!
          </Text>

<<<<<<< HEAD
          <TouchableOpacity style={styles.audioButton} activeOpacity={0.7}>
=======
          <TouchableOpacity
            style={styles.audioButton}
            activeOpacity={0.7}
            onPress={() =>
              speakCardText(
                "Olá, vamos aprender a usar seu celular de forma fácil e prática!",
              )
            }
            accessibilityRole="button"
            accessibilityLabel="Ouvir mensagem de boas-vindas"
          >
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
            <Image
              source={require("../../assets/som.png")}
              style={styles.audioIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Cartões principais */}
<<<<<<< HEAD
=======
        <View style={styles.homeActions}>
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.cardLarge}
            activeOpacity={0.7}
            onPress={() => router.push("/celular")}
          >
            <Image
              source={require("../../assets/telefone.png")}
              style={styles.cardLargeIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardLargeText}>Funções do Celular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardLarge}
            activeOpacity={0.7}
            onPress={() => router.push("/whatsapp")}
          >
            <Image
              source={require("../../assets/whatsapp.png")}
              style={styles.cardLargeIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardLargeText}>Funções do WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardLarge}
            activeOpacity={0.7}
            onPress={() => router.push("/instagram")}
          >
            <Image
              source={require("../../assets/instagram.png")}
              style={styles.cardLargeIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardLargeText}>Funções do Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardLarge}
            activeOpacity={0.7}
            onPress={() => router.push("/golpes")}
          >
            <Image
              source={require("../../assets/perigo.png")}
              style={styles.cardLargeIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardLargeText}>Como evitar golpes</Text>
          </TouchableOpacity>
        </View>

        {/* Opções secundárias */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.cardMedium}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("dicas")}
          >
            <Image
              source={require("../../assets/estrela.png")}
              style={styles.cardMediumIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardMediumText}>Dicas Úteis</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardMedium}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("sobre")}
          >
            <Image
              source={require("../../assets/interrogaçãoazul.png")}
              style={styles.cardMediumIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardMediumText}>Sobre o App</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Básico */}
        <View style={styles.centerRow}>
          <TouchableOpacity
            style={styles.cardSmall}
            activeOpacity={0.7}
            onPress={() => setCurrentScreen("basico")}
          >
            <Image
              source={require("../../assets/sistema.png")}
              style={styles.cardSmallIcon}
              resizeMode="contain"
            />
            <Text style={styles.cardSmallText}>Básico</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.exitButton} activeOpacity={0.7}>
          <Text style={styles.exitButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  splashContent: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 24,
  },
  topContainer: { alignItems: "center", marginTop: 10 },
  versionText: { color: "#FFFFFF", fontSize: 14, opacity: 0.9 },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: { width: 220, height: 220 },
  bottomContainer: { alignItems: "center", marginBottom: 12 },
  creditsTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  creditsName: { color: "#FFFFFF", fontSize: 14, lineHeight: 20 },

  safeArea: { flex: 1, backgroundColor: "#E5E9F0" },
=======
  },

  /* Tela de carregamento */
  splashContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 24,
  },

  topContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  versionText: {
    color: "#FFFFFF",
    fontSize: 14,
    opacity: 0.9,
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 220,
    height: 220,
  },

  bottomContainer: {
    alignItems: "center",
    marginBottom: 12,
  },

  creditsTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },

  creditsName: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
  },

  /* Estrutura principal */
  safeArea: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },

>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  header: {
    backgroundColor: "#1E50BA",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
<<<<<<< HEAD
  },
  headerLogo: { width: 40, height: 40, marginRight: 12 },
=======
  },

  headerLogo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },

>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    flexShrink: 1,
  },
<<<<<<< HEAD
=======

>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  headerTitleCenter: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },

<<<<<<< HEAD
  mainContent: { flex: 1, backgroundColor: "#E5E9F0" },
  scrollContent: {
=======
  mainContent: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },

  scrollContent: {
    width: "100%",
    maxWidth: 640,
    alignSelf: "center",
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 16,
    justifyContent: "flex-start",
  },
<<<<<<< HEAD
  aboutContent: { paddingHorizontal: 16, paddingTop: 20, alignItems: "center" },

=======

  homeScrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 8,
  },

  homeActions: {
    flexGrow: 1,
    justifyContent: "center",
  },

  aboutContent: {
    width: "100%",
    maxWidth: 640,
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: "center",
  },

  /* Banner de boas-vindas */
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  audioBanner: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
<<<<<<< HEAD
    paddingVertical: 10,
    paddingHorizontal: 12,
=======
    minHeight: 88,
    paddingVertical: 16,
    paddingHorizontal: 18,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    marginBottom: 12,
  },

  audioText: {
    flex: 1,
    color: "#1E293B",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  audioButton: {
<<<<<<< HEAD
    backgroundColor: "#1E50BA",
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
  },
  audioIcon: { width: 22, height: 22, tintColor: "#FFFFFF" },

=======
    backgroundColor: "transparent",
    marginLeft: 12,
  },

  audioIcon: {
    width: 42,
    height: 42,
  },

  /* Cartões principais */
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardLarge: {
    width: "48.5%",
<<<<<<< HEAD
=======
    aspectRatio: 1,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#333333",
<<<<<<< HEAD
    paddingVertical: 12,
    paddingHorizontal: 6,
=======
    paddingVertical: 18,
    paddingHorizontal: 8,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    elevation: 2,
  },
<<<<<<< HEAD
  cardLargeIcon: { width: 46, height: 46, marginBottom: 6 },
  cardLargeText: {
    fontSize: 12,
=======

  cardLargeIcon: {
    width: 72,
    height: 72,
    marginBottom: 10,
  },

  cardLargeText: {
    fontSize: 15,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
  },

<<<<<<< HEAD
=======
  /* Dicas e informações */
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },

  cardMedium: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#333333",
<<<<<<< HEAD
    paddingVertical: 10,
    paddingHorizontal: 5,
=======
    minHeight: 68,
    paddingVertical: 14,
    paddingHorizontal: 8,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
<<<<<<< HEAD
  cardMediumIcon: { width: 22, height: 22, marginRight: 5 },
=======

  cardMediumIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },

>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  cardMediumText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1E293B",
    flexShrink: 1,
  },

<<<<<<< HEAD
  centerRow: { alignItems: "center", marginBottom: 4 },
  cardSmall: {
    width: "48.5%",
=======
  /* Botão Básico */
  centerRow: {
    alignItems: "center",
    marginBottom: 4,
  },

  cardSmall: {
    width: "48.5%",
    minHeight: 68,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#333333",
<<<<<<< HEAD
    paddingVertical: 10,
    paddingHorizontal: 8,
=======
    paddingVertical: 14,
    paddingHorizontal: 10,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
<<<<<<< HEAD
  cardSmallIcon: { width: 22, height: 22, marginRight: 6 },
  cardSmallText: { fontSize: 12, fontWeight: "bold", color: "#1E293B" },

  tipCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 2,
  },
  tipIconBox: { width: 32, alignItems: "center", justifyContent: "center" },
  tipIconImage: { width: 24, height: 24 },
  tipText: {
    flex: 1,
    fontSize: 12,
=======

  cardSmallIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },

  cardSmallText: {
    fontSize: 14,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
    fontWeight: "bold",
    color: "#1E293B",
    marginHorizontal: 8,
  },

<<<<<<< HEAD
  aboutCardLogo: { alignItems: "center", marginBottom: 16, marginTop: 10 },
  versionSmall: { fontSize: 12, color: "#555", marginTop: 4 },
  aboutDescription: {
    fontSize: 15,
    textAlign: "center",
    color: "#1E293B",
    fontWeight: "bold",
    marginBottom: 24,
    paddingHorizontal: 10,
    lineHeight: 22,
=======
  /* Estilos específicos das novas telas */
  tipCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 104,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
    elevation: 2,
  },

  tipIconBox: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  tipIconImage: {
    width: 40,
    height: 40,
  },

  tipText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    marginHorizontal: 12,
  },

  aboutCardLogo: {
    alignItems: "center",
    marginBottom: 22,
    marginTop: 16,
  },

  versionSmall: {
    fontSize: 15,
    color: "#555",
    marginTop: 6,
  },

  aboutDescription: {
    fontSize: 18,
    textAlign: "center",
    color: "#1E293B",
    fontWeight: "bold",
    marginBottom: 28,
    paddingHorizontal: 14,
    lineHeight: 27,
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  },

  actionButtonRow: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#333333",
<<<<<<< HEAD
    borderRadius: 14,
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },
  actionButtonText: { fontSize: 15, fontWeight: "bold", color: "#1E293B" },

  basicTitle: { fontSize: 13, fontWeight: "bold", color: "#1E293B" },
  basicSub: { fontSize: 11, color: "#555", marginTop: 2 },

=======
    borderRadius: 18,
    width: "100%",
    minHeight: 72,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    elevation: 2,
  },

  actionButtonIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  actionButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },

  basicTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },

  basicSub: {
    fontSize: 15,
    color: "#555",
    marginTop: 4,
  },

  /* Rodapé seguro */
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
  footer: {
    backgroundColor: "#1E50BA",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: Platform.OS === "android" ? 8 : 10,
    alignItems: "center",
  },

  exitButton: {
    backgroundColor: "#2A5CD6",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    borderRadius: 12,
    width: "70%",
    paddingVertical: 8,
    alignItems: "center",
  },
<<<<<<< HEAD
  exitButtonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
});
=======

  exitButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
>>>>>>> 8635fe4e825a597cca91d49703871f8c6fa79875
