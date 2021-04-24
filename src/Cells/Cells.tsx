import {
  Card as Cell,
  CardProps as CellProps,
  Container as CardContainerStyle,
} from '../Card/Card';
import styled from 'styled-components';
import { Icon } from '../Icons/Icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 124px);
  overflow-y: auto;

  ${CardContainerStyle} {
    margin-top: 4px;
  }
  ${CardContainerStyle}:first-of-type {
    margin-top: 0px;
  }
`;

export enum CellType {
  alive = 'alive',
  death = 'death',
  life = 'life',
}

const cells = {
  death: {
    title: 'Мёртвая',
    label: 'или прикидывается',
    icon: Icon.scull,
  },
  alive: {
    title: 'Живая',
    label: 'и шевелится!',
    icon: Icon.explosion,
  },
  life: {
    title: 'Жизнь',
    label: 'Ку-ку!',
    icon: Icon.egg,
  },
};

const getCellProps = (type: CellType): CellProps => {
  return cells[type];
};

export interface CellsProps {
  className?: string;
  cells: { id: string; type: CellType }[];
}

export const Cells = ({ cells, className }: CellsProps) => {
  return (
    <Container className={className}>
      {cells.map(({ type, id }) => {
        return <Cell {...getCellProps(type)} key={id} />;
      })}
    </Container>
  );
};
