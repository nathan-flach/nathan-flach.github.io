import './index.scss';
import { Link } from 'react-router-dom';
import nathanflachresume from '../../assets/files/nathan-flach-resume.pdf';

const Header = () => {
  return (
     <div className="headerContainer">
        <div className={"title"}>
          <Link to="/">Nathan Flach</Link>
        </div>
        <div className="navlist">
          <Link to="/about">about</Link>
          <Link to="/projects">projects</Link>
          <Link to={nathanflachresume} target="_blank" rel='noreferrer'>resume</Link>          
        </div>       
     </div> 
  );
}

export default Header;
