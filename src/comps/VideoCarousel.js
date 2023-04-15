function VideoCarousel() {
    useEffect(() => {
      Swiper.use([Navigation]);
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, []);
  
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {videos.map((video, index) => (
            <div className="swiper-slide" key={index}>
              <h3>{video.title}</h3>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    );
  }
  
  export default VideoCarousel;
  