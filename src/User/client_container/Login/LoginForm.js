import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, login } from '../../store/modules/auth';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const LoginFormBlock = styled.div``;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: lightgray;
  }
  & + & {
    margin-top: 1rem;
  }
`;
const StyledButton = styled.button`
  background-color: #c3002f;
  width: 16rem;
  height: 3rem;
  color: white;
  font-size: 1.125rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-top: 1rem;

  cursor: pointer;
  :hover {
    background-color: black;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.7rem;
  margin-top: 1rem;
`;

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(['id']);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { user_no, password } = form;
    dispatch(login({ user_no, password }));
  };

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('아이디와 패스워드를 다시 한 번 확인해주세요.');
      return;
    }
    if (auth) {
      console.log(form.user_no);
      console.log('로그인 성공');
      if (form.user_no !== '') {
        if (form.user_no === 'admin') {
          navigate('admin');
        } else {
          navigate('main');
        }
        try {
          localStorage.setItem('user', JSON.stringify(auth));
          setCookie('user', auth);
        } catch (e) {
          console.log('localStorage is not working');
        }
        dispatch(changeField({ key: 'username', value: '' }));
        dispatch(changeField({ key: 'password', value: '' }));
      }
    }
  }, [auth, authError, dispatch, form.user_no, navigate]);
  return (
    <>
      <LoginFormBlock>
        <form onSubmit={onSubmit}>
          <StyledInput
            autoComplete="user_no"
            name="user_no"
            placeholder="아이디"
            onChange={onChange}
            value={form.user_no}
          />
          <StyledInput
            autoComplete="password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <StyledButton>로그인</StyledButton>
        </form>
      </LoginFormBlock>
    </>
  );
};

export default LoginForm;
