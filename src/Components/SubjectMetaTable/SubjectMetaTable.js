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
                            <td className="align-middle">S1</td>
                            <td className="align-middle">18</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Tamil</td>
                        </tr>

                        <tr>
                            <td className="align-middle">2</td>
                            <td className="align-middle">S2</td>
                            <td className="align-middle">22</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Telugu</td>
                        </tr>

                        <tr>
                            <td className="align-middle">3</td>
                            <td className="align-middle">S3</td>
                            <td className="align-middle">20</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Hindi</td>
                        </tr>

                        <tr>
                            <td className="align-middle">4</td>
                            <td className="align-middle">S4</td>
                            <td className="align-middle">19</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Bengali</td>
                        </tr>

                        <tr>
                            <td className="align-middle">1</td>
                            <td className="align-middle">S1</td>
                            <td className="align-middle">18</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Tamil</td>
                        </tr>

                        <tr>
                            <td className="align-middle">2</td>
                            <td className="align-middle">S2</td>
                            <td className="align-middle">22</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Telugu</td>
                        </tr>

                        <tr>
                            <td className="align-middle">3</td>
                            <td className="align-middle">S3</td>
                            <td className="align-middle">20</td>
                            <td className="align-middle">Male</td>
                            <td className="align-middle">Hindi</td>
                        </tr>

                        <tr>
                            <td className="align-middle">4</td>
                            <td className="align-middle">S4</td>
                            <td className="align-middle">19</td>
                            <td className="align-middle">Female</td>
                            <td className="align-middle">Bengali</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default SubjectMetaTable