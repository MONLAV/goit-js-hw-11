import{S as g,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m=async(r,t=1,o=20)=>{const i="https://pixabay.com/api/";try{return(await axios.get(i,{params:{key:"47161865-40d939b38272e547a09e56cd8",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:t}})).data}catch(e){throw console.log("Error fetching images:",e),e}},u=r=>r.map(t=>`
    <li class='gallery-item'>
      <a href="${t.largeImageURL}">
        <img alt="${t.tags}" src="${t.webformatURL}" class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${t.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${t.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${t.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${t.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",p=document.querySelector(".form"),f=document.querySelector("ul.gallery"),l=document.querySelector(".loader");let A=new g(".gallery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});const d=r=>{r.preventDefault(),f.innerHTML="",l.style.display="block";const t=r.target.elements.search.value.trim();if(!t){a.error({iconUrl:c,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),l.style.display="none";return}m(t).then(({hits:o})=>{if(o.length===0){a.error({iconUrl:c,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none";return}const i=u(o);f.innerHTML=i,l.style.display="none",A.refresh(),p.reset()}).catch(o=>{console.log(o),a.error({iconUrl:c,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:o.message}),l.style.display="none"})};p.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
