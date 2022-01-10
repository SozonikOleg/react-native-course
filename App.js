import { StyleSheet, Text, View } from "react-native";
import { NavBar } from "./src/navBar/NavBar";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
