import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to='/' className='logo'>
        <img src={logo} alt='khadijah nabil logo' />
      </Link>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/'>.home</Link>
        </li>

        <li className='nav-item'>
          <Link to='about'>.about me</Link>
        </li>

        <li className='nav-item'>
          <Link to='projects'>.projects</Link>
        </li>

        <li className='nav-item'>
          <Link to='contact'>.contact me</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .logo {
    margin-right: auto;
    margin-left: 2rem;
  }

  img {
    width: 5rem;
    height: 3rem;
  }
  ul {
    list-style-type: none;
    display: flex;
  }

  li {
    margin-right: 2rem;
  }
`;

export default Navbar;
