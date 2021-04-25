import { useState } from 'react';
import styled from 'styled-components';
import { Cells, CellsProps, CellType } from '../Cells/Cells';
import uniqueId from 'lodash/uniqueId';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
  height: 100vh;
`;
const Title = styled.h6`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.0015em;
  color: #ffffff;
  text-align: center;
  margin: 0;
`;
const Button = styled.button`
  background: #5a3472;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 104%;
  text-align: center;
  letter-spacing: 0.0125em;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 10px 0px;
  width: 100%;
  margin-top: 10px;
`;
const CellsStyled = styled(Cells)`
  margin-top: 22px;
`;

const RANDOM_CHANCE = 0.5;

export const Main = () => {
  const [cells, setCells] = useState<CellsProps['cells']>([]);

  const handleClick = () => {
    const newCellType = Math.random() > RANDOM_CHANCE ? CellType.dead : CellType.alive;
    const newCell = { type: newCellType, id: uniqueId() };
    const newCells = [newCell, ...cells];

    if (newCells.length > 2) {
      if (newCells[1].type === CellType.alive && newCells[2].type === CellType.alive) {
        newCells[0].type = CellType.life;
      } else if (
        newCells[0]?.type === CellType.dead &&
        newCells[1]?.type === CellType.dead &&
        newCells[2]?.type === CellType.dead &&
        newCells[3]?.type === CellType.life
      ) {
        newCells[3].type = CellType.dead;
      }
    }

    setCells(newCells);
  };

  return (
    <Container>
      <Title>Клеточное наполнение</Title>
      <CellsStyled cells={cells} />
      <Button onClick={handleClick}>сотворить</Button>
    </Container>
  );
};
