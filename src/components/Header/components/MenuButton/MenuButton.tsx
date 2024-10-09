// import React from 'react'
import styles from './MenuButton.module.less'
import { useSelector, useDispatch } from 'react-redux'
import { selectMenu, setOpen } from '@/store/slice'
// import { useDispatch } from 'react-redux'
// import { setOpen } from '@/store/slice'

function MenuButton() {
  const dispatch = useDispatch()
  const { open } = useSelector(selectMenu)
  const handleOpen = () => {
    dispatch(setOpen(!open))
  }
  return <div className={styles.wrapper} onClick={handleOpen}></div>
}

export default MenuButton
