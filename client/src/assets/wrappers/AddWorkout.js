import styled from 'styled-components';

const Wrapper = styled.section`
  .containerForm {
    width: 20rem;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.8px);
    -webkit-backdrop-filter: blur(7.8px);

    padding: 4rem;
    height: 50rem;
    margin: 4rem auto;
  }

  form label input[type='text'] {
    padding: 5px;
    border-radius: 2px;
    border: 1px solid #888888;
  }

  form label input[type='text']:focus {
    outline: none;
  }

  form label input:last-child {
    margin-bottom: 1rem;
  }

  .valid {
    color: #3cb371;
  }

  .invalid {
    color: red;
  }

  textarea {
    display: block;
    padding: 4px;
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
  @media (max-width: 863px) {
    .show {
      display: block;
    }

    .hide {
      display: none;
    }
  }
  @media (max-width: 281px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export default Wrapper;
