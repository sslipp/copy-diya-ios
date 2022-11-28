import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return (
        <View>
            <View>
                <Image source={require('./../assets/icon.png')} style={styles.image}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: 30,
        marginLeft: 15,
        width: 50,
        height: 50
    }
});
