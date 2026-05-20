import PropTypes from "prop-types";
import { Text, StyleSheet, View } from "react-native";
import Tile from "./tile.js";
import { useState } from "react";
export default function TileGrid({ dimension }) {
  const [tilesValues, setTilesValues] = useState(
    shuffleTaquin({[1, 2, 3, 4, 5, 6, 7, 8, 0]}),
  );
  return (
    <View style={styles.container}>
      <Text style={styles.score}>score:42</Text>
      <View
        style={{
          height: dimension,
          width: dimension,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {tilesValues.map((number, id) => (
          <Tile key={id} tileSize={dimension / 3} value={number} />
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

function shuffleTaquin({ taquinList }) {
  for (let i = 0; i < 20; i++) {
    const indexEmpty = taquinList.indexOf(0);
    const random = Math.randint(-1, 1);
    const temp = taquinList[indexEmpty];
    taquinList[indexEmpty] = taquinList[indexEmpty + random];
    taquinList[indexEmpty + random] = temp;
  }

  return taquinList;
}
