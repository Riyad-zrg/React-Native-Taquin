import PropTypes, { number } from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Tile({
  tileSize,
  value,
  tilePressHandler,
  sourcePicture,
}) {
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

  const styles = StyleSheet.create({
    value: {
      flex: 1,
      fontSize: 25,
      color: "black",
      left: 5,
    },
    container: {
      width: tileSize,
      height: tileSize,
      borderWidth: 1,
      overflow: "hidden",
    },
    image: {
      flex: 1,
      width: tileSize * 3,
      height: tileSize * 3,
      left: -(((value - 1) % 3) * tileSize),
      top: -(((value - 1) / 3) * tileSize),
      position: "absolute",
      textAlign: "center",
      zIndex: -1,
    },
  });

  return (
    <TouchableOpacity onPress={() => tilePressHandler(value)}>
      <View style={styles.container}>
        <Text style={styles.value}>{value}</Text>
        <Image style={styles.image} source={{ uri: sourcePicture }} />
      </View>
    </TouchableOpacity>
  );
}

Tile.PropTypes = {
  gridDimension: number,
  value: number,
  tilePressHandler: PropTypes.func.isRequired,
  sourcePicture: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};
