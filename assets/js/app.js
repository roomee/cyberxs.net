document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('form[data-ajax="false"]').forEach(function(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var fd = new FormData(f);
      var name = fd.get('name')||'';
      var email = fd.get('email')||'';
      if(!name || !email){ alert('Please enter name and email'); return; }
      var res = f.querySelector('.result');
      if(res) res.innerHTML = '<div style="padding:12px;border-radius:8px;background:rgba(91,140,255,0.12);color:#dbe9ff">Thanks, '+name+'. We will contact you shortly.</div>';
      f.reset();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle
  const toggleBtn = document.querySelector(".theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
