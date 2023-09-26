import React from "react";
import './App.css';

import Dog from "./Components/dog";
import Project from './Components/projects'
import Article from "./Components/article";

import { HashLoader } from "react-spinners";

import { Canvas } from "react-three-fiber";
import { PerspectiveCamera, OrbitControls} from "@react-three/drei";

import { dataProjects } from './data/data-projects'
import { dataArticles } from './data/data-articles'

import logo from './assests/boy.png'
import modeIcon from './assests/day-and-night.png'


function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark')
  const [loading, setLoading] = React.useState(true)

  const loaderStyle = {
    position: 'absolute',
    left: '50%',
    top: '30%',
  }

  const modeIconStyle = {
    marginLeft: 'auto',
    marginRight: '12px',
    maxHeight: '70px',
    maxWidth: '70px',
    cursor: 'pointer'
  }

  const projects = dataProjects.map(project => {
    return <Project project = {project} />
  })

  const articles = dataArticles.map(article =>{
    return <Article article = {article} />
  })

  const toggleTheme =  () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  React.useEffect(() => {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("target", "_blank");
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const navibar = document.querySelector('.navbar');
      navibar.classList.toggle('sticky', window.scrollY > 200); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  React.useEffect(() => {
    const sliders = document.querySelectorAll('.card')
    const articles = document.querySelectorAll('.article')

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
      entries.forEach(entry => {
        if(!entry.isIntersecting){
          return;
        }
        else{
          entry.target.classList.add('slide');
          entry.target.classList.add('scroll-up');
          appearOnScroll.unobserve(entry.target);
        }
      })
    }, {
        threshold: 0.5,
    })

    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    })

    articles.forEach(article => {
      appearOnScroll.observe(article);
    })
  }, [])

  return (
    <div className="container" id={theme}>
      <nav>
        <div className='navbar'>
          <a href='/'>
            <img src={logo} alt='logo' />
            <h1>Aniket Dwivedi</h1>
          </a>
          <img src={modeIcon} style={modeIconStyle} onClick={toggleTheme} alt='toggle theme' />
        </div>
      </nav>

      <div className='landing-image'>
        {loading ? 
          <HashLoader style={loaderStyle} color="#36d7b7" speedMultiplier={2} /> : 
          <Canvas >
            <PerspectiveCamera makeDefault position={[6, 5, 10]} fov={38}  />
            <Dog />
            <OrbitControls autoRotate autoRotateSpeed={2} enableDamping />
          </Canvas>
        }
      </div>

      <div className='intro'>
        <h2>Hello, I'm a student on a quest to unlock the magic of machine learning.</h2>
      </div>

      <div className='about'>
        <p>Greetings! I'm Aniket Dwivedi, an undergraduate student in the final year of my academic journey. I find my passion in the world of machine learning, and I've immersed myself in its captivating world. From understanding the intricacies of neural networks to experimenting with algorithms, I am endlessly fascinated by the world of machine learning. Python is my go-to language which helps bring my ideas to life. I'm also an enthusiast of aesthetics and love crafting visually appealing websites. I believe that a well-designed website can be a canvas for creativity, seamlessly integrating design and utility. Join me in exploring the fascinating world of machine learning, neural networks, and the endless possibilities they offer.
        </p>
      </div>

      <div className='icons'>
        <ul>
          <li>
            <a href='https://github.com/Si-ddhartha'>
              <i class="fa-brands fa-github fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/aniket-dwivedi-py/'>
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href='https://medium.com/@aniket1.00111'>
              <i class="fa-brands fa-medium fa-2xl"></i>
            </a>
          </li>
        </ul>
      </div>

      <hr />

      <div className="container-projects">
        <h1>Projects</h1>
        <div className="projects-list">
          {projects}
        </div>
      </div>

      <div className="container-articles">
        <h1>Explore My Latest Articles</h1>
        <h3>Welcome to my articles section! Here, you'll find my latest writings on various topics. From insightful pieces to thought-provoking narratives, my articles reflect my passion for machine-learning. Take your time, have a look around, and enjoy!</h3>
        <div className="articles-list">
          {articles}
        </div>
      </div>

      <div className="contact">
        <h1>Let's Talk</h1>
        <h3>Have questions, ideas, or just want to say hello? Feel free to reach out through the email below. Whether it's about collaboration opportunities, feedback on my work, or a friendly chat, I'm here to connect. Looking forward to hearing from you!</h3>
        <h4>aniket1.00111@gmail.com 👈🏻</h4>
      </div>
    </div>
  );
}

export default App;
