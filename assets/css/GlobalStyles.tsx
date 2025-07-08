import { Platform, StatusBar, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: COLORS["White-White-1"],
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})