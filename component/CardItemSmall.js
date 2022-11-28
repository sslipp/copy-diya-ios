import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function CardItemSmall() {
    return (
            <View style={styles.card}>
                <Text></Text>
                <View>

                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fef495',
        width: 230,
        height: 380,
        borderRadius: 10,
        left: 32,
        top: 90,
    }
});
