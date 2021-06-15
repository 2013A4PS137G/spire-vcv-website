import React from 'react'
import VideosTable from '../../Components/VideosTable/VideosTable'
import SubjectMetaTable from '../../Components/SubjectMetaTable/SubjectMetaTable'
import './Data.css'

class Data extends React.Component {
    
    constructor() {
        super();
        this.state = {
        subject: 's1'
        };
    }    

    render(){
        const handleSubject = (event) => {
            this.setState({subject: event.target.value});
            console.log(this.state.subject);
        };

        return (
            <div className="text-container">
                <div id="section1" className="row align-items-center">
                <h2 className="title cool-font center title-anim">Subject Details</h2>
                    <div className="column align-items-center">
                        <div className="sec-content anim-fade-in">
                            <SubjectMetaTable/>
                        </div>
                    </div>
                </div>
    
                <div id="section2" className="row align-items-center">
                <h2 className="title cool-font center title-anim">Data Illustration</h2>
                    <div className="column align-items-center">
                        <div className="sec-content">
                            <div className="query row anim-fade-in">
                                <div className="col-sm-2 cool-font vcenter text-center">Subject:</div>
                                <select onChange={handleSubject} defaultValue={this.state.subject} className="col-sm-1 form-select w-auto" aria-label="select subject">
                                    <option value="s1">Subject - S1 (18, Male)</option>
                                    <option value="s2">Subject - S2 (18, Female)</option>
                                </select>
                            </div>
    
                            <div className="query row anim-fade-in">
                                <div className="col-sm-2 cool-font vcenter text-center">Vowel:</div>
                                <nav className="col-sm-6">
                                    <div className="nav nav-pills" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="a-tab" data-bs-toggle="tab" data-bs-target="#a" type="button" role="tab" aria-controls="a" aria-selected="true">/a/</button>
                                        <button className="nav-link" id="e-tab" data-bs-toggle="tab" data-bs-target="#e" type="button" role="tab" aria-controls="e" aria-selected="false">/e/</button>
                                        <button className="nav-link" id="i-tab" data-bs-toggle="tab" data-bs-target="#i" type="button" role="tab" aria-controls="i" aria-selected="false">/i/</button>
                                        <button className="nav-link" id="o-tab" data-bs-toggle="tab" data-bs-target="#o" type="button" role="tab" aria-controls="o" aria-selected="false">/o/</button>
                                        <button className="nav-link" id="u-tab" data-bs-toggle="tab" data-bs-target="#u" type="button" role="tab" aria-controls="u" aria-selected="false">/u/</button>
                                    </div>
                                </nav>
                            
                                <div id="nav-tabContent" className="tab-content anim-fade-in">
                                    <div className="tab-pane fade show active" id="a" role="tabpanel" aria-labelledby="a-tab">
                                        <VideosTable subject={this.state.subject} vowel='/a/'/>
                                    </div>
                                    <div className="tab-pane fade" id="e" role="tabpanel" aria-labelledby="e-tab">
                                        <VideosTable subject={this.state.subject} vowel='/e/'/>
                                    </div>
                                    <div className="tab-pane fade" id="i" role="tabpanel" aria-labelledby="i-tab">
                                        <VideosTable subject={this.state.subject} vowel='/i/'/>
                                    </div>
                                    <div className="tab-pane fade" id="o" role="tabpanel" aria-labelledby="o-tab">
                                        <VideosTable subject={this.state.subject} vowel='/o/'/>
                                    </div>
                                    <div className="tab-pane fade" id="u" role="tabpanel" aria-labelledby="u-tab">
                                        <VideosTable subject={this.state.subject} vowel='/u/'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Data
