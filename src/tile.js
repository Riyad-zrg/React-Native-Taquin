import PropTypes, { number } from "prop-types";
import { StyleSheet, View, Text } from "react-native";

export default function Tile({ tileSize, value }) {
  if (value === 0) {
    return (
      <View
        style={{
          flex: 1,
          width: tileSize,
          height: tileSize,
          borderWidth: 1,
        }}
      ></View>
    );
  }
  return (
    <View
      style={{
        width: tileSize,
        height: tileSize,
        borderWidth: 1,
      }}
    >
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

Tile.PropTypes = {
  gridDimension: number,
  value: number,
};

const styles = StyleSheet.create({
  value: {
    flex: 1,
    fontSize: 40,
    textAlignVertical: "center",
    textAlign: "center",
  },
});
