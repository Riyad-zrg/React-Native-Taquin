import PropTypes from "prop-types";
import { Text, StyleSheet, View } from "react-native";
import Tile from "./tile.js";
import { useState } from "react";
export default function TileGrid({ dimension }) {
  const [tilesValues, setTilesValues] = useState(
    shuffleTaquin({ taquinList: [1, 2, 3, 4, 5, 6, 7, 8, 0] }),
  );

  const [score, setScore] = useState(0);

  function shuffleTaquin({ taquinList }) {
    for (let i = 0; i < 50; i++) {
      const indexEmpty = taquinList.indexOf(0);
      const random = Math.random();
      if (random < 0.25 && taquinList[indexEmpty + 1] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty + 1];
        taquinList[indexEmpty + 1] = temp;
      } else if (random < 0.5 && taquinList[indexEmpty - 1] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty - 1];
        taquinList[indexEmpty - 1] = temp;
      } else if (random < 0.75 && taquinList[indexEmpty - 3] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty - 3];
        taquinList[indexEmpty - 3] = temp;
      } else if (random < 0.75 && taquinList[indexEmpty + 3] !== undefined) {
        const temp = taquinList[indexEmpty];
        taquinList[indexEmpty] = taquinList[indexEmpty + 3];
        taquinList[indexEmpty + 3] = temp;
      }
    }
    return taquinList;
  }

  async function tilePress(tileNumber) {
    const newTilesValues = [...tilesValues];
    const indexEmpty = newTilesValues.indexOf(0);
    const indexPressedTile = newTilesValues.indexOf(tileNumber);
    const indexDifference = Math.abs(indexEmpty - indexPressedTile);
    if (indexDifference === 1 || indexDifference === 3) {
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
          />
        ))}
      </View>
    </View>
  );
}

TileGrid.propTypes = {
  dimension: PropTypes.number,
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
});
