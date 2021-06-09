import React from 'react'
import Chart from './Chart'
import up from '../images/icon-up.svg'
import iconFacebook from '../images/icon-facebook.svg'

function SimpleCard(props) {

    const modalCard = () => {
        const showModal = document.getElementById('miModal');
        showModal.style.display="block";
    }

    return ( 
        <div id="simple-card" className="simple-card" onClick={modalCard}>
            <div className="simple-card-first">
                <div className="simple-card-task">
                    {props.text}
                </div>
                <div className="simple-card-icon">
                    <img src={props.icon} alt="" />
                </div>
            </div>
            <div className="simple-card-second">
                <div id="simple-card-counter" className="simple-card-count">
                    {props.counter}
                </div>
                <div className="simple-card-percentage">
                    <img src={props.sing} alt="" /> {props.percentage}
                </div>
            </div>

            <div id="miModal" className="modal">
                <div id="modalcontenido" className="modal-contenido">
                    <div id="modaltop" className="modaltop">
                        <div className="close-modal-x">
                            <a id="closemodalsing" className="close-modal-sing" href=" ">X</a>
                        </div>
                        <div id="titlecard" className="title-modal-card">Facebook followers</div>
                        <div className="social-network-modal ">
                            <div><img src={iconFacebook} alt="" /></div>
                            <div id="namesocial" className="social-network-name">@dffsdy</div>
                        </div>
                        <div className="social-network-data">
                            <div className="social-network-item">
                                <div id="countersocial" className="social-network-counter">1987</div>
                                <div id="socialdescripcion" className="social-network-description">Total followers</div>
                            </div>
                            <div className="social-network-item">
                                <div className="social-network-counter social-network-numbersup">
                                    <img src={up} className="arrow" alt="" />81
                                </div>
                                <div id="socialdescripcionnew" className="social-network-description">New followers in the ten past days</div>
                            </div>
                            <div className="social-network-item">
                                <div className="social-network-counter social-network-numbersup">
                                    <img src={up} className="arrow" alt="" />12
                                </div>
                                <div id="socialdescripciontoday" className="social-network-description">New followers TODAY</div>
                            </div>
                        </div>
                    </div>
                    <div id="downmodal" className="modaldown">
                        <div id="downdate" className="modal-down-date">May 4 - May 13</div>
                        <div className="modal-down-graphic"><Chart /></div>
                    </div>
                </div>  
            </div>
        </div>     
    )
}

export default SimpleCard
