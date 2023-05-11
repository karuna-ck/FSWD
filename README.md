HTML
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">
<body>
  <img class="log0" src="images/img12.png" style="align-content: end;margin-left: 0%;height:100px;width:100px;">
  <div class="navigation" style="background-color:rgb(250, 112, 0);margin-top: 4%;height:4em;text-align:right">
    <ul>
      <nav class="w3-bar w3-black">
       
       <li> <a href="#home" class="w3-button w3-bar-item">Home</a></li>
       <li><a href="#about us" class="w3-button w3-bar-item">about us</a></li>
       <li><a href="#services" class="w3-button w3-bar-item">Services</a>
       <div class="sub-menu-1">
       <ul>
        <li><a href="#">Rescue injured and old strey animals</a></li>
        <li><a href="#">Medical treatment</a></li>
        <li><a href="#">Rehabilitation</a></li>
        <li><a href="#">adoption and awareness</a></li>
        <li><a href="#">volunteers</a></li>
      </ul>
       </div>
      </li>
       <li><a href="#gallery" class="w3-button w3-bar-item">Gallery</a>
        <div class="sub-menu-1">
          <ul>
           <li><a href="#">Shelter pictures</a></li>
           <li><a href="#">Rescue Diaries</a></li>
           <li><a href="#">awareness program</a></li>
         </ul>
          </div>
         </li>
         <style>
          /* CSS styles for gallery display */
          .gallery {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
          }
          
          .gallery img {
              width: 200px;
              height: 200px;
              margin: 10px;
              object-fit: cover;
              cursor: pointer;
          }
          
          .modal {
              display: none;
              position: fixed;
              z-index: 1;
              padding-top: 50px;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.9);
          }
          
          .modal-content {
              margin: auto;
              display: block;
              width: 80%;
              max-width: 700px;
          }
          
          .modal-content img {
              width: 100%;
              height: auto;
          }
          
          .close {
              position: absolute;
              top: 15px;
              right: 35px;
              color: #f1f1f1;
              font-size: 40px;
              font-weight: bold;
              transition: 0.3s;
              cursor: pointer;
          }
          
          .close:hover,
          .close:focus {
              color: #bbb;
              text-decoration: none;
              cursor: pointer;
          }
      </style>
       <li><a href="#donate" class="w3-button w3-bar-item">Donate</a></li>
       <li><a href="#contact us" class="w3-button w3-bar-item">Contact Us</a></li>
      </div>
  </ul>
  </nav>

<div class="photos">
  <section style="background-color: rgb(17, 144, 0);height:500px;">
    <img class="mySlides" src="images/img1.png" style="margin-left: 50%;">
    <img class="mySlides" src="images/img4.png" style="margin-left: 30%;">
    <img class="mySlides" src="images/img3.jpeg" style="margin-left: 40%;">
    <div class="title">
      <h3>WELCOME TO</h3>
      <h2>WE SAVE<br> ANIMALS</h2><h2>(WSA)</h2>
        <P style="text-size-adjust: 11px;color: rgb(0, 0, 114);">We are a team of ardent animal lovers driven to help the<br> voiceless.
          Being humans, let's be the voice for the voiceless.</P>
          <div class="button1" style="background-color: rgb(17, 144, 0) ;height:13px;margin-top: 10%;"></div>
            <a href="#" class="btn1">Learn More</a>
          </div>
  </section>
</div>
</div>
<div class="color" style="background-color: rgb(0, 0, 142);height:30px"></div>
  <script>
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
  }
</script>

  <div class="founder" style="background-color: rgb(220, 220, 220);margin-top: 40%;margin-bottom: 10%;height:600px;margin-top: 0%;">
<div class="wsa">
 <h1>ABOUT THE COFOUNDER</h1>
  <img src="images/img2.png" alt="" />
<p class="text-right" style="margin-left:20px;font-size:20px;">Praveen Kumar L, also called Rider Praveen is an ex-gym instructor who gave up his job, his means of 
  livelihood, all his and his family’s assets and savings to start We Save Animals (WSA) Welfare Trust.From paralysed, blind, old aged 
  animals to accident cases, cruelty cases and terminally ill animals - he takes them all in, giving them happiness, food and a home in 
  his shelter.<br><br>It started for Praveen in 2013, when he rescued a kitten with a spinal injury. He nursed it at home, but it passed 
  away after a week, leaving Praveen to wonder what he could do to help numerous animals like this, that suffer in silence.</p>
  <div class="button">
  <a href="#" class="btn">Read More</a>
