import './index.scss';
import HeaderPhoto from '../../assets/images/header-photo.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='container home-picture'>
                <img src={HeaderPhoto} alt="courtesy of Google Streetview" title="courtesy of Google Streetview"/>
            </div>
        </div>
    );
}

export default Home;