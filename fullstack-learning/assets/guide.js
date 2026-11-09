/* Progressive enhancement: the complete handbook remains readable without JavaScript. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const chapters = [...document.querySelectorAll('.chapter')];
  if (!chapters.length) return;
  const storageKey = 'fullstack-learning.java.completed.v1';
  const ids = new Set(chapters.map(section => section.id));
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch (_) { /* Reading is available when storage is blocked. */ }
  const completed = new Set(Array.isArray(saved) ? saved.filter(id => ids.has(id)) : []);
  const toc = document.querySelector('#contents');
  const mobile = window.matchMedia('(max-width: 900px)');
  function syncToc() { toc.open = !mobile.matches; }
  syncToc();
  mobile.addEventListener('change', syncToc);
  const links = [...document.querySelectorAll('#toc a')];
  function renderProgress() {
    const count = completed.size;
    document.querySelector('#progress-count').textContent = `${count} / ${chapters.length} 章已完成`;
    document.querySelector('.progress-fill').style.width = `${count / chapters.length * 100}%`;
    chapters.forEach(section => {
      const done = completed.has(section.id);
      const button = section.querySelector('.mark-done');
      button.setAttribute('aria-pressed', String(done));
      button.textContent = done ? '✓ 已掌握，再次点击取消' : '○ 我已理解本章';
    });
    links.forEach(link => link.classList.toggle('completed', completed.has(link.hash.slice(1))));
  }
  chapters.forEach(section => {
    section.querySelector('.mark-done').addEventListener('click', () => {
      if (completed.has(section.id)) completed.delete(section.id); else completed.add(section.id);
      try { localStorage.setItem(storageKey, JSON.stringify([...completed])); } catch (_) { /* Keep progress for this visit. */ }
      renderProgress();
    });
  });
  renderProgress();
  const search = document.querySelector('#search');
  const searchStatus = document.querySelector('#search-status');
  const index = chapters.map(section => ({section,text:section.textContent.toLocaleLowerCase()}));
  function filterChapters() {
    const query = search.value.trim().toLocaleLowerCase();
    let matches = 0;
    index.forEach(({section,text}) => {
      const visible = !query || text.includes(query);
      section.hidden = !visible;
      if (visible) matches++;
    });
    document.querySelector('#no-results').hidden = matches !== 0;
    searchStatus.textContent = query ? `找到 ${matches} 章。搜索匹配整章内容，可清除后继续顺序阅读。` : '搜索章节正文与代码。学习进度仅保存在当前浏览器。';
  }
  search.addEventListener('input', filterChapters);
  document.querySelector('#clear-search').addEventListener('click', () => {search.value='';filterChapters();search.focus();});
  filterChapters();
  function revealHash() {
    let id;
    try { id=decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const target=document.getElementById(id);
    if (!target) return;
    const section=target.closest('.chapter');
    if (section && section.hidden) {search.value='';filterChapters();requestAnimationFrame(()=>target.scrollIntoView());}
  }
  window.addEventListener('hashchange', revealHash);
  links.forEach(link => link.addEventListener('click', () => {
    const section=document.getElementById(link.hash.slice(1));
    if (section && section.hidden) {search.value='';filterChapters();}
    if (mobile.matches) toc.open=false;
  }));
  revealHash();
  document.querySelectorAll('.chapter pre').forEach(pre => {
    const code=pre.querySelector('code');
    if (!code) return;
    const button=document.createElement('button');
    button.type='button';button.className='copy-code';button.textContent='复制代码';
    button.setAttribute('aria-label','复制此段代码');
    button.addEventListener('click',async()=>{
      try {
        if (!navigator.clipboard) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(code.textContent);
        button.textContent='已复制 ✓';
      } catch (_) {
        const selection=window.getSelection(); const range=document.createRange();
        range.selectNodeContents(code); selection.removeAllRanges(); selection.addRange(range);
        button.textContent='已选中，请手动复制';
      }
      window.setTimeout(()=>{button.textContent='复制代码';},2200);
    });
    pre.classList.add('has-copy');pre.append(button);
  });
  document.querySelector('#print-guide').addEventListener('click',()=>window.print());
  let scheduled=false;
  function updateReading() {
    scheduled=false;
    const maximum=document.documentElement.scrollHeight-innerHeight;
    document.querySelector('.reading-bar').style.width=`${maximum>0?Math.min(100,scrollY/maximum*100):0}%`;
    const visible=chapters.filter(section=>!section.hidden);
    let current=visible[0];
    for (const section of visible) {if(section.getBoundingClientRect().top<160)current=section;}
    links.forEach(link=>{
      const active=current&&link.hash==='#'+current.id;
      link.classList.toggle('active',Boolean(active));
      if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateReading);}},{passive:true});
  updateReading();
})();
