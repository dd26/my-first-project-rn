import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

const UploadImage = (props) => {
    // console.log(props)
    return (
        <View style={styles.imgContainer}>
            <IconButton
                icon="account-box-outline"
                color="#666963"
                size={50}
                onPress={() => console.log('Me presionaste') }
                style={{ flex: 1 }}
            />
        </View>
    )
}

const Register = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="dark" />
            <IconButton
                icon="arrow-left"
                color="#000"
                size={20}
                onPress={() => navigation.navigate('Login') }
            />
            <UploadImage />
        </View>
    );
}

const styles = StyleSheet.create({
    imgContainer: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        width: 100,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    mainContainer: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: '#FF10'
    }
})

export default Register;
