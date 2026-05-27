import { Text, View } from "react-native";

export default function About() {
  return (
    <View>
      <Text>Qu&apos;est-ce que le taquin ?</Text>
      <Text>
        Le taquin est un jeu solitaire en forme de damier créé vers 1870[1] aux
        États-Unis. Sa théorie mathématique a été publiée par l'American Journal
        of mathematics pure and applied[2] en 1879. En 1891, son invention fut
        revendiquée par Sam Loyd[3], au moment où le jeu connaissait un
        engouement considérable, tant aux États-Unis qu'en Europe. Il est
        composé de 15 petits carreaux numérotés de 1 à 15 qui glissent dans un
        cadre prévu pour 16. Il consiste à remettre dans l'ordre (croissant ou
        décroissant) les 15 carreaux à partir d'une configuration initiale
        quelconque.
      </Text>
    </View>
  );
}
