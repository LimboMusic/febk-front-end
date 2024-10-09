
import LanguageIcon from '@mui/icons-material/Language'
import styles from './RightMenu.module.less'
import { Menu, MenuItem } from '@mui/material'
import { Dropdown } from '@mui/base'
import { useState } from 'react'

function RightMenu() {
  const [anchorEl, setAnchorEl] = useState(null)

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
          // MenuListProps={{
          //   onMouseEnter: handleMouseEnter,
          //   onMouseLeave: handleMouseLeave,
          // }}
        >
          <MenuItem>中文</MenuItem>
          <MenuItem>English</MenuItem>
          {/* <MenuItem>Log out</MenuItem> */}
        </Menu>
      </Dropdown>
    </div>
  )
}

export default RightMenu
