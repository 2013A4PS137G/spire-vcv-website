import React from 'react'
import Cite from 'citation-js'
import ReactHtmlParser from 'react-html-parser';
import './Publication.css'

const Publication = () => {
    const pubs = [
        // Publication 1
        "@INPROCEEDINGS{9414221,\
        author={Purohit, Tilak and MV, Achuth Rao and Kumar Ghosh, Prasanta},\
        booktitle={ICASSP 2021 - 2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},\
        title={Impact of Speaking Rate on the Source Filter Interaction in Speech: A Study},\
        year={2021},\
        volume={},\
        number={},\
        pages={6448-6452},\
        doi={10.1109/ICASSP39728.2021.9414221}}",
        
        // Publication 2
        "@inproceedings{Purohit2020,\
        author={Tilak Purohit and Prasanta Kumar Ghosh},\
        title={{An Investigation of the Virtual Lip Trajectories During the Production of Bilabial Stops and Nasal at Different Speaking Rates}},\
        year=2020,\
        booktitle={Proc. Interspeech 2020},\
        pages={1401--1405},\
        doi={10.21437/Interspeech.2020-2709},\
        url={http://dx.doi.org/10.21437/Interspeech.2020-2709}}",
        
        // Publication 3
        "@article{anusuyadata,\
        title={A Data Driven Phoneme-Specific Analysis of Articulatory Importance},\
        author={Anusuya, PK and Illa, Aravind and Ghosh, Prasanta Kumar},\
        journal = {International Seminar On Speech Production},\
        year= {2020},}"
    ];

    return (
        <div>
            <div className="text-container">
                <div id="section1" className="row align-items-center">
                    <div className="column">
                        <h2 className="mar-pub title cool-font title-anim">Publication</h2>
                        <ul className="pub-ul anim-fade-in">
                                {pubs.map(function(s,index){

                                    const example = new Cite(s)
                                    var output = example.format('bibliography', {
                                        format: 'html',
                                        template: 'harvard'
                                    });
                                    return <li key={index.toString()}>{ReactHtmlParser(output)}</li>
                                })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Publication
