import React from 'react';
import { Button } from 'react-native';

interface IButtonProps {
    text?: string;
    color: 'blue' | 'grey';
    onPress: () => void;
}

function BasicButton({
    text = 'Button',
    color,
    onPress,
}: IButtonProps): JSX.Element {
    return (
        <Button
            color={color === 'blue' ? '#43a1c9' : '#363636'}
            title={text}
            onPress={onPress}
        />
    );
}

export default BasicButton;
