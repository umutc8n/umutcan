document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      siteyiKur(data);
    })
    .catch(error => console.error("Veri okuma hatası:", error));
});

function siteyiKur(data) {
  // Intro
  const intro = document.getElementById("intro-screen");
  if(intro) {
      intro.innerHTML = `<h1 class="fade-in">${data.kimlik.isim}</h1><p class="click-hint">[ Sahneye Gir ]</p><p class="music-note">🎵 Müzik ile başlar</p>`;
      intro.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('${data.intro.resim}')`;
      intro.style.backgroundPosition = "center 35%";
  }

  // Sidebar
  const sidebarImg = document.querySelector(".inner-img");
  if(sidebarImg) sidebarImg.src = data.kimlik.profilResmi;
  
  const identityH1 = document.querySelector(".identity h1");
  if(identityH1) identityH1.innerText = data.kimlik.isim;
  
  const roleP = document.querySelector(".role");
  if(roleP) roleP.innerText = data.kimlik.unvan;

  // Hakkımda
  const aboutImg = document.querySelector(".about-inner-img");
  if(aboutImg) aboutImg.src = data.hakkimda.resim;
  
  const aboutText = document.querySelector(".about-text");
  if(aboutText) {
    aboutText.innerHTML = `
      <h2>${data.hakkimda.baslik}</h2>
      <p>${data.hakkimda.yazi.replace(/\n/g, "<br>")}</p>
      <p class="signature">- ${data.kimlik.isim}</p>
    `;
  }

  // Projeler
  const timeline = document.querySelector(".timeline");
  if(timeline) {
    let html = "";
    if(data.projeler) {
        data.projeler.forEach(proje => {
        html += `
            <div class="timeline-item">
            <div class="timeline-date">${proje.yil}</div>
            <div class="timeline-content">
                <img src="${proje.afis}" class="project-img">
                <h2 class="project-title">${proje.baslik}</h2>
                <p class="project-cat">${proje.tur}</p>
                <p class="project-desc">${proje.aciklama}</p>
            </div>
            </div>
        `;
        });
    }
    timeline.innerHTML = html;
  }
  
  // Müzik Başlatma (Intro Tıklanınca)
  const introDiv = document.getElementById("intro-screen");
  if(introDiv) {
      introDiv.onclick = function() {
          const audio = document.getElementById("bg-music");
          if(audio) { 
              audio.volume = 0.4; 
              audio.play().catch(e => console.log("Oto oynatma engellendi")); 
          }
          document.getElementById("intro-screen").classList.add("hide-intro");
          document.querySelector(".container").classList.add("show-site");
          switchSection('about');
      };
  }
}

// Navigasyon
function switchSection(name) {
  document.querySelectorAll('.content-section').forEach(el => el.classList.add('hidden-section'));
  document.querySelectorAll('.menu a').forEach(el => el.classList.remove('active'));
  const sec = document.getElementById(name + '-section');
  const btn = document.getElementById('btn-' + name);
  if(sec) sec.classList.remove('hidden-section');
  if(btn) btn.classList.add('active');
}
