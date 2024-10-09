import LanguageIcon from '@mui/icons-material/Language'
import styles from './RightMenu.module.less'
import { Menu, MenuItem } from '@mui/material'
import { Dropdown } from '@mui/base'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLocale } from '@/store/slice'

function RightMenu() {
  const [anchorEl, setAnchorEl] = useState(null)

  const dispatch = useDispatch()
  // const { locale } = useSelector(selectLocale)
  // const handleOpen = () => {
  //   dispatch(setOpen(!open))
  // }

  const handleMouseLeave = () => {
    setAnchorEl(null)
  }

  const handleMenuCLick = (event) => {
    if (!anchorEl) {
      setAnchorEl(event.currentTarget)
    } else {
      setAnchorEl(null)
    }
  }

  const handleClick = (value) => {
    dispatch(setLocale(value))
  }

  const open = Boolean(anchorEl)
  return (
    <div className={`${styles.wrapper} flex gap-4`}>
      <Dropdown>
        <LanguageIcon
          sx={{ color: 'black' }}
          className={`cursor-pointer`}
          onClick={handleMenuCLick}
          aria-controls={open ? 'menu-list' : undefined}
          aria-haspopup="true"
        />
        <Menu
          id="menu-list"
          disableScrollLock={true}
          anchorEl={anchorEl}
          open={open}
          onClose={handleMouseLeave}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem onClick={() => handleClick('zh')}>中文</MenuItem>
          <MenuItem onClick={() => handleClick('en')}>English</MenuItem>
          {/* <MenuItem>Log out</MenuItem> */}
        </Menu>
      </Dropdown>
    </div>
  )
}

export default RightMenu
