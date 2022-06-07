import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.85);

  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
  position: relative;
  /* top: -5rem; */
  padding: 1rem;
  z-index: 20;
  border-radius: 0 0 15px 15px;
  transition: all 0.5s;

  :hover {
    top: 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logoContainer {
    cursor: pointer;
  }

  .user {
    display: flex;
  }

  h2 {
    text-transform: uppercase;
  }

  h3 {
    text-transform: capitalize;
    font-size: 1.5rem;
    letter-spacing: 1px;
    align-self: center;
    margin-right: 1.5rem;
  }

  .first {
    color: #00ff7f;
    letter-spacing: 1px;
    background-color: #2f4f4f;
    padding: 10px;
    border-radius: 5px 0px 0px 5px;
  }

  .second {
    color: #2f4f4f;
    letter-spacing: 1px;
    background-color: #00ff7f;
    padding: 10px;
    margin-left: -15px;
    border-radius: 0px 5px 5px 0px;
  }

  button {
    background-color: #2f4f4f;
    height: 4rem;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-right: 1rem;
    padding: 0 2rem;
    border: none;
    box-shadow: 0px 10px 10px #888888;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;
  }

  button:hover {
    filter: brightness(120%);
  }

  button:active {
    transform: translateY(1px);
    box-shadow: 0px 5px 5px #888888;
  }

  .searchInputContainer {
    display: flex;
    align-items: center;
  }

  input {
    width: 16rem;
    height: 50%;
  }

  .btnSearch {
    height: 2rem;

    margin-left: 1rem;
    font-size: 15px;
  }

  .btnMobile {
    display: none;
  }

  @media (max-width: 941px) {
    .logoContainer {
      display: flex;
      flex-direction: column;
      margin-right: 1rem;
    }
    .first {
      padding: 2.5px;
      font-size: 1rem;
      border-radius: 5px 5px 0px 0px;
    }

    .second {
      padding: 1px 6px;
      font-size: 1rem;
      text-align: center;
      margin: auto;
      border-radius: 0px 0px 5px 5px;
    }
  }

  @media (max-width: 863px) {
    .user {
      display: none;
    }

    .btnMobile {
      display: block;
    }

    .btnMobile button {
      font-size: 12px;
      cursor: pointer;
      height: 2rem;
    }
    .searchInputContainer {
      flex-direction: column;
    }
    input {
      margin-bottom: 0.2rem;
    }

    .btnSearch {
      height: 2rem;
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
`;

export default Wrapper;
