import React from "react"
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ButtonGradient() {
    return (
        <TouchableOpacity style={styles.button}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>
                <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: 'white',
        marginTop: 20,
        textAlign: 'center'
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 30,
        marginTop: 10

    },
});
