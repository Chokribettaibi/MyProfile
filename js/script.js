// Interactions minimalistes : scroll lisse et copier l'email
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
      }
    })
  });

  // collapse bootstrap navbar on small screens when a link is clicked
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link=>{
    link.addEventListener('click', ()=>{
      const bsCollapse = document.querySelector('.navbar-collapse');
      if(bsCollapse && bsCollapse.classList.contains('show')){
        const collapseInstance = bootstrap.Collapse.getInstance(bsCollapse);
        if(collapseInstance) collapseInstance.hide();
      }
    });
  });

  const copyBtn = document.getElementById('copyBtn');
  const emailEl = document.getElementById('email');
  copyBtn.addEventListener('click', async function(){
    const text = emailEl.textContent.trim();
    if(navigator.clipboard){
      try{ await navigator.clipboard.writeText(text); copyBtn.textContent = 'Copié ✓'; setTimeout(()=> copyBtn.textContent='Copier',1600);}catch(e){ copyBtn.textContent='Erreur'; }
    }else{
      // fallback
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try{ document.execCommand('copy'); copyBtn.textContent='Copié ✓'; setTimeout(()=> copyBtn.textContent='Copier',1600);}catch(e){ copyBtn.textContent='Erreur'; } ta.remove();
    }
  });

  // make social buttons keyboard-focus friendly
  document.querySelectorAll('.social-btn').forEach(b=>{
    b.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') b.click(); });
  });

  // IA photos modal carousel
  const iaBtn = document.getElementById('openIaBtn');
  const iaModal = document.getElementById('iaModal');
  const iaBackdrop = document.getElementById('iaBackdrop');
  const iaClose = document.getElementById('iaClose');
  const iaSlides = document.getElementById('iaSlides');
  const iaDots = document.getElementById('iaDots');
  const iaPrev = document.querySelector('.ia-prev');
  const iaNext = document.querySelector('.ia-next');
  let iaCurrent = 0;
  // list of images in img/IA (hardcoded from directory scan)
  const iaImages = [
    'img/IA/1759760683922.jpg','img/IA/1759755498453.jpg', 'img/IA/1758926329517.jpg','img/IA/1758927872794.jpg','img/IA/1759083687387.jpg','img/IA/1759282248598.jpg','img/IA/1759286283343.jpg','img/IA/1759354605519.jpg','img/IA/1759356713338.jpg','img/IA/1759366258850.jpg','img/IA/1759440524386.jpg','img/IA/1759611641883.jpg','img/IA/1759612169330.jpg','img/IA/1759621013036.jpg','img/IA/IMG_20250926_232258.png','img/IA/file_0000000008806246a4516ad01916fc61.png','img/IA/file_000000000990620ab3ad95e282e9206a.png','img/IA/file_000000001274622f959587b762ab41d5.png','img/IA/file_000000007f9461fa9adb3182255bfa86.png','img/IA/file_00000000a1906246b272d813a9ba2984.png','img/IA/file_00000000c65c61f4ba5e7fc2640237d0.png','img/IA/file_00000000d2e06243b320d413da14b884.png','img/IA/file_00000000db646243b8de2897aac91b8b.png'
  ];

  function buildIaCarousel(){
    iaSlides.innerHTML = '';
    iaDots.innerHTML = '';
    iaImages.forEach((src, i)=>{
      const slide = document.createElement('div'); slide.className='ia-slide'; slide.setAttribute('data-index', String(i));
      const img = document.createElement('img'); img.src = src; img.alt = 'IA image ' + (i+1);
      slide.appendChild(img);
      iaSlides.appendChild(slide);

      const dot = document.createElement('button'); dot.className='dot'; dot.setAttribute('data-index', String(i)); iaDots.appendChild(dot);
      dot.addEventListener('click', ()=> showIa(i));
    });
    showIa(0);
  }

  function showIa(idx){
    if(idx<0) idx = iaImages.length-1; if(idx>=iaImages.length) idx = 0;
    iaSlides.querySelectorAll('.ia-slide').forEach((s,i)=> s.classList.toggle('active', i===idx));
    iaDots.querySelectorAll('.dot').forEach((d,i)=> d.classList.toggle('active', i===idx));
    iaCurrent = idx;
  }

  iaBtn && iaBtn.addEventListener('click', ()=>{
    buildIaCarousel();
    iaModal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });
  function closeIa(){ iaModal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
  iaClose && iaClose.addEventListener('click', closeIa);
  iaBackdrop && iaBackdrop.addEventListener('click', closeIa);
  iaPrev && iaPrev.addEventListener('click', ()=> showIa(iaCurrent-1));
  iaNext && iaNext.addEventListener('click', ()=> showIa(iaCurrent+1));
  document.addEventListener('keydown', (e)=>{ if(iaModal.getAttribute('aria-hidden')==='false'){ if(e.key==='Escape') closeIa(); if(e.key==='ArrowRight') showIa(iaCurrent+1); if(e.key==='ArrowLeft') showIa(iaCurrent-1); } });

  // Carousel implementation
  const carousel = document.querySelector('.carousel');
  if(carousel){
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.dots');
    // create dots if not present
    if(dotsContainer && dotsContainer.children.length === 0){
      slides.forEach((s,i)=>{
        const btn = document.createElement('button');
        btn.className = 'dot'; btn.setAttribute('role','tab'); btn.setAttribute('data-index', String(i)); btn.setAttribute('aria-label', `Aller à la photo ${i+1}`); btn.setAttribute('aria-selected','false');
        dotsContainer.appendChild(btn);
      });
    }
    const dots = Array.from(carousel.querySelectorAll('.dot'));
    let current = 0;
    function show(idx){
      if(idx<0) idx = slides.length-1;
      if(idx>=slides.length) idx = 0;
      slides.forEach((s,i)=>{
        if(i===idx){ s.classList.add('active'); s.classList.remove('hidden'); }
        else { s.classList.remove('active'); s.classList.add('hidden'); }
      });
      dots.forEach((d,i)=> d.setAttribute('aria-selected', i===idx ? 'true':'false'));
      current = idx;
    }
    prevBtn.addEventListener('click', ()=> show(current-1));
    nextBtn.addEventListener('click', ()=> show(current+1));
    dots.forEach(d=> d.addEventListener('click', ()=> show(Number(d.getAttribute('data-index')))));
    // keyboard
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowRight') show(current+1);
      if(e.key === 'ArrowLeft') show(current-1);
    });
    // touch swipe
    let startX = 0; let deltaX = 0;
    const slidesEl = carousel.querySelector('.slides');
    slidesEl.addEventListener('touchstart', e=>{ startX = e.touches[0].clientX; deltaX = 0; });
    slidesEl.addEventListener('touchmove', e=>{ deltaX = e.touches[0].clientX - startX; });
    slidesEl.addEventListener('touchend', ()=>{ if(Math.abs(deltaX) > 50){ if(deltaX < 0) show(current+1); else show(current-1); } });
    // initialize
    show(0);

    // Auto-advance the carousel every 1000 seconds (1,000,000 ms)
    const AUTO_ADVANCE_MS = 1000 * 1000; // 1000 seconds
    let autoAdvanceId = setInterval(()=> show(current+1), AUTO_ADVANCE_MS);

    // Pause auto-advance while the user hovers the carousel, resume on leave
    carousel.addEventListener('mouseenter', ()=>{
      if(autoAdvanceId){ clearInterval(autoAdvanceId); autoAdvanceId = null; }
    });
    carousel.addEventListener('mouseleave', ()=>{
      if(!autoAdvanceId){ autoAdvanceId = setInterval(()=> show(current+1), AUTO_ADVANCE_MS); }
    });
  }
});