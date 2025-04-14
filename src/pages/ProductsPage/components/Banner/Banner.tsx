/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'
import { Breadcrumbs, Typography, Link } from '@mui/material'
import productImg from '@/assets/images/img-product-deep-groove-ball-bearings.avif'
import styles from './Banner.module.less'

// import backgroundImg from '@/assets/images/img-products-banner-background.png'



const detailData = [
  {
    label: '轴承一般参数',
  },
  {
    label: '载荷',
  },
  {
    label: '温度限值',
  },
  {
    label: '允许转速',
  },
  {
    label: '型号系统',
  },
]

function Banner() {
  return (
    <>
      <header
        className={`${styles.wrapper} bg-[#485a64] flex flex-col items-center md:items-start`}
      >
        <Breadcrumbs className={`h-12`}></Breadcrumbs>
        <Typography
          className={`text-white text-center lg:px-[126px] md:px-[88px] h-[85px] flex items-end w-full max-w-[540px] md:max-w-full`}
          style={{ marginLeft: '15px' }}
          variant="h3"
        >
          深沟球轴承
        </Typography>
        <div
          className={`flex justify-between lg:px-[126px] md:px-[88px] md:flex-row flex-col w-full items-start`}
        >
          <div className="flex-1 px-[15px] py-9 max-w-[540px] md:max-w-full">
            <Typography variant="body1" className={`text-white pb-2`}>
              深沟球轴承是应用最广泛的轴承类型，尤其是具有多种功能。这种轴承具有低摩擦的特性，经优化后可以降低噪声和振动，从而实现高转速。可承受径向载荷和两个方向的轴向载荷，易于安装，相比于其他类型的轴承维护需求更少。
            </Typography>
            <Typography variant="body1" className={`text-white`}>
              FEB
              轴承型录中列出了深沟球轴承各种不同的设计、变型和尺寸。除了型录中所列的产品外，FEB
              Explorer 深沟球轴承可定制，为有特殊性能需求的应用带来好处。
            </Typography>
            <div className={`${styles.detailWrapper} mt-4`}>
              <Typography variant="body2" className={`text-white`}>
                产品详情
              </Typography>
              <ul
                className={`${styles.detailLinkContainer} flex flex-col mt-2`}
              >
                {detailData.map((item) => {
                  return (
                    <li className={`${styles.detailLink}`}>
                      <Link
                        sx={{ color: 'white', textDecorationColor: 'white' }}
                        key={item.label}
                        href="#"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <img
            className={`py-9 px-[15px] md:w-1/3 w-full rounded-2xl`}
            src={productImg}
          />
        </div>
      </header>
      {/* <section className={`mt-[30px] h-[240px] overflow-hidden bg-[#669999]`}>
        
        <Typography className={`z-10 h-[240px] text-white flex`}>
          为什么选择FEB Explorer深沟球轴承？
        </Typography>
      </section> */}
    </>
  )
}

export default Banner
