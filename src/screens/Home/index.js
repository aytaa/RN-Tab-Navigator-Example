import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>This is the Home screen</Text>
            <Button
                title="Go to İletişim Screen"
                onPress={() => navigation.navigate("İletişim")}
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

export default Home;

