let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
    imageSrc:[
        "Galaxy_Tours/images/asteroid.jpg",
        "Galaxy_Tours/images/fantasy.jpg",
        "Galaxy_Tours/images/space.jpg",
        "Galaxy_Tours/images/spaceship.jpg"
    ],
    h2ClassController:{
        centered:true,
        colorFont:false
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    imageAlt:"Photo from space!!"
};
const app = Vue.createApp({
    data(){
        return pageData;
    }
});

app.mount("#app");