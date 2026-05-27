import PropTypes, { number } from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Tile({
  tileSize,
  value,
  tilePressHandler,
  sourcePicture,
}) {
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
      left: -(Math.floor((value - 1) % 3) * tileSize),
      top: -(Math.floor((value - 1) / 3) * tileSize),
      position: "absolute",
      textAlign: "center",
      zIndex: -1,
    },
  });

  if (value === 9) {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>{value}</Text>
        <Image
          style={[styles.image, { opacity: 0.2 }]}
          source={{ uri: sourcePicture }}
        />
      </View>
    );
  }

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
