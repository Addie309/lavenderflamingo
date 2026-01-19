window.onload = function() { 
  // Sparkles
   document.addEventListener("mousemove", function(e) {
   const dot = document.createElement("div");
   dot.className = "sparkle"; dot.style.left = e.pageX + "px"; dot.style.top = e.pageY + "px"; document.body.appendChild(dot); setTimeout(() => dot.remove(), 500); }); 
  // Explosion function 
  function explodeSymbol(symbol, x, y) {
   for (let i = 0; i < 12; i++) { const piece = document.createElement("div"); piece.className = "explosion"; piece.textContent = symbol; piece.style.left = x + "px"; piece.style.top = y + "px"; piece.style.position = "absolute"; const angle = Math.random() * Math.PI * 2; const distance = Math.random() * 80 + 20; piece.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`; document.body.appendChild(piece); setTimeout(() => piece.remove(), 600);
    } 
    } 
  // Falling flamingos 
  setInterval(() => { const img = document.createElement("img");
   img.src = "https://i.imgur.com/sCejhFE.png"; img.className = "flamingo"; img.style.left = Math.random() * window.innerWidth + "px"; document.body.appendChild(img); setTimeout(() => img.remove(), 6000); }, 800); 
   // Sound function 
   function playSound(url) {
    const audio = new Audio(url); audio.volume = 0.4; audio.play();
     } 
  // Link explosions + sounds 
  document.getElementById("noodlenoodle").addEventListener("mouseenter", (e) => {
   explodeSymbol("🎉", e.pageX, e.pageY); playSound("https://www.myinstants.com/media/sounds/pop.mp3");
   });
    document.getElementById("floofy").addEventListener("mouseenter", (e) => { explodeSymbol("🌿", e.pageX, e.pageY); playSound("https://www.myinstants.com/media/sounds/bush.mp3"); }); document.getElementById("hardwood").addEventListener("mouseenter", (e) => { explodeSymbol("🍴", e.pageX, e.pageY); playSound("https://www.myinstants.com/media/sounds/tink.mp3"); }); document.getElementById("why").addEventListener("mouseenter", (e) => { explodeSymbol("❓", e.pageX, e.pageY); playSound("https://www.myinstants.com/media/sounds/boop_1.mp3"); }); document.getElementById("like").addEventListener("mouseenter", (e) => { explodeSymbol("👍", e.pageX, e.pageY); playSound("https://www.myinstants.com/media/sounds/coin.mp3"); }); document.getElementById("cinnamon").addEventListener("mouseenter", (e) => { explodeSymbol("🔥", e.pageX, e.pageY); playSound("https://www.myinstants.com/media/sounds/fireball.mp3"); }); };
