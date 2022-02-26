import React, { useState } from 'react';
import {View, StyleSheet, Text, ImageBackground, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';
import { api } from '../helpers/Axios';

// const image = require("./fondopc.jpg")

const initialForm = {
    email: '',
    password: ''
}

const Login = ({ navigation }) => {

    const [form, setForm] = useState(initialForm)
    const [hasLogin, setHasLogin] = useState(false)

    const login = async () => {
        const res = await api.post('login', form)
        if (res) {
            setHasLogin(true)
            navigation.navigate('Home')
        }
    }

    function Button (props) {
        const { onPress, title = 'Iniciar sesión' } = props
        return (
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.txtBtn}>{title}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={require('./fondopc.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ingrese su email"
                            placeholderTextColor='#FFF'
                            onChangeText={(text) => setForm({ ...form, email: text })}
                        />
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={styles.text}>Contrasena</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ingrese su contraseña"
                            placeholderTextColor='#FFF'
                            secureTextEntry={true}
                            onChangeText={(text) => setForm({ ...form, password: text })}
                        />
                    </View>
                    <Button
                        onPress={login}
                        title="Inicia Sesión"
                    />
                    <View style={styles.containerTexts}>
                        <Text
                            style={styles.textRegister}
                            onPress={() => navigation.navigate('Register')}
                        >Soy nuevo, quiero REGISTRARME</Text>
                        <Text style={styles.textRegister}>Olvide mi contraseña</Text>
                        {
                            hasLogin &&
                            <Text style={styles.textRegister}>Iniciaste sesión</Text>
                        }
                    </View>
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    textRegister: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    containerTexts: {
        paddingTop: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    txtBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#fcc918',
        marginTop: 20,
        height: 34,
    },
    mainContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20
    },
    image: {
        flex: 1,
    },
    text: {
        fontSize: 12,
        color: 'white',
        paddingLeft: 3
    },
    input: {
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        color: '#FFF',
        paddingHorizontal: 20,
        marginTop: 5
    }
})

export default Login;
