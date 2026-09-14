import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* Topo Azul */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.headerLogo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>BEM VINDO (A)!</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Banner de Áudio */}
        <View style={styles.audioBanner}>
          <Text style={styles.audioText}>
            Olá, vamos aprender a usar seu celular de forma fácil e prática!
          </Text>
          <TouchableOpacity style={styles.audioButton}>
            <Image
              source={require("../../assets/som.png")}
              style={styles.audioIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Grid Principal (2 Colunas) */}
        <View style={styles.grid}>
          {/* Card Telefone */}
          <TouchableOpacity style={styles.cardLarge}>
            <Image
              source={require("../../assets/telefone.png")}
              style={styles.cardLargeIcon}
            />
            <Text style={styles.cardLargeText}>Funções do Celular</Text>
          </TouchableOpacity>

          {/* Card WhatsApp */}
          <TouchableOpacity style={styles.cardLarge}>
            <Image
              source={require("../../assets/whatsapp.png")}
              style={styles.cardLargeIcon}
            />
            <Text style={styles.cardLargeText}>Funções do WhatsApp</Text>
          </TouchableOpacity>

          {/* Card Instagram */}
          <TouchableOpacity style={styles.cardLarge}>
            <Image
              source={require("../../assets/instagram.png")}
              style={styles.cardLargeIcon}
            />
            <Text style={styles.cardLargeText}>Funções do Instagram</Text>
          </TouchableOpacity>

          {/* Card Golpes */}
          <TouchableOpacity style={styles.cardLarge}>
            <Image
              source={require("../../assets/perigo.png")}
              style={styles.cardLargeIcon}
            />
            <Text style={styles.cardLargeText}>Como evitar golpes</Text>
          </TouchableOpacity>
        </View>

        {/* Linha de Botões Médios */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.cardMedium}>
            <Image
              source={require("../../assets/estrela.png")}
              style={styles.cardMediumIcon}
            />
            <Text style={styles.cardMediumText}>Dicas Úteis</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMedium}>
            <Image
              source={require("../../assets/interrogacao.png")}
              style={styles.cardMediumIcon}
            />
            <Text style={styles.cardMediumText}>Sobre o App</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Básico (Centralizado) */}
        <View style={styles.centerRow}>
          <TouchableOpacity style={styles.cardSmall}>
            <Image
              source={require("../../assets/sistema.png")}
              style={styles.cardSmallIcon}
            />
            <Text style={styles.cardSmallText}>Básico</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Rodapé - Botão Sair */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.exitButton}>
          <Text style={styles.exitButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E9F0",
  },
  header: {
    backgroundColor: "#1E50BA",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerLogo: {
    width: 45,
    height: 45,
    marginRight: 12,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    padding: 16,
  },
  audioBanner: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  audioText: {
    flex: 1,
    color: "#1E293B",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  audioButton: {
    backgroundColor: "#1E50BA",
    borderRadius: 100,
    padding: 5,
    marginLeft: 5,
  },
  audioIcon: {
    width: 30,
    height: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardLarge: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#333",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    elevation: 3,
  },
  cardLargeIcon: {
    width: 65,
    height: 65,
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardLargeText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardMedium: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardMediumIcon: {
    width: 28,
    height: 28,
    marginRight: 8,
    resizeMode: "contain",
  },
  cardMediumText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
  },
  centerRow: {
    alignItems: "center",
    marginBottom: 16,
  },
  cardSmall: {
    width: "40%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardSmallIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },
  cardSmallText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1E293B",
  },
  footer: {
    backgroundColor: "#1E50BA",
    padding: 12,
    alignItems: "center",
  },
  exitButton: {
    backgroundColor: "#2A5CD6",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    borderRadius: 12,
    width: "60%",
    paddingVertical: 10,
    alignItems: "center",
  },
  exitButtonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
