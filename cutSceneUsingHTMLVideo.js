function vidEnded (id) {
  ASLEvent ("VideoEnded", id); /* Call the Quest function. */
  let el = document.getElementById (id);
  el.remove(); /* Remove the video. */
  _waitingForSoundToFinish = false; /* Resume game play. */
  uiShow ('#txtCommand');
  document.getElementById('txtCommand').focus();
}

function playVid (src, id){
  uiHide ('#txtCommand');
  let vidEl = document.createElement ('VIDEO');
  vidEl.id = id;
  vidEl.autoplay = true;
  //vidEl.controls = true; /* Not for this example using a cut scene. */
  let source = document.createElement("source");
  source.src = src;
  source.type = "video/mp4"; /* assuming only MP4 is used */
  vidEl.appendChild(source); /* Assuming only one source */
  _waitingForSoundToFinish = true; /* Interrupt game play while video plays */
  vidEl.onended = (event) => {
    vidEnded (event.target.id); 
  };
  document.getElementById ('divOutput').appendChild (vidEl); /* Add video to the game's divOutput element */
  //vidEl.webkitRequestFullScreen(); /* This works in the Windows app, but not on Firefox */
  scrollToEnd()
  let tmr = setTimeout(function (){ scrollToEnd(); }, 500)
}