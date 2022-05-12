import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 4rem 1rem 0 1rem;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Wrapper;
