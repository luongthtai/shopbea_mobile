import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import COLORS from "../../constants/colors";

export default function InputSearch() {
    return (
        <View style={[styles.container]}>
            <Ionicons name="search" size={20} color={COLORS['Grey-Grey-1']} />
            <TextInput style={styles.input} placeholder="Search for products" />
            <Ionicons name="camera" size={20} color={COLORS['Grey-Grey-1']} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: "center",
        gap: 4,
        paddingHorizontal: 12,
        paddingVertical: 13,
        borderRadius: 100,
        backgroundColor: COLORS["Light-Grey-L-Grey-2"],
    },
    input: {
        flex: 1,
        color: COLORS['Grey-Grey-1']
    },
    boxShadown: {
        shadowColor: '#333333',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    }
})