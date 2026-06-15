import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function Score() {
  const [scores, setScores] = useState([]);
  const [keys, setKeys] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const fetchScores = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const scores = await AsyncStorage.multiGet(keys);
      setKeys(keys);
      setScores(scores);
    };
    fetchScores();
  }, [keys]);
  if (!scores) {
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    </SafeAreaProvider>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Historique des scores</Text>
        {scores.map((game, id) => (
          <Text key={id}>
            {game[0]} = score : {game[1]}{" "}
          </Text>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Êtes vous sur de vouloir supprimmer vos scores ?
            </Text>
            <Text style={styles.modalText}>(Cela est irréversible)</Text>
            <View style={styles.modalButtonsContainer}>
              <Pressable
                style={[styles.button, styles.buttonModalDelete]}
                onPress={async () => {
                  await AsyncStorage.multiRemove(keys);
                  setKeys(await AsyncStorage.multiGet(keys));
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Supprimer</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonModalCancel]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Annuler</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Supprimer l'historique de score</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  textContainer: {},
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#ff0000",
  },
  buttonModalDelete: {
    backgroundColor: "#f32121",
  },
  buttonModalCancel: {
    backgroundColor: "#c0c0c0",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    gap: "15",
  },
});
