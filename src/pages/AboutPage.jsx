import styled from "@emotion/styled";

const AboutPage = () => {
  return (
    <Wrapper>
      <h1>.about me</h1>
      <div className='row'>
        <p>
          Born and raised in Indonesia, currently based in Amsterdam, I'm a
          software developer dedicated to continuously enriching my expertise,
          specializing in JavaScript with ReactJS and NodeJS.
        </p>
        <p>
          While my introduction to the world of tech began in recruitment, it
          proved to be a transformative one that opened my eyes to the boundless
          possibilities available to developers. The ability to craft something
          extraordinary out of nothing has ignited my passion for technology,
          and now I am wholeheartedly committed to evolving myself in the
          pursuit of being able to confidently call myself an 'inventor in
          cyberspace'. Join me on my journey! 🚀
        </p>
        <p>
          Apart from coding, I also enjoy creative endeavors such as creating
          clothes, playing the guitar, singing, and cooking different cuisines.
          In my free time, I love to play video games and go bouldering. 😁
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 60vh;

  .row {
    padding: 0 9rem 0 9rem;
  }

  p {
    text-align: justify;
    font-size: 19px;
  }
`;

export default AboutPage;
