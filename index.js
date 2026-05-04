import{a as d,S as u,i}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const f="55701586-2004722afdcef8f633333a26a",m="https://pixabay.com/api/",p=e=>d.get(m,{params:{key:f,q:String(e),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits),s={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img 
          src="${e.webformatURL}" 
          alt="${e.tags}" 
          loading="lazy"
        />
      </a>

      <div class="info">
        <p><b>Likes</b> ${e.likes}</p>
        <p><b>Views</b> ${e.views}</p>
        <p><b>Comments</b> ${e.comments}</p>
        <p><b>Downloads</b> ${e.downloads}</p>
      </div>
    </li>
  `}function h(e){const o=e.map(g).join("");s.gallery.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){s.gallery.innerHTML=""}function L(){s.loader.classList.remove("is-hidden")}function w(){s.loader.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",e=>{e.preventDefault();const o=e.target.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!"});return}b(),L(),p(o).then(a=>{if(!a.length){i.error({message:"Sorry, there are no images matching your search query. Please, try again!"});return}h(a)}).catch(()=>{i.error({message:"Something went wrong"})}).finally(()=>{w(),c.reset()})});
//# sourceMappingURL=index.js.map
