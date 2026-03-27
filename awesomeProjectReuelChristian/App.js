import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Group 1
      </Text>
      <Text style={styles.subtitle}>
        AERO KENT DE GUZMAN{"\n"}
        CYRUZ PETER CABILAN{"\n"}
        FREDERICK MASANGKAY{"\n"}
        KYLE FRANZ RODRIGUEZ{"\n"}
        REUEL CHRISTIAN PORNOBE
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2d5030',
  },
  subtitle: {
    fontSize: 18,
    color: '#4f9667',
    marginTop: 4,
  },
});
