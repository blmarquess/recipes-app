import styled from 'styled-components';

const ButtonSD = styled.button`align-self: center;
  background: ${({ bgcolor }) => bgcolor || 'rgba(255, 14, 14, 0.753)'};
  border: solid 1px rgb(211, 219, 213);
  border-radius: 0.3rem;
  bottom: ${(props) => props.bottom || '0'};
  color: ${({ textcolor }) => textcolor || '#fafaf9'};
  cursor: pointer;
  font-size: ${({ fontesize }) => fontesize || '22px'};
  font-weight: 600;
  height: 40px;
  left: ${(props) => props.left || 'none'};
  margin: ${(props) => props.msize || '0'};
  outline: none;
  padding: 0 1rem;
  position: ${(props) => props.position || 'relative'};
  right: ${(props) => props.right || 'none'};
  text-align: center;
  top: ${(props) => props.top || 'none'};
  width: ${(props) => props.wsize || 'auto'};

  &:disabled {
    opacity: 0.6;
  }

  &:focus {
    outline: rgba(248, 159, 86, 0.37);
  }
`;

export default ButtonSD;
