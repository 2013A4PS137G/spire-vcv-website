import React from "react";
import "./SubjectMetaTable.css"

class SubjectMetaTable extends React.Component  {

    render() {
        return (
            <div>
                <table className="table table-striped table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Native Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle">1</td>
                            <td className="align-middle">F1</td>
                            <td className="align-middle">22</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Bengali</td>
                        </tr>

                        <tr>
                            <td className="align-middle">2</td>
                            <td className="align-middle">M1</td>
                            <td className="align-middle">21</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Tulu</td>
                        </tr>

                        <tr>
                            <td className="align-middle">3</td>
                            <td className="align-middle">F2</td>
                            <td className="align-middle">27</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Bengali</td>
                        </tr>

                        <tr>
                            <td className="align-middle">4</td>
                            <td className="align-middle">M2</td>
                            <td className="align-middle">20</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Bengali</td>
                        </tr>

                        <tr>
                            <td className="align-middle">5</td>
                            <td className="align-middle">F3</td>
                            <td className="align-middle">23</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Tamil</td>
                        </tr>

                        <tr>
                            <td className="align-middle">6</td>
                            <td className="align-middle">M3</td>
                            <td className="align-middle">21</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Tamil</td>
                        </tr>

                        <tr>
                            <td className="align-middle">7</td>
                            <td className="align-middle">F4</td>
                            <td className="align-middle">20</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Kannada</td>
                        </tr>

                        <tr>
                            <td className="align-middle">8</td>
                            <td className="align-middle">M4</td>
                            <td className="align-middle">23</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Tamil</td>
                        </tr>

                        <tr>
                            <td className="align-middle">9</td>
                            <td className="align-middle">F5</td>
                            <td className="align-middle">21</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Malayalam</td>
                        </tr>

                        <tr>
                            <td className="align-middle">10</td>
                            <td className="align-middle">M5</td>
                            <td className="align-middle">20</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Hindi</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        )
    }
}

export default SubjectMetaTable