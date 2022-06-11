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

  .spinner {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    color: #f0fff0;
    margin-bottom: 4rem;
  }

  @media (max-width: 941px) {
    .container {
      grid-template-columns: 1fr;
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export default Wrapper;
