import styled from "styled-components";

const LoadingPage = () => {
  return (
    <Wrapper>
      <h1>Loading...</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  h1 {
    padding: 0;
    color: white;
  }
`;

export default LoadingPage;
