import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/base/container/ScreenWrapper';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ScreenWrapper >
        <View >

            <Button 
                title="Go To Login" 
                onPress={() => navigation.navigate('Login' as never)}
            />
        </View>
        </ScreenWrapper>
    );
}
export default HomeScreen;