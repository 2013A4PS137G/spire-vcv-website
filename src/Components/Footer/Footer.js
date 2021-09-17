import React from 'react'
import './Footer.css' 

const Footer = () => {
    return (
        <div className="footer-container">
            {/* https://dst.gov.in/ */}
            <div className="row mx-auto">
                <div className="col-md-3">
                    <div className="row footer-text-1 cool-font mx-auto text-center justify-content-center">Funding</div>
                    <div className="row justify-content-center">
                        <a href="https://dst.gov.in/" target="_blank" rel="noreferrer">
                            <img className="dst-logo mx-auto justify-content-center img-fluid" src="img/dst-logo.png" alt="Department of science and Technology, Govt. of India" />
                        </a>
                    </div>
                </div>
                <div className="col-md-3 my-auto"></div>
                <div className="col-md-3">
                    <div className="row footer-text-1 cool-font mr-0 text-center justify-content-center">Contact</div>
                    <div className="row footer-text-2 my-auto mr-0 text-center justify-content-center">

                        <div className="row">

                            
                            <img className="border-style affil mx-auto justify-content-center img-fluid" src="img/affil.png" alt="Affiliation" />
                            <div className="footer-text-3">Dr. Prasanta Kumar Ghosh</div>
                            C-326,
                            Electrical Engineering, IISc Bangalore, 
                            CV Raman Rd,Bengaluru, Karnataka - 560012<br/>
                            <div className="mail-text"><a className="mail-text" href="mailto:labspire@gmailcom">labspire@gmail.com</a></div>
                        </div>
                        </div>
                </div>
                <div className="col-md-3 mx-auto">
                <iframe className="g-map justify-content-center" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.831044073333!2d77.57007982773303!3d13.01501639969016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d24933b495%3A0x28402083484abb3b!2sElectrical%20Engineering%20Depratment%2C%20Indian%20Institute%20of%20Science%2C%20Bangalore%2C%20Javanica%20Marg%2C%20Mathikere%2C%20Bengaluru%2C%20Karnataka%20560012!5e0!3m2!1sen!2sin!4v1625911013280!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
