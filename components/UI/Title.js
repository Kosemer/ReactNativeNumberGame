import { Text, StyleSheet } from "react-native";

function Title({children}) {
    return (  <Text style={styles.title}>{children}</Text> );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        padding: 12
    }
});