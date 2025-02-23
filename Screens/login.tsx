import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native';
import useAppStore from '../store/appStore';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const setAuthTokens = useAppStore((state) => state.setAuthTokens);

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            if (email === 'maunlu2692@gmail.com' && password === '123456') {
                setAuthTokens({
                    access: 'test-token-123',
                    refresh: 'test-refresh-token'
                });
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('An error occurred, please try again');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../assets/animations/Animation - 1739678934888.json')}
                autoPlay
                loop
                style={styles.animation}
            />
            
            <Text style={styles.title}>Sign In</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity 
                style={styles.loginButton}
                onPress={handleLogin}
                disabled={isLoading}
            >
                {isLoading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Sign In</Text>
                )}
            </TouchableOpacity>

            <Text style={styles.helpText}>
                test için : maunlu2692@gmail.com / 123456
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    animation: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16
    },
    loginButton: {
        backgroundColor: 'red',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center'
    },
    helpText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#666'
    }
});

export default LoginScreen;
