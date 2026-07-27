import { StyleSheet, Text, View, Button } from "react-native";

type PlaceCardPros = {
    name: string;
    category: string;
    notes: string;
};

// the way this works is, we basically have a method that does the job for us
// its like how in java, you can have a method to do all of the repeating steps

export default function PlaceCard({ name, category, notes }: PlaceCardPros) {
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
    }

    // my custom settings I've made before seeing the "Mkaing it look like a card" slide in Slides file from Week 2 (github)
    // field: {
    //     backgroundColor: "gray", // the background color as asked in the github file instructions
    //     borderRadius: 7, // puts a little round border around the lines
    //     padding: 10,
    //     flexDirection: "row", // makes it go line by line with "Name: Place" instead of doing line breaks after EACH word
    //     justifyContent: "space-between" // makes it have a space between the two
    //     // (the labels are on left, the actual names/words are on the right)
    // }

    // by using the one shown on the slides
    // card: {
    //     flexDirection: "row", // this does A LOT for the position of the cards, makes it actually understandable cuz it connects them together in a way
    //     backgroundColor: "#fff",
    //     borderRadius: 12,
    //     padding: 16,
    //     elevation: 2,
    //     shadowColor: "#000",
    //     shadowOpacity: 0.1,
    //     shadowRadius: 6,
    //     gap: 5
    // },

    // I didn't do cardHeader yet as I didn't know what to add for style, 
    // I'm sorry about that
});