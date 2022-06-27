import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './css'

export default function Card(props) {
    return (
        <View style={styles.Card} >
            <ImageBackground source={require("../../assets/images/Car1.png")} style={styles.Cardimage} />
            <View style={styles.Cardbody}>
                <Text style={styles.Cardtitle}>Model S</Text>
                <Text style={styles.Cardsubtitle}>Starting at $69,420</Text>
            </View>

        </View>
    )
}

