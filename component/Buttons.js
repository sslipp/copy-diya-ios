import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Buttons({ onOpen }) {
    return (
        <View style={styles.buttons}>
            <TouchableOpacity onPress={() => (onOpen())}>
                <Image style={styles.poslugy} source={require('./../assets/poslugy.png')} />
                <Text style={styles.textP}>Послуги</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1}>
                <Image style={styles.message} source={require('./../assets/message.png')} />
                <Text style={styles.textM}>Повідомлення</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1}>
                <Image style={styles.settings} source={require('./../assets/document.png')} />
                <Text style={styles.textD}>Документи</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1}>
                <Image style={styles.menu} source={require('./../assets/menu.png')} />
                <Text style={styles.textN}>Меню</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        bottom: 100
    },
    menu: {
        left: 310,
        top: 43,
        width: 35,
        height: 23,
        position: 'absolute'
    },
    textN: {
        fontFamily: 'ukraineregular',
        top: 71,
        fontSize: 10,
        left: 310
    },
    settings: {
        width: 35,
        height: 30,
        top: 50,
        left: 30,
        position: 'absolute'
    },
    textD: {
        fontFamily: 'ukraineregular',
        fontSize: 10,
        top: 81,
        left: 18
    },
    poslugy: {
        left: 119,
        top: 73,
        width: 40,
        height: 33,
        position: 'absolute'
    },
    textP: {
        fontFamily: 'ukraineregular',
        fontSize: 10,
        top: 105,
        left: 115
    },
    message: {
        left: 220,
        top: 66,
        width: 26,
        height: 26,
        position: 'absolute'
    },
    textM: {
        fontFamily: 'ukraineregular',
        top: 94,
        fontSize: 10,
        left: 193
    },
});
