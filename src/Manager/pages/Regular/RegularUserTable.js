import styled from 'styled-components';

import Menu from '../../components/Menu';

const TableBlock = styled.table`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border-spacing: 0;
  font-family: 'InterLight';
`;
const TheadBlock = styled.thead`
  width: 100%;
  height: 2rem;
  color: white;
  background-color: #51626f;
`;
const TheadTd1 = styled.td`
  width: 12%;
`;
const TheadTd2 = styled.td`
  width: 20%;
`;
const TheadTd3 = styled.td`
  width: 16%;
`;
const TheadTd4 = styled.td`
  width: 24%;
`;
const TheadTd5 = styled.td`
  width: 28%;
`;

const TrBlock = styled.tr`
  height: 2.5rem;
  &:hover {
    background: #eceaea;
  }
`;

const Td1 = styled.td`
  width: 12%;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
`;
const Td2 = styled.td`
  width: 20%;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
`;
const Td3 = styled.td`
  width: 16%;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
`;
const Td4 = styled.td`
  width: 24%;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
`;
const Td5 = styled.td`
  width: 28%;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
`;

const RegularUserTable = () => {
  return (
    <TableBlock>
      <TheadBlock>
        <tr>
          <TheadTd1>Designation</TheadTd1>
          <TheadTd2>Name</TheadTd2>
          <TheadTd3>Day</TheadTd3>
          <TheadTd4>Time</TheadTd4>
          <TheadTd5>Edit</TheadTd5>
        </tr>
      </TheadBlock>
      <tbody>
        <TrBlock>
          <Td1>교수</Td1>
          <Td2>한동일</Td2>
          <Td3>월, 화, 수, 목, 금</Td3>
          <Td4>PM 15:00 ~ 16:30</Td4>
          <Td5>
            <Menu />
          </Td5>
        </TrBlock>
        <TrBlock>
          <Td1>조교</Td1>
          <Td2>멍멍이</Td2>
          <Td3>화, 목</Td3>
          <Td4>AM 11:00 ~ 13:00</Td4>
          <Td5>
            <Menu />
          </Td5>
        </TrBlock>
        <TrBlock>
          <Td1>학생</Td1>
          <Td2>송인재</Td2>
          <Td3>금</Td3>
          <Td4>PM 19:00 ~ 21:00</Td4>
          <Td5>
            <Menu />
          </Td5>
        </TrBlock>
      </tbody>
    </TableBlock>
  );
};

export default RegularUserTable;
