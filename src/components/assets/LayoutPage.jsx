import styled from 'styled-components';

const LayoutPage = styled.section`align-items: center;
  background: rgba(255, 254, 254, 0.83);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 360;
  padding: 0 0.5rem;
  width: 360;

  @media ( min-width : 200px ) and ( max-width : 1600px ) {
    align-items: space-evenly;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }
`;

export default LayoutPage;
