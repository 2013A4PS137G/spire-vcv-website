/* eslint-disable no-useless-escape */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React from 'react'
import $ from 'jquery'
import './Download.css'

const test_email = (email) => {
    if(email != null){
        if(email.indexOf('@') > -1)
            return false;
        else
            return true;
    }
    return false;
}

class Download extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            organization: null,
            email: null,
            request: null,
            value: ''   
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleOrganizationChange = this.handleOrganizationChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleOrganizationChange(event) {
        this.setState({organization: event.target.value});
    }

    componentDidMount() {
        $("#req-form").submit(function(event){
            var $form = $(this);
            var serializedData = $form.serialize();
            
            if ($("#name").val() == '' || $("#email").val() == '' || test_email($("#email").val()) || $("#organization").val() == '') {
                alert('Invalid form');
            } else{
                if (this.request) {
                    this.request.abort();
                }
                this.request = $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbwSg59fiUsERc3g2TlVtOueJPFl-pI-WDzip2Qb-G2ltiTwKxepmJMM3pB2FaW6T8Tx/exec",
                    type: "post",
                    data: serializedData
                });
            
                this.request.done(function (response, textStatus, jqXHR){
                    alert('We have received your request. We will contact you soon through the email provided. If you have further queries, write to labspire@gmail.com');
                });
            
                this.request.fail(function (jqXHR, textStatus, errorThrown){
                    alert("POST error");
                });
            }
            event.preventDefault();
        });
    }

    render(){

        return (
            <div>
                <div className="text-container">
                    <div id="section1" className="row align-items-center">
                        <div className="column">
                            <h2 className="mar-down text-center title cool-font title-anim">Download</h2>
     
                                <div className="form-content anim-fade-in">
                                    <div className="form-items">
                                        <h3>Register</h3>
                                        <p>Fill in the data below.</p>
                                        <form id="req-form" className="requires-validation" noValidate>
    
                                            <div className="col-md-12">
                                                <input className="form-control" type="text" id="name" name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} required/>
                                                { this.state.name == '' && <div className="invalid-feedback">* Required</div> }
                                            </div>
    
                                            <div className="col-md-12">
                                                <input className="form-control" type="email" id="email" name="email" placeholder="E-mail Address" value={this.state.email} onChange={this.handleEmailChange} required/>
                                                { (this.state.email == '' || test_email(this.state.email)) && <div className="invalid-feedback">* Enter a valid email</div> }
                                            </div>
    
                                            <div className="col-md-12">
                                                <input className="form-control" type="text" id="organization" name="organization" placeholder="Organization" value={this.state.organization} onChange={this.handleOrganizationChange} required/>
                                                { this.state.organization == '' && <div className="invalid-feedback">* Required</div> }
                                            </div>
                                
    
                                            <div className="form-button mt-3">
                                                <button id="submit" type="submit" className="btn btn-primary">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
    
    
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default Download
