import { useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import styles from './Company.module.less'
import img1 from '@/assets/images/img-landing-page-company-1.jpg'
import img2 from '@/assets/images/img-landing-page-company-2.jpg'
import img3 from '@/assets/images/img-landing-page-company-3.jpg'
import img4 from '@/assets/images/img-landing-page-company-4.jpg'
import img5 from '@/assets/images/img-landing-page-company-5.jpg'

interface CompanyProps {
  interval?: number
}

function Company({ interval = 3000 }: CompanyProps) {
  const intl = useIntl()
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [img1, img2, img3, img4, img5]
  const visibleItems = 3
  const maxIndex = Math.max(0, images.length - visibleItems)

  useEffect(() => {
    if (images.length <= visibleItems) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval, maxIndex])

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{intl.formatMessage({ id: 'lp.company.title' })}</span>
      <p className={styles.description}>
        {intl.formatMessage({ id: 'lp.company.description' })}
      </p>
      <div className={styles.carousel}>
        <div
          className={styles.slides}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={img}
                alt={`Company ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>

        {images.length > visibleItems && (
          <>
            <button className={styles.prev} onClick={goToPrev}>
              &#10094;
            </button>
            <button className={styles.next} onClick={goToNext}>
              &#10095;
            </button>
          </>
        )}

        {images.length > visibleItems && (
          <div className={styles.dots}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Company
