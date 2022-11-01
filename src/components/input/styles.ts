import styled, { css } from "styled-components/native"
import FeatherIcon from 'react-native-vector-icons/Feather';

type ContainerProps = {
    isFocused: boolean;
  };

export const Conatainer = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
    ${({isFocused}) => 
      isFocused &&
        css`
          border-width: 1.5px;
          border-color: #ff9000;
        `
        }

  flex-direction: row;
  align-items: center;

`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`

export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`

