import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './style'

export default function Button(props) {

    const { type, content, onpress } = props

    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textcolor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.Cardlowerbody}>
            {/* add static css with dynamic css */}
            <Pressable style={[styles.Cardbutton, { backgroundColor: backgroundColor }]} onPress={onpress}>
                {/* add static css with dynamic css */}
                <Text style={[styles.Cardbuttontext, { color: textcolor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}