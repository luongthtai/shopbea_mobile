import React, { useEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import InputLabel from '../components/elements/InputLabel'
import InputForm from '../components/elements/InputForm'
import ButtonPrimary from '../components/elements/ButtonPrimary'
import COLORS from '../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/stackParams'
import { getAsyncStorage } from '../units/asyncStorage'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { post } from '../units/api'
import { errorMessage } from '../units/error'

interface IInitialValues {
    userName: string,
    email: string,
    phone: string,
    birthDate: string,
    password: string,
    confirmPassword: string,
}

const initialValues: IInitialValues = {
    userName: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
}

export default function RegisterScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const mutation = useMutation({
        mutationFn: (data: IInitialValues) => post('/auth/register', data),
        onSuccess: async (response) => {
            const status = response.status

            if (status) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'signin' }]
                })
            }
            else {
                const errorCode = response.err_code
                const message = errorMessage(response.err_code)
                if (errorCode === "email_exist") formik.setFieldError('email', message)
            }
        }
    })

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            email: Yup.string().required('REQUIRE !!!'),
            userName: Yup.string().required('REQUIRE !!!'),
            phone: Yup.string().required('REQUIRE !!!'),
            birthDate: Yup.string().required('REQUIRE !!!'),
            password: Yup.string().required('REQUIRE !!!'),
            confirmPassword: Yup.string().required('REQUIRE !!!'),
        }),
        onSubmit: values => mutation.mutate(values)
    })

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
                        <InputLabel title='Name' />
                        <InputForm
                            onChangeText={formik.handleChange('userName')}
                            placeholder='Enter your name'
                            returnKeyType='next'
                            error={(formik.touched.userName && formik.errors.userName) && formik.errors.userName}
                        />
                    </View>
                    <View>
                        <InputLabel title='Email' />
                        <InputForm
                            onChangeText={formik.handleChange('email')}
                            placeholder='Enter your email'
                            returnKeyType='next'
                            error={(formik.touched.email && formik.errors.email) && formik.errors.email}
                        />
                    </View>
                    <View>
                        <InputLabel title='Phone Number' />
                        <InputForm
                            onChangeText={formik.handleChange('phone')}
                            placeholder='Enter your phone'
                            returnKeyType='next'
                            error={(formik.touched.phone && formik.errors.phone) && formik.errors.phone}
                        />
                    </View>
                    <View>
                        <InputLabel title='Password' />
                        <InputForm
                            onChangeText={formik.handleChange('password')}
                            placeholder='Enter your password'
                            secureTextEntry
                            returnKeyType='next'
                            error={(formik.touched.password && formik.errors.password) && formik.errors.password}
                        />
                    </View>
                    <View>
                        <InputLabel title='Confirm Password' />
                        <InputForm
                            onChangeText={formik.handleChange('confirmPassword')}
                            placeholder='Enter your password'
                            secureTextEntry
                            returnKeyType='next'
                            error={(formik.touched.confirmPassword && formik.errors.confirmPassword) && formik.errors.confirmPassword}
                        />
                    </View>
                </View>

                <View style={styles.button}>
                    <ButtonPrimary title='Sign Up' width="100%" onPress={formik.handleSubmit} disabled={mutation.isPending} />
                    <TouchableOpacity onPress={() => navigation.replace('signin')}>
                        <Text style={{ color: COLORS['Primary-Green-1'] }}>
                            I Alrealy Have an Account
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
