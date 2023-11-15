import styled from "@emotion/styled";
import { links } from "../utils/links";

const Footer = () => {
  return (
    <Wrapper>
      <hr />
      <div className='info'>
        <div className='row'>
          <div className='column'>
            <p className='label'>follow me</p>
            <ul>
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <a href={url} target='_blank'>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='column'>
            <p className='contact label'>reach me</p>
            <a href='mailto:nabilkhadijah7@gmail.com' className='contact'>
              nabilkhadijah7@gmail.com
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  bottom: 0;
  width: 100%;
  padding-bottom: 2rem;
  padding-top: 2rem;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 3rem;
  }

  .info {
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }

  .label {
    opacity: 50%;
  }

  .contact {
    display: flex;
    justify-content: flex-end;
  }
`;

export default Footer;
