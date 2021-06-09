import React from 'react'
import GeneralCard from './GeneralCard'
import Overview from './Overview'
import iconFacebook from '../images/icon-facebook.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconYoutube from '../images/icon-youtube.svg'

function Dashboard() {

    /*Funcionalidad para el Toogle */
    const _handleOn = () => {

        const toggleValue = document.getElementById('check-toogle').checked;
        const backround = document.getElementsByTagName("BODY")[0];
        const pattern = document.getElementById("pattern");
        const titleSocial = document.getElementById("title-social");
        const titleOverview = document.getElementById("overview");
        const titleFollowers = document.getElementById("followers");
        const mode = document.getElementById("mode");
        const dashOne = document.querySelectorAll("#dash");
        const dashLetter = document.querySelectorAll("#counter");
        const simpleCard = document.querySelectorAll("#simple-card");
        const simpleCardCounter = document.querySelectorAll('#simple-card-counter')
        const modalTop = document.getElementById('modaltop');
        const titleCard = document.getElementById('titlecard');
        const counterSocial = document.getElementById('countersocial');
        const socialDescripcion = document.getElementById('socialdescripcion');
        const socialDescripcionNew = document.getElementById('socialdescripcionnew');
        const socialDescripcionToday = document.getElementById('socialdescripciontoday');
        const modalDown = document.getElementById('downmodal');
        const modalContenido = document.getElementById('modalcontenido');
        const downDate = document.getElementById('downdate');
        const closeModalSing = document.getElementById('closemodalsing');

       if(toggleValue === true ){
            backround.style.backgroundColor = "hsl(0, 0%, 100%)";
            pattern.style.backgroundColor="hsl(225, 100%, 98%)";
            titleSocial.style.color="hsl(230, 17%, 14%)";
            titleFollowers.style.color="#878D9B"
            mode.style.color="#878D9B";
            dashOne.forEach(element => element.style.backgroundColor="#F0F3FA");
            dashLetter.forEach(element => element.style.color="#1E212A");
            simpleCard.forEach(element => element.style.backgroundColor="#F0F3FA");
            simpleCardCounter.forEach(element => element.style.color="#1E212A");
            titleOverview.style.color="#000";
            modalTop.style.backgroundColor= "#F8F9FE";
            titleCard.style.color="#000";
            counterSocial.style.color="#626471";
            socialDescripcion.style.color="#626471";
            socialDescripcionNew.style.color="#626471"
            socialDescripcionToday.style.color="#626471"
            modalDown.style.backgroundColor="hsl(0, 0%, 100%)";
            modalContenido.style.backgroundColor="#F8F9FE";
            downDate.style.color="#626471";
            closeModalSing.style.color="#626471";
            
     

       } else if(toggleValue === false ){
            backround.style.backgroundColor = "hsl(230, 17%, 14%)";
            pattern.style.backgroundColor="hsl(232, 19%, 15%)";
            titleSocial.style.color="hsl(0, 0%, 100%)";
            titleFollowers.style.color="#8b97c6";
            mode.style.color="hsl(0, 0%, 100%)";
            dashOne.forEach(element => element.style.backgroundColor="hsl(228, 28%, 20%)" );
            dashLetter.forEach(element => element.style.color="hsl(0, 0%, 100%)");
            simpleCard.forEach(element => element.style.backgroundColor="hsl(228, 28%, 20%)");
            simpleCardCounter.forEach(element => element.style.color="hsl(0, 0%, 100%)");
            titleOverview.style.color="hsl(0, 0%, 100%)";
            modalTop.style.backgroundColor= "#20222F";
            titleCard.style.color="hsl(0, 0%, 100%)";
            counterSocial.style.color="hsl(0, 0%, 100%)";
            socialDescripcion.style.color="hsl(0, 0%, 100%)";
            socialDescripcionNew.style.color="hsl(0, 0%, 100%)";
            socialDescripcionToday.style.color="hsl(0, 0%, 100%)";
            modalDown.style.backgroundColor="#1D2029";
            modalContenido.style.backgroundColor="#20222F";
        }
    }

    return (
        <div className="container-general">
            <div id="pattern" className="pattern-general"></div>
            <div className="header">
                <div id="title" className="header-title">
                    <div id="title-social" className="title">Social Media Dashboard</div>
                    <div id="followers" className="totalfollowers">Total Followers: 23,004</div>
                </div> 
                <div className="content-toogle">
                <div id="mode" className="mode">Dark mode</div>
                    <label className="switch">
                    
                        <input onClick={_handleOn} id="check-toogle" type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
  
            <GeneralCard 
                name="@unodostrs" 
                img={iconFacebook} 
                followers="1187"
                namecounter="FOLLOWERS"
                counterdays="12 Today"
                classlinecard="top-lineface"
            />

            <GeneralCard 
                name="@unodostrs" 
                img={iconTwitter} 
                followers="1057"
                namecounter="FOLLOWERS"
                counterdays="99 Today"
                classlinecard="top-linetwitter"
            />

            <GeneralCard 
                name="@rinternation" 
                img={iconInstagram} 
                followers="2011"
                namecounter="FOLLOWERS"
                counterdays="44 Today"
                classlinecard="top-lineinstagram"
            />

            <GeneralCard 
                name="@rrhh" 
                img={iconYoutube} 
                followers="8232"
                namecounter="SUSCRIBERS"
                counterdays="1299 Today"
                classlinecard="top-lineyoutube"
            />
            <Overview />
        </div>
    )
}

export default Dashboard
