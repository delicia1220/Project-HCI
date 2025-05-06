const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
});

const agentThumbs = document.querySelectorAll(".agent-thumb");
const heroRole = document.querySelector(".hero-role");
const heroName = document.querySelector(".hero-name");
const heroDesc = document.querySelector(".hero-desc");
const heroArt = document.querySelector(".hero-art img");
const heroAbilities = document.querySelectorAll(".hero-abilities img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function updateHero(agentEl) {
  agentThumbs.forEach(thumb => thumb.classList.remove("active"));
  agentEl.classList.add("active");

  heroRole.textContent = agentEl.dataset.role;
  heroName.textContent = agentEl.dataset.name;
  heroDesc.textContent = agentEl.dataset.desc;
  heroArt.src = `${agentEl.dataset.agent.startsWith("asset") ? "" : ""}${agentEl.getAttribute("src")}`;

  heroAbilities[0].src = `${agentEl.dataset.ability1}.png`;
  heroAbilities[1].src = `${agentEl.dataset.ability2}.png`;
  heroAbilities[2].src = `${agentEl.dataset.ability3}.png`;
  heroAbilities[3].src = `${agentEl.dataset.ability4}.png`;
}

updateHero(agentThumbs[currentIndex]);

agentThumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateHero(thumb);
  });
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + agentThumbs.length) % agentThumbs.length;
  updateHero(agentThumbs[currentIndex]);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % agentThumbs.length;
  updateHero(agentThumbs[currentIndex]);
});

  