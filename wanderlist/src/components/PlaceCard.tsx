import { StyleSheet, Text, View, Button } from "react-native";
import { Place } from "@/lib/types"

export default function PlaceCard({name, category, notes}: Place) {
    return (
        <View>
            <View style={styles.card}>
                <Text>Name: </Text>
                <Text>{name}</Text>
            </View>

            <View style={styles.card}>
                <Text>Category: </Text>
                <Text>{category}</Text>
            </View>

            <View style={styles.card}>
                <Text>Notes: </Text>
                <Text>{notes}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // I tried to do this one where I combined both of what I saw in the slides in the GitHub, and from what was asked for the assignement, 
    // while also doing my own research on understanding styling better and different uses
    card: {
        flexDirection: "row", // instead of having stuff always go to the next line/jumping to the next line after one word or one prop, 
        // it stays on the same line if that makes sense
        justifyContent: "space-between", // isntead of having it go in the same direction, we made sure to leave a gap so that its easier to read, 
        // one thing on the left and one thing on the right, nothing on the center
        borderRadius: 12, // the roundness of the border or the box the text is in
        backgroundColor: "#ccc1c1", // background of the little rectangles in a way
        padding: 16, // gives sapce ebtween each content (each line)
        boxShadow: '3.5px 5px 3px 1px #000000' // small border shadow with small blur
    }
});