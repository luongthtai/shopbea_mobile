import AsyncStorage from "@react-native-async-storage/async-storage"

export const getAsyncStorage = async (keyName: string) => {
    const value = await AsyncStorage.getItem(keyName)
    return value
}

export const setAsyncStorage = async (keyName: string, value: string) => {
    await AsyncStorage.setItem(keyName, value)
}

export const removeAsyncStorage = async (keyName: string) => {
    await AsyncStorage.removeItem(keyName)
}

export const clearAsyncStorage = async () => {
    await AsyncStorage.clear()
}
