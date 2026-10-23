import * as Speech from "expo-speech";

export function speakCardText(text: string): void {
  Speech.stop();
  Speech.speak(text, {
    language: "pt-BR",
  });
}
