import React from 'react'
import SimpleCard from './SimpleCard'
import iconFacebook from '../images/icon-facebook.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconInstagram from '../images/icon-instagram.svg'
import iconYoutube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

function Overview() {
    return (
        <>
            <div className="header">
                <div id="title" className="header-title">
                    <div id="overview" className="title-overview">Overview - Today</div>
                </div>
            </div>
            <div className="content-simple-card">
                <SimpleCard text="Page Views" icon={iconFacebook} counter="87" sing={up} percentage="3%" />
                <SimpleCard text="Likes" icon={iconFacebook} counter="52" sing={down} percentage="2%" />
            </div>
            <div className="content-simple-card">
                <SimpleCard text="Likes" icon={iconInstagram} counter="5462" sing={up} percentage="2257%" />
                <SimpleCard text="Profile Views" icon={iconInstagram} counter="52" sing={up} percentage="1375%" />
            </div>
            <div className="content-simple-card">
                <SimpleCard text="Retwits" icon={iconTwitter} counter="117" sing={up} percentage="303%" />
                <SimpleCard text="Likes" icon={iconTwitter} counter="52" sing={up} percentage="553%" />
            </div>
            <div className="content-simple-card">
                <SimpleCard text="Likes" icon={iconYoutube} counter="107" sing={down} percentage="19%" />
                <SimpleCard text="Total Views" icon={iconYoutube} counter="1407" sing={down} percentage="12%" />
            </div>
        </>
    )
}

export default Overview
