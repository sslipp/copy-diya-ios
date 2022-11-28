import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Buttons() {
    return (
        <View style={styles.buttons}>
            <TouchableOpacity>
                <Image style={styles.poslugy} source={require('./../assets/poslugy.png')} />
                <Text style={styles.textP}>Послуги</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.message} source={require('./../assets/message.png')} />
                <Text style={styles.textM}>Повідомлення</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.settings} source={require('./../assets/document.png')} />
                <Text style={styles.textD}>Документи</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    settings: {
        width: 40,
        height: 30,
        top: 47,
        left: 25,
        position: 'absolute'
    },
    textD: {
        fontFamily: 'ukraineregular',
        fontSize: 11,
        top: 79,
        left: 13
    },
    poslugy: {
        left: 119,
        top: 72,
        width: 43,
        height: 35,
        position: 'absolute'
    },
    textP: {
        fontFamily: 'ukraineregular',
        fontSize: 11,
        top: 107,
        left: 113
    },
    message: {
        left: 220,
        top: 63,
        width: 29,
        height: 30,
        position: 'absolute'
    },
    textM: {
        fontFamily: 'ukraineregular',
        top: 95,
        fontSize: 11,
        left: 190
    },
    menu: {
        left: 305,
        top: 50,
        width: 29,
        height: 30,
        position: 'absolute'
    },
    textN: {
        fontFamily: 'ukraineregular',
        top: 81,
        fontSize: 11,
        left: 300
    },
});
