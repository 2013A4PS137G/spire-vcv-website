/* eslint-disable */
import React from 'react'
import './VideosTable.css'

const VideosTable = (props) => {

    
    var subject = props.subject;
    var vowel = props.vowel[1].toUpperCase();
    var consonants = ['P','T','K','Ch','B','D','G'];
    var rates = ['slow','normal','fast'];

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered ">
                <thead>
                    <tr>
                    <th scope="col">Consonant</th>
                    <th scope="col">Slow</th>
                    <th scope="col">Normal</th>
                    <th scope="col">Fast</th>
                    </tr>
                </thead>
                <tbody>
                    {consonants.map(function (c) {
                        return (
                        <tr key={c}>
                            <th scope="row">
                                <b>{"/"+c.toLowerCase()+"/"}</b>
                            </th>
                                
                            {rates.map(function (r) {
                                var pth = subject + "_" + vowel + c + vowel + "_" + r + "_0" 
                            return (
                                <td className="align-middle" key={pth}>
                                    <div className="embed-responsive embed-responsive-16by9">
                                            <video className="embed-responsive-item" controls>
                                                <source src={"videos/" + pth + ".mp4"} type="video/mp4"/>
                                            </video>
                                    </div>
                                </td>
                            );
                            })}
                        </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default VideosTable
