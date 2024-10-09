import styles from './Cookie.module.less'
// import IconCookie from '@/assets/images/icon-cookie.svg'
import IconClose from '@/assets/images/icon-close-cookie.svg'
import { Button, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface CookieProps {
  setShowCookie: (value: boolean) => void
}

function Cookie({ setShowCookie }: CookieProps) {
  const navigate = useNavigate()
  const handleAccpet = () => {
    setShowCookie(false)
    localStorage.setItem('cookie-accept', JSON.stringify(true))
  }
  const handleReject = () => {
    localStorage.setItem('cookie-accept', JSON.stringify(false))
    setShowCookie(false)
  }
  const handleClose = () => {
    setShowCookie(false)
    localStorage.setItem('cookie-accept', JSON.stringify(false))
  }
  const handleGoPrivacy = () => {
    navigate('/legal-notice?type=privacy')
  }
  const handleGoTerms = () => {
    navigate('/legal-notice?type=terms')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        {/* <img src={IconCookie} /> */}
      </div>
      <div className={styles.title}>
        <div className={styles.text1}>We Value</div>
        <div className={styles.text2}>Your Privacy.</div>
      </div>
      <div className={styles.text}>
        We use cookies to enhance your experience, personalize ads, and analyze
        our traffic. By clicking "Accept All", you consent to all cookies. Use
        "Reject All" to decline non-essential cookies. For more details, please
        find our{' '}
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={handleGoPrivacy}
        >
          Privacy Policy
        </span>{' '}
        and{' '}
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={handleGoTerms}
        >
          Terms and Conditions
        </span>
        .
      </div>
      <div className={styles.buttonGroup}>
        <Button
          color="primary"
          variant="contained"
          className={styles.acceptButton}
          onClick={handleAccpet}
        >
          ACCEPT ALL
        </Button>
        <Button
          variant="outlined"
          className={styles.rejectButton}
          onClick={handleReject}
        >
          REJECT ALL
        </Button>
      </div>

      <IconButton className={styles.closeButton} onClick={handleClose}>
        <img src={IconClose} className={styles.icon} />
      </IconButton>
    </div>
  )
}

export default Cookie
