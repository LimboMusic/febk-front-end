import { Box, Divider, Modal, Slide, Typography, Fade } from '@mui/material'
import styles from './ExpandableMenu.module.less'
// import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectMenu, setOpen } from '@/store/slice'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

function ExpandableMenu() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { open } = useSelector(selectMenu)
  const [state, setState] = useState('menuList')
  // const [open, setOpen] = useState(false)
  // const handleOpen = () => {
  //   dispatch(setOpen(true))
  // }
  const handleClose = () => {
    dispatch(setOpen(false))
    // setOpen(false)
  }

  const menuData = [
    {
      label: '产品',
      handleClick: () => {
        setState('productList')
      },
    },
    {
      label: '服务',
      handleClick: () => {
        // setState('productList')
      },
    },
    {
      label: '行业',
      handleClick: () => {
        // setState('productList')
      },
    },
    {
      label: '新闻中心',
      handleClick: () => {
        // setState('productList')
      },
    },
    {
      label: '关于',
      handleClick: () => {
        // setState('productList')
      },
    },
  ]

  const userMenuData = [
    {
      label: '联系人',
      handleClick: () => {
        // setState('productList')
      },
    },
    {
      label: '在线购买',
      handleClick: () => {
        // setState('productList')
      },
    },
  ]

  const productMenu = [
    {
      label: '深沟球轴承',
      handleClick: () => {
        dispatch(setOpen(false))
        navigate('/products/deep-groove-ball-bearings')
      },
    },
  ]

  useEffect(() => {
    setState('menuList')
  }, [open])

  return (
    <div className={`${styles.wrapper}`}>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Slide direction="right" in={open} mountOnEnter unmountOnExit>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100vh',
              width: '36rem', // 控制弹窗的宽度
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 8,
              borderRight: '2px solid #000',
            }}
          >
            {state === 'menuList' && (
              <Fade in={state === 'menuList'} timeout={1000}>
                <div className={`flex flex-col gap-6`}>
                  <div
                    className={`${styles.linkContainer} flex flex-col gap-4`}
                  >
                    {menuData.map((item) => {
                      return (
                        <div className={`${styles.navlink}`} key={item.label}>
                          <Typography
                            variant="h5"
                            className={`cursor-pointer hover:text-[#0749bc]`}
                            style={{ fontWeight: '500', fontSize: '32px' }}
                            onClick={item.handleClick}
                          >
                            {item.label}
                          </Typography>
                        </div>
                      )
                    })}
                  </div>
                  <Divider></Divider>
                  {
                    <div className={`flex flex-wrap justify-between`}>
                      {userMenuData.map((item) => {
                        return (
                          <div key={item.label} className={`w-1/2`}>
                            <Typography
                              className={`cursor-pointer hover:text-[#0749bc] text-[#273342]`}
                              style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.25rem',
                                // color: '#273342',
                              }}
                            >
                              {item.label}
                            </Typography>
                          </div>
                        )
                      })}
                    </div>
                  }
                </div>
              </Fade>
            )}
            {state === 'productList' && (
              <Fade in={state === 'productList'} timeout={1000}>
                <div
                  className={`${styles.productWrapper} flex flex-col gap-12 overflow-auto`}
                >
                  <Typography
                    onClick={() => {
                      setState('menuList')
                    }}
                    variant="h6"
                    className={`${styles.top} cursor-pointer hover:text-[#0749bc] flex gap-2 items-center`}
                  >
                    <ArrowBackIosNewIcon fontSize="small" />
                    菜单
                  </Typography>
                  <div>
                    <div className={`${styles.header} flex flex-col gap-6`}>
                      <Typography
                        // className={`cursor-pointer hover:text-[#0749bc] flex flex-col gap-6`}
                        style={{
                          fontSize: '1.125rem',
                          lineHeight: '140%',
                          fontWeight: '400',
                        }}
                      >
                        产品
                      </Typography>
                      <Divider />
                      <div>
                        {productMenu.map((item) => {
                          return (
                            <div
                              className={`${styles.navlink}`}
                              key={item.label}
                            >
                              <Typography
                                variant="h6"
                                className={`cursor-pointer hover:text-[#0749bc]`}
                                // style={{ fontWeight: '500', fontSize: '32px' }}
                                onClick={item.handleClick}
                              >
                                {item.label}
                              </Typography>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            )}
          </Box>
        </Slide>
      </Modal>
    </div>
  )
}

export default ExpandableMenu
