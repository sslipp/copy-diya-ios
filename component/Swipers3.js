import React, { useState } from 'react'
import { Vibration, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MarqueeText from 'react-native-marquee';
import Swiper from 'react-native-swiper';
import * as Clipboard from 'expo-clipboard';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

export default function Swipers3({ Fam, Name, Otch, Date, image }) {

    return (
        <View>
            <View testID="vacina" style={styles.card4} >
                <Text></Text>
                <View>
                    <Text style={styles.textDocument4}>Внутрішній</Text><Text style={styles.textDocument5}>COVID19-сертифікат</Text>
                </View>
                <View style={styles.textCardData44}>
                    <Text style={styles.textCardDataText}>Дата</Text>
                    <Text style={styles.textCardDataText}>народження:</Text>
                    <Text style={styles.textCardDataText}>{Date}</Text>
                </View>
                <Text />
                <View style={styles.textCardNumber33}>
                    <Text style={styles.textCardNumberText}>Дійсний до:</Text>
                    <Text style={styles.textCardNumberText}>24.06.2023</Text>
                </View>
                <View style={styles.textCardNumber22}>
                    <Text style={styles.textCardNumberText}>Номер</Text>
                    <Text style={styles.textCardNumberText}>сертифікату:</Text>
                    <Text style={styles.textCardNumberText}>URN:UVCI:01:UA:0</Text>
                    <Text style={styles.textCardNumberText}>E556693061955589</Text>
                    <Text style={styles.textCardNumberText}>E2520C4F3889304</Text>
                </View>
                <View>
                    {<Image style={styles.image} /> && <Image source={{ uri: image }} style={styles.image} />}
                </View>
                <LinearGradient colors={['#FFFFFF00', '#FFFFFF']}></LinearGradient>
                <View style={styles.CardLine33}>
                </View>
                <View>
                    <View style={styles.Name}>
                        <Text style={styles.textName}>{Fam}</Text>
                        <Text style={styles.textName}>{Name}</Text>
                        <Text style={styles.textName}>{Otch}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textCardNumberText22: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12)
    },
    CardLine33: {
        borderBottomColor: '#ceebbf',
        borderBottomWidth: 2,
        width: horizontalScale(290),
        bottom: verticalScale(55),
        marginLeft: horizontalScale(10),
        borderRadius: 20
    },
    copyText: {
        position: 'absolute',
        top: verticalScale(253),
        left: horizontalScale(205),
        width: horizontalScale(33),
        height: verticalScale(33)
    },
    podatki: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(22),
        marginLeft: horizontalScale(10)
    },
    textKarta: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(22),
        marginLeft: horizontalScale(10),
        marginTop: verticalScale(10)
    },
    wrapper: {},
    modals: {
        backgroundColor: 'white',
        flex: 1,
    },
    cardPlatnik: {
        backgroundColor: '#efe3ed',
        width: horizontalScale(330),
        height: verticalScale(500),
        borderRadius: 10,
        marginLeft: horizontalScale(24),
        marginTop: verticalScale(50),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 7.49,
        elevation: 15,
    },
    card: {
        backgroundColor: '#fef495',
        width: horizontalScale(330),
        height: verticalScale(500),
        borderRadius: 10,
        marginLeft: horizontalScale(24),
        marginTop: verticalScale(50),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 7.49,
        elevation: 15,
    },
    card4: {
        backgroundColor: '#e9f5e7',
        width: horizontalScale(310),
        height: verticalScale(500),
        borderRadius: 10,
        marginLeft: horizontalScale(8),
        marginTop: verticalScale(50),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 7.49,
        elevation: 15,
    },
    cardBack: {
        position: 'absolute',
        backgroundColor: '#fef495',
        width: horizontalScale(310),
        height: verticalScale(440),
        borderRadius: 10,
        left: horizontalScale(27),
        top: verticalScale(30),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.49
    },
    image: {
        marginTop: verticalScale(-12),
        marginBottom: verticalScale(10),
        width: horizontalScale(145),
        height: verticalScale(220),
        left: horizontalScale(21),
        bottom: verticalScale(90),
        borderColor: '#dbedd3',
        borderWidth: 2,
    },
    image2: {
        marginTop: verticalScale(-20),
        marginBottom: verticalScale(10),
        width: horizontalScale(145),
        height: verticalScale(220),
        left: horizontalScale(21),
        bottom: verticalScale(90),
        borderColor: '#b1c5e6',
        borderWidth: 2,
    },
    textDocument: {
        marginTop: verticalScale(5),
        marginBottom: verticalScale(28),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(20),
        fontFamily: 'ukraineregular',
    },
    textDocument4: {
        marginTop: verticalScale(5),
        marginBottom: verticalScale(13),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(20),
        fontFamily: 'ukraineregular',
    },
    textDocument5: {
        marginTop: verticalScale(-15),
        marginBottom: verticalScale(16),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(20),
        fontFamily: 'ukraineregular',
    },
    textCardLine: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12),
        top: verticalScale(-3)
    },
    gradient: {
        padding: verticalScale(18)
    },
    CardLine: {
        width: horizontalScale(330),
        height: verticalScale(25),
        bottom: verticalScale(60),
    },
    textCardLine2: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12)
    },
    gradient2: {
        padding: verticalScale(15)
    },
    CardLine2: {
        width: horizontalScale(330),
        height: verticalScale(25),
        marginTop: verticalScale(360),
        position: 'absolute'
    },
    textCardData: {
        top: verticalScale(-5),
        left: horizontalScale(180),
    },
    textCardData333: {
        top: verticalScale(20),
        left: horizontalScale(185),
    },
    textCardData44: {
        top: verticalScale(5),
        left: horizontalScale(176),
    },
    textCardDataText: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12)
    },
    textCardDataText2: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12),
        top: verticalScale(100),
        right: horizontalScale(171)
    },
    marqText: {
        bottom: verticalScale(24)
    },
    marqText2: {
        bottom: verticalScale(24)
    },
    textCardNumber: {
        top: verticalScale(-15),
        marginLeft: horizontalScale(180)
    },
    textCardNumber333: {
        top: verticalScale(5),
        left: horizontalScale(185),
    },
    textCardNumber33: {
        bottom: verticalScale(5),
        left: horizontalScale(176)
    },
    textCardNumber22: {
        top: verticalScale(220),
        left: horizontalScale(176),
        position: 'absolute'
    },
    textCardNumberText: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(12)
    },
    textCardNumberText2: {
        fontFamily: 'ukraineregular',
        fontSize: moderateScale(13),
        right: horizontalScale(173),
        bottom: verticalScale(85)
    },
    Name: {
        marginTop: verticalScale(-35),
    },
    Namesss: {
        marginTop: verticalScale(-35),
    },
    Namess: {
        marginTop: verticalScale(-25)
    },
    textName: {
        marginTop: verticalScale(-3),
        top: verticalScale(5),
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(20),
        fontFamily: 'ukraineregular',
    },
    textName2: {
        top: verticalScale(290),
        marginTop: -30,
        marginLeft: horizontalScale(15),
        fontSize: moderateScale(30),
        fontFamily: 'ukraineregular',
    },
    textName3: {
        padding: 1,
        marginTop: verticalScale(-5),
        top: verticalScale(100),
        marginLeft: horizontalScale(12),
        fontSize: moderateScale(16),
        fontFamily: 'ukraineregular',
    },
    kaska: {
        fontSize: moderateScale(28),
        position: 'absolute',
        left: horizontalScale(150),
        top: verticalScale(3)
    },
    titleModal: {
        textAlign: 'center',
        fontSize: moderateScale(25),
        paddingTop: verticalScale(30),
        fontFamily: 'ukraineregular'
    },
    settings: {
        width: horizontalScale(45),
        height: verticalScale(45),
        position: 'absolute',
        left: horizontalScale(275),
        top: -35
    },
    textN: {
        fontFamily: 'ukraineregular',
        top: verticalScale(103),
        fontSize: moderateScale(10),
        left: horizontalScale(310)
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    text: {
        color: '#fff',
        fontSize: moderateScale(30),
        fontWeight: 'bold'
    }
})