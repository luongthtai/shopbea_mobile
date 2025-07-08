import React, { useEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import InputLabel from '../components/elements/InputLabel'
import InputForm from '../components/elements/InputForm'
import ButtonPrimary from '../components/elements/ButtonPrimary'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getAsyncStorage, setAsyncStorage } from '../units/asyncStorage'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/stackParams'
import COLORS from '../constants/colors'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMutation } from '@tanstack/react-query'
import { post } from '../units/api'
import { errorMessage } from '../units/error'

interface IInitialValues {
    email: string,
    password: string
}

const initialValues: IInitialValues = {
    email: "",
    password: ""
}

export default function SignInScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const mutation = useMutation({
        mutationFn: (data: IInitialValues) => post('/auth/login', data),
        onSuccess: async (response) => {
            const status = response.status

            if (status) {
                const { access_token, refresh_token } = response.data

                await setAsyncStorage('accessToken', JSON.stringify(access_token))
                await setAsyncStorage('refreshToken', JSON.stringify(refresh_token))

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'main' }]
                })
            } else {
                const errorCode = response.err_code

                const message = errorMessage(response.err_code)

                if (errorCode === "not_found") formik.setFieldError('email', message)
                else if (errorCode === "password") formik.setFieldError('password', message)
            }
        }
    })

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            email: Yup.string().required('REQUIRE !!!'),
            password: Yup.string().required('REQUIRE !!!'),
        }),
        onSubmit: values => mutation.mutate(values)
    })

    // check login 
    useEffect(() => {
        const checkLogin = async () => {
            const isLogin = await getAsyncStorage('accessToken')
            if (isLogin) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'home' }]
                })
            }
        }

        checkLogin()
    }, [])

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.root}>
                <Image source={require(`../assets/images/logo.png`)} />

                <View style={styles.form}>
                    <View>
                        <InputLabel title='Email' />
                        <InputForm
                            keyboardType='email-address'
                            returnKeyType='next'
                            placeholder='Enter your email'
                            onChangeText={formik.handleChange('email')}
                            error={(formik.touched.email && formik.errors.email) && formik.errors.email}
                        />
                    </View>
                    <View>
                        <InputLabel title='Password' />
                        <InputForm
                            secureTextEntry
                            returnKeyType='next'
                            placeholder='Enter your password'
                            onChangeText={formik.handleChange('password')}
                            error={(formik.touched.password && formik.errors.password) && formik.errors.password}
                        />
                    </View>
                </View>

                <View style={styles.button}>
                    <ButtonPrimary title='Sign In' width="100%" onPress={formik.handleSubmit} disabled={mutation.isPending} />
                    <TouchableOpacity onPress={() => navigation.replace('register')}>
                        <Text style={{ color: COLORS['Primary-Green-1'] }}>
                            I Don't Have an Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        paddingTop: 50,
        gap: 32,
        paddingHorizontal: 20
    },
    form: {
        width: "100%",
        gap: 16
    },
    button: {
        width: "100%",
        gap: 10,
        alignItems: "center"
    }
})
