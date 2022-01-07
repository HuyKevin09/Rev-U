import React from "react";
import { View } from "../Themed";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewTopicButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Contacts');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="message-plus" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}
export default NewTopicButton;