import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MarqueeText from 'react-native-marquee';
import Modal from './Modal';
import CardFronts from './CardFronts';
import Swipers from './Swipers';

export default function CardFront() {

    const [Fam, SetFam] = useState('Дія');
    const [Name, SetName] = useState('Надія');
    const [Otch, SetOtch] = useState('Володимирівна');
    const [Date, SetDate] = useState('24.08.1991');
    const [gender, Setgender] = useState('М');

    const reFam = (Fam, Name, Otche, Date, gender) => {
        SetFam(Fam),
            SetName(Name),
            SetOtch(Otche),
            SetDate(Date),
            Setgender(gender)
    }

    return (
        <View>
            <Swipers Fam={Fam}/>
            <Modal reFam={reFam} />
        </View >
    );
}

const styles = StyleSheet.create({
    modals: {
        backgroundColor: 'white',
        flex: 1,

    },
    imageQRCode: {
        position: 'absolute',
        width: 300,
        height: 300,
        right: 4,
        top: 80
    },
    card: {
        backgroundColor: '#fef495',
        width: 310,
        height: 440,
        borderRadius: 10,
        left: 27,
        top: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardBack: {
        position: 'absolute',
        backgroundColor: '#fef495',
        width: 310,
        height: 440,
        borderRadius: 10,
        left: 27,
        top: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    image: {
        marginTop: 10,
        width: 150,
        height: 200,
        left: 20,
        bottom: 90
    },
    textDocument: {
        marginTop: 15,
        marginBottom: 13,
        marginLeft: 20,
        fontSize: 25,
        fontFamily: 'ukraineregular',
    },
    textCardLine: {
        padding: 9,
        fontFamily: 'ukraineregular',
        bottom: 5,
        fontSize: 12
    },
    CardLine: {
        width: 310,
        height: 25,
        bottom: 70
    },
    textCardData: {
        top: 10,
        left: 185,
    },
    textCardDataText: {
        fontFamily: 'ukraineregular',
        fontSize: 12
    },
    textCardNumber: {
        top: 15,
        left: 185
    },
    textCardNumberText: {
        fontFamily: 'ukraineregular',
        fontSize: 12
    },
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
    kaska: {
        fontSize: 33,
        position: 'absolute',
        left: 180,
        top: 13
    },
    titleModal: {
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 30,
        fontFamily: 'ukraineregular'
    },
    settings: {
        width: 45,
        height: 45,
        position: 'absolute',
        left: 255,
        top: -35
    },
});
