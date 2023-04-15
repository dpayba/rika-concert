import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import './swiper-bundle.min.css';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleVideoClick(event) {
    const videoElement = event.target;
    videoElement.classList.toggle('active');
  
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }

  return (
    <div className="App">
      <Title/>

      <section className="polaroid-gallery">
        <figure className="polaroid-card">
          {/* <img src="images/IMG_1537.jpeg" /> */}
          <img src="soundcheck.jpg" width="300px" height="250px" />
          <figcaption>Soundcheck</figcaption>
        </figure>
        <figure className="polaroid-card">
          <img src="rika_isaac.jpeg" width="300px" height="250px" />
          <figcaption>Techical difficulties :(</figcaption>
        </figure>
        <figure className="polaroid-card">
          <img src="soundcheck2.jpg" width="300px" height="250px" />
          <figcaption>More practice</figcaption>
        </figure>
        <figure className="polaroid-card">
          <img src="group_photo.jpeg" width="300px" height="250px" />
          <figcaption>Meeting Shaun!</figcaption>
        </figure>
        <figure className="polaroid-card">
          <img src="first.jpg" width="300px" height="250px" />
          <figcaption>Showtime</figcaption>
        </figure>
        <figure className="polaroid-card">
          <img src="rika_sitting.jpg" width="300px" height="250px" />
          <figcaption>Getting comfortable</figcaption>
        </figure>
        <figure className="polaroid-card">
          <img src="rika_sariyah.jpg" width="300px" height="250px" />
          <figcaption>w/ Sariyah</figcaption>
        </figure>
        <figure className="polaroid-card">
          <img src="love.jpeg" width="300px" height="250px" />
          <figcaption>Fanboys...</figcaption>
        </figure>
      </section>

      <h1 className="photo-gallery-title">Video Gallery</h1>
      <p className="photo-gallery-text">Just a bunch of clips from throughout the night</p>
      <div class="video-container">
        <div class="video">
          <video src="playboy_1.mp4" poster="first.jpg" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="playboy_1.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="playboy_2.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="genie_1.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="genie_2.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="cupid_1.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="cupid_2.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="addicted_1.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="addicted_2.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="goodbye_1.mp4" onClick={handleVideoClick}></video>
        </div>
        <div class="video">
          <video src="goodbye_2.mp4" onClick={handleVideoClick}></video>
        </div>
      </div>

    

      <h1 className="photo-gallery-title">Photo Gallery</h1>
      <UploadForm />
      <p className ="photo-gallery-text">Feel free to add any other pictures by clicking the + above :)</p>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
