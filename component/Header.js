import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import { useNavigation } from '@react-navigation/core';

export default function Header() {

    const navigation = useNavigation()

    const repl = () => {
        navigation.replace("Code")
    }

    return (
        <View>
            <View>
                <Image source={require('./../assets/icon.png')} style={styles.image} />
            </View>
            <TouchableOpacity activeOpacity={1} onPress={repl}>
                <Image source={require('./../assets/qrcode.png')} style={styles.image2} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: verticalScale(50),
        marginLeft: horizontalScale(25),
        width: 50,
        height: 50,
    },
    image2: {
        marginTop: -40,
        marginLeft: horizontalScale(327),
        width: 42,
        height: 30,
        position: 'absolute'
    }
});
