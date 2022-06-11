import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  margin-bottom: 2rem;
  border-radius: 15px;

  .warningMessage {
    text-align: center;
  }

  h2 {
    text-align: center;
    color: #2f4f4f;
    text-transform: capitalize;
  }

  .title {
    text-decoration: underline;
  }
  .container {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 1rem;
  }

  .container ul li {
    list-style: none;
    text-align: left;
  }

  .section {
    display: grid;

    padding: 0.5rem;
  }

  .section h2 {
    text-align: left;
    color: #778899;
  }

  .section ul {
    text-align: start;
    width: 13rem;
    padding: 0%;
  }

  .section:first-child {
    width: 25%;
    margin-right: 1rem;
  }

  .btns {
    display: flex;
    justify-content: space-between;
  }

  .deleteBtn {
    color: red;
    margin: 0.5rem 1rem 0;
    background: transparent;
    border: none;
    font-size: 1.75rem;
    cursor: pointer;
    transition: all 0.1s;
  }

  .deleteBtn:hover {
    transform: scale(130%);
  }

  .deleteBtn:active {
    transform: scale(100%);
  }

  .updateBtn {
    color: #fff;
    background-color: #2f4f4f;
    margin: 0.5rem 0 0 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;
  }

  .updateBtn:hover {
    filter: brightness(120%);
  }

  .updateBtn:active {
    transform: translateY(2px);
  }

  @media (max-width: 1380px) {
    width: 82%;
    margin: 0 auto;
    padding: 0.5rem;
  }

  @media (max-width: 941px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 863px) {
  }
`;

export default Wrapper;
