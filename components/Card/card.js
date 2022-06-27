import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './style'
import Button from '../stylebutton/button'
export default function Card(props) {
    return (
        <View style={styles.Card} >
            <ImageBackground source={require("../../assets/images/Car1.png")} style={styles.Cardimage} />
            <View style={styles.Cardupperbody}>
                <Text style={styles.Cardtitle}>Model S</Text>
                <Text style={styles.Cardsubtitle}>Starting at $69,420</Text>
            </View>

            <Button type="primary" content="Custom Order" onpress={() => {
                console.log("Primary Custom Order")
            }} />

            <Button type="secondary" content="Existing Inventory" onpress={() => {
                console.log("secondary Existing Inventory")
            }} />
        </View>
    )
}

