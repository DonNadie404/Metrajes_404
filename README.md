# Metrajes_404
Donde los videos perdidos se encuentran
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>RetroTube — Video</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <div class="logo">Retro<span>Tube</span></div>
      <form id="searchForm" class="search" onsubmit="return false;">
        <input id="searchInput" type="text" placeholder="Search" />
        <button>Search</button>
      </form>
    </div>
    <nav class="userlinks">
      <a href="#">Upload</a>
      <a href="#">Sign in</a>
    </nav>
  </header>

  <main class="site">
    <div class="maincol">
      <section class="playerwrap">
        <video id="player" width="640" controls poster="poster.jpg">
          <!-- Replace sample.mp4 with an actual MP4 in the same folder -->
          <source src="sample.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </section>

      <h1 id="videoTitle">Sample Video — A Retro Demo</h1>

      <div class="meta">
        <div class="leftmeta">
          <span id="views">0 views</span> • <span class="date">Jul 28, 2008</span>
        </div>
        <div class="rightmeta">
          <button id="likeBtn" class="btn">Like</button>
          <button id="dislikeBtn" class="btn">Dislike</button>
        </div>
      </div>

      <section class="desc">
        <strong>Uploaded by</strong> RetroUploader • <a href="#">Subscribe</a>
        <p id="description">This is a nostalgic mock of YouTube from 2008 — replace text with a real description.</p>
      </section>

      <section class="comments">
        <h2>Comments (<span id="commentsCount">0</span>)</h2>
        <form id="commentForm" onsubmit="return false;">
          <textarea id="commentText" placeholder="Add a public comment..." rows="3"></textarea>
          <button id="postComment">Post Comment</button>
        </form>
        <ul id="commentList" class="commentList">
          <!-- comments appended here -->
        </ul>
      </section>
    </div>

    <aside class="sidecol">
      <h3>Related Videos</h3>
      <ul id="relatedList" class="relatedList">
        <li class="relatedItem" data-src="sample.mp4" data-poster="poster.jpg">
          <img src="thumb1.jpg" alt="thumb">
          <div class="rinfo">
            <div class="rtitle">Sample Video</div>
            <div class="rmeta">12,345 views</div>
          </div>
        </li>
        <li class="relatedItem" data-src="sample2.mp4" data-poster="poster2.jpg">
          <img src="thumb2.jpg" alt="thumb">
          <div class="rinfo">
            <div class="rtitle">Another Retro Clip</div>
            <div class="rmeta">3,210 views</div>
          </div>
        </li>
        <!-- add more items -->
      </ul>
    </aside>
    <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>RetroTube — Video</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <div class="logo">Retro<span>Tube</span></div>
      <form id="searchForm" class="search" onsubmit="return false;">
        <input id="searchInput" type="text" placeholder="Search" />
        <button>Search</button>
      </form>
    </div>
    <nav class="userlinks">
      <a href="#">Upload</a>
      <a href="#">Sign in</a>
    </nav>
  </header>

  <main class="site">
    <div class="maincol">
      <section class="playerwrap">
        <video id="player" width="640" controls poster="poster.jpg">
          <!-- Replace sample.mp4 with an actual MP4 in the same folder -->
          <source src="sample.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </section>

      <h1 id="videoTitle">Sample Video — A Retro Demo</h1>

      <div class="meta">
        <div class="leftmeta">
          <span id="views">0 views</span> • <span class="date">Jul 28, 2008</span>
        </div>
        <div class="rightmeta">
          <button id="likeBtn" class="btn">Like</button>
          <button id="dislikeBtn" class="btn">Dislike</button>
        </div>
      </div>

      <section class="desc">
        <strong>Uploaded by</strong> RetroUploader • <a href="#">Subscribe</a>
        <p id="description">This is a nostalgic mock of YouTube from 2008 — replace text with a real description.</p>
      </section>

      <section class="comments">
        <h2>Comments (<span id="commentsCount">0</span>)</h2>
        <form id="commentForm" onsubmit="return false;">
          <textarea id="commentText" placeholder="Add a public comment..." rows="3"></textarea>
          <button id="postComment">Post Comment</button>
        </form>
        <ul id="commentList" class="commentList">
          <!-- comments appended here -->
        </ul>
      </section>
    </div>

    <aside class="sidecol">
      <h3>Related Videos</h3>
      <ul id="relatedList" class="relatedList">
        <li class="relatedItem" data-src="sample.mp4" data-poster="poster.jpg">
          <img src="thumb1.jpg" alt="thumb">
          <div class="rinfo">
            <div class="rtitle">Sample Video</div>
            <div class="rmeta">12,345 views</div>
          </div>
        </li>
        <li class="relatedItem" data-src="sample2.mp4" data-poster="poster2.jpg">
          <img src="thumb2.jpg" alt="thumb">
          <div class="rinfo">
            <div class="rtitle">Another Retro Clip</div>
            <div class="rmeta">3,210 views</div>
          </div>
        </li>
        <!-- add more items -->
      </ul>
    </aside>
  </main>

  <script src="script.js"></script>
