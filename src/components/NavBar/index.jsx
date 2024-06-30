import StyleCss from './NavBar.module.css'
import Unkwon from '../../../public/Unknown_person.jpg'

const NavBar = () => {

  return(
    <>
      <nav className={StyleCss.container}>
        <ul className={StyleCss.listContainer}>
          <a>About You</a>
          <a>Profile</a>
          <a>Dashboard</a>
          <a>Friends</a>
        </ul>

        <div className={StyleCss.profileImgContainer}>
          <img src={Unkwon} alt="profile-img" className={StyleCss.profileImg}/>
        </div>
      </nav>
    </>
  )
}

export default NavBar