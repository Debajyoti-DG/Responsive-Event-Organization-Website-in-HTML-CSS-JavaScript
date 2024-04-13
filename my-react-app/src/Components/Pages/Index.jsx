import './Styles.css'; // Your local CSS file
//import 'swiper/css/swiper-bundle.min.css';


//import '@fortawesome/fontawesome-free/css/all.min.css';

const Index = () => {

  return (


<body>
  <header class="header">
    <a href="" class="logo"><span>k</span>anasu</a>

    <nav class="navbar">
      <a href="#home">home</a>
      <a href="#service">service</a>
      <a href="#about">about</a>
      <a href="#gallery">gallery</a>
      <a href="#price">price</a>
      <a href="#review">review</a>
      <a href="#contact">contact</a>
    </nav>

    <div id="menu-bars" class="fas fa-bars"></div>
  </header>

  
  <section class="home" id="home">
    <div class="content">
      <h3>
        where your ideas take off
        <span> kanasu events </span>
      </h3>
      <a href="#" class="btn">get quote</a>
    </div>

    <div class="swiper-container home-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="/images/home1.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="images/home2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="images/home3.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="images/home4.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="images/home5.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="images/home6.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="service" id="service">
    <h1 class="heading">our <span>services</span></h1>

    <div class="box-container">

      <a href="/invitation">
        <div class="box">
          <i class="fas fa-envelope"></i>
          <h3>invitation card design</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>

      <a href="/invitation">
        <div class="box">
          <i class="fas fa-photo-video"></i>
          <h3>photos and videos</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>

      <a href="/invitation">
        <div class="box">
          <i class="fas fa-music"></i>
          <h3>entertainment</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>

      <a href="/invitation">
        <div class="box">
          <i class="fas fa-car"></i>
          <h3>event vehicles</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>

      <a href="/venue">
        <div class="box">
          <i class="fas fa-map-marker-alt"></i>
          <h3>venue selection</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>

      <a href="/invitation">
        <div class="box">
          <i class="fas fa-birthday-cake"></i>
          <h3>food catering</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>
      <a href="/invitation">
        <div class="box">
          <i class="fas fa-birthday-cake"></i>
          <h3>food catering</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>
      <a href="/invitation">
        <div class="box">
          <i class="fas fa-birthday-cake"></i>
          <h3>food catering</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            suscipit.
          </p>
        </div>
      </a>

    </div>
  </section>

  <section class="about" id="about">
    <h1 class="heading"><span>about</span> us</h1>

    <div class="row">
      <div class="image">
        <img src="images/about.jpg" alt="" />
      </div>

      <div class="content">
        <h3>your occasion deserves our careful planning</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          labore fugiat ut esse perferendis perspiciatis provident dolores
          fuga in facilis culpa possimus, quia praesentium itaque, sapiente
          quasi harum rem asperiores.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          vero expedita incidunt provident quibusdam aut odit, numquam
          nesciunt similique nisi.
        </p>
        <a href="#" class="btn">reach us</a>
      </div>
    </div>
  </section>

  <section class="gallery" id="gallery">
    <h1 class="heading">our <span>gallery</span></h1>

    <div class="box-container">
      <div class="box">
        <img src="images/gallery1.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery2.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery3.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery4.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery5.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery6.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery7.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery8.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>

      <div class="box">
        <img src="images/gallery9.jpg" alt="" />
        <h3 class="title">best events</h3>
        <div class="icons">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-share"></a>
          <a href="#" class="fas fa-eye"></a>
        </div>
      </div>
    </div>
  </section>

  <section class="price" id="price">
    <h1 class="heading">our <span>pricing</span></h1>

    <div class="box-container">
      <div class="box">
        <h3 class="title">basic</h3>
        <h3 class="amount">$879.00</h3>
        <ul>
          <li><i class="fas fa-check"></i>full services</li>
          <li><i class="fas fa-check"></i> decorations</li>
          <li><i class="fas fa-check"></i> music and photos</li>
          <li><i class="fas fa-check"></i> food and drinks</li>
          <li><i class="fas fa-check"></i> invitation card</li>
        </ul>
        <a href="#" class="btn">check out</a>
      </div>

      <div class="box">
        <h3 class="title">prime</h3>
        <h3 class="amount">$799.00</h3>
        <ul>
          <li><i class="fas fa-check"></i>full services</li>
          <li><i class="fas fa-check"></i> decorations</li>
          <li><i class="fas fa-check"></i> music and photos</li>
          <li><i class="fas fa-check"></i> food and drinks</li>
          <li><i class="fas fa-check"></i> invitation card</li>
        </ul>
        <a href="#" class="btn">check out</a>
      </div>

      <div class="box">
        <h3 class="title">luxury</h3>
        <h3 class="amount">$379.00</h3>
        <ul>
          <li><i class="fas fa-check"></i>full services</li>
          <li><i class="fas fa-check"></i> decorations</li>
          <li><i class="fas fa-check"></i> music and photos</li>
          <li><i class="fas fa-check"></i> food and drinks</li>
          <li><i class="fas fa-check"></i> invitation card</li>
        </ul>
        <a href="#" class="btn">check out</a>
      </div>

      <div class="box">
        <h3 class="title">ultra</h3>
        <h3 class="amount">$920.00</h3>
        <ul>
          <li><i class="fas fa-check"></i>full services</li>
          <li><i class="fas fa-check"></i> decorations</li>
          <li><i class="fas fa-check"></i> music and photos</li>
          <li><i class="fas fa-check"></i> food and drinks</li>
          <li><i class="fas fa-check"></i> invitation card</li>
        </ul>
        <a href="#" class="btn">check out</a>
      </div>
    </div>
  </section>

  <section class="reivew" id="review">
    <h1 class="heading">client's <span>review</span></h1>

    <div class="review-slider swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="images/img1.jpg" alt="" />
            <div class="user-info">
              <h3>nayana</h3>
              <span>happy customer</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
            corrupti, ipsam iure nisi unde et assumenda perspiciatis
            voluptatibus nihil.
          </p>
        </div>

        <div class="swiper-slide box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="images/img2.jpg" alt="" />
            <div class="user-info">
              <h3>lisa</h3>
              <span>happy customer</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
            corrupti, ipsam iure nisi unde et assumenda perspiciatis
            voluptatibus nihil.
          </p>
        </div>

        <div class="swiper-slide box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="images/img3.jpg" alt="" />
            <div class="user-info">
              <h3>mary</h3>
              <span>happy customer</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
            corrupti, ipsam iure nisi unde et assumenda perspiciatis
            voluptatibus nihil.
          </p>
        </div>

        <div class="swiper-slide box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="images/img4.jpg" alt="" />
            <div class="user-info">
              <h3>rose</h3>
              <span>happy customer</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
            corrupti, ipsam iure nisi unde et assumenda perspiciatis
            voluptatibus nihil.
          </p>
        </div>
      </div>
    </div>
  </section>

  
  <section class="contact" id="contact">
    <h1 class="heading"><span>contact</span> us</h1>

    <form action="">
      <div class="inputBox">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
      </div>
      <div class="inputBox">
        <input type="tel" placeholder="number" />
        <input type="text" placeholder="subject" />
      </div>
      <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
      <input type="submit" value="send message" class="btn" />
    </form>
  </section>

  <section class="footer">
    <div class="box-container">
      <div class="box">
        <h3>branches</h3>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> bangalore </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> hyderabad </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> delhi </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> kolkata </a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i> chennai </a>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <a href="#"> <i class="fas fa-arrow-right"></i> home </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> service </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> about </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> gallery </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> price </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> reivew </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> contact </a>
      </div>

      <div class="box">
        <h3>contact info</h3>
        <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
        <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
        <a href="#"> <i class="fas fa-envelope"></i> kanasu@gmail.com </a>
        <a href="#"> <i class="fas fa-envelope"></i> kanasuind@gmail.com </a>
        <a href="#">
          <i class="fas fa-map-marker-alt"></i> bangalore, india - 560054
        </a>
      </div>

      <div class="box">
        <h3>follow us</h3>
        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i class="fab fa-linkedin-in"></i> linkedin </a>
      </div>
    </div>

    <div class="credit">
      created by <span>Tivotal</span> | all rights reserved
    </div>
  </section>


  <div class="theme-toggler">
    <div class="toggle-btn">
      <i class="fas fa-cog"></i>
    </div>

    <h3>choose color</h3>

    <div class="buttons">
      <div class="theme-btn" style={{background: "black"}}></div>
      <div class="theme-btn" style={{background: "white"}}></div>
      <div class="theme-btn" style={{background: "yellow"}}></div>
      <div class="theme-btn" style={{background: "orange"}}></div>
      <div class="theme-btn" style={{background: "green"}}></div>
      <div class="theme-btn" style={{background: "cyan"}}></div>
    </div>
  </div>


  {/* <script src="/static/app.js"></script> */}
</body>

  );
}

export default Index;