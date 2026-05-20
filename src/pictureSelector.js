import { StyleSheet, Button } from "react-native";
export default function PictureSelector() {
  return <Button title={"Picture Selector"} />;
}

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
