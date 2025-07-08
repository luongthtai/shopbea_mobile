import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native';
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import EmptyChatSection from '../components/sections/ChatScreen/EmptyChatSection'
// import ChatSection from '../components/sections/ChatScreen/ChatSection'

export default function ChatScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Chat' isScreen />
            <ScrollView showsVerticalScrollIndicator={false}>
                <EmptyChatSection />
                {/* <ChatSection /> */}
            </ScrollView>
        </SafeAreaView>
    )
}
