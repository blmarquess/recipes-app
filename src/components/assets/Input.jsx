import styled from 'styled-components';

const Input = styled.input`background: rgb(250, 252, 250);
  border: solid 1px rgba(107, 117, 136, 0.15);
  border-radius: 0.3rem;
  color: rgba(0, 0, 0, 0.9);
  height: 40px;
  margin: ${(props) => props.msize};
  outline: none;
  padding: 0 1rem;
  width: ${(props) => props.wsize};

  &:focus {
    background: rgba(247, 141, 141, 0.178);
    outline: 2.5px rgba(255, 14, 14, 0.753);
    outline-style: solid;
  }
`;

export default Input;
