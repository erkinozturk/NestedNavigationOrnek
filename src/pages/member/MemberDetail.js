import React from "react";
import { Text, SafeAreaView, Button } from "react-native";

function MemberDetail({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Hello Member Detail</Text>
            <Button title="Edit Member" onPress={() => navigation.navigate('MemberUpdateScreen')} />
        </SafeAreaView>
    );
}

export default MemberDetail;