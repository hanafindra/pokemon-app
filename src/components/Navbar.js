import styled from "@emotion/styled";
import { useLocation, useHistory } from "react-router-dom";
import { FaPaw } from 'react-icons/fa';
import { FaReply } from 'react-icons/fa';

const StyledNavbar = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 10px 20px;
  .nav {
    background: rgb(32 180 156);
    color: #fff;
    border-radius: 5px;
    box-shadow: 5px 10px 8px #4a4a4a;
    grid-column: span 8;
    font-size: 1.1em;
    padding: 10px;
    text-align: center;
    :hover {
      box-shadow: 0rem 0rem 0 #222;
      border: 2px solid black;
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  let url = location.pathname === '/' ? '/inventory' : '/';
  let text = location.pathname === '/' ? ' View My Pokemon' : 'View All Pokemon';
  let icon = location.pathname === '/' ? <FaPaw /> : <FaReply />;

  return (
    <StyledNavbar onClick={() => history.push(url)}>
      <div className='nav'>
         {icon} &nbsp; {text}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
