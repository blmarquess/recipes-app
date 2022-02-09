import styled from 'styled-components';

const CardS = styled.section`align-items: space-between;
  align-self: center;
  background: white;
  border: solid 1.5px rgba(235, 235, 235, 0.753);
  border-radius: 0.4rem;
  box-shadow: 0 7px 11px -10px rgba(26, 24, 24, 0.815);
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: center;
  margin-bottom: 15px;
  padding: 0 0 0.3rem;
  width: 140px;

  > span {
    align-items: center;
    background: white;
    display: flex;
    height: 30px;
    justify-content: center;
    margin: auto;
    overflow: hidden;
    padding: 0.1rem;
    text-align: center;
  }
`;

export default CardS;
