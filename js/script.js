document.addEventListener("DOMContentLoaded", () => {
    // Agrega desplazamiento suave a los enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const sectionId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`No se encontró la sección con ID: ${sectionId}, redirigiendo...`);
            }
        });
    });

    const videos = document.querySelectorAll(".video-card video");
    const fullscreenButtons = document.querySelectorAll(".fullscreen-btn");

    videos.forEach((video, index) => {
        video.addEventListener("mouseenter", () => {
            video.play();
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });

        video.addEventListener("click", () => {
            openFullscreen(video);
        });

        fullscreenButtons[index].addEventListener("click", () => {
            openFullscreen(video);
        });
    });

    function openFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    const reserveButtons = document.querySelectorAll(".reserve-btn");
    const modal = document.getElementById("reservation-modal");
    const trainingTitle = document.getElementById("training-title");
    const closeBtn = document.querySelector(".close-btn");

    reserveButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const training = btn.getAttribute("data-training");
            trainingTitle.textContent = `Estás reservando: ${training}`;
            modal.style.display = "block";
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    document.body.classList.add('hide-header');
  } else {
    document.body.classList.remove('hide-header');
  }
  lastScroll = currentScroll;
});
}); 
