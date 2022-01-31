import styled from 'styled-components';

const Layout = styled.section`display: flex;

  @media ( min-width : 200px ) and ( max-width : 1600px ) {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    width: 360;
  }
`;

export default Layout;
