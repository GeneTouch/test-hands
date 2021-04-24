import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
`;
const IconContainer = styled.div`
  margin-right: 16px;
`;
const TextContainer = styled.div``;
const Title = styled.div`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.0015em;
  color: #000000;
  margin: 0;
`;
const Label = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0025em;
  color: #000000;
`;

export interface CardProps {
  icon: React.ElementType;
  title: string;
  label: string;
}

export const Card = ({ icon: Icon, title, label }: CardProps) => {
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Label>{label}</Label>
      </TextContainer>
    </Container>
  );
};
