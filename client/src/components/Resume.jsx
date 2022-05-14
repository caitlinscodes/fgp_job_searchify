import React, { Component } from 'react';
import PDF from './PDF';

class Resume extends Component {
  state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      location: '',
      summary: '',
      skills: ``,
      title1: '',
      company1: '',
      experience1: '',
      title2: '',
      company2: '',
      experience2: '',
      resumeSubmitted: false
  }

  onChange = input => e => {
      this.setState({
          [input]: e.target.value
      });
  }

  submitResume = (e) => {
      
      if(!this.state.name || !this.state.email || !this.state.phone || !this.state.address || !this.state.location || !this.state.summary || !this.state.skills || !this.state.title1 || !this.state.company1 || !this.state.experience1 || !this.state.title2 || !this.state.company2 || !this.state.experience2 ){
          alert('All fields are required!');
          e.preventDefault();
      }else{
          this.setState({
              resumeSubmitted: true
          });
      }
  }
  render(){
    return(
        <>
            {  !this.state.resumeSubmitted ? 
                (<div className="container" class="resume-builder">
                    <div className="jumbotron mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="well well-sm">
                                    <form className="form-horizontal" method="post">
                                        <fieldset>
                                            <legend className="text-center header">Build Your Resume!</legend>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                <input onChange={this.onChange('name')} name="name" type="text" placeholder="Full Name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('email')} className="form-control" name="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('phone')} className="form-control" name="phone" placeholder="Phone Number" rows="7"/>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('address')} className="form-control" name="address" placeholder="Address" />
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('location')} className="form-control" type="text" name="location" placeholder="City, State, Zip" />
                                            </div>
                                            <hr/>
                                            <div className="form-group">
                                                <span className="text-center"><i className="fa fa-user bigicon"></i></span>
                                                <input onChange={this.onChange('summary')} className="form-control" type="text" name="summary" placeholder="Summary" rows={5}/>
                                            </div>
                                            <hr/>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('skills')} className="form-control" type="text" name="skills" placeholder="Soft and Hard Skills" rows={3}/>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('title1')} className="form-control" type="text" name="title1" placeholder="Title"/>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('company1')} className="form-control" type="text" name="company1" placeholder="Company"/>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('experience1')} className="form-control" type="text" name="experience1" placeholder="Experience" rows={5}></input>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('title2')} className="form-control" type="text" name="title2" placeholder="Title"/>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('company2')} className="form-control" type="text" name="company2" placeholder="Company"/>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('experience2')} className="form-control" type="text" name="experience2" placeholder="Experience" rows={5}/>
                                            </div>
                                            <div className="form-group">
                                                <button type="button" onClick={this.submitResume} className="btn btn-primary btn-lg">Submit</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <PDF name={this.state.name} email={this.state.email} phone={this.state.phone} address={this.state.address} location={this.state.location} summary={this.state.summary} skills={this.state.skills} title1={this.state.title1} company1={this.state.company1} experience1={this.state.experience1} title2={this.state.title2} company2={this.state.company2} experience2={this.state.experience2}/>
                )
            }
        </>
    );
}
}

  

export default Resume;