</body>
</html>
  </main>

  <script src="script.js"></script>
</body>
</html>
/* Retro 2008-ish styling */
:root{
  --bg:#f2f2f2;
  --panel:#fff;
  --muted:#666;
  --accent:#cc0000;
  --border:#d0d0d0;
}

*{box-sizing:border-box}
body{
  font-family: Arial, Helvetica, sans-serif;
  background:var(--bg);
  color:#222;
  margin:0;
  padding:0;
  font-size:14px;
}

.topbar{
  background:var(--panel);
  border-bottom:1px solid var(--border);
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.brand{display:flex;align-items:center;gap:16px}
.logo{
  font-weight:bold;
  font-size:20px;
  letter-spacing:1px;
}
.logo span{color:var(--accent)}

.search input{
  padding:6px 8px;
  border:1px solid var(--border);
  width:300px;
  border-radius:2px;
}
.search button{
  margin-left:6px;
  padding:6px 10px;
  background:#eee;
  border:1px solid var(--border);
  cursor:pointer;
}

.userlinks a{margin-left:12px;color:var(--muted);text-decoration:none}

.site{
  max-width:980px;
  margin:18px auto;
  display:flex;
  gap:20px;
  align-items:flex-start;
  padding:0 10px;
}

.maincol{width:640px}
.sidecol{width:320px}

.playerwrap{
  background:#000;
  border:1px solid #111;
  padding:8px;
  display:flex;
  justify-content:center;
  margin-bottom:10px;
}

h1{font-size:18px;margin:6px 0;color:#111}

.meta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:var(--muted);
  margin-bottom:10px;
}

.btn{
  padding:6px 10px;
  border:1px solid var(--border);
  background:#fff;
  cursor:pointer;
  margin-left:6px;
  border-radius:2px;
}

.desc{
  background:var(--panel);
  border:1px solid var(--border);
  padding:10px;
  font-size:13px;
  margin-bottom:12px;
}

.comments{background:var(--panel);border:1px solid var(--border);padding:10px}
#commentForm{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}
#commentText{width:100%;padding:8px;border:1px solid var(--border);resize:vertical}
.commentList{list-style:none;padding:0;margin:0}
.commentList li{padding:8px;border-top:1px solid #eee}
.commentAuthor{font-weight:bold;margin-right:8px}
.commentTime{color:var(--muted);font-size:12px}

.relatedList{list-style:none;padding:0;margin:0}
.relatedItem{display:flex;gap:8px;padding:8px;border-bottom:1px dashed #eee;cursor:pointer}
.relatedItem img{width:120px;height:68px;object-fit:cover}
.rtitle{font-size:13px;font-weight:bold}
.rmeta{font-size:12px;color:var(--muted)}
// Basic interactions: view increment, like/dislike, comments, related-item click
(function(){
  const player = document.getElementById('player');
  const viewsEl = document.getElementById('views');
  const likeBtn = document.getElementById('likeBtn');
  const dislikeBtn = document.getElementById('dislikeBtn');
  const commentForm = document.getElementById('commentForm');
  const commentText = document.getElementById('commentText');
  const commentList = document.getElementById('commentList');
  const commentsCount = document.getElementById('commentsCount');
  const relatedList = document.getElementById('relatedList');

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
  function renderViews(){ viewsEl.textContent = views + ' views'; }
  function renderButtons(){
    likeBtn.textContent = 'Like (' + likes + ')';
    dislikeBtn.textContent = 'Dislike (' + dislikes + ')';
    likeBtn.style.fontWeight = liked ? '700' : '400';
    dislikeBtn.style.fontWeight = disliked ? '700' : '400';
  }
  function renderComments(){
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

  likeBtn.addEventListener('click', ()=>{
    if(liked){ likes--; liked=false; }
    else { likes++; if(disliked){ disliked=false; dislikes--; } liked=true; }
    renderButtons();
  });

  dislikeBtn.addEventListener('click', ()=>{
    if(disliked){ dislikes--; disliked=false; }
    else { dislikes++; if(liked){ liked=false; likes--; } disliked=true; }
    renderButtons();
  });

  document.getElementById('postComment').addEventListener('click', ()=>{
    const txt = commentText.value.trim();
    if(!txt) return alert('Comment cannot be empty.');
    comments.unshift({author:'You', text: txt, time: new Date().toLocaleString()});
    commentText.value = '';
    renderComments();
  });

  // related video clicking: swap source and poster
  relatedList.addEventListener('click', (e)=>{
    const item = e.target.closest('.relatedItem');
    if(!item) return;
    const src = item.dataset.src;
    const poster = item.dataset.poster;
    if(src){
      player.pause();
      player.querySelectorAll('source').forEach(s=> s.src = src);
      if(poster) player.poster = poster;
      player.load();
      player.play().catch(()=>{ /* autoplay may be blocked */});
      // update title and metadata minimally
      document.getElementById('videoTitle').textContent = item.querySelector('.rtitle').textContent;
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
