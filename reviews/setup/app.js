// local reviews data
const person = document.querySelector('#person-img');
const author =  document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const random = document.querySelector('.random-btn');
const app = {
  currentindex : 0,
  arrproFile : [],
  reviews : [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ],
  loadcurrProFile(){
    this.currprofile = this.reviews[this.currentindex];
    person.src = this.currprofile.img;
    author.textContent = this.currprofile.name;
    job.textContent = this.currprofile.job;
    info.textContent= this.currprofile.text;
  },
  handleEvent(){
    const _this = this;
    nextBtn.onclick = ()=>{
      _this.currentindex++;
      if(_this.currentindex>_this.reviews.length-1)
            _this.currentindex = 0;
      _this.loadcurrProFile();
    }
    prevBtn.onclick = ()=>{
      _this.currentindex--;
      if(_this.currentindex<0)
            _this.currentindex = _this.reviews.length-1;
      _this.loadcurrProFile();
    }
    random.onclick =()=>{
    _this.arrproFile.push(_this.currentindex);
    if(_this.arrproFile.length==_this.reviews.length)
      _this.arrproFile=[];
      let newIndex;
      do{
        newIndex = Math.floor(Math.random()* _this.reviews.length)
      }while(_this.reviews.includes(newIndex))
      _this.currentindex = newIndex;
      _this.loadcurrProFile();
    }

  },
  start(){
    this.loadcurrProFile();
    this.handleEvent();
  }
  
}
app.start();