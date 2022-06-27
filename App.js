import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.Card} >
        <ImageBackground source={require("./assets/car1.png")} style={styles.Cardimage} />
        <View style={styles.Cardbody}>
          <Text style={styles.Cardtitle}>Model S</Text>
          <Text style={styles.Cardsubtitle}>Starting at $69,420</Text>
        </View>

      </View>

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
  Card: {
    width: '100%',
    height: '100%',
  },
  Cardimage: {

  },
  Cardbody: {
    marginTop: "30%",
    width: '100%',
    alignItems: 'center',
  },
  Cardtitle: {
    fontSize: 40,
    fontweight: '500',
  },
  Cardsubtitle: {
    fontSize: 18,
    color: "#5c5e62"

  }

});
