import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.27);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  margin-bottom: 2rem;
  border-radius: 15px;

  h2 {
    text-align: center;
    color: #2f4f4f;
  }
  .container {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 1rem;
  }

  .container ul li {
    list-style: none;
  }

  .section {
    display: grid;

    padding: 0.5rem;
  }

  .section > h2 {
    text-align: start;
    color: #778899;
  }

  .section ul {
    text-align: start;
    width: 13rem;
    margin: 0 auto;
    padding: 0%;
  }

  .section:first-child {
    width: 25%;
    margin-right: 1rem;
  }

  @media (max-width: 1380px) {
    width: 82%;
    margin: 0 auto;
    padding: 0.5rem;
  }
`;

export default Wrapper;
