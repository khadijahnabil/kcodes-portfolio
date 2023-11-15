import TypeIt from "typeit-react";
import styled from "@emotion/styled";

// add more things! I am a frontend, ambitious, passionate, fun developer.
// find a way to make "developer" into pink color

const LandingPage = () => {
  return (
    <Wrapper>
      <TypeIt
        as={"h1"}
        options={{
          lifeLike: true,
          deleteSpeed: 100,
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Hi, I'm Khadijha")
            .pause(750)
            .delete(2)
            .pause(750)
            .type("ah!")
            .pause(1500)
            .break()
            .type("I am a developer.")
            .pause(1500)
            .move(-11)
            .type("n ambitious")
            .pause(1500)
            .delete(11)
            .type(` passionate`)
            .pause(1500)
            .delete(11)
            .type(" curious")
            .pause(1500)
            .delete(8)
            .pause(500)
            .move(12);
          return instance;
        }}></TypeIt>
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
    margin: 0;
  }
`;

export default LandingPage;
