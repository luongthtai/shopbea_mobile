import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../types/stackParams";
import COLORS from "../../constants/colors";

type Props = {
    image?: string
}

export default function HeroImageItem({ image }: Props) {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToDiscovery = () => navigation.navigate('discovery')

    return (
        <View>
            <Image source={require(`../../assets/images/herobanner.jpg`)} style={styles.images} />
            <View style={styles.content}>
                <Text style={styles.h2}>END OF YEAR SALE</Text>
                <Text style={styles.p}>END OF YEAR SALE</Text>
                <TouchableOpacity onPress={onNavigateToDiscovery}>
                    <Text style={styles.button}>Shop now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    images: {
        width: "100%",
        height: 209,
        objectFit: "cover"
    },
    content: {
        backgroundColor: "#09000009",
        position: "absolute",
        inset: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    h2: {
        fontSize: 28,
        fontWeight: 700,
        color: COLORS["White-White-1"],
    },
    p: {
        fontSize: 12,
        color: COLORS["White-White-1"],
    },
    button: {
        backgroundColor: COLORS["Primary-Green-1"],
        color: COLORS["White-White-1"],
        borderRadius: 100,
        paddingVertical: 9,
        paddingHorizontal: 12,
        marginTop: 16,
        fontSize: 12
    }
})