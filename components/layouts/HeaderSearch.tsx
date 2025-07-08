import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import InputSearch from "../elements/InputSearch";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/stackParams";
import COLORS from "../../constants/colors";

export default function HeaderSearch() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToCart = () => navigation.navigate('my_cart')

    return (
        <View style={styles.header}>
            <InputSearch />
            <TouchableOpacity onPress={onNavigateToCart} style={styles.button}>
                <Ionicons name="cart-outline" size={20} color={COLORS["White-White-1"]} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS["White-White-1"],
        paddingVertical: 8,
        paddingHorizontal: 20,
        flexDirection: "row",
        gap: 16,
    },
    button: {
        backgroundColor: '#1CB060',
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: "1/1",
        borderRadius: 100,
        shadowColor: '#686868',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5
    }
})