import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import InputLabel from '../../elements/InputLabel';
import InputForm from '../../elements/InputForm';
import ButtonPrimary from '../../elements/ButtonPrimary';
import InputDate from '../../elements/InputDate';
import COLORS from '../../../constants/colors';

export default function FormEditProfile() {
    return (
        <View style={styles.root}>
            <View style={styles.avatar}>
                <Image source={require(`../../../assets/images/herobanner.jpg`)} style={styles.avatar_image} />
                <TouchableOpacity style={styles.avatar_pencil}><Octicons name='pencil' size={14} color={COLORS["White-White-1"]} /></TouchableOpacity>
            </View>

            <View style={styles.form}>
                <View>
                    <InputLabel title='Name' />
                    <InputForm
                        returnKeyType='next'
                        placeholder='Enter your name'
                    />
                </View>
                <View>
                    <InputLabel title='Email' />
                    <InputForm
                        returnKeyType='next'
                        placeholder='Enter your name'
                        keyboardType='email-address'
                    />
                </View>
                <View>
                    <InputLabel title='Phone' />
                    <InputForm
                        returnKeyType='next'
                        placeholder='Enter your name'
                        keyboardType='phone-pad'
                    />
                </View>
                <View>
                    <InputLabel title='Gender' />
                    <InputForm
                        returnKeyType='next'
                        placeholder='Enter your name'
                    />
                </View>
                <View>
                    <InputLabel title='Birth Dite' />
                    <InputDate />
                </View>
            </View>

            <ButtonPrimary title='Save' width={'100%'} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 40
    },
    avatar: {
        position: "relative",
        width: "auto",
        alignItems: "center"
    },
    avatar_image: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    avatar_pencil: {
        backgroundColor: COLORS['Primary-Green-1'],
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        position: "absolute",
        bottom: 0,
        right: 0
    },
    form: {
        width: "100%",
        gap: 16
    }
})