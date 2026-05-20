import PropTypes from "prop-types";
import { Text, StyleSheet, View } from "react-native";
export default function TileGrid(dimension) {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>score:42</Text>
      <View style={styles.grid}></View>
    </View>
  );
}

TileGrid.propTypes = {
  dimension: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 10,
    flexDirection: "column",
    width: "100%",
  },
  score: {
    alignSelf: "center",
    fontSize: 20,
    color: "gray",
  },
  grid: {
    borderWidth: 2,
    flex: 1,
  },
});
