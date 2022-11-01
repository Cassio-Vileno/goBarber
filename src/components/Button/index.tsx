import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Conatainer, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Conatainer {...rest}>
        <ButtonText >{ children }</ButtonText>
    </Conatainer>
)
export default Button;