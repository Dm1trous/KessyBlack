const playPause = _ => {
   if(audio.paused){
      audio.play();
      img.src = "../img/pause.png";
   }else{
      audio.pause();
      img.src = "../img/play.png";
   }
}

const playPause2 = _ => {
    if(audio2.paused){
       audio2.play();
       img2.src = "../img/pause.png";
    }else{
       audio2.pause();
       img2.src = "../img/play.png";
    }
 }

 const playPause3 = _ => {
    if(audio3.paused){
       audio3.play();
       img3.src = "../img/pause.png";
    }else{
       audio3.pause();
       img3.src = "../img/play.png";
    }
 }

 const playPause4 = _ => {
    if(audio4.paused){
       audio4.play();
       img4.src = "../img/pause.png";
    }else{
       audio4.pause();
       img4.src = "../img/play.png";
    }
 }

 const playPause5 = _ => {
    if(audio5.paused){
       audio5.play();
       img5.src = "../img/pause.png";
    }else{
       audio5.pause();
       img5.src = "../img/play.png";
    }
 }

 const playPause6 = _ => {
    if(audio6.paused){
       audio6.play();
       img6.src = "../img/pause.png";
    }else{
       audio6.pause();
       img6.src = "../img/play.png";
    }
 }

 const playPause7 = _ => {
    if(audio7.paused){
       audio7.play();
       img7.src = "../img/pause.png";
    }else{
       audio7.pause();
       img7.src = "../img/play.png";
    }
 }

 function isOnVisibleSpace(element) {
	var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset   = elemRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('title-black-animation');
      }
    });
  });
  observer.observe(document.querySelector('.title-black'));

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('container-img-kessy-animation');
      }
    });
  });
  observer2.observe(document.querySelector('.container-img-kessy'));

  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('concert-grid-card-animation');
      }
    });
  });
  observer3.observe(document.querySelector('.concert-grid-card'));

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('concert-grid-card-animation2');
      }
    });
  });
  observer4.observe(document.querySelector('.concert-grid-card-red'));

  const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('concert-grid-card-animation3');
      }
    });
  });
  observer5.observe(document.querySelector('.concert-grid-card3'));