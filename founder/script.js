// Dynamic Status
    function updateStatus() {
      const now = new Date();
      const currentTime = now.getHours() + now.getMinutes() / 60;
      const startTime = 8;
      const endTime = 21;

      const badge = document.getElementById('statusBadge');
      const title = document.getElementById('statusTitle');
      const sub = document.getElementById('statusSub');

      if (currentTime >= startTime && currentTime < endTime) {
        badge.classList.remove('unavailable');
        badge.classList.add('available');
        title.textContent = 'Available for Consultation';
        sub.innerHTML = `Status: Available Now<br>Working Hours: Every Day • 08:00 AM – 09:00 PM`;
      } else {
        badge.classList.remove('available');
        badge.classList.add('unavailable');
        title.textContent = 'Currently Unavailable';
        const availableText = currentTime >= endTime ? 'Tomorrow at 08:00 AM' : 'Today at 08:00 AM';
        sub.innerHTML = `Status: Offline<br>Available Again: ${availableText}<br>Regular Hours: Every Day • 08:00 AM – 09:00 PM`;
      }
    }
    updateStatus();
    setInterval(updateStatus, 60000);

    // Smooth Scroll
    document.querySelectorAll('.nav-icon').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Scroll Reveal
    function revealOnScroll() {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
          el.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', () => setTimeout(revealOnScroll, 100));

    // Greeting
    function setGreeting() {
      const hour = new Date().getHours();
      let g = "Hello, I'm 👋";
      if (hour >= 5 && hour < 12) g = "Good Morning, I'm 👋";
      else if (hour >= 12 && hour < 17) g = "Good Afternoon, I'm 👋";
      else if (hour >= 17 && hour < 21) g = "Good Evening, I'm 👋";
      document.getElementById('greeting').textContent = g;
    }
    setGreeting();

    // Ripple
    function createRipple(e) {
      const btn = e.currentTarget;
      const circle = document.createElement("span");
      const d = Math.max(btn.clientWidth, btn.clientHeight);
      circle.style.width = circle.style.height = d + "px";
      circle.style.left = (e.clientX - btn.getBoundingClientRect().left - d/2) + "px";
      circle.style.top = (e.clientY - btn.getBoundingClientRect().top - d/2) + "px";
      circle.classList.add("ripple");
      const old = btn.getElementsByClassName("ripple")[0];
      if (old) old.remove();
      btn.appendChild(circle);
    }
    document.querySelectorAll('.btn, .contact-card, .social-btn, .fab-btn, .fab-main, .view-btn, .cta-btn, .cta-social').forEach(b => {
      b.addEventListener('click', createRipple);
    });

    // Typing
    const texts = ["Network Security Consultant", "Cyber Security Expert", "Network Design Specialist", "IT Infrastructure Consultant"];
    let textIndex = 0, charIndex = 0, isDeleting = false;
    const typingEl = document.getElementById("typing-text");
    function type() {
      const current = texts[textIndex];
      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }
      let speed = isDeleting ? 40 : 75;
      if (!isDeleting && charIndex === current.length) {
        speed = 2000; isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 400;
      }
      setTimeout(type, speed);
    }
    type();

    // Counters
    let counted = false;
    function animateCounters() {
      if (counted) return;
      document.querySelectorAll('.counter').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = target === 24 ? '/7' : '+';
        let count = 0;
        const step = target / 50;
        const update = () => {
          count += step;
          if (count < target) {
            counter.textContent = Math.ceil(count) + suffix;
            requestAnimationFrame(update);
          } else counter.textContent = target + suffix;
        };
        update();
      });
      counted = true;
    }
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) animateCounters();
    }, { threshold: 0.4 }).observe(document.querySelector('.stats'));

    // Lightbox
function openCert(title, desc, imageSrc) {
  document.getElementById('certTitle').textContent = title;
  document.getElementById('certDesc').textContent = desc;
  const img = document.getElementById('certImage');
  const icon = document.getElementById('certIcon');
  if (imageSrc) {
    img.src = imageSrc;
    img.alt = title;
    img.style.display = 'block';
    if (icon) icon.style.display = 'none';
  } else {
    img.style.display = 'none';
    img.removeAttribute('src');
    if (icon) icon.style.display = 'block';
  }
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden'; // scroll lock
}

function closeCert() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
  const img = document.getElementById('certImage');
  if (img) {
    img.style.display = 'none';
    img.removeAttribute('src');
  }
  const icon = document.getElementById('certIcon');
  if (icon) icon.style.display = 'block';
}

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target.id === 'lightbox') closeCert();
});

// ESC key দিয়ে বন্ধ
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCert();
});

    // FAB
    function toggleFab() {
      document.getElementById('fabActions').classList.toggle('show');
      document.getElementById('fabMain').classList.toggle('open');
    }
    document.addEventListener('click', e => {
      if (!document.querySelector('.fab-container').contains(e.target)) {
        document.getElementById('fabActions').classList.remove('show');
        document.getElementById('fabMain').classList.remove('open');
      }
    });

    // Active Nav
    window.addEventListener('scroll', () => {
      let current = '';
      document.querySelectorAll('section[id], div[id]').forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 140) current = sec.getAttribute('id');
      });
      document.querySelectorAll('.nav-icon').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    });

    // vCard – prefer static file, fallback to generated
function downloadVCard() {
  const a = document.createElement('a');
  a.href = 'assets/vcard/mehedi.vcf';
  a.download = 'Md_Mehedi_Hasan_Tohied.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
