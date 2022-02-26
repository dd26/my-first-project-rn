import axios from 'axios'
import env from '../env'
import { storeData, getData } from '../helpers/AsyncStorageF'
import { Alert, ToastAndroid } from 'react-native';

const api = axios.create({
    baseURL: env.apiUrl// url base cargada de archivo env.js
})

api.interceptors.response.use(function (response) {
    if (response.config.method === 'post') {
        if (response.config.url === 'login') {
            storeData('@VS_SESSION_INFO', response.data.VS_SESSION_INFO)
        } else if (response.status === 201) {
            if (response.data.token === undefined) { // Si no es login
                alert('Registro exitoso')
            } else { // Es Login
                storeData('@VS_SESSION_INFO', response.data)
            }
        }
    }
    return response.data
}, function (error) {
    console.log(error, 'error axios')
    ToastAndroid.showWithGravity('Error en la API', 1, 2)
    
    /* return (
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            },
        ])
    ) */
})

api.interceptors.request.use(async function (config) {
    const token = await getData('@VS_SESSION_INFO')
    if (token) {
        config.headers.Authorization = `Bearer ${token.token}`
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

export { api }

