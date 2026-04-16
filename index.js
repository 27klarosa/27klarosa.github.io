// Minimal JS: toggle nav, project details modal, year
document.addEventListener('DOMContentLoaded', ()=>{
  // year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>nav.classList.toggle('show'));
  }

  // modal for project details
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.modal-close');

  function openModal(title, desc){
    if(!modal) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','true');
  }

  document.querySelectorAll('.card .details').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const card = btn.closest('.card');
      if(!card) return;
      const title = card.dataset.title || card.querySelector('h3')?.textContent || 'Project';
      const desc = card.dataset.desc || card.querySelector('p')?.textContent || '';
      openModal(title, desc);
    });
  });

  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(modal) modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
});
