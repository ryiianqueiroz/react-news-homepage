import './app.css';
import React from 'react';
import ImageGamingGrowth from './assets/images/image-gaming-growth.jpg'
import ImageRetroPcs from './assets/images/image-retro-pcs.jpg'
import ImageTopLaptops from './assets/images/image-top-laptops.jpg'
import ImageWebDesktop from './assets/images/image-web-3-desktop.jpg'
import ImageWebMobile from './assets/images/image-web-3-mobile.jpg'
import Logo from './assets/images/logo.svg'

function App() {

  const menuHamburger = () => {
    const menu = document.getElementById('test').className;

    const newClassName = menu === 'hamburger' ? 'hamburger open' : 'hamburger'
    document.getElementById('test').className = newClassName
  }

  return (
    <div className="App">
      
      <nav>
        <img src={Logo} alt="#" className='logo'/>
        
        <div className="menu">
          <input type="checkbox" id="hambur" />
          <label id="test" className="hamburger" onClick={menuHamburger} htmlFor="hambur">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>  

          <div id="test2" className="lateral">
            <li><a href="a">Home</a></li>
            <li><a href="a">New</a></li>
            <li><a href="a">Popular</a></li>
            <li><a href="a">Trending</a></li>
            <li><a href="a">Categories</a></li>
          </div>
        </div>

      </nav>

      <div className="content">

        <div className="container">
          
          <div className="container-web3">
            <div className="web3-image">
              <img src={ImageWebDesktop} alt="#" className='web3-image-desktop'/>
              <img src={ImageWebMobile} alt="#" className='web3-image-mobile'/>
            </div>

            <div className="web3-text">
              <div className="web3-h1">
                <h1>The Bright Future of Web 3.0?</h1>
              </div>
              
              <div className="web3-p-button">
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>

                <button>READ MORE</button>
              </div>
            </div>
          </div>

          <div className="container-topics">
            <h1>New</h1>
            
            <div className="topics">

              <div className="topics-text">
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr />
              </div>

              <div className="topics-text">
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
                <hr />
              </div>

              <div className="topics-text">
                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                <hr />
              </div>

            </div>
          </div>

        </div>

        <div className="container-below">
          
          <div className="below-topics">
            <div className="below-image">
              <img src={ImageRetroPcs} alt="#" />
            </div>
            <div className="below-text">
              <h2>01</h2>
              <h3>Reviving Retro PCs</h3>
              <div className="p-below">
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>
          </div>
          
          <div className="below-topics">
            <div className="below-image">
              <img src={ImageTopLaptops} alt="#" />
            </div>
            <div className="below-text">
              <h2>02</h2>
              <h3>Top 10 Laptops of 2022</h3>
              <div className="p-below">
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>
          </div>
          
          <div className="below-topics">
            <div className="below-image">
              <img src={ImageGamingGrowth} alt="#" />
            </div>
            <div className="below-text">
              <h2>03</h2>
              <h3>The Growth of Gaming</h3>
              <div className="p-below">
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
  