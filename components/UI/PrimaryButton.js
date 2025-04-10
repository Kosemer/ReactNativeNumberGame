import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton(props, onPress) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.yellow,

    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
  },
  buttonText: {
    color: "#474339",
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});
