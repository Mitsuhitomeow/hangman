(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const B="_main__section_info_h41bs_1",F="_main__info_span_h41bs_11",H="_main__info_answer_h41bs_15",Y="_main__info_question_h41bs_31",Q="_main__info_guesses_h41bs_42",u={main__section_info:B,main__info_span:F,main__info_answer:H,main__info_question:Y,main__info_guesses:Q},h=[{question:"Who says meow?",answer:"cat"},{question:"An element with the symbol 'O'.",answer:"Oxygen"},{question:"A famous scientist known for the theory of relativity.",answer:"Einstein"},{question:"The capital of Japan.",answer:"Tokyo"},{question:"The largest mammal in the world.",answer:"Bluewhale"},{question:"The currency of Germany.",answer:"Euro"},{question:"A Shakespeare play about tragedy and betrayal.",answer:"Othello"},{question:"A programming language named after a snake.",answer:"Python"},{question:"The longest river in the world.",answer:"Nile"},{question:"A famous painting by Leonardo da Vinci with a mysterious smile.",answer:"MonaLisa"},{question:"A mythical bird that rises from its ashes.",answer:"Phoenix"},{question:"A programming language commonly used for web development.",answer:"JavaScript"},{question:"An operating system developed by Apple Inc.",answer:"macOS"},{question:"The largest social media platform.",answer:"Facebook"},{question:"A popular version control system used in software development.",answer:"Git"},{question:"The company known for its search engine.",answer:"Google"},{question:"The programming language known for its simplicity and readability.",answer:"Python"},{question:"A popular web browser developed by Google.",answer:"Chrome"},{question:"The process of finding and fixing errors in a computer program.",answer:"Debugging"},{question:"A widely used markup language for creating web pages.",answer:"HTML"},{question:"An acronym for a widely used data interchange format.",answer:"JSON"},{question:"A widely used relational database management system.",answer:"MySQL"},{question:"A widely used programming language for building mobile applications.",answer:"Java"},{question:"The term for a software program designed to cause damage to a computer system.",answer:"Malware"},{question:"An open-source operating system based on the Linux kernel.",answer:"Ubuntu"},{question:"A popular version of Unix used in web hosting.",answer:"Linux"},{question:"The process of converting human-readable code into machine code.",answer:"Compilation"},{question:"The organization that develops the Java programming language.",answer:"Oracle"},{question:"A widely used content management system for building websites.",answer:"WordPress"},{question:"The programming language known for its use in artificial intelligence applications.",answer:"Python"},{question:"The process of protecting information from unauthorized access.",answer:"Security"},{question:"An agile project management framework.",answer:"Scrum"},{question:"The programming language designed for creating dynamic web pages.",answer:"PHP"},{question:"The technology that allows data transmission over short distances.",answer:"Bluetooth"},{question:"A widely used integrated development environment (IDE) for Java.",answer:"Eclipse"}],_=[{key:"Q",code:"KeyQ"},{key:"W",code:"KeyW"},{key:"E",code:"KeyE"},{key:"R",code:"KeyR"},{key:"T",code:"KeyT"},{key:"Y",code:"KeyY"},{key:"U",code:"KeyU"},{key:"I",code:"KeyI"},{key:"O",code:"KeyO"},{key:"P",code:"KeyP"},{key:"A",code:"KeyA"},{key:"S",code:"KeyS"},{key:"D",code:"KeyD"},{key:"F",code:"KeyF"},{key:"G",code:"KeyG"},{key:"H",code:"KeyH"},{key:"J",code:"KeyJ"},{key:"K",code:"KeyK"},{key:"L",code:"KeyL"},{key:"Z",code:"KeyZ"},{key:"X",code:"KeyX"},{key:"C",code:"KeyC"},{key:"V",code:"KeyV"},{key:"B",code:"KeyB"},{key:"N",code:"KeyN"},{key:"M",code:"KeyM"}];let k,l,A,x;function j(e){k=Math.floor(Math.random()*h.length),l=h[k].answer.toUpperCase(),A=l.split("").map(()=>"_").join(""),x=h[k].question,console.log("Answer:",l);const n=document.createElement("span"),t=document.createElement("p"),s=document.createElement("p"),o=document.createElement("span");o.textContent="Hint: ",o.className=`${u.main__info_span}`,n.className=`${u.main__info_answer}`,t.className=`${u.main__info_question}`,s.className=`${u.main__info_guesses}`,n.textContent=`${A}`,t.textContent=`${x}`,s.textContent="guesses: 6 / 6",e.append(n),e.append(t),e.append(s),t.prepend(o)}function D(){const e=document.querySelector("[class*=main__section_game]"),n=document.createElement("section");n.className=`${u.main__section_info}`,e.append(n),j(n)}const U="_main__image_gallows_w70ha_1",V={main__image_gallows:U};function z(){const e=document.querySelector("[class*=main__section_gallows]"),n=document.createElement("img");n.setAttribute("src","./6.svg"),n.setAttribute("alt","Gallows Image"),n.className=`${V.main__image_gallows}`,e.append(n)}const X="_main__section_keyboard_1se6h_1",Z="_main__keyboard_key_1se6h_7",T={main__section_keyboard:X,main__keyboard_key:Z},v="/hangman/musicMouseClick.mp3",S="/hangman/musickPressKey.mp3",ee=new Audio(v),ne=new Audio(S);function b(e,n){e.forEach(t=>{const s=document.createElement("button"),o=document.querySelector("[class*=header__img_sound]");s.textContent=`${t.key}`,s.addEventListener("click",()=>{const a=window.screen.width;s.disabled=!0,o.classList.contains("sound")&&a>768&&ee.play(),o.classList.contains("sound")&&a<=768&&ne.play()}),s.className=`${T.main__keyboard_key}`,n.append(s)})}const te=_.slice(0,10),oe=_.slice(10,19),se=_.slice(19,_.length);function ae(){const e=document.querySelector("[class*=main__section_game]"),n=document.createElement("section"),t=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div");n.className=`${T.main__section_keyboard}`,b(te,t),b(oe,s),b(se,o),e.append(n),n.append(t,s,o)}const ie=new Audio(v),O=new Audio(S),M=e=>{const n=document.querySelector("[class*=header__img_sound]"),t=document.querySelector("[class*=modal]");e.code==="Enter"&&(n.classList.contains("sound")&&O.play(),document.removeEventListener("keydown",M),t.remove(),C())},ce=()=>{const e=document.querySelector("[class*=header__img_sound]"),n=document.querySelector("[class*=modal]"),t=window.screen.width;e.classList.contains("sound")&&t>768&&ie.play(),e.classList.contains("sound")&&t<=768&&O.play(),n.remove(),C()},re="/hangman/musicFanfar.mp3",de="/hangman/musicGameOver.mp3",le=new Audio(re),me=new Audio(de);function ue(e){const n=document.querySelector("[class*=header__img_sound]");e==="You WIN!"&&n.classList.contains("sound")&&le.play(),e==="You Lost!"&&n.classList.contains("sound")&&me.play()}const _e="_modal_17dtx_1",pe="_modal__content_17dtx_11",ye="_modal__content_title_17dtx_39",ge="_modal__content_answer_17dtx_45",fe="_modal__button_play_17dtx_53",d={modal:_e,modal__content:pe,modal__content_title:ye,modal__content_answer:ge,modal__button_play:fe};function N(e,n){const t=document.createElement("div"),s=document.createElement("div"),o=document.createElement("p"),a=document.createElement("p"),i=document.createElement("button");t.id=d.modal,t.style.display="block",o.textContent=`${e}`,a.textContent=`Word: ${n}`,i.textContent="Play Again",t.classList.add(d.modal),s.className=d.modal__content,i.className=d.modal__button_play,o.className=d.modal__content_title,a.className=d.modal__content_answer,s.appendChild(o),s.appendChild(a),s.appendChild(i),t.appendChild(s),document.body.appendChild(t),document.addEventListener("keydown",M),i.addEventListener("click",ce),ue(e)}const we=new Audio(S);function he(){const e=[...l],n=[...A];let t=6;const s=document.querySelectorAll("[class*=main__keyboard_key]"),[o,a,i,R]=[document.querySelector("[class*=main__info_guesses]"),document.querySelector("[class*=main__image_gallows]"),document.querySelector("[class*=main__info_answer]"),document.querySelector("[class*=header__img_sound]")];o.textContent=`guesses: ${t} / 6`,a.setAttribute("src","./6.svg"),i.textContent=n.join("");const G=JSON.parse(JSON.stringify(_));let g=!0;function L(){t===0&&(N("You Lost!",l),t=6,g=!1),JSON.stringify(e)===JSON.stringify(n)&&(N("You WIN!",l),g=!1)}document.addEventListener("keydown",r=>{g&&(G.forEach(f=>{const c=f;r.code===c.code&&s.forEach(J=>{const w=J;c.key===w.textContent&&(w.disabled=!0,R.classList.contains("sound")&&we.play()),c.key===w.textContent&&!e.includes(c.key)&&(t-=1,c.key="",o.textContent=`guesses: ${t} / 6`,a.setAttribute("src",`./${t}.svg`)),e.includes(c.key)&&e.forEach((W,I)=>{W===c.key&&(n[I]=c.key,i.textContent=n.join(""))})})}),L())}),s.forEach(r=>{r.addEventListener("click",()=>{e.includes(r.textContent)&&e.forEach((f,c)=>{f===r.textContent&&(n[c]=r.textContent,i.textContent=n.join(""))}),e.includes(r.textContent)||(t-=1,o.textContent=`guesses: ${t} / 6`,a.setAttribute("src",`./${t}.svg`)),L()})})}function C(){const e=document.querySelector("[class*=main__section_gallows]"),n=document.querySelector("[class*=main__section_game]");e.innerHTML="",n.innerHTML="",z(),D(),ae(),he()}const ke="_footer__wrapper_1nnqm_1",be={footer__wrapper:ke};function qe(){const e=document.createElement("footer"),n=document.createElement("div"),t=document.createElement("span");e.className="footer",n.className=`${be.footer__wrapper}`,document.body.append(e),e.append(n),n.append(t),t.textContent="© RSSchool Production."}const Ee="/hangman/favicon.svg";function Ae(){const e=document.createElement("link");e.rel="icon",e.href=Ee,document.head.append(e)}const ve="_header__wrapper_gh6pa_1",Se="_header__img_sound_gh6pa_8",Ce="_title_gh6pa_34",q={header__wrapper:ve,header__img_sound:Se,title:Ce},P="/hangman/sound-off.svg",$="/hangman/sound-on.svg",Le="/hangman/musicBackground.mp3",p=new Audio(Le),y=new Audio(v),m=new(window.AudioContext||window.webkitAudioContext);function K(e){e.addEventListener("canplaythrough",()=>{const n=m.createBufferSource(),t=m.createBuffer(1,m.sampleRate*.33,m.sampleRate);n.buffer=t,n.connect(m.destination),n.start()}),e.load()}function xe(){const e=document.querySelector("[class*=header__img_sound]");e.addEventListener("click",()=>{e.getAttribute("src")===$?(e.setAttribute("src",P),e.classList.remove("sound"),K(y),p.pause(),y.play()):(e.setAttribute("src",$),e.classList.add("sound"),K(y),p.play(),y.play())}),p.addEventListener("ended",()=>{setTimeout(()=>p.play(),1e3)})}function Ne(){const e=document.createElement("header"),n=document.createElement("h1"),t=document.createElement("div"),s=document.createElement("img");s.setAttribute("src",P),document.body.append(e),e.append(t),t.append(n),t.append(s),n.innerText="Hagman Game",e.className="header",t.className=`${q.header__wrapper}`,n.className=`${q.title}`,s.className=`${q.header__img_sound}`,xe()}const $e="_main__wrapper_amlpr_1",Ke="_main__section_gallows_amlpr_14",Te="_main__section_game_amlpr_24",E={main__wrapper:$e,main__section_gallows:Ke,main__section_game:Te};function Oe(){const e=document.createElement("main"),n=document.createElement("div"),t=document.createElement("div"),s=document.createElement("section");document.body.appendChild(e),e.appendChild(n),n.appendChild(s),n.appendChild(t),e.className="main",n.className=`${E.main__wrapper}`,s.className=`${E.main__section_gallows}`,t.className=`${E.main__section_game}`}Ae();Ne();Oe();qe();C();
//# sourceMappingURL=index-JlA2wRlB.js.map
