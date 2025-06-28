import { useNavigate } from 'react-router-dom'
import styles from './Header.module.less'
import LeftMenu from './components/LeftMenu/LeftMenu'
import RightMenu from './components/RightMenu/RightMenu'
import logoImg from '@/assets/images/img-logo.svg'

function Header() {
  const navigate = useNavigate()
  return (
    <div className={`${styles.wrapper} w-full px-12 flex items-center z-10`}>
      <div className={`${styles.leftContent}`}>
        <LeftMenu />
      </div>
      <div className={`${styles.logo} flex-1 h-full flex justify-center items-center`}>
        <img src={logoImg} className={`mt-8 h-full cursor-pointer`} onClick={()=>navigate('/')}></img>
      </div>
      <div className={`${styles.rightContent}`}>
        <RightMenu />
      </div>
    </div>
  )
}

export default Header