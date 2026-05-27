import { Button } from "react-native";
import PropTypes from "prop-types";

export default function PictureSelector({ onPress }) {
  return <Button title={"Picture Selector"} onPress={onPress} />;
}

PictureSelector.PropTypes = {
  onPress: PropTypes.func.isRequired,
};
