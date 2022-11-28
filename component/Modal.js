import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import Buttons from './Buttons';

export default function Modal({ reFam }) {

    const [modalVisible, SetModalVisible] = React.useState(false);
    const [Fam, onChangeFam] = React.useState('Дія');
    const [Name, onChangeName] = React.useState('Надія');
    const [Otche, onChangeOtche] = React.useState('Володимирівна');
    const [Date, onChangeDate] = React.useState('24.08.1991');
    const [gender, onChangegender] = React.useState('М');

    const onClose = () => SetModalVisible(false);
    const onOpen = () => SetModalVisible(true);

    return (
        <View>
            <Overlay visible={modalVisible} onClose={onClose} closeOnTouchOutside containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.78)' }}>
                <Text style={styles.settingsText}>Налаштування</Text>
                <View>
                    <Text style={styles.textSettings}>Редактировать фамилию</Text>
                    <TextInput style={styles.input} onChangeText={onChangeFam} value={Fam} placeholder="Фамилия" />
                    <Text style={styles.textSettings}>Редактировать имя</Text>
                    <TextInput style={styles.input} onChangeText={onChangeName} value={Name} placeholder="Имя" />
                    <Text style={styles.textSettings}>Редактировать отчество</Text>
                    <TextInput style={styles.input} onChangeText={onChangeOtche} value={Otche} placeholder="Отчество" />
                    <Text style={styles.textSettings}>Редактировать год рождения</Text>
                    <TextInput style={styles.input} onChangeText={onChangeDate} value={Date} placeholder="Дата народження: 24.08.1991" />
                    <Text style={styles.textSettings}>Редактировать пол</Text>
                    <TextInput style={styles.input} onChangeText={onChangegender} value={gender} placeholder="Пол" />
                </View>
                <Button onPress={() => (reFam(Fam, Name, Otche, Date, gender))} title='Изменить' />
            </Overlay>
            <View style={styles.buttons}>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.poslugy} source={require('./../assets/poslugy.png')} />
                    <Text style={styles.textP}>Послуги</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.message} source={require('./../assets/messages.png')} />
                    <Text style={styles.textM}>Повідомлення</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image style={styles.settings} source={require('./../assets/document.png')} />
                    <Text style={styles.textD}>Документи</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={onOpen}>
                    <Image style={styles.menu} source={require('./../assets/menu.png')} />
                    <Text style={styles.textN}>Меню</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        bottom: 85
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
        top: 62,
        width: 32,
        height: 32,
        position: 'absolute'
    },
    textM: {
        fontFamily: 'ukraineregular',
        top: 94,
        fontSize: 10,
        left: 193
    },
    settingsText: {
        fontFamily: 'ukraineregular',
        marginBottom: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    textSettings: {
        marginLeft: 11
    }
});
