import styled from "styled-components/native";

export const CloseButton = ({ onClose } : { onClose: () => void }) => {
  return (
    <CloseButtonBackground onPress={onClose}>
      <CloseText>✕</CloseText>
    </CloseButtonBackground>
  );
}

const CloseButtonBackground = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 15px;
  z-index: 10;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 40px;
`;

const CloseText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
