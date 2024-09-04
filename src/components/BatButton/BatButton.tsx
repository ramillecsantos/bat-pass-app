import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenereteButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
     Clipboard.setStringAsync(pass)   
    }

    return (
        <>
            <BatTextInput pass={pass}/>

            <Pressable
                onPress={handleGenereteButton}
                style={styles.button}
            >
            <Text style={styles.text}>GENERETE</Text>
            </Pressable>

            <Pressable
                onPress={handleCopyButton}
                style={styles.button}
            >
            <Text style={styles.text}>✨ COPY</Text>
            </Pressable>
        </>
    );
    }