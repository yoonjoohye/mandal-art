import React from 'react';
import styled from 'styled-components';
import Td from './Td';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  @media (max-width: 480px) {
    grid-gap: 0.35rem;
  }
`;

const Tr = ({
  table,
  tableIndex,
  onChange,
  onPlaceholder,
  onVertical,
  onBgColor
}) => {
  return (
    <Row>
      {table.map((data, dataIndex) => {
        return (
          <Td
            key={[dataIndex, tableIndex].join('_')}
            data={data}
            dataIndex={dataIndex}
            tableIndex={tableIndex}
            onChange={onChange}
            onBgColor={onBgColor}
            onPlaceholder={onPlaceholder}
            onVertical={onVertical}
          ></Td>
        );
      })}
    </Row>
  );
};

export default Tr;
