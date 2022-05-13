import React, { Component } from 'react';
import PDF from './PDF';

class Resume extends Component {
  state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      // state: '',
      // zip: '',
      // summary: ``,
      // title: '',
      // company: '',
      // experience: '',
      // skills: ``,
      postSubmitted: false
  }

  onChange = input => e => {
      this.setState({
          [input]: e.target.value
      });
  }

  submitPost = (e) => {
      
      if(!this.state.name || !this.state.email || !this.state.phone || !this.state.address || !this.state.city ){
          alert('All fields are required!');
          e.preventDefault();
      }else{
          this.setState({
              postSubmitted: true
          });
      }
  }
  render(){
    return(
        <>
            {  !this.state.postSubmitted ? 
                (<div className="container">
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
                                                <input onChange={this.onChange('email')} className="form-control" name="email" placeholder="Email" ></input>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('phone')} className="form-control" name="phone" placeholder="Phone Number" rows="7"></input>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('address')} className="form-control" name="address" placeholder="Address" ></input>
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <input onChange={this.onChange('city')} className="form-control" name="city" placeholder="City" ></input>
                                            </div>
                                            <div className="form-group">
                                                <button type="button" onClick={this.submitPost} className="btn btn-primary btn-lg">Submit</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <PDF name={this.state.name} email={this.state.email} phone={this.state.phone} address={this.state.address} city={this.state.city} />
                )
            }
        </>
    );
}
}

  

export default Resume;