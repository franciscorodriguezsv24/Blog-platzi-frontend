import StyleCss from './NavBar.module.css'
import Unkwon from '../../../public/Unknown_person.jpg'
import googleFonts from 'google-fonts';
import Logo from '../../../public/blogger-logo-icon-png-2.png'
import { FaUserFriends, FaHome, FaUser, FaSearch} from 'react-icons/fa'



googleFonts.add({
  'Roboto': true,
  'Lato': [400, 700], // Ejemplo con múltiples pesos
});


const NavBar = () => {

  return(
    <>
      <nav className={StyleCss.container}>
        <div className={StyleCss.searchContainer}>
          <div className={StyleCss.containerLogo}>
            <img src={Logo} alt="Logo" className={StyleCss.searchLogo}/>
          </div>
          <input className={StyleCss.searchInput} type="text" placeholder="Search.."/>
          <button className={StyleCss.searchButton}><FaSearch size={25}/></button>
        </div>
        <ul className={StyleCss.listContainer}>
        <div>
          <FaHome size={65}/>
        </div>
        <div>
          <FaUserFriends size={65}/>  
        </div>
        <div>
          <FaUser size={55}/>
        </div>
          
        </ul>
        <div className={StyleCss.profileContainer}>
          <div className={StyleCss.profileImgContainer}>
            <img src={Unkwon} alt="profile-img" className={StyleCss.profileImg}/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar