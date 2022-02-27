import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const initialForm = {
    username: '',
    email: '',
    password: ''
}

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

const InputComponent = (props) => {
    return (
        <View style={styles.inputComponentContainer}>
            <Ionicons name={props.icon} size={15} color="#666963" />
            <TextInput
                style={{ padding: 5 }}
                {...props}
            />
        </View>
    )
}

const Register = ({ navigation }) => {
    const [form, setForm] = useState(initialForm);
    const [repeatPass, setRepeatPass] = useState('')

    const handleFormInputs = (value, key) => {
        console.log(key, value, 'key value')
        setForm({
            ...form,
            [key]: value
        })
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.mainContainer}>
                <StatusBar style="dark" />
                <IconButton
                    icon="arrow-left"
                    color="#000"
                    size={20}
                    onPress={() => navigation.navigate('Login') }
                />
                <UploadImage />
                <Text
                    style={{ textAlign: 'center', fontSize: 9, paddingVertical: 5 }}
                >Sube tu imagen de perfil aqui</Text>

                <InputComponent
                    placeholder="Escribe tu nombre de usuario"
                    onChangeText={(text) => handleFormInputs(text, 'username')}
                    icon="person"
                />

                <InputComponent
                    placeholder="Escribe tu email"
                    onChangeText={(text) => handleFormInputs(text, 'email')}
                    textContentType="emailAddress"
                    icon="mail"
                />

                <InputComponent
                    placeholder="Escribe tu contrasena"
                    onChangeText={(text) => handleFormInputs(text, 'password')}
                    textContentType="emailAddress"
                    icon="lock-closed"
                    secureTextEntry={true}
                />

                <InputComponent
                    placeholder="Repite tu contrasena"
                    onChangeText={(text) => setRepeatPass(text)}
                    textContentType="emailAddress"
                    icon="lock-closed"
                    secureTextEntry={true}
                />

                
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    inputComponentContainer: {
        borderWidth: 1,
        borderColor: '#666963',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal:10,
        margin: 10,
        borderRadius: 13
    },
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
