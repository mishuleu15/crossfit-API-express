import Wrapper from '../assets/wrappers/Alert';

const Alert = ({ alertMessage }) => {
  if (Object.keys(alertMessage).length === 0) {
    alertMessage = '';
  }

  return (
    <Wrapper style={alertMessage ? { display: 'block' } : { display: 'none' }}>
      <p>{alertMessage}</p>
    </Wrapper>
  );
};

export default Alert;
