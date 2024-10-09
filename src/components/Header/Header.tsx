import styles from './Header.module.less'
import LeftMenu from './components/LeftMenu/LeftMenu'
import RightMenu from './components/RightMenu/RightMenu'

function Header() {
  return (
    <div className={`${styles.wrapper} w-full px-12 flex items-center z-10`}>
      <div className={`${styles.leftContent}`}>
        <LeftMenu />
      </div>
      <div className={`${styles.logo} flex-1`}></div>
      <div className={`${styles.rightContent}`}>
        <RightMenu />
      </div>
    </div>
  )
}

export default Header