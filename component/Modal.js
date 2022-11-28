import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput } from 'react-native';
import Overlay from 'react-native-modal-overlay';

export default function Modal({ reFam }) {

    const [modalVisible, SetModalVisible] = React.useState(false);
    const [Fam, onChangeFam] = React.useState('Дія');
    const [Name, onChangeName] = React.useState('Надія');
    const [Otche, onChangeOtche] = React.useState('Володимирівна');
    const [Date, onChangeDate] = React.useState('24.08.1991');
    const [Rhokpp, onChangeRhokpp] = React.useState('123000000001');

    onClose = () => SetModalVisible(false);
    onOpen = () => SetModalVisible(true);

    return (
        <View>
            <Overlay visible={modalVisible} onClose={onClose} closeOnTouchOutside containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.78)' }}>
                <Text>Налаштування</Text>
                <View>
                    <TextInput style={styles.input} onChangeText={onChangeFam} value={Fam} placeholder="Фамилия" />
                    <TextInput style={styles.input} onChangeText={onChangeName} value={Name} placeholder="Имя" />
                    <TextInput style={styles.input} onChangeText={onChangeOtche} value={Otche} placeholder="Отчество" />
                    <TextInput style={styles.input} onChangeText={onChangeDate} value={Date} placeholder="Дата народження: 24.08.1991" />
                    <TextInput style={styles.input} onChangeText={onChangeRhokpp} value={Rhokpp} placeholder="РНОКПП" />
                </View>
                <Button onPress={() => reFam(Fam, Name, Otche, Date, Rhokpp)} title='Изменить' />
            </Overlay>
            <TouchableOpacity onPress={onOpen}>
                <View>
                    <Image style={styles.menu} source={require('./../assets/menu.png')} />
                    <Text style={styles.textN}>Меню</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        left: 305,
        top: 90,
        width: 29,
        height: 30,
        position: 'absolute'
    },
    textN: {
        fontFamily: 'ukraineregular',
        top: 122,
        fontSize: 11,
        left: 300
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
