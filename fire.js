let fireContainer = document.getElementById("fire-container");
let fireContainer1 = document.getElementById("fire-container1");
let fireContainer2 = document.getElementById("fire-container2");
function createParticles(fireContainer, num, leftSpacing) {
  for (let i = 0; i < num; i += 1) {
    let particle = document.createElement("div");
    particle.style.left = `calc((100% - 5em) * ${i / leftSpacing })`;
    particle.setAttribute("class", "particle");
    particle.style.animationDelay = 4 * Math.random() + "s";
    fireContainer.appendChild(particle);
  }
}

createParticles(fireContainer, 110, 60);
createParticles(fireContainer1, 110, 60);
createParticles(fireContainer2, 110, 60);


