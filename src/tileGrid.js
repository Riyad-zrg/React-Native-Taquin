import PropTypes from "prop-types";
import { Text, StyleSheet, View } from "react-native";
import Tile from "./tile.js";
export default function TileGrid({ dimension }) {
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 0].map((number) => (
          <Tile key={number} tileSize={dimension / 3} value={number} />
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
