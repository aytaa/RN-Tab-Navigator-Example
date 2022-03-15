import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const About = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>This is the About screen</Text>
            <Button
                title="Go to Anasayfa Screen"
                onPress={() => navigation.navigate("Anasayfa")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default About;
