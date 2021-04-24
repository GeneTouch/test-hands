import styled from 'styled-components';

const Container = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 44px;
  font-size: 20px;
  text-align: center;
`;
const ScullContainer = styled(Container)`
  background: linear-gradient(180deg, #0d658a 0%, #b0ffb4 100%);
`;
const ExplosionContainer = styled(Container)`
  background: linear-gradient(180deg, #ffb800 0%, #fff7b0 100%);
`;
const EggContainer = styled(Container)`
  background: linear-gradient(180deg, #ad00ff 0%, #ffb0e9 100%);
`;

const ScullIcon = () => <ScullContainer>💀</ScullContainer>;
const ExplosionIcon = () => <ExplosionContainer>💥</ExplosionContainer>;
const EggIcon = () => <EggContainer>🐣</EggContainer>;

export const Icon = {
  scull: ScullIcon,
  explosion: ExplosionIcon,
  egg: EggIcon,
};
