import styles from './LeftMenu.module.less'
import MenuButton from '../MenuButton/MenuButton'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { selectMenu, setOpen } from '@/store/slice'
import { useIntl } from 'react-intl'

function LeftMenu() {
  const intl = useIntl()
  const dispatch = useDispatch()

  const { open } = useSelector(selectMenu)
  const handleClickProduct = () => {
    dispatch(setOpen(!open))
  }
  return (
    <div className={`${styles.wrapper} h-full flex gap-7`}>
      <MenuButton />
      <div className={`${styles.menu} flex gap-4 items-center`}>
        <Typography
          variant="h6"
          className={`text-black cursor-pointer`}
          onClick={handleClickProduct}
        >
          {intl.formatMessage({ id: 'lp.header.product' })}
        </Typography>
        <Typography variant="h6" className={`text-black`}>
          {intl.formatMessage({ id: 'lp.header.service' })}
        </Typography>
        <Typography variant="h6" className={`text-black`}>
        {intl.formatMessage({ id: 'lp.header.about' })}
        </Typography>
      </div>
    </div>
  )
}

export default LeftMenu
