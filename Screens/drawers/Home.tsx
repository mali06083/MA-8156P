import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgComponent from '../../assets/SVGR/Camera';
import useAppStore from '../../store/appStore';

const Home = () => {
    const logout = useAppStore((state) => state.logout);
    
    return (
        <View style={styles.container}>
            <SvgComponent />
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity 
                style={styles.logoutButton}
                onPress={logout}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
    },
    logoutButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Home; 