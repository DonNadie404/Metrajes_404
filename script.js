// Render the main grid and handle modal playback; prevents duplicate videos
(function(){
  // Videos provided earlier by the user (unique list) — each video now has a `foundBy` credit
  const videos = [
    { id: 'b89CnP0Iq30', title: 'La Caída de Edgar', thumb: 'https://tvazteca.brightspotcdn.com/87/a7/cd0e1101486f8643400312dce073/edgar-se-cae.jpg', foundBy: 'DonNadie404' },
    { id: 'HyikGa6hObA', title: 'muñeca mueve cabeza', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5SPrrnpVE2w-uekr8nOQIAdbHW_0C55tcmlgt-KUgg&s=10', foundBy: 'DonNadie404' },
    { id: '7iFXyLah2oQ', title: 'Username:666', thumb: 'https://i.ytimg.com/vi/OgfPcfS8s7U/maxresdefault.jpg', foundBy: 'DonNadie404' },
    { id: 'VHSdTFbU3Ts', title: '1980s PSA - “We\'re Not Candy!”', thumb: 'https://laughingsquid.com/wp-content/uploads/2014/08/were-not-candy-bizarre-1983-psa.jpg', foundBy: 'DonNadie404' },
    { id: '9C_HReR_McQ', title: "Don't Hug Me I'm Scared", thumb: 'https://images.squarespace-cdn.com/content/v1/569eeab4a128e6f9904daa89/1543947568466-AEGF6QVYXSITVFVDS6ZJ/download.jpg', foundBy: 'DonNadie404' },
    { id: 'EIv8Q551NRM', title: 'Mereana Mordegard Glesgorv', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTGn8CKk506C4OYp4jvVocIpAihziqmiznWtCckn2Gw&s=10', foundBy: 'DonNadie404' }
  ];

  const grid = document.getElementById('videosGrid');
  const modal = document.getElementById('videoModal');
  const modalPlayer = document.getElementById('modalPlayer');
  const modalTitle = document.getElementById('modalTitle');
  const modalFoundBy = document.getElementById('modalFoundBy');
  const closeModal = document.getElementById('closeModal');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  // Helper: create a card element
  function makeCard(video){
    const card = document.createElement('article');
    card.className = 'video-card';
    card.dataset.videoId = video.id;

    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    const img = document.createElement('img');
    img.src = video.thumb;
    img.alt = video.title + ' thumbnail';
    thumb.appendChild(img);

    const info = document.createElement('div');
    info.className = 'card-info';
    const title = document.createElement('div');
    title.className = 'title-badge';
    title.textContent = video.title;
    const source = document.createElement('span');
    source.className = 'source';
    source.textContent = 'YouTube';
    const found = document.createElement('span');
    found.className = 'foundby';
    found.textContent = 'Encontrado por: ' + (video.foundBy || 'Desconocido');

    info.appendChild(title);
    info.appendChild(source);
    info.appendChild(found);

    card.appendChild(thumb);
    card.appendChild(info);

    // click opens modal and plays
    card.addEventListener('click', ()=>{
      openModal(video.id, video.title, video.foundBy);
    });

    return card;
  }

  // Render unique videos into the grid (no duplicates by video id)
  function renderGrid(list){
    grid.innerHTML = '';
    const seen = new Set();
    list.forEach(v=>{
      if (seen.has(v.id)) return; // skip duplicates
      seen.add(v.id);
      grid.appendChild(makeCard(v));
    });
  }

  function openModal(videoId, title, foundBy){
    const base = 'https://www.youtube-nocookie.com/embed/';
    modalPlayer.src = base + encodeURIComponent(videoId) + '?rel=0&autoplay=1';
    modalTitle.textContent = title || '';
    modalFoundBy.textContent = foundBy ? ('Encontrado por: ' + foundBy) : '';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    modalPlayer.src = '';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeModal.addEventListener('click', close);
  modal.addEventListener('click', (e)=>{ if (e.target === modal) close(); });

  // Search filtering (simple case-insensitive title match)
  function doSearch(){
    const q = (searchInput.value || '').trim().toLowerCase();
    if (!q) return renderGrid(videos);
    const filtered = videos.filter(v => v.title.toLowerCase().includes(q));
    renderGrid(filtered);
  }

  searchBtn.addEventListener('click', doSearch);
  searchInput.addEventListener('keydown', (e)=>{ if (e.key === 'Enter') doSearch(); });

  // initial render
  renderGrid(videos);

})();
