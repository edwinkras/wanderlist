import PlaceCard from "@/components/PlaceCard";
import { ScrollView, Text, View, Button, StyleSheet, Image, TextInput } from "react-native";
import { useState } from "react"; // only way it worked
import { Place } from "@/lib/types";

export default function Index() {
  // Variable
  //let count = 0; // somehow we don't need it now I guess

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("");

  const [places, setPlaces] = useState<Place[]>([]);

  type FormErrors = {
    name?: string;
    notes?: string;
    category?: string;
  }
  const [errors, setErrors] = useState<FormErrors>({}); // you can put any symbol between useState() '
  // (that's good to know)

  const clearForm = () => {
    setName("");
    setNotes("");
    setCategory("");
  }

  const addPlace = () => {
    if (!validate()) return;

    // Define the new Place Object to be added
    const newPlace: Place = {
      id: Date.now().toString(),
      name: name.trim(), // name : name
      notes: notes.trim(), // notes: notes
      category: category.trim().toLocaleLowerCase() as Place["category"], // category: category
      // the reason we did that ISSS because the types has different features/words for the category shit

    }

    console.log("Before: ", places);

    // Setter
    setPlaces([
      ...places,
      newPlace,
    ]);

    console.log("After: ", places);

    clearForm();

    // this is a dev tool
    // to debug (check for issues or for general output to help a dev)
    // console.log(places) // it works now
  };

  function validate() {
    const next: FormErrors = {};

    if (!name.trim()) next.name = "Name is required";
    if (!notes.trim()) next.notes = "Notes can't be empty";

    const allowed = ["city", "nature", "food", "other"];
    if (!allowed.includes(category.trim().toLowerCase())) {
      next.category = `Category must be one of: ${allowed.join(", ")}. `;
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  return (
    // it works, I wouldn't know how to do it without being told how to set up the scroll feature
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Header />
      <Image
        source={{
          uri: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt5f5d481d420b4802/64e0b6237b637534f74167cb/0_-_BCC-2023-BERLIN-LANDMARKS-0.webp?fit=crop&auto=webp&quality=60&crop=smart&format=avif"
        }}
        style={{ width: 380, height: 200, borderRadius: 15 }}
      />
      {/* if category had "City" instead of "city", it would throw an error/red line due to us already putting the words 
      that can count for category (in types.ts which is connected to PlaceCard.tsx)*/}
      {/* no need for this anymore as now we can our own information/ideas/words */}
      {/* <PlaceCard id="123" name="Kyoto" category="city" notes="Temples in autumn" /> */}

      {places.map((placeObject) => (
        <PlaceCard
          key={placeObject.id} // this IS for the id of the map/key itself
          id={placeObject.id} // this one IS for the id, for the Place (the type)
          name={placeObject.name}
          notes={placeObject.notes}
          category={placeObject.category}
        />
      ))
      }
      <TextInput value={name} onChangeText={setName} placeholder="Name" />

      {
        errors.name && (
          <Text style={{ color: "red" }}>{errors.name}</Text>
        )
      }

      <TextInput
        value={notes}
        onChangeText={setNotes}
        placeholder={"Notes"} />

      {
        errors.notes && (
          <Text style={{ color: "red" }}>{errors.notes}</Text>
        )
      }
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder={"Category"} />

      {
        errors.category && (
          <Text style={{ color: "red" }}>{errors.category}</Text>
        )
      }

      <Button title="Add a place" onPress={addPlace} />
    </ScrollView >
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
    paddingVertical: 30, // I changed it to make it look cleaner 
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