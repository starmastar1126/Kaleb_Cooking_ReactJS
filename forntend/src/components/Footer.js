import React from 'react'
import f1 from '../images/f1.png';
import f2 from '../images/f2.png';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import i1 from '../images/i1.png';
import i2 from '../images/i2.png';
import i3 from '../images/i3.png';
import i4 from '../images/i4.png';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';

const Footer = () => (
    <div className="footer">
        <div className="footerC">
            <div className="topP">
                <div className="partsC">
                    <div className="parti">
                        <div className="cont">
                            <img src={i1} alt="n"/>
                        </div>
                        <div className="cont">
                            <div style={{fontWeight:"bold"}}>Free Delivery</div>
                            <div>For all orders over $99</div>
                        </div>    
                    </div>
                    <div className="partI">
                        <div className="cont">
                            <img src={i2} alt="n"/>
                        </div>
                        <div className="cont">
                            <div style={{fontWeight:"bold"}}>24/7 Support</div>
                            <div>Deticated support</div>
                        </div>                 
                    </div>
                    <div className="partI">
                        <div className="cont">
                            <img src={i3} alt="n"/>
                        </div>
                        <div className="cont">
                            <div style={{fontWeight:"bold"}}>Secure Payment</div>
                            <div>100% Secure payment</div>
                        </div>     
                    </div>
                    <div className="partI">
                        <div className="cont">
                            <img src={i4} alt="n"/>
                        </div>
                        <div className="cont">
                            <div style={{fontWeight:"bold"}}>24/7 Support</div>
                            <div>Deticated support</div>
                        </div>             
                    </div>
                </div>
            </div>
            <div className="contacts">
                <div className="part">
                    <div className="footerT">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis, quam ac rutrum blandit, tellus augue gravida 
                    </div>
                    <div className="footerT2">
                        <img src={s1} alt="1"/>
                        <img src={s2} alt="1"/>
                        <img src={s3} alt="1"/>
                        <img src={s4} alt="1"/>
                    </div>
                </div>
                <div className="part">
                    <div className="headline">QUICK LINKS</div>
                    <a href="/">Categories</a>
                    <a href="/">Help</a>
                    <a href="/">Community</a>
                    <a href="/">Sign Up</a>
                </div>
                <div className="part">
                    <div className="headline">CONTACT US</div>
                    <div className="line" >
                        <img alt="location" src={f1}/>
                        <div>640 Glenoaks Blvd
                        San Fernando,
                        CA 91340</div>
                    </div>
                    <div className="line"  >
                        <img alt="phone" src={f2}/>
                        <div>0123458</div>
                    </div>
                    <div className="line" >
                        <img alt="email" src={f3}/>
                        <div>info @foodsearch.com</div>
                    </div>
                    <div className="line" >
                        <img alt="time" src={f4}/>
                        <div>Mon - Sat  | 9am - 8pm</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer