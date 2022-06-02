import styled from 'styled-components';

const Wrapper = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .containerAfterLogged {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    color: #f0fff0;
    margin-bottom: 4rem;
  }
`;

export default Wrapper;
