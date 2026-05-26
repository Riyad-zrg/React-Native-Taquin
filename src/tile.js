import PropTypes, { number } from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Tile({ tileSize, value, tilePressHandler }) {
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
    <TouchableOpacity onPress={() => tilePressHandler(value)}>
      <View
        style={{
          width: tileSize,
          height: tileSize,
          borderWidth: 1,
        }}
      >
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

Tile.PropTypes = {
  gridDimension: number,
  value: number,
  tilePressHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  value: {
    flex: 1,
    fontSize: 40,
    textAlignVertical: "center",
    textAlign: "center",
  },
});
