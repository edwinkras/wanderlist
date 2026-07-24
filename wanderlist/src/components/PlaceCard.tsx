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
    // my custom settings I've made before seeing the "Mkaing it look like a card" slide in Slides file from Week 2 (github)
    // field: {
    //     backgroundColor: "gray", // the background color as asked in the github file instructions
    //     borderRadius: 7, // puts a little round border around the lines
    //     padding: 10,
    //     flexDirection: "row", // makes it go line by line with "Name: Place" instead of doing line breaks after EACH word
    //     justifyContent: "space-between" // makes it have a space between the two
    //     // (the labels are on left, the actual names/words are on the right)
    // }

    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        gap: 5
    },

    // I didn't do cardHeader yet as I didn't know what to add for style, 
    // I'm sorry about that
});