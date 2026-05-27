import PropTypes from "prop-types";
import { Text, StyleSheet, View, Modal, Pressable, Alert } from "react-native";
import Tile from "./tile.js";
import { useState } from "react";
export default function TileGrid({
  tilesValues,
  setTilesValues,
  setOriginalTilesValues,
  dimension,
  sourcePicture,
  shuffleTaquin,
}) {
  const [score, setScore] = useState(0);

  async function tilePress(tileNumber) {
    const movementDico = [
      [1, 3],
      [0, 2, 4],
      [1, 5],
      [0, 4, 6],
      [1, 3, 5, 7],
      [2, 4, 8],
      [3, 7],
      [4, 6, 8],
      [7, 5],
    ];
    const newTilesValues = [...tilesValues];
    const indexEmpty = tilesValues.indexOf(9);
    const indexPressedTile = tilesValues.indexOf(tileNumber);
    console.log(
      indexPressedTile,
      indexEmpty,
      movementDico[indexEmpty].includes(indexPressedTile),
    );
    if (movementDico[indexEmpty].includes(indexPressedTile)) {
      const temp = newTilesValues[indexEmpty];
      newTilesValues[indexEmpty] = newTilesValues[indexPressedTile];
      newTilesValues[indexPressedTile] = temp;
      setScore(score + 1);
    }
    setTilesValues(newTilesValues);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.score}>score:{score}</Text>
      <View
        style={{
          height: dimension,
          width: dimension,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {tilesValues.map((number, id) => (
          <Tile
            key={id}
            tileSize={dimension / 3}
            value={number}
            tilePressHandler={tilePress}
            sourcePicture={sourcePicture}
          />
        ))}
        <Modal
          animationType="slide"
          transparent={true}
          visible={
            tilesValues.toString() === [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()
          }
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Félicitations ! Tu as réussi à terminer le taquin !
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setScore(0);
                  setTilesValues(
                    shuffleTaquin({ taquinList: [1, 2, 3, 4, 5, 6, 7, 8, 9] }),
                  );
                  setOriginalTilesValues(tilesValues);
                }}
              >
                <Text style={styles.textStyle}>Recommencer</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

TileGrid.propTypes = {
  dimension: PropTypes.number,
  sourcePicture: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 6,
    flexDirection: "column",
    width: "100%",
  },
  score: {
    alignSelf: "center",
    fontSize: 20,
    color: "gray",
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
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
});
