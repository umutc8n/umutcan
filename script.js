/* ============================================================
   🎬 UMUTCAN YÖNETİM PANELİ (VERİ MERKEZİ)
   Tüm değişiklikleri tırnak işaretlerinin içini değiştirerek yap.
   ============================================================ */

const SITE_DATA = {
  
  // 1. MÜZİK AYARLARI
  muzik: {
    link: "https://files.catbox.moe/zrjtjq.mp3",
    sesSeviyesi: 0.4
  },

  // 2. KİŞİSEL BİLGİLER
  kimlik: {
    isim: "UMUTCAN KEL",
    unvan: "YÖNETMEN & SENARİST",
    imza: "- Umutcan Kel",
    
    // Sidebar'daki Küçük Yuvarlak Fotoğraf
    profilResmi: "https://i.ibb.co/ZpJMB89D/77182-E40-2-B4-B-4-C47-96-BB-EABF9-D67-BB22-1-105-c.jpg",
    // Bu resmin ZOOM ve KONUM ayarı (scale = büyüklük, translate = kaydırma)
    profilAyar: "scale(1.4) translateX(4px)",
    profilKonum: "center 85%" // Odak noktası
  },

  // 3. GİRİŞ EKRANI (INTRO)
  intro: {
    arkaPlanResmi: "https://i.ibb.co/Y4zLT72H/C975-E6-A9-2-CEF-49-DD-BA47-BD8-C4-D9-E0-A4-D-1-105-c.jpg",
    // Resmin duruş pozisyonu (center 35% = Yüzün hizası)
    pozisyon: "center 35%"
  },

  // 4. HAKKIMDA SAYFASI
  hakkimda: {
    baslik: "KADRAJIN ARKASI.",
    paragraf1: "Merhaba, ben Umutcan. Hikayeleri sadece anlatmayı değil, onları görsel bir dille yeniden inşa etmeyi seviyorum. Sinema benim için ışık ve gölgeyle oynanan bir satranç oyunu.",
    paragraf2: "Senaryolarımda karakterlerin iç dünyasındaki sessiz çığlıkları, yönetmenliğimde ise o çığlıkların mekandaki yansımasını arıyorum.",
    
    buyukResim: "https://i.ibb.co/ZpJMB89D/77182-E40-2-B4-B-4-C47-96-BB-EABF9-D67-BB22-1-105-c.jpg",
    // Hakkımda resmi ZOOM ve KAYDIRMA ayarı (scale, translateX, translateY)
    buyukResimAyar: "scale(2) translate100px) translateY(2500px)"
  },

  // 5. İLETİŞİM VE SOSYAL MEDYA
  iletisim: {
    formspreeLinki: "https://formspree.io/f/SENIN_KODUN", // Buraya kendi formspree linkini koy
    email: "umutcankel@gmail.com",
    instagram: "#",
    imdb: "#",
    linkedin: "#"
  },

  // 6. PROJELER (YENİ PROJE EKLEMEK İÇİN AŞAĞIYA KOPYALA-YAPIŞTIR YAP)
  projeler: [
    {
      yil: "2024",
      baslik: "SON DANS",
      tur: "Kısa Film / Dram",
      aciklama: "Kaybolan bir balerinin son performansı üzerine psikolojik bir inceleme.",
      afis: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
    },
    {
      yil: "2023",
      baslik: "GECE YÜRÜYÜŞÜ",
      tur: "Belgesel",
      aciklama: "İstanbul sokaklarının gece yarısından sonraki sessiz tanıkları.",
      afis: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2098&auto=format&fit=crop"
    },
    // YENİ FİLMİNİ BURAYA EKLE: Virgül koy, süslü parantez aç, bilgileri gir.
    /* {
      yil: "2025",
      baslik: "YENİ FİLM ADI",
      tur: "Tür",
      aciklama: "Konusu...",
      afis: "Resim Linki"
    }
    */
  ]
};


/* ============================================================
   🛑 SİSTEM MOTORU (BURADAN AŞAĞISINA DOKUNMA) 🛑
   ============================================================ */

// 1. SİTEYİ OLUŞTUR
document.addEventListener("DOMContentLoaded", () => {
  muzikKur();
  introKur();
  sidebarKur();
  hakkimdaKur();
  projelerKur();
  iletisimKur();
});

