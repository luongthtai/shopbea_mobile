import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import { Ionicons } from '@expo/vector-icons';
import CommentItem from '../../elements/CommentItem';
import COLORS from '../../../constants/colors';

export default function ProductReviewsSection() {
    return (
        <View style={styles.contents}>
            <View style={styles.title}>
                <View>
                    <TitleSection title='Product Reviews' />
                    <View style={styles.ratting}>
                        <Ionicons name='star' size={12} color={COLORS["Support-Color-Orange-1"]} />
                        <Text style={styles.text}>4.8</Text>
                        <View style={styles.dot}></View>
                        <Text style={styles.text}>(12.5k Reviews)</Text>
                    </View>
                </View>

                <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
            </View>

            <View style={styles.comments}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contents: {
        gap: 16,
        paddingHorizontal: 20,
        paddingVertical: 24,
        backgroundColor: COLORS["White-White-1"],
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ratting: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center"
    },
    text: {
        color: COLORS['Grey-Grey-1']
    },
    dot: {
        backgroundColor: COLORS['Grey-Grey-1'],
        width: 6,
        aspectRatio: "1/1",
        borderRadius: 100
    },
    seeAll: {
        fontSize: 12,
        fontWeight: 700,
        color: COLORS['Primary-Green-1']
    },
    comments: {
        gap: 16
    }
})