import styles from './LeftMenu.module.less'
import MenuButton from '../MenuButton/MenuButton'
import { Typography } from '@mui/material'

function LeftMenu() {
  return (
    <div className={`${styles.wrapper} h-full flex gap-7`}>
      <MenuButton />
      <div className={`${styles.menu} flex gap-4 items-center`}>
        <Typography variant='h6' className={`text-black`}>产品</Typography>
        <Typography variant='h6' className={`text-black`}>服务</Typography>
        <Typography variant='h6' className={`text-black`}>关于</Typography>
      </div>
    </div>
  )
}

export default LeftMenu