function muzikKur() {
  const audio = document.getElementById("bg-music");
  audio.innerHTML = `<source src="${SITE_DATA.muzik.link}" type="audio/mpeg">`;
}
function introKur() {
  const intro = document.getElementById("intro-screen");
  intro.innerHTML = `
    <h1 class="fade-in">${SITE_DATA.kimlik.isim}</h1>
    <p class="click-hint">[ Sahneye Gir ]</p>
    <p class="music-note">🎵 Müzik ile başlar</p>
  `;
  intro.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('${SITE_DATA.intro.arkaPlanResmi}')`;
  intro.style.backgroundPosition = SITE_DATA.intro.pozisyon;
}

function sidebarKur() {
  const sidebar = document.getElementById("sidebar-area");
  sidebar.innerHTML = `
    <div class="identity">
      <div class="img-frame">
        <img src="${SITE_DATA.kimlik.profilResmi}" class="inner-img" style="transform: ${SITE_DATA.kimlik.profilAyar}; transform-origin: ${SITE_DATA.kimlik.profilKonum};">
      </div>
      <h1>${SITE_DATA.kimlik.isim}</h1>
      <p class="role">${SITE_DATA.kimlik.unvan}</p>
    </div>
    <nav class="menu">
      <a href="#" id="btn-about" onclick="switchSection('about')">Hakkımda</a>
      <a href="#" id="btn-projects" onclick="switchSection('projects')">Projeler</a>
      <a href="#" id="btn-contact" onclick="switchSection('contact')">İletişim</a>
    </nav>
  `;
}

function hakkimdaKur() {
  const main = document.getElementById("content-area");
  main.innerHTML += `
    <section id="about-section" class="content-section">
      <div class="about-layout">
        <div class="about-image">
          <div class="about-img-frame">
            <img src="${SITE_DATA.hakkimda.buyukResim}" class="about-inner-img" style="transform: ${SITE_DATA.hakkimda.buyukResimAyar}">
          </div>
        </div>
        <div class="about-text">
          <h2>${SITE_DATA.hakkimda.baslik}</h2>
          <p>${SITE_DATA.hakkimda.paragraf1}</p>
          <p>${SITE_DATA.hakkimda.paragraf2}</p>
          <p class="signature">${SITE_DATA.kimlik.imza}</p>
        </div>
      </div>
    </section>
  `;
}

function projelerKur() {
  const main = document.getElementById("content-area");
  let projelerHTML = "";
  
  SITE_DATA.projeler.forEach(proje => {
    projelerHTML += `
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

  main.innerHTML += `
    <section id="projects-section" class="content-section hidden-section">
      <div class="timeline">${projelerHTML}</div>
    </section>
  `;
}

function iletisimKur() {
  const main = document.getElementById("content-area");
  main.innerHTML += `
    <section id="contact-section" class="content-section hidden-section">
      <div class="contact-layout">
        <div class="contact-form-area">
          <h2>SENARYO GÖNDER / İLETİŞİM</h2>
          <form action="${SITE_DATA.iletisim.formspreeLinki}" method="POST" class="cinematic-form">
            <div class="input-group"><input type="text" name="name" placeholder="Adınız" required></div>
            <div class="input-group"><input type="email" name="_replyto" placeholder="E-Posta Adresiniz" required></div>
            <div class="input-group"><textarea name="message" placeholder="Mesajınız..." rows="4" required></textarea></div>
            <button type="submit" class="submit-btn">GÖNDER</button>
          </form>
        </div>
        <div class="social-area">
          <h3>SOSYAL AĞLAR</h3>
          <div class="social-icons">
            <a href="mailto:${SITE_DATA.iletisim.email}"><i class="fas fa-envelope"></i></a>
            <a href="${SITE_DATA.iletisim.instagram}"><i class="fab fa-instagram"></i></a>
            <a href="${SITE_DATA.iletisim.imdb}"><i class="fab fa-imdb"></i></a> 
            <a href="${SITE_DATA.iletisim.linkedin}"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// NAVİGASYON VE GİRİŞ FONKSİYONLARI
function enterSite() {
  const audio = document.getElementById("bg-music");
  if(audio) { audio.volume = SITE_DATA.muzik.sesSeviyesi; audio.play().catch(e=>console.log("Oto oynatma engellendi")); }
  document.getElementById("intro-screen").classList.add("hide-intro");
  document.querySelector(".container").classList.add("show-site");
  switchSection('about');
}

function switchSection(name) {
  document.querySelectorAll('.content-section').forEach(el => el.classList.add('hidden-section'));
  document.querySelectorAll('.menu a').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(name + '-section');
  const btn = document.getElementById('btn-' + name);
  if(target) target.classList.remove('hidden-section');
  if(btn) btn.classList.add('active');
}