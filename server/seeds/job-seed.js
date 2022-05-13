const db = require('../config/connection')
const {Job} = require("../models");
const joblist = require("./joblist.json");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/job.searchifyDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Mongo Connection Open');
// }).catch((err) => {
//   console.log(err);
// });

const seedJobs = [

    {
        "id": 1,
        "company": "Katz",
        "job_title": "Nurse",
        "department": "Engineering",
        "location": "South Carolina",
        "date": "5/4/2021",
        "url": "http://cocolog-nifty.com/felis/fusce.html?curabitur=justo&convallis=aliquam&duis=quis&consequat=turpis&dui=eget&nec=elit&nisi=sodales&volutpat=scelerisque&eleifend=mauris&donec=sit&ut=amet&dolor=eros&morbi=suspendisse&vel=accumsan&lectus=tortor&in=quis&quam=turpis&fringilla=sed&rhoncus=ante&mauris=vivamus&enim=tortor&leo=duis&rhoncus=mattis&sed=egestas&vestibulum=metus&sit=aenean&amet=fermentum&cursus=donec&id=ut&turpis=mauris&integer=eget&aliquet=massa&massa=tempor&id=convallis&lobortis=nulla&convallis=neque&tortor=libero&risus=convallis&dapibus=eget&augue=eleifend&vel=luctus&accumsan=ultricies&tellus=eu&nisi=nibh&eu=quisque&orci=id&mauris=justo&lacinia=sit&sapien=amet&quis=sapien&libero=dignissim&nullam=vestibulum&sit=vestibulum&amet=ante&turpis=ipsum&elementum=primis&ligula=in&vehicula=faucibus&consequat=orci&morbi=luctus",
        "salary": "$774584.22",
        "city": "Spartanburg"
    },
    {
        "id": 2,
        "company": "Camimbo",
        "job_title": "Environmental Tech",
        "department": "Product Management",
        "location": "Nebraska",
        "date": "12/23/2021",
        "url": "http://cocolog-nifty.com/mauris/morbi/non/lectus/aliquam/sit.aspx?quam=vulputate&sollicitudin=ut&vitae=ultrices&consectetuer=vel&eget=augue&rutrum=vestibulum&at=ante&lorem=ipsum&integer=primis&tincidunt=in&ante=faucibus&vel=orci&ipsum=luctus&praesent=et&blandit=ultrices&lacinia=posuere&erat=cubilia&vestibulum=curae&sed=donec&magna=pharetra&at=magna&nunc=vestibulum&commodo=aliquet&placerat=ultrices&praesent=erat&blandit=tortor&nam=sollicitudin&nulla=mi&integer=sit&pede=amet&justo=lobortis&lacinia=sapien&eget=sapien&tincidunt=non&eget=mi&tempus=integer&vel=ac&pede=neque&morbi=duis&porttitor=bibendum&lorem=morbi&id=non&ligula=quam&suspendisse=nec&ornare=dui&consequat=luctus&lectus=rutrum&in=nulla&est=tellus&risus=in&auctor=sagittis&sed=dui&tristique=vel&in=nisl&tempus=duis&sit=ac&amet=nibh&sem=fusce&fusce=lacus&consequat=purus&nulla=aliquet&nisl=at&nunc=feugiat",
        "salary": "$669442.00",
        "city": "Omaha"
    },
    {
        "id": 3,
        "company": "Tavu",
        "job_title": "Tax Accountant",
        "department": "Services",
        "location": "California",
        "date": "12/31/2021",
        "url": "https://oracle.com/nulla/suscipit/ligula/in/lacus/curabitur/at.json?diam=fusce&erat=posuere&fermentum=felis&justo=sed&nec=lacus&condimentum=morbi&neque=sem&sapien=mauris&placerat=laoreet&ante=ut&nulla=rhoncus&justo=aliquet&aliquam=pulvinar&quis=sed&turpis=nisl&eget=nunc&elit=rhoncus&sodales=dui&scelerisque=vel&mauris=sem&sit=sed&amet=sagittis&eros=nam&suspendisse=congue&accumsan=risus&tortor=semper&quis=porta&turpis=volutpat&sed=quam&ante=pede&vivamus=lobortis&tortor=ligula&duis=sit&mattis=amet&egestas=eleifend&metus=pede&aenean=libero&fermentum=quis&donec=orci&ut=nullam&mauris=molestie&eget=nibh&massa=in&tempor=lectus&convallis=pellentesque&nulla=at&neque=nulla&libero=suspendisse&convallis=potenti&eget=cras",
        "salary": "$301511.17",
        "city": "Los Angeles"
    },
    {
        "id": 4,
        "company": "Zoombeat",
        "job_title": "Senior Cost Accountant",
        "department": "Services",
        "location": "Tennessee",
        "date": "1/26/2022",
        "url": "https://pinterest.com/maecenas/ut/massa/quis/augue/luctus.aspx?libero=at&nullam=dolor&sit=quis&amet=odio&turpis=consequat&elementum=varius&ligula=integer&vehicula=ac&consequat=leo&morbi=pellentesque&a=ultrices&ipsum=mattis&integer=odio&a=donec&nibh=vitae&in=nisi&quis=nam&justo=ultrices&maecenas=libero&rhoncus=non&aliquam=mattis&lacus=pulvinar&morbi=nulla&quis=pede&tortor=ullamcorper&id=augue&nulla=a&ultrices=suscipit&aliquet=nulla&maecenas=elit&leo=ac&odio=nulla&condimentum=sed&id=vel&luctus=enim&nec=sit&molestie=amet&sed=nunc&justo=viverra&pellentesque=dapibus&viverra=nulla&pede=suscipit&ac=ligula&diam=in&cras=lacus&pellentesque=curabitur&volutpat=at&dui=ipsum&maecenas=ac&tristique=tellus&est=semper&et=interdum&tempus=mauris&semper=ullamcorper&est=purus&quam=sit&pharetra=amet&magna=nulla&ac=quisque&consequat=arcu&metus=libero&sapien=rutrum&ut=ac&nunc=lobortis&vestibulum=vel&ante=dapibus&ipsum=at&primis=diam&in=nam&faucibus=tristique&orci=tortor",
        "salary": "$358074.57",
        "city": "Knoxville"
    },
    {
        "id": 5,
        "company": "DabZ",
        "job_title": "Accountant IV",
        "department": "Marketing",
        "location": "Texas",
        "date": "6/19/2021",
        "url": "https://ehow.com/ultrices/phasellus/id/sapien/in/sapien/iaculis.jpg?tristique=maecenas&est=leo&et=odio&tempus=condimentum&semper=id&est=luctus&quam=nec&pharetra=molestie&magna=sed&ac=justo&consequat=pellentesque&metus=viverra&sapien=pede&ut=ac&nunc=diam&vestibulum=cras&ante=pellentesque&ipsum=volutpat&primis=dui&in=maecenas&faucibus=tristique&orci=est&luctus=et&et=tempus&ultrices=semper&posuere=est&cubilia=quam&curae=pharetra&mauris=magna&viverra=ac&diam=consequat&vitae=metus&quam=sapien&suspendisse=ut&potenti=nunc&nullam=vestibulum&porttitor=ante&lacus=ipsum&at=primis&turpis=in&donec=faucibus",
        "salary": "$739137.25",
        "city": "Round Rock"
    },
    {
        "id": 6,
        "company": "Muxo",
        "job_title": "Staff Scientist",
        "department": "Business Development",
        "location": "Florida",
        "date": "10/18/2021",
        "url": "http://mapy.cz/curabitur/in/libero/ut/massa/volutpat.aspx?luctus=suspendisse&ultricies=ornare",
        "salary": "$804670.56",
        "city": "Tampa"
    },
    {
        "id": 7,
        "company": "Linkbuzz",
        "job_title": "Chemical Engineer",
        "department": "Human Resources",
        "location": "Oklahoma",
        "date": "3/5/2022",
        "url": "http://constantcontact.com/ante/ipsum/primis.json?quam=justo&pede=pellentesque&lobortis=viverra&ligula=pede&sit=ac&amet=diam&eleifend=cras&pede=pellentesque&libero=volutpat&quis=dui&orci=maecenas&nullam=tristique&molestie=est&nibh=et&in=tempus&lectus=semper&pellentesque=est&at=quam&nulla=pharetra&suspendisse=magna&potenti=ac&cras=consequat&in=metus&purus=sapien&eu=ut&magna=nunc&vulputate=vestibulum&luctus=ante&cum=ipsum&sociis=primis&natoque=in&penatibus=faucibus&et=orci&magnis=luctus&dis=et&parturient=ultrices&montes=posuere&nascetur=cubilia&ridiculus=curae&mus=mauris&vivamus=viverra&vestibulum=diam&sagittis=vitae&sapien=quam&cum=suspendisse&sociis=potenti&natoque=nullam&penatibus=porttitor&et=lacus&magnis=at",
        "salary": "$718862.38",
        "city": "Tulsa",
    }
];

db.once('open', async () =>{
    await Job.deleteMany({});
    const jobsInserted = await Job.insertMany(joblist);
    console.log('jobs inserted successfully');
    process.exit(0);
});
// const seedJobDB = async () => {
//   await Job.insertMany(seedJobs);
// };

// seedJobDB().then(() => {
//   mongoose.connection.close();
// });
