import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput } from 'react-native';
import Modal from './Modal';

export default function Name() {

    const [Fam, SetFam] = useState('Дія');
    const [Name, SetName] = useState('Надія');
    const [Otch, SetOtch] = useState('Володимирівна');

    const reFam = (number) => {
        SetFam(number)
    }

    <Modal reFam={reFam}/>


    return (
        <View>
            <View style={styles.Name}>
                <Text style={styles.textName}>{Fam}</Text>
                <Text style={styles.textName}>{Name}</Text>
                <Text style={styles.textName}>{Otch}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Name: {
        marginTop: -55
    },
    textName: {
        marginTop: -3,
        top: 5,
        marginLeft: 20,
        fontSize: 20,
        fontFamily: 'ukraineregular',
    },
});
