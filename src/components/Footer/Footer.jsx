import './Footer.scss'
import FooterBot from './FooterBot/FooterBot'
import FooterTop from './FooterTop/FooterTop'

const Footer = () => {
    return (
        <>
        <div className="footer-wrapper">
            <div className="footer-inner">
                <div className="footer-content">
                    <FooterTop />
                    <FooterBot />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer