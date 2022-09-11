import './index.scss';
import HeaderPhoto from '../../assets/images/header-photo.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='container home-picture'>
                <img src={HeaderPhoto} alt="me! Courtesy of Google Streetview" title="me! Courtesy of Google Streetview"/>
            </div>
        </div>
    );
}

export default Home;