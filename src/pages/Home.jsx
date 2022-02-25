import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const initialName = 'Inicial Name';

export default function Home({ navigation }) {

    const [name, setName] = useState(initialName)

    const onPressLearnMore = () => {
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.color}>Esta es la pagina de inicio</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                onChangeText={(text) => setName(text)}
            />
            <View style={styles.btnCnt}>
                <Button
                    onPress={onPressLearnMore}
                    title="Profile"
                    color="darkblue"
                />
            </View>
        </View>
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
    }
});


