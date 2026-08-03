import PlaceCard from "@/components/PlaceCard";
import { ScrollView, Text, View, Button, StyleSheet, Image, TextInput } from "react-native";
import { useState } from "react"; // only way it worked

export default function Index() {
  // Variable
  //let count = 0; // somehow we don't need it now I guess

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("");
  const [places, setPlaces] = useState([]);
  const [errors, setErrors] = useState({}); // you can put any symbol between useState() '
  // (that's good to know)

  type Place = {
    id: string;
    name: string;
    notes: string;
    category: "city" | "nature" | "food" | "other";
  }

  const addPlace = (place) => {
    // Setter
    setPlaces([
      // Load all places from Reat State
      ...places,

      // Define the new Place object to be added
      {
        id: Date.now().toString(),
        name, // name : name
        notes, // notes: notes
        category, // category: category

      },

    ]);

    // this is a dev tool
    // to debug (check for issues or for general output to help a dev)
    // console.log(places) // it works now
  };

  // function validate() {
  //   const next = {};
  //   if (!name.trim()) next.name = "Name is required";
  //   if (!notes.trim()) next.notes = "Notes can't be empty";
  //   const allowed = ["city", "nature", "food", "other"];
  //   if (!allowed.includes(category.trim().toLowerCase())) {
  //     next.category = `Category must be one of: ${allowed.join(", ")}. `;
  //   }
  //   setErrors(next);
  //   return Object.keys(next).length === 0;
  // }

  return (
    // it works, I wouldn't know how to do it without being told how to set up the scroll feature
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Header />
      <Image
        source={{
          uri: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt5f5d481d420b4802/64e0b6237b637534f74167cb/0_-_BCC-2023-BERLIN-LANDMARKS-0.webp?fit=crop&auto=webp&quality=60&crop=smart&format=avif"
        }}
        style={{ width: 380, height: 200, borderRadius: 15}}
      />
      <PlaceCard name="Kyoto" category="City" notes="Temples in autumn" />
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <TextInput
        value={notes}
        onChangeText={setNotes}
        placeholder={"Notes"} />
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder={"Category"} />
      {/* <PlaceCard name="Banff" category="Nature" notes="Food" />
      <PlaceCard
        name="Lisbon"
        category="Food"
        notes="Pasteisi de nata tour"
      /> */}
      {/* <Image source={require('wanderlist/assets/images/Portrait.cloud.webp')} /> */}

      <Button title="Add a place" onPress={addPlace} />

      {/* and THISSSS, geos for an output into the bottom of the screen, as a line everytime the ADD Button is pressed */}
      {places.map((placeObject) => (
        <Text key={placeObject.id}>
          {placeObject.name} - {placeObject.category}
        </Text>
      ))}
      {/* <Button
        title="Add a place"
        onPress={() => {
          setPlaces([
            // Load all places from Reat State
            ...places, // I challenge you to remove this and test

            // Define the new Place Object to be added
            {
              id: Date.now().toString(),
              name, // name: name,
              notes, // notes: notes,
              category, //category: category
            },
          ]);
        }} /> */}

      {/*Adda button here:) */}
      {/* it works*/}
      {/* <Button
        title={`Count: ${count}`}
        onPress={() => {
          setCount(count + 1)
        }} /> */}

      {/* works well*/}
      {/* <Button
        title="Reset"
        onPress={() => setCount(0)} /> */}
      {/* Title = count var, event counter++ */}

      {/* <TextInput value={name}
        onChangeText={setName}
        placeholder="Hello text input : ) " /> */}

      {/* <Button // wow, this is really cool
        title="Press Me"
        onPress={() => window.alert('Simple Button pressed')}
      // didn't think an actual window would open */}
    </ScrollView>
  )
  // the image worked
}

// Did this before doing the "Go further" section. 
// Will try more on it when I have time again!
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.appName}>WanderList</Text>
      <Text style={styles.tagline}>Places you want to see</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 68, // I changed it to make it look cleaner 
    // (and not stuck to the camera layout on the emulator)
    alignItems: "center"
  },
  appName: {
    fontSize: 28,
    fontWeight: "700"
  },
  tagline: {
    fontSize: 18,
    color: "#666"
  }
});