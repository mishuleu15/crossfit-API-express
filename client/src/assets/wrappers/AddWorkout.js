import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);

  padding: 4rem;
  height: 40rem;
  margin: 4rem auto;

  textarea {
    display: block;
  }

  textarea:last-child {
    margin-bottom: 1rem;
  }

  form label p {
    margin: 1rem 0 0 0;
  }

  button {
    width: 100%;
    cursor: pointer;
    padding: 10px 0 10px 0;
  }
`;

export default Wrapper;
