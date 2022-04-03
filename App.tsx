import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "@rneui/base";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>あーめんどくせーや</Card.Title>
        <Card.Divider />
        <View>
          <Text>アプリ作るべーかして</Text>
          <Button title="ボタン"></Button>
        </View>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
