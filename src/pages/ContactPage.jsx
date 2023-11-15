import styled from "@emotion/styled";
import profile from "../assets/profile-picture.jpeg";

const ContactPage = () => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img
          src={profile}
          alt='profile-picture'
          style={{ width: "320px", height: "320px", objectFit: "cover" }}
        />
      </div>
      <div className='content'>
        <h1>Khadijah Nabil</h1>
        <p className='job-title'>Frontend Developer</p>
        <div className='big-links'>
          <a href='mailto:nabilkhadijah7@gmail.com'>
            <button type='button' className='big-link-btn email-btn'>
              <i className='fa-solid fa-envelope'></i> Email
            </button>
          </a>
          <a
            href='https://www.linkedin.com/in/khadijahnabil/'
            target='_blank'
            rel='noreferrer'>
            <button type='button' className='big-link-btn linkedin-btn'>
              <i className='fa-brands fa-linkedin'></i> LinkedIn
            </button>
          </a>
        </div>
        <div className='small-links'>
          <a
            href='https://twitter.com/khadijahnabil7'
            target='_blank'
            rel='noreferrer'>
            <button type='button' className='small-link-btn'>
              <i className='fa-brands fa-twitter' />
            </button>
          </a>
          <a
            href='https://www.instagram.com/khadeeeej/'
            target='_blank'
            rel='noreferrer'>
            <button type='button' className='small-link-btn'>
              <i className='fa-brands fa-instagram' />
            </button>
          </a>
          <a
            href='https://github.com/khadijahnabil'
            target='_blank'
            rel='noreferrer'>
            <button type='button' className='small-link-btn'>
              <i className='fa-brands fa-github' />
            </button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 60vh;
  max-width: 80%;
  border-radius: 3px;
  margin: 2rem 9rem 0 9rem;

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 867px) {
    .img-container {
      margin-top: 25px;
    }
  }

  img {
    border-radius: 10px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    font-size: 2.5rem;
    padding: 0;
  }

  .job-title {
    font-size: 1.25rem;
  }

  .big-links {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    width: 14rem;

    .big-link-btn {
      width: 6rem;
      height: 2rem;
      font-family: inherit;
      cursor: pointer;
      border-radius: 10px;
      border: none;
    }
    .big-link-btn:hover {
      opacity: 80%;
      transition: 0.4s ease;
    }
    .email-btn {
      background-color: whitesmoke;
      color: black;
    }
    .linkedin-btn {
      background-color: #0c6dfd;
    }
  }

  .small-links {
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
    padding: 20px;
    background-color: #161619;
    border-radius: 10px;
    width: 12rem;
    .small-link-btn {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
    .small-link-btn:hover {
      background-color: #ff4b91;
      transition: 0.4s ease;
    }
  }
`;

export default ContactPage;
