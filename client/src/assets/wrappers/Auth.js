import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  width: 25%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 6rem auto;
  padding: 4rem 2rem 6rem 2rem;

  h1 {
    color: black;
    text-transform: uppercase;
  }

  form {
    width: 95%;
  }

  form label p {
    margin: 2rem 0 0.25rem 0;
  }

  form label input {
    padding: 5px;
    width: 100%;
  }

  button {
    width: 100%;
    margin: 4rem 0 0 0;
    padding: 8px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    background-color: #2f4f4f;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 6px 10px #888888;
  }

  button:hover {
    filter: brightness(110%);
  }

  button:active {
    transform: translateY(1px);
    box-shadow: 0px 1px 5px #888888;
  }
`;

export default Wrapper;
