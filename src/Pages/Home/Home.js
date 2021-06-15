import React from 'react'
import "./Home.css";

const Home = () => {
    return (
    
        <div className="text-container">
            <div id="section1" className="row align-items-center">
                <div className="column align-items-center">
                    <h2 className="title cool-font title-anim">SPIRE VCV Corpus</h2>
                    <img src="img/ill-orig.png" className="ill-orig img-fluid rounded float-right anim-fade-in" alt="Illustration"></img>
                    <div className="para anim-fade-in"> 
                        <ul>
                        <li>
                        <a className="link-style" href="/">SPIRE VCV</a> is a database of speech production, which includes simultaneous acoustic and electromagnetic articulography data collected from speakers of non-native/Indian English.
                        </li>  

                        <li> Stimuli comprises of non-sense symmetrrical VCV <i>(Vowel-Consonant-Vowel)</i> utterances as part of the sentence <b>"speak VCV today"</b> in three different speaking rates: <b>slow, normal and fast</b> with 3 repetitions each. </li>
                        <li>The VCV utterances consist of the combination of <b>17 consonant</b> sounds namely:
                            <h6 className="center cool-font">
                                C = {"{ /b/, /ch/, /d/, /f/, /g/, /jh/, /k/, /l/, /m/, /n/, /ng/, /p/, /r/, /s/, /t/, /v/, /z/ }"}
                            </h6>
                            and  <b>5 vowel</b> sounds:
                            <h6 className="center cool-font"> 
                                V = {"{ /a/, /e/, /i/, /o/, /u/ }"} 
                            </h6>
                        </li>
                        <li> Ten non-native English speakers: 5 female and 5 male in the age range of 18 to 22 years with no speech related disorders. </li>
                        <li>Recordings were made in the sound damped studio at the <a className="link-style" href="https://spire.ee.iisc.ac.in" target="_blank" rel="noreferrer">SPIRE Lab's</a> speech production facility. Acoustic and articulatory 
                        data were recorded directly to the computer and carefully synchronized.</li>
                        <li>VCV boundaries were manually annotated. <a className="link-style" href="/recording_setup#annotation">Read more</a></li>
                        </ul>  
                    </div>
                </div>
            </div>

            <div id="section2" className="row align-items-center secondary-bg">
                <div className="column align-items-center">
                    <h2 className="title cool-font title-anim">Available in this Corpus</h2>
                    <div>
                        <div className="row mx-auto">
                            <div className="col-sm border border-4 rounded tertiary-bg anim-fade-in">
                                <div className="row"><img className="av-img img-fluid" src="img/WAVE-1s.gif" alt="" /></div>
                                <div className="row">
                                    <div>
                                        <h2 className="text-center cool-font">Audio</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm border border-4 rounded tertiary-bg anim-fade-in">
                                <div className="row"><img className="av-img img-fluid" src="img/ema-traj.png" alt="" /></div>
                                <div className="row">
                                    <div>
                                        <h2 className="text-center cool-font">Articulograph Trajectories</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col border border-4 rounded tertiary-bg anim-fade-in">
                                <div className="row"><img className="av-img img-fluid" src="img/boundaries.png" alt="" /></div>
                                <div className="row">
                                    <div>
                                        <h2 className="text-center cool-font">V-C-V Boundaries</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
                
            </div>
            
            

        </div>
    )
}

export default Home
