import PlaceCard from "@/components/PlaceCard";
import { ScrollView, Text, View, Button, StyleSheet, Image, TextInput } from "react-native";
import { useState } from "react"; // only way it worked

export default function Index() {
  // Variable
  //let count = 0; // somehow we don't need it now I guess

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    // it works, I wouldn't know how to do it without being told how to set up the scroll feature
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Header />
      <PlaceCard name="Kyoto" category="City" notes="Temples in autumn" />
      <PlaceCard name="Banff" category="Nature" notes="Food" />
      <PlaceCard
        name="Lisbon"
        category="Food"
        notes="Pasteisi de nata tour"
      />
      <Image source={require('wanderlist/assets/images/Portrait.cloud.webp')} />

      {/*Adda button here:) */}
      {/* it works*/}
      <Button
        title={`Count: ${count}`}
        onPress={() => {
          setCount(count + 1)
        }} />

      {/* works well*/}
      <Button
        title="Reset"
        onPress={() => setCount(0)} />
      {/* Title = count var, event counter++ */}

      <TextInput value = {name} 
      onChangeText={setName}
      placeholder="Hello text input : ) "/>

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