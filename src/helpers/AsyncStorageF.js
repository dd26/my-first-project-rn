import AsyncStorage from '@react-native-async-storage/async-storage'

async function storeData (key, value) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`@${key}`, jsonValue)
    } catch (e) {
      // saving error
        console.log('error', e)
    }
}

const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@${key}`)
        // console.log(jsonValue, 'jsonValue')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}

export { storeData, getData }