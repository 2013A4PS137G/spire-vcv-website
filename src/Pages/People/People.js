import React from 'react'
import './People.css'

const People = () => {
    return (
        <div className="text-container">
            <div className="row align-items-center">
                <div className="column">
                    <h2 className="mar-people text-center title cool-font title-anim">People</h2>
                </div>
            </div>
            
            <div className="row align-center">    
                <div className="col-sm-3 mx-auto">
                    <div className="card border-primary anim-fade-in">
                        <img src="img/people/tilak_p.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Tilak Purohit</h5>
                            <p className="card-text">Project assistant <a className="link-style" href="https://spire.ee.iisc.ac.in" target="_blank" rel="noreferrer">@SPIRE Lab</a></p>
                        </div>
                        {/* <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div> */}
                    </div>
                </div>
            
                <div className="col-sm-3 mx-auto">
                    <div className="card border-primary anim-fade-in">
                        <img src="img/people/tejas_u.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Tejas Umesh</h5>
                            <p className="card-text">Project assistant <a className="link-style" href="https://spire.ee.iisc.ac.in" target="_blank" rel="noreferrer">@SPIRE Lab</a></p>
                        </div>
                    </div>
                </div>
                

                <div className="col-sm-3 mx-auto">
                    <div className="card border-primary anim-fade-in">
                        <img src="img/people/shankar_n.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Shankar Narayanan</h5>
                            <p className="card-text">Project assistant <a className="link-style" href="https://spire.ee.iisc.ac.in" target="_blank" rel="noreferrer">@SPIRE Lab</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-center">
                <div className="col-sm-3 mx-auto">
                    <div className="card border-primary anim-fade-in">
                        <img src="img/people/minulakshmi_s.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body sp">
                            <h5 className="card-title">Minulakshmi S</h5>
                            <p className="card-text"> Student <a className="link-style" href="https://www.nitk.ac.in/" target="_blank" rel="noreferrer">@NITK, Surathkal</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3 mx-auto">
                    <div className="card border-primary anim-fade-in">
                        <img src="img/people/prasanta_g.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body sp">
                            <h5 className="card-title"><a className="link-style" href="http://www.ee.iisc.ac.in/new/people/faculty/prasantg/" target="_blank" rel="noreferrer">Prasanta Kumar Ghosh</a></h5>
                            <p className="card-text">Associate Professor, Electrical Engineering <a className="link-style" href="http://iisc.ac.in/" target="_blank" rel="noreferrer">@IISc, Bangalore</a></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default People