</div>
</div>
</div>
<div class="wishers">
  <div class="text"  >
    <h1>Tharinisiri</h1>
    <p>I have visited WSA shelter with my friends and family every year. This shelter<br>
       is a temple for many dogs who are hurt and can't be on the streets. I feel WSA shelter<br>
       is not just any shelter. Unlike others where the animals are caged, here, they roam<br>
      freely and happily.<br><br>
      Praveen is doing a good job keeping them free. All the animals enjoy their freedom with good,<br> 
      healthy food and a clean environment. The staff is very helpful too.<br><br>
      Praveen is doing a really good job. He is a Godfather for the animals.</p>
    </div>
    <img src="images/img8.png" alt=""/>
  </div>
  <div><
  <div>
  <div class="wishers1">
    <div class="text">
    <h1>Tejaswini</h1>
   
    <p>I have been closely associated with WSA for about two years now and I have got to see Praveen's<br>
       passion and dedication for the voiceless first hand. No matter the time of the day or place, if he<br>
       can help an animal or a human in distress, he will do it. There is absolutely no second thoughts or<br>
       doubts about that! I have seen him nurse & nurture back to health, many fatally injured and diseased<br>
       animals upon whom even the vets had given up on and had suggested euthanasia.  Today these animals are<br>
       a living testimony to how unflinching care and compassion can make miracles happen and Praveen has made a<br>
       lot of such miracles happen at his shelter.<br><br> 
      It gives me a great sense of satisfaction to be associated with WSA. A visit to this shelter puts a big smile<br>
       on my heart, the very sight of animals who seem to be leading a "happily ever after" lives came here when they<br>
        were battling for their very existence!<br><br>
      
      I thank Praveen for this noble cause he has taken up, something for which he has made many unimaginable<br>
       sacrifices in his own life. Its a service not just to the animals in need but for humanity.<br><br>
      
      Keep doing this Gods work, Praveen. May the compassion and love you exude for our fellow earthlings return<br>
       to you multifold.</p>
    </div>
    <img src="images/img9.png" alt=""/>
    </div>
  </div>
  <div class="info" >
    <div class="hoo">
      <h2 style="text-align: center;">HOURS OF OPERATION</h2>
      <P style="text-align: center;">At the shelter, staff members are in the office and available most weekdays</P>
  </div>
    <div class="data">
    <div class="address">
      <h2 style="text-align: center;">ADDRESS</h2>
      <P style="text-align: center;">Sy.No. 18/2, K. Chudahalli, Somanahalli Post, Near Guhantara Resort & KMS Farm,<br> 
        Uttarahalli Hobli, Kanakapura Main Road, Bangalore - 560 082</P>
    </div>
  </div>
  </div>
       <div>
       <footer style="background-color: rgba(105, 186, 0, 0.907);">

        <div class="footercontains" >
        <div class="socialIcons">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-flickr"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
       </footer>
</body>
</html>





















CSS:

