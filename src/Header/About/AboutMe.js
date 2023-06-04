import React from 'react';
import './AboutMe.scss';

function AboutMe(props) {
    return (
        <>
            <div className="MENU"> STACK</div>
            <div className="container">

                <div className="container__progressbars">

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-html shadow-html"></circle>
                        </svg>
                        <span className="progressbar__text shadow-html">HTML</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-css shadow-css"></circle>
                        </svg>
                        <span className="progressbar__text shadow-css">CSS</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-scss shadow-scss"></circle>
                        </svg>
                        <span className="progressbar__text shadow-scss">SCSS</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-js shadow-js"></circle>
                        </svg>
                        <span className="progressbar__text shadow-js">JavaScript</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-java shadow-java"></circle>
                        </svg>
                        <span className="progressbar__text shadow-java">Java</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-kotlin shadow-kotlin"></circle>
                        </svg>
                        <span className="progressbar__text shadow-kotlin">Kotlin</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-flutter shadow-flutter"></circle>
                        </svg>
                        <span className="progressbar__text shadow-flutter">Flutter</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70"
                                    className="progressbar__svg-circle circle-nosql shadow-nosql"></circle>
                        </svg>
                        <span className="progressbar__text shadow-nosql">NoSql</span>
                    </div>
                    {/*<div className="progressbar">*/}
                    {/*    <svg className="progressbar__svg">*/}
                    {/*        <circle cx="80" cy="80" r="70"*/}
                    {/*                className="progressbar__svg-circle circle-vue shadow-vue"></circle>*/}
                    {/*    </svg>*/}
                    {/*    <span className="progressbar__text shadow-vue">Vue.js</span>*/}
                    {/*</div>*/}
                </div>

            </div>
        </>
    );
}

export default AboutMe;