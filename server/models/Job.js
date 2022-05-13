const { Schema, model } = require('mongoose');

        // "id": 1,
        // "company": "Katz",
        // "job_title": "Nurse",
        // "department": "Engineering",
        // "location": "South Carolina",
        // "date": "5/4/2021",
        // "url": "http://cocolog-nifty.com/felis/fusce.html?curabitur=justo&convallis=aliquam&duis=quis&consequat=turpis&dui=eget&nec=elit&nisi=sodales&volutpat=scelerisque&eleifend=mauris&donec=sit&ut=amet&dolor=eros&morbi=suspendisse&vel=accumsan&lectus=tortor&in=quis&quam=turpis&fringilla=sed&rhoncus=ante&mauris=vivamus&enim=tortor&leo=duis&rhoncus=mattis&sed=egestas&vestibulum=metus&sit=aenean&amet=fermentum&cursus=donec&id=ut&turpis=mauris&integer=eget&aliquet=massa&massa=tempor&id=convallis&lobortis=nulla&convallis=neque&tortor=libero&risus=convallis&dapibus=eget&augue=eleifend&vel=luctus&accumsan=ultricies&tellus=eu&nisi=nibh&eu=quisque&orci=id&mauris=justo&lacinia=sit&sapien=amet&quis=sapien&libero=dignissim&nullam=vestibulum&sit=vestibulum&amet=ante&turpis=ipsum&elementum=primis&ligula=in&vehicula=faucibus&consequat=orci&morbi=luctus",
        // "salary": "$774584.22",
        // "city": "Spartanburg"
const jobSchema = new Schema(
    {

  company: {
    type: String,
    
  },
  job_title: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    
  },
  url: {
    type: String,
  },  
  salary: {
    type: String, 
  },
  city: {
    type: String, 
  }

});


const Job = model('Job', jobSchema);
module.exports = Job;


