(()=>{var e={907:()=>{const e=document.querySelectorAll("form"),t=document.querySelectorAll(".fieldset--icon"),r=document.querySelectorAll("[data-required]"),o=document.querySelectorAll("[data-input-id]"),n=e=>{const t=e.closest(".fieldset--icon");if(t){const r=t.querySelector(".field-blank"),o=r.querySelector(".icon");r.innerHTML="",r.appendChild(o),r.append(` ${e.value}`)}};r?.forEach((e=>{e.addEventListener("keydown",(e=>{["Backspace","ArrowLeft","ArrowRight","Tab","Delete"].includes(e.key)||/^\d$/.test(e.key)||e.preventDefault()}))})),e?.forEach((e=>{const t=e.querySelectorAll("input[required]"),r=e.querySelector('[type="submit"]'),o=()=>{let e=!0;t.forEach((t=>{t.value.trim()||(e=!1)})),r.disabled=!e};o(),t.forEach((e=>{e.addEventListener("input",o)}))})),t?.forEach((e=>{const t=e.querySelector(".field");t?.addEventListener("input",(()=>{n(t)}))})),o.forEach((e=>{const t=e.getAttribute("data-input-id"),r=document.querySelector(`[data-input-target="${t}"]`);r&&e.addEventListener("input",(()=>{const t=parseFloat(e.value);if(isNaN(t))r.value="";else{const e=(.0024*t).toFixed(1);r.value=e}n(e),n(r)}))}))},417:()=>{const e=document.querySelectorAll("[data-highlight]");e?.forEach((e=>{const t=e.getAttribute("data-highlight").split("|");let r=e.innerHTML;console.log(r),t.forEach((e=>{const t=new RegExp(`(${e})`,"gi");r=r.replace(t,'<span class="text-body">$1</span>')})),e.innerHTML=r}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}(()=>{"use strict";window,document,document.documentElement,document.body,r(907),r(417)})()})();