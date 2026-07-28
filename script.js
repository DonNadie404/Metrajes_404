// Basic interactions: view increment, like/dislike, comments, related-item click
(function(){
  const player = document.getElementById('player');
  const viewsEl = document.getElementById('views');
  const likeBtn = document.getElementById('likeBtn');
  const dislikeBtn = document.getElementById('dislikeBtn');
  const commentText = document.getElementById('commentText');
  const commentList = document.getElementById('commentList');
  const commentsCount = document.getElementById('commentsCount');
  const relatedList = document.getElementById('relatedList');
  const postBtn = document.getElementById('postComment');

  if (!player) return console.warn('Video element not found.');

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

  // render helpers
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

  // interactions
  player.addEventListener('play', ()=>{
    // increment views once per page load when user plays
    if(!player.dataset.viewed){
      views++;
      player.dataset.viewed = '1';
      renderViews();
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

  // related video clicking: swap source and poster
  if (relatedList) relatedList.addEventListener('click', (e)=>{
    const item = e.target.closest('.relatedItem');
    if(!item) return;
    const src = item.dataset.src;
    const poster = item.dataset.poster;
    if(src){
      player.pause();
      // update source element(s)
      const sourceEl = player.querySelector('source');
      if (sourceEl) sourceEl.src = src;
      if(poster) player.poster = poster;
      player.load();
      player.play().catch(()=>{ /* autoplay may be blocked */});
      // update title and metadata minimally
      const rtitle = item.querySelector('.rtitle');
      if (rtitle) document.getElementById('videoTitle').textContent = rtitle.textContent;
      views = Math.floor(Math.random()*50000);
      renderViews();
    }
  });

  // escape helper
  function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, c=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  // initial render
  renderViews();
  renderButtons();
  renderComments();

})();
