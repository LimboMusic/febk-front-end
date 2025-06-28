/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import styles from './Banner.module.less'
import bannderData from '../../assets/banner-data'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'

// import backgroundImg from '@/assets/images/img-products-banner-background.png'

function Banner() {
  const intl = useIntl()
  const [data, setData] = useState({
    title: '',
    description: [],
    feature: '',
  })
  const { productName } = useParams()

  useEffect(() => {
    if (productName) {
      setData(bannderData[`${productName}`])
    }
  }, [productName])

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
          {data.title && intl.formatMessage({ id: data.title })}
        </Typography>
        <div
          className={`flex justify-between lg:px-[126px] md:px-[88px] md:flex-row flex-col w-full items-start`}
        >
          <div className="flex-1 px-[15px] py-9 max-w-[540px] md:max-w-full">
            {data.description.length > 0 &&
              data.description.map((item, index) => (
                <Typography
                  variant="body1"
                  className={`text-white`}
                  key={index}
                >
                  {intl.formatMessage({ id: item })}
                </Typography>
              ))}

            <div className={`${styles.detailWrapper} mt-4`}>
              <Typography variant="body1" className={`text-white`}>
                {intl.formatMessage({ id: 'pp.feature' })}
              </Typography>
              <Typography variant="body1" className={`text-white`}>
                {data.feature && intl.formatMessage({ id: data.feature })}
              </Typography>
              {/* <ul
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
              </ul> */}
            </div>
          </div>
          <img
            className={`py-9 px-[15px] md:w-1/3 w-full rounded-2xl`}
            src={data['product-img'] || ''}
          />
        </div>
      </header>
    </>
  )
}

export default Banner
