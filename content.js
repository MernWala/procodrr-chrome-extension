(()=>{let e=!1,t=!1;function o(){e=!0,document.removeEventListener("click",o),document.removeEventListener("keydown",o),document.removeEventListener("touchstart",o)}document.addEventListener("click",o),document.addEventListener("keydown",o),document.addEventListener("touchstart",o);class l{constructor(e){this.video=e}Space(e){let t=this.video;e.preventDefault(),t.paused?t.play():t.pause()}ArrowLeft(){document.querySelector(".bmpui-ui-rewindbutton").click()}ArrowRight(){document.querySelector(".bmpui-ui-forwardbutton").click()}ArrowUp(e){let t=this.video;if(e.preventDefault(),t.volume<1){let e=(t.volume+.1).toFixed(1);t.volume=e,localStorage.setItem("volume",e),t.muted=!1}}ArrowDown(e){let t=this.video;if(e.preventDefault(),t.volume>0){let e=(t.volume-.1).toFixed(1);t.volume=e,localStorage.setItem("volume",e),t.muted=!1}else t.muted=!0}BracketLeft(){let e=this.video,t=(e.playbackRate-.1).toFixed(1);t>=0&&(e.playbackRate=t,c.innerText=t+"x",localStorage.setItem("playbackSpeed",e.playbackRate),c.classList.contains("hidden")&&(c.classList.remove("hidden"),setTimeout(()=>{c.classList.add("hidden")},1e3)))}BracketRight(){let e=this.video,t=(e.playbackRate+.1).toFixed(1);t<=16&&(e.playbackRate=t,c.innerText=t+"x",localStorage.setItem("playbackSpeed",e.playbackRate),c.classList.contains("hidden")&&(c.classList.remove("hidden"),setTimeout(()=>{c.classList.add("hidden")},1e3)))}KeyD(e){document.body.classList.add("dark")}KeyL(e){document.body.classList.remove("dark")}KeyI(e){document.querySelector(".bmpui-ui-piptogglebutton").click()}KeyF(){document.querySelector(".bmpui-ui-fullscreentogglebutton").click()}KeyM(){let e=this.video;e.muted=!e.muted}}document.createElement("div").classList.add("btn-container"),window.addEventListener("keydown",e=>{let t=document.querySelector("video");if("Space"===e.code&&e.preventDefault(),!t)return;let o=new l(t);o[e.code]?.(e,t)});let a=null,c=null;new MutationObserver(()=>{let o=document.querySelector("video");if(null!==a&&o===a)return;a=o;let l=document.querySelector(".menu_sidebar:has(li.ant-menu-item)"),n=document.querySelector("#play"),d=document.querySelector(".bitmovinplayer-container");console.log({playerContainer:d}),d&&((c=document.createElement("span")).className="playback-speed hidden",d.append(c)),n&&e&&"https://app.procodrr.com/web/activity"!==location.href&&n?.click(),l&&!t&&(l.addEventListener("click",e=>{if(e.target.closest("li.ant-menu-item")){let e=setInterval(()=>{let t=document.querySelector("#play");t&&t?.click();let o=document.querySelector("video"),l=document.querySelector(".show-v-a-a-images")?.lastChild;(o&&!o.paused||l&&l.className.includes("scaffold"))&&clearInterval(e)},100)}}),t=!0),a&&(a.addEventListener("play",function(){!function(e){let t=localStorage.getItem("playbackSpeed"),o=localStorage.getItem("volume");t&&(e.playbackRate=t,c.innerText=t+"x"),o&&(e.volume=o)}(a)}),a.addEventListener("volumechange",e=>{localStorage.setItem("volume",a.volume)}),a.addEventListener("ratechange",()=>{localStorage.setItem("playbackSpeed",a.playbackRate)}))}).observe(document.getElementById("root"),{childList:!0,subtree:!0})})();