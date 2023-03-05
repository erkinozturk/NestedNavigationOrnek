import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

function Profile({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Hello Profile</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate('ProfileEditScreen')} />
        </SafeAreaView>
    );
}

export default Profile;