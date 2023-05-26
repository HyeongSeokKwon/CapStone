import styled, { css } from 'styled-components';
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/modules/noshow';

import Button from '../../components/Button';
import UserIcon from '../../assets/img/Penaltiy_User.png';
import LogoutModal from '../../components/LogoutModal';
import Pagenation from '../../components/Pagenation';

const StyledBlock = styled.div`
  width: 70rem;
  height: 22rem;
  border: 1px solid #5f6d7c;
  border-radius: 0.25rem;
  padding: 1rem;
  position: relative;
`;
const TitleBlock = styled.div`
  font-family: 'InterBold';
  font-weight: 700;
  color: #5f6d7c;
  margin-bottom: 1.5rem;
`;
const UserRowBlock = styled.div`
  display: flex;
  width: 60rem;
  height: 7rem;
  margin: 0.5rem 2rem;
  justify-content: space-between;
`;
const UserBlock = styled.div`
  display: flex;
  height: 6rem;
  width: 30rem;
  border-bottom: 1px solid #5f6d7c;
  margin-right: 5rem;
  ${(props) =>
    props.last &&
    css`
      border: none;
    `}
`;
const ImageInfoBlock = styled.div`
  width: 24em;
  height: 6rem;
  display: flex;
`;
const ImageIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  background-image: url(${UserIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;
const TextBlock = styled.div`
  width: 16rem;
  height: 5rem;
`;
const InfoBlock = styled.div`
  font-weight: 300;
  color: #5f6d7c;

  ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `}
`;
const DeleteButton = styled(Button)`
  width: 5rem;
  height: 2.5rem;
  font-family: 'InterLight';
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;
  border-radius: 0.25rem;
  margin-top: 1rem;
  cursor: pointer;
  color: #5f6d73;
  background-color: rgb(209, 217, 226);
  &:hover {
    background-color: rgb(81, 98, 111);
    color: white;
  }
`;

const Penalty = () => {
  const infos = useSelector(({ noshow }) => noshow.infos);
  const dispatch = useDispatch();

  //모달 구현
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const onRemoveClick = (infoId) => {
    setModal(true);
    setId(infoId);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = useCallback(() => {
    setModal(false);
    dispatch(remove(id));
  }, []);

  const [page, setPage] = useState(1);
  const offset = (page - 1) * 4;

  //패널티 회원 정보
  let InfoLists = [];
  let cnt = 0;
  for (let i = offset; i < infos.length; i += 2) {
    let Info = [];
    cnt++;
    if (cnt === 3) break;
    for (let j = 0; j < 2; j++) {
      if (infos.length === i + j) break;
      Info.push(
        <UserBlock key={infos[i + j].id}>
          <ImageInfoBlock>
            <ImageIcon />
            <TextBlock>
              <InfoBlock bold={true}>
                {infos[i + j].name}({infos[i + j].number})
              </InfoBlock>
              <InfoBlock>{infos[i + j].designation}</InfoBlock>
              <InfoBlock>Panalty : {infos[i + j].count}</InfoBlock>
              <InfoBlock>Email : {infos[i + j].email}</InfoBlock>
            </TextBlock>
          </ImageInfoBlock>
          <DeleteButton onClick={() => onRemoveClick(infos[i + j].id)}>
            Delete
          </DeleteButton>
        </UserBlock>,
      );
    }
    InfoLists.push(<UserRowBlock key={i}>{Info}</UserRowBlock>);
  }

  return (
    <StyledBlock>
      <TitleBlock>패널티 회원 관리</TitleBlock>
      {InfoLists}
      <LogoutModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title="패널티 회원 삭제"
        description="정말로 삭제하시겠습니까?"
      />
      <Pagenation
        noflex={true}
        total={infos.length}
        limit={4}
        page={page}
        setPage={setPage}
      />
    </StyledBlock>
  );
};

export default Penalty;
