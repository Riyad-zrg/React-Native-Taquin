import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function Score() {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const fetchScores = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const scores = await AsyncStorage.multiGet(keys);
      setScores(scores);
    };
    fetchScores();
  }, []);
  if (!scores) {
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    </SafeAreaProvider>;
  }
  return (
    <View>
      <Text>Historique des scores</Text>
      {scores.map((game, id) => (
        <Text key={id}>
          {game[0]} = score : {game[1]}{" "}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
