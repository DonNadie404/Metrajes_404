// Interactions updated to support YouTube iframe player and your provided video IDs
(function(){
  const player = document.getElementById('player'); // iframe
  const playOverlay = document.getElementById('playOverlay');
  const viewsEl = document.getElementById('views');
  const likeBtn = document.getElementById('likeBtn');
  const dislikeBtn = document.getElementById('dislikeBtn');
  const commentText = document.getElementById('commentText');
  const commentList = document.getElementById('commentList');
  const commentsCount = document.getElementById('commentsCount');
  const relatedList = document.getElementById('relatedList');
  const postBtn = document.getElementById('postComment');

  if (!player) return console.warn('Player iframe not found.');

  // Simple state (in-memory)
  let views = 1234; // initial sample
  let likes = 45;
  let dislikes = 2;
  let liked = false;
  let disliked = false;
  let comments = [
    {author:'Alice', text:'Nice retro demo!', time: new Date().toLocaleString()},
    {author:'Bob', text:'Brings back memories.', time: new Date().toLocaleString()}
  ];

  function renderViews(){ if (viewsEl) viewsEl.textContent = views + ' views'; }
  function renderButtons(){
    if (!likeBtn || !dislikeBtn) return;
    likeBtn.textContent = 'Like (' + likes + ')';
    dislikeBtn.textContent = 'Dislike (' + dislikes + ')';
    likeBtn.style.fontWeight = liked ? '700' : '400';
    dislikeBtn.style.fontWeight = disliked ? '700' : '400';
  }
  function renderComments(){
    if (!commentList || !commentsCount) return;
    commentList.innerHTML = '';
    comments.forEach(c=>{
      const li = document.createElement('li');
      li.innerHTML = `<span class="commentAuthor">${escapeHtml(c.author)}</span> <span class="commentTime">${escapeHtml(c.time)}</span><div>${escapeHtml(c.text)}</div>`;
      commentList.appendChild(li);
    });
    commentsCount.textContent = comments.length;
  }

  // Helper: set iframe to a YouTube video ID and optionally autoplay
  function setYouTubeVideo(videoId, autoplay){
    if (!videoId) return;
    const base = 'https://www.youtube-nocookie.com/embed/';
    const params = '?rel=0';
    const auto = autoplay ? '&autoplay=1' : '';
    player.src = base + encodeURIComponent(videoId) + params + auto;
  }

  // Play overlay: when clicked, start playback with autoplay and count as a view
  if (playOverlay){
    playOverlay.addEventListener('click', ()=>{
      // if the iframe already had autoplay, this will still refresh it
      // set autoplay and increment views
      const srcId = (player.src || '').split('/embed/')[1] || '';
      const vid = srcId.split('?')[0];
      setYouTubeVideo(vid, true);
      views++;
      renderViews();
      playOverlay.style.display = 'none';
    });
  }

  // related video clicking: swap iframe src to the selected YouTube ID and autoplay
  if (relatedList) relatedList.addEventListener('click', (e)=>{
    const item = e.target.closest('.relatedItem');
    if(!item) return;
    const vid = item.dataset.videoId;
    if (vid){
      setYouTubeVideo(vid, true);
      // update title
      const rtitle = item.querySelector('.rtitle');
      if (rtitle) document.getElementById('videoTitle').textContent = rtitle.textContent;
      views = Math.floor(Math.random()*50000);
      renderViews();
      if (playOverlay) playOverlay.style.display = 'none';
    }
  });

  if (likeBtn) likeBtn.addEventListener('click', ()=>{
    if(liked){ likes--; liked=false; }
    else { likes++; if(disliked){ disliked=false; dislikes--; } liked=true; }
    renderButtons();
  });

  if (dislikeBtn) dislikeBtn.addEventListener('click', ()=>{
    if(disliked){ dislikes--; disliked=false; }
    else { dislikes++; if(liked){ liked=false; likes--; } disliked=true; }
    renderButtons();
  });

  if (postBtn) postBtn.addEventListener('click', ()=>{
    const txt = (commentText && commentText.value || '').trim();
    if(!txt) return alert('Comment cannot be empty.');
    comments.unshift({author:'You', text: txt, time: new Date().toLocaleString()});
    if (commentText) commentText.value = '';
    renderComments();
  });

  function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, c=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  renderViews();
  renderButtons();
  renderComments();

})();
