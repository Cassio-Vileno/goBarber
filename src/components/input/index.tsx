import React, { useCallback, useEffect, useRef, useState } from "react";
import { TextInputProps } from "react-native";
import { useField } from "@unform/core";

import { Conatainer, TextInput, Icon } from "./styles";
import { Value } from "react-native-reanimated";

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}
interface InputValueReference {
    value: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
    const inputElementRef = useRef<any>(null)
    const {registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({value: defaultValue})
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false)

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    },[])

    const handleImputBlur = useCallback(() => {
        setIsFocused(false)

        setIsFilled(!!inputValueRef.current.value)
    }, [])

    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
              inputElementRef.current.value = value;
              inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputElementRef.current.value = "";
                inputElementRef.current.clear();
            }
        })
    }, [fieldName, registerField])
   return (
    <Conatainer isFocused={isFocused}>
    <Icon name={icon} size={20} color={isFocused || isFilled ? '#ff9000' : '#666360'}/>
    <TextInput 
    keyboardAppearance="dark"
    placeholderTextColor="#666360" 
    defaultValue={defaultValue}
    onFocus={() => handleInputFocus()}
    onBlur={() => handleImputBlur()}
    onChangeText={(value) => {
        inputValueRef.current.value = value;
    }}
    {...rest}/>
    </Conatainer>
   )
}
export default Input;