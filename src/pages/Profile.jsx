import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
    // const { name } = route.params
    return (
        <View style={styles.main}>
            <Text style={styles.font}>Profile </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    font: {
        fontSize: 20,
    }
});

export default Profile;
