const person = [
    {
      id: 1,
      name: "Susan Smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

let img=document.getElementById('person-img');
let author=document.getElementById('author');
let job=document.getElementById('jobs');
let info=document.getElementById('info');
let prevBtn=document.querySelector('.prev-btn');
let nextBtn=document.querySelector('.next-btn');
let randomBtn=document.querySelector('.random-btn');
let index=0;
window.addEventListener('DOMContentLoaded',()=>{
  informationPerson()
})
function informationPerson(){
  let item=person[index];
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text
}
nextBtn.addEventListener('click',()=>{
  index++;
  if(index>person.length-1){
    index=0;
  }
  informationPerson()
})
prevBtn.addEventListener('click',()=>{
  index--;
  if(index<0){
    index=person.length-1;
  }
  informationPerson()
})
randomBtn.addEventListener('click',()=>{
  index=Math.floor(Math.random()*person.length);
  informationPerson();
})