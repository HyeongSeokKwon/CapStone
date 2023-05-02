import styled from 'styled-components';

import Button from '../../components/Button';
import BackImage from '../../components/BackImage';
import UserIcon from '../../assets/img/user.png';

const FormStyled = styled.form`
  position: absolute;
  top: 3.5rem;
  left: 16.25rem;
  width: 20rem;
  height: 50rem;
  margin: 3rem 27rem;
  opacity: 0.9;
  z-index: 1000;
`;
const FormBlock = styled.div`
  width: 100%;
  height: 4em;
  font-family: 'InterBold';
  font-weight: 400;
`;
const ImageIcon = styled.div`
  background-image: url(${UserIcon});
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
`;
const LabelBlock = styled.label`
  width: 100%;
  height: 1.5rem;
`;
const NameInputBlock = styled.input`
  width: 100%;
  height: 1.7rem;
  border-radius: 0.25rem;
  padding-left: 0.2rem;
  border: 1px solid gray;
`;
const CheckBoxBlock = styled.div`
  width: 100%;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: left;
  background-color: white;
  border-radius: 4px;
  border: 1px solid gray;
  z-index: -1;
`;
const CheckBlock = styled.input`
  width: 1rem;
  height: 1rem;
  z-index: 1;
`;
const CheckNameBlock = styled.div`
  font-size: 0.8rem;
  color: gray;
`;
const SubmitButton = styled(Button)`
  width: 5rem;
  height: 2rem;
  margin-top: 1rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddMember = () => {
  return (
    <>
      <BackImage />
      <FormStyled>
        <ImageIcon />
        <FormBlock>
          <LabelBlock for="name">이름</LabelBlock>
          <NameInputBlock
            type="text"
            placeholder="이름을 입력하세요."
            id="name"
          />
        </FormBlock>
        <FormBlock>
          <LabelBlock for="number">학번 / 교번</LabelBlock>
          <NameInputBlock
            type="number"
            placeholder="학번 혹은 교번을 입력하세요."
            id="number"
          />
        </FormBlock>
        <FormBlock>
          <LabelBlock for="pwd">비밀번호</LabelBlock>
          <NameInputBlock
            type="password"
            placeholder="비밀번호를 입력하세요."
            id="pwd"
          />
        </FormBlock>
        <FormBlock>
          <LabelBlock for="pwdCheck">비밀번호 확인</LabelBlock>
          <NameInputBlock
            type="password"
            placeholder="위와 같은 비밀번호를 입력하세요."
            id="pwdCheck"
          />
        </FormBlock>
        <FormBlock>
          <LabelBlock for="mail">이메일 주소</LabelBlock>
          <NameInputBlock
            type="email"
            placeholder="이메일 주소를 입력하세요."
            id="mail"
          />
        </FormBlock>
        <FormBlock>
          <LabelBlock for="belong">소속</LabelBlock>
          <CheckBoxBlock>
            <CheckBlock type="radio" name="belong" value="professor" />
            <CheckNameBlock>교수</CheckNameBlock>
            <CheckBlock type="radio" name="belong" value="assistant" />
            <CheckNameBlock>조교</CheckNameBlock>
            <CheckBlock type="radio" name="belong" value="senior" />
            <CheckNameBlock>대학원생</CheckNameBlock>
            <CheckBlock type="radio" name="belong" value="junior" />
            <CheckNameBlock>학생</CheckNameBlock>
          </CheckBoxBlock>
        </FormBlock>
        <SubmitButton>Submit</SubmitButton>
      </FormStyled>
    </>
  );
};

export default AddMember;
