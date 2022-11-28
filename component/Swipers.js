import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import CardFront from './CardFronts'

export default function Swipers() {
    return (
            <Swiper style={styles.wrapper} loop={false} dot={
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 5,
                        height: 5,
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
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />
                }>
                <View testID="Hello" >
                    <CardFront />
                </View>
                <View testID="Beautiful" >
                    <CardFront />
                </View>
            </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
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
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})