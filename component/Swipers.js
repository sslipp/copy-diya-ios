import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Animated, AppRegistry, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MarqueeText from 'react-native-marquee';
import Swiper from 'react-native-swiper'
import CardFront from './CardFronts'
import CardItemSmall from './CardItemSmall';

export default function Swipers({ Fam, Name, Otch, Date }) {

    return (
        <Swiper style={styles.wrapper} loop={false} dot={
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,.2)',
                    width: 6,
                    height: 6,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3
                }}
            />
        }
            activeDot={
                <View
                    style={{
                        backgroundColor: '#000',
                        width: 7,
                        height: 7,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}
                />
            }>
            <View testID="Hello" style={styles.card} >
                <Text></Text>
                <View>
                    <Text style={styles.textDocument}>єДокумент</Text><Text style={styles.kaska}>🪖</Text>
                </View>
                <View style={styles.textCardData}>
                    <Text style={styles.textCardDataText}>Дата</Text>
                    <Text style={styles.textCardDataText}>народження:</Text>
                    <Text style={styles.textCardDataText}>{Date}</Text>
                </View>
                <Text />
                <View style={styles.textCardNumber}>
                    <Text style={styles.textCardNumberText}>РНОКПП:</Text>
                    <Text style={styles.textCardNumberText}>123000000001</Text>
                </View>
                <View>
                    <Image source={require('./../assets/photo.png')} style={styles.image} />
                </View>
                <LinearGradient colors={['#FFFFFF00', '#FFFFFF']}></LinearGradient>
                <View style={styles.CardLine}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#668afc', '#a9fce8']}>
                        <MarqueeText speed={0.1} marqueeOnStart={true} loop={true} delay={500} style={styles.textCardLine}>Документ діє у військовий час. Ой у лузі червона калина похилилася, чогось наша славна Україна зажурилася. А ми тую червону калину підіймемо, а ми нашу славну Україну, гей, гей, розвеселимо.</MarqueeText>
                    </LinearGradient>
                </View>
                <View>
                    <View style={styles.Name}>
                        <Text style={styles.textName}>{Fam}</Text>
                        <Text style={styles.textName}>{Name}</Text>
                        <Text style={styles.textName}>{Otch}</Text>
                    </View>
                </View>
                <View>
                    <Image style={styles.settings} source={require('./../assets/settings.png')} />
                </View>
            </View>
            <View testID="Beutiful" style={styles.cardPlatnik}>
                <Text></Text>
                <View>
                    <Text style={styles.textKarta}>Карта платника</Text><Text style={styles.podatki}>податків</Text>
                </View>
                <View>
                    <View style={styles.Name}>
                        <Text style={styles.textName3}>{Fam}</Text>
                        <Text style={styles.textName3}>{Name}</Text>
                        <Text style={styles.textName3}>{Otch}</Text>
                    </View>
                </View>
                <View style={styles.textCardData}>
                    <Text style={styles.textCardDataText2}>Дата народження:</Text>
                    <Text style={styles.textCardDataText2}>{Date}</Text>
                </View>
                <Text />
                <View style={styles.textCardNumber}>
                    <Text style={styles.textCardNumberText2}>РНОКПП</Text>
                </View>
                <LinearGradient colors={['#FFFFFF00', '#FFFFFF']}></LinearGradient>
                <View style={styles.CardLine2}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#a6eb98', '#91d4c9']}>
                        <MarqueeText speed={0.2} marqueeOnStart={true} loop={true} delay={500} style={styles.textCardLine2}>Перевірено Державною податковою службою   РНОКПП дійсний.</MarqueeText>
                    </LinearGradient>
                </View>
                <View>
                    <View style={styles.Name}>
                        <Text style={styles.textName2}>1234567890</Text>
                    </View>
                </View>
            </View>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    podatki: {
        fontFamily: 'ukraineregular',
        fontSize: 22,
        marginLeft: 10
    },
    textKarta: {
        fontFamily: 'ukraineregular',
        fontSize: 22,
        marginLeft: 10,
        marginTop: 10
    },
    wrapper: {},
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
    cardPlatnik: {
        backgroundColor: '#efe3ed',
        width: 310,
        height: 440,
        borderRadius: 10,
        left: 33,
        top: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.10,
        shadowRadius: 7.49,
        elevation: 12,
    },
    card: {
        backgroundColor: '#fef495',
        width: 310,
        height: 440,
        borderRadius: 10,
        left: 33,
        top: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.49
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
            height: 10
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.49
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
        padding: 15,
        fontFamily: 'ukraineregular',
        bottom: 8,
        fontSize: 12
    },
    CardLine: {
        width: 310,
        height: 25,
        bottom: 70
    },
    textCardLine2: {
        padding: 15,
        fontFamily: 'ukraineregular',
        bottom: 8,
        fontSize: 12
    },
    CardLine2: {
        width: 310,
        height: 25,
        top: 170
    },
    textCardData: {
        top: 10,
        left: 185,
    },
    textCardDataText: {
        fontFamily: 'ukraineregular',
        fontSize: 12
    },
    textCardDataText2: {
        fontFamily: 'ukraineregular',
        fontSize: 12,
        top: 100,
        right: 171
    },
    textCardNumber: {
        top: 15,
        left: 185
    },
    textCardNumberText: {
        fontFamily: 'ukraineregular',
        fontSize: 12
    },
    textCardNumberText2: {
        fontFamily: 'ukraineregular',
        fontSize: 13,
        right: 173,
        bottom: 50
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
    textName2: {
        marginTop: -5,
        top: 260,
        marginLeft: 15,
        fontSize: 30,
        fontFamily: 'ukraineregular',
    },
    textName3: {
        padding: 1,
        marginTop: -5,
        top: 100,
        marginLeft: 12,
        fontSize: 17,
        fontFamily: 'ukraineregular',
    },
    kaska: {
        fontSize: 33,
        position: 'absolute',
        left: 180,
        top: 3
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
    textN: {
        fontFamily: 'ukraineregular',
        top: 103,
        fontSize: 10,
        left: 310
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
        fontSize: 30,
        fontWeight: 'bold'
    }
})