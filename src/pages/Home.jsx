import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';
import { getData, storeData } from '../helpers/AsyncStorageF';
import { api } from '../helpers/Axios'

const initialObj = {
    name: '',
    lastName: ''
}

export default function Home({ navigation }) {

    useEffect(async () => {
        const data = await getData('storage_Key');
        // console.log('data', data);
        if (data) {
            // console.log('Entro aki')
            setFormObj({
                ...data
            })
        }        
    }, [])

    const getAxiosDataTest = async () => {
        console.log('Obteniendo datos')
        /* await api.get('test').then(res => {
            console.log('res', res);
        }) */
        // console.log(await apiUrl())
        // await storeData('@VS_SESSION_INFO', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTJmYjliYWZhNTE2OTE3NWMzNWVhYTUiLCJpYXQiOjE2NDA2MzQzMzV9.KEtu-qfCO5Pk_8nq76dK0qZ2d2pUv0ddY3VoFl01p2E' })
        await api.post('llogin', { email: 'denilsson.d.sousa@gmail.com', password: '123456789' }).then(res => {
            // console.log(res.data, 'RESSSS');
            console.log(res, 'res')
        })
    }

    const [formObj, setFormObj] = useState(initialObj)

    const onPressLearnMore = () => {
        navigation.navigate('Profile');
    }

    const sendName = async () => {
        await storeData(formObj)
    }

    const getObject = async () => {
        console.log(await getData('@VS_SESSION_INFO'))
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.color}>Esta es la pagina de inicio</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                onChangeText={(text) => setFormObj({ ...formObj, name: text })}
                value={formObj.name}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                onChangeText={(text) => setFormObj({ ...formObj, lastName: text })}
                value={formObj.lastName}
            />
            <View style={styles.btnCnt}>
                <Button
                    onPress={getAxiosDataTest}
                    title="Enviar Nombre"
                    color="darkblue"
                />
            </View>
            <View style={styles.btnCnt}>
                <Button
                    onPress={getObject}
                    title="Obtener Nombre"
                    color="darkblue"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    input: {
        // color de borde gris claro
        borderColor: '#ccc',
        // fondo color azul claro transparente
        backgroundColor: 'rgba(0,0,255,0.1)',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        color: 'black',
    },
    color: {
        color: 'black'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    btnCnt: {
        flex: 1,
        // alinear abajo
        justifyContent: 'flex-end',
        marginTop: 10
    }
});