*{
    margin:0;
    padding:0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.ul{
    float:right;
    list-style-type: none;
    
}
ul li{
    margin-top: 15px;
    margin-right: 20px;
    display: inline-block;
}
ul li a{
    text-decoration: none;
    color: #fff;
    padding: 5px 20px;
    border:1px solid #fff;
    transition: 0.6s ease;
  
}
ul li a:hover{
    background-color: #ffffff;
    color:#000;
   
}
.photos img{
   width: auto;
    background-color: rgb(152, 152, 152);
    height: 100%;
    size: 2px;
    margin-top: 50px;
    align-content: center;
    margin-bottom: 2px;
}
.title{
    margin-top: 20%;
    position:absolute;
    top:30%;
    left:16%;
    transform:translate(-50%,-50%);
}
.title h6{
margin-top: 10%;
margin-left:10px;

}
.title h2{
    color:rgb(1, 1, 58);
    font-size: 70px;
margin-left: 10px;
}
.title h4{
margin-left: 10px;
}
.wishers{
    background-color:rgb(251, 168, 67);
    display:flex;
justify-content: space-between;
padding:40px;
width:50% left;
margin:10rem auto 0 auto;
align-content:left;
}
.wishers h3{
   
    text-align: centre;
    text-size-adjust: 20px;
}
.wishers img{
    height:100%;
    display:flex;
    size:50px;
}
.wishers p{
   
text-size-adjust: 20px;
text-decoration-color: rgb(0, 0, 118);

}

.wishers1{
    background-color:rgb(251, 168, 67);
    display:flex;
justify-content: space-between;
padding:40px;
width:50% left;
margin:10rem auto 0 auto;
align-content:left;
margin-top: 30px;
}
.wishers1 h3{
   
    text-align: centre;
    text-size-adjust: 20px;
}
.wishers1 img{
    height:100%;
    display:flex;
    size:50px;
}
.wishers1 p{
   
text-size-adjust: 20px;
text-decoration-color: rgb(0, 0, 118);
}
.founder{
    top: 0%;
    background-color: rgb(214, 214, 214) 0px top;
    display:flex;
justify-content: space-between;
padding:40px;
width:30% left;
margin:10rem auto 0 auto;
align-content:center;
}
.founder img{
    margin-top: 10%;;
    width:50% ;
    height:40%;
    margin-top: 40px;
image-orientation: 20px;
display: block;
 margin-left: auto; 
 margin-right: auto; 
 width: 50%;
}
.founder p{
    margin-top: 20px;
    text-size-adjust: 20px;
    text-decoration-color: rgb(0, 0, 104);
    border-radius: 20rem;
}
.founder h1{
    margin-left: 0px;
    background-color: orange;
   background-color: 40px ;
   align-content: center;
   max-height: fit-content;
   height:10px 50px top;
   text-align: center;
   margin-top: 2%;
}
.button{
    height: 200px;
    position: relative;
    margin-top: 5%;

}
.btn{
    margin: 0;
    position: absolute;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

background-color: rgb(255, 132, 0);
text-decoration: none;
    color: #fff;
    padding: 5px 20px;
    border:1px solid #000000;
    transition: 0.6s ease;
}

.btn:hover{
    background-color: #fff;
    color:#000;   
}
.footercontains{
    height:200px;
    width:auto;

}
.socialIcons{
    display:flex;
    justify-content:center;
}
.socialIcons a{
    text-decoration:none;
    padding:10px;
    background-color: #fff;
    margin: 10px;
    border-radius: 50%;

}
.socialIcons a i{
    font-size:2em;
    color:rgb(0, 0, 99);
    opacity: 0.9;

}
.socialIcons a:hover{
    background-color: rgb(166, 166, 255);
    transition:0.5s ease;
    
}
.info{
    background-image: linear-gradient(rgba(0,0,0.5,0.6),rgba(0,0,0.5,0.6)),url(../Gallery-Intern/images/img6.png);
    text-decoration: none;
    height: 200px;
    width:auto;
    color:#fff
}
.info hoo h2{
    text-align: left;

}
.data address h2{
    margin-top: 50%;
    color: #ffffff;
    text-align: right;
    
}
 .info  p{
    color: #ffffff;
    text-size-adjust: 15px;
    text-align: left;
    text-align: justify;
    text-decoration: none;
 }
 .info hoo p{
    color: #fff;
    text-size-adjust: 15px;
    text-align: right;
    text-align: justify;
 }

.button1{
    height: 200px;
    position: relative;
    top: 30%%;

}
.btn1{
    margin: 0;
    position: absolute;
   bottom: 0%;
    left: 40%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
background-color: rgb(255, 132, 0);
text-decoration: none;
    color: #fff;
    padding: 5px 20px;
    border:1px solid #000000;
    transition: 0.6s ease;
}

.btn1:hover{
    background-color: #fff;
    color:#000;   
}
.sub-menu-1{
    display: none;
    margin-top: 20px;
}
.navigation ul li:hover .sub-menu-1{
    display: block;
    position:absolute;
    background-color: rgb(250, 112, 0);
    margin-top: 15px;
    margin-left: -15px;
}
.navigation ul li:hover .sub-menu-1 ul
{
    display:inline-table;
    margin: 10px;
}
.sub-menu-2{
    display: none;
    margin-top: 20px;
}
.navigation ul li:hover .sub-menu-2{
    display: block;
    position:absolute;
    background-color: rgb(250, 112, 0);
    margin-top: 15px;
    margin-left: -15px;
}
.navigation ul li:hover .sub-menu-2 ul
{
    display:block;
    margin: 10px;
}












Javascript:

ocument.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to the navigation links
    var navLinks = document.querySelectorAll(".ul li a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        // Add your logic here for handling navigation link clicks
      });
    }
  
    // Add click event listener to the buttons
    var buttons = document.querySelectorAll(".btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default button behavior
        // Add your logic here for handling button clicks
      });
    }
  
    // Add click event listeners to the social icons
    var socialIcons = document.querySelectorAll(".socialIcons a");
    for (var i = 0; i < socialIcons.length; i++) {
      socialIcons[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        // Add your logic here for handling social icon clicks
      });
    }
  });
  // Get the modal element
var modal = document.getElementById("myModal");

// Get the image and modal content elements
var images = document.querySelectorAll(".gallery img");
var modalImg = document.getElementById("modalImage");

// Add a click event listener to each image
images.forEach(function(image) {
    image.addEventListener("click", function() {
        // Display the modal
        modal.style.display = "block";
        
        // Set the image source in the modal
        modalImg.src = this.src;
    });
});

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// Add a click event listener to the close button
closeBtn.addEventListener("click", function() {
    // Hide the modal when the close button is clicked
    modal.style.display = "none";
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});








