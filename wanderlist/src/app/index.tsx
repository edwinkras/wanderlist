import PlaceCard from "@/components/PlaceCard";
import { ScrollView, Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  return (
    // it works, I wouldn't know how to do it without being told how to set up the scroll feature
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Header/>
      <PlaceCard name="Kyoto" category="City" notes="Temples in autumn" />
      <PlaceCard name="Banff" category="Nature" notes="Food" />
      <PlaceCard
        name="Lisbon"
        category="Food"
        notes="Pasteisi de nata tour"
      />


      <Button // wow, this is really cool
        title="Press Me"
        onPress={() => window.alert('Simple Button pressed')}
      // didn't think an actual window would open
      />
    </ScrollView>
  )
}

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