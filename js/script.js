document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.getElementById("mainNav");
  const navLinks = Array.from(document.querySelectorAll(".nav__link"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      body.classList.toggle("menu-open", isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  const copyBtn = document.getElementById("copyBtn");
  const emailEl = document.getElementById("email");

  if (copyBtn && emailEl) {
    copyBtn.addEventListener("click", async () => {
      const text = emailEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copie";
      } catch (error) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        copyBtn.textContent = "Copie";
      }

      window.setTimeout(() => {
        copyBtn.textContent = "Copier";
      }, 1600);
    });
  }

  const initModalGallery = () => {
    const iaBtn = document.getElementById("openIaBtn");
    const iaModal = document.getElementById("iaModal");
    const iaBackdrop = document.getElementById("iaBackdrop");
    const iaClose = document.getElementById("iaClose");
    const iaSlides = document.getElementById("iaSlides");
    const iaDots = document.getElementById("iaDots");
    const iaPrev = document.querySelector(".ia-prev");
    const iaNext = document.querySelector(".ia-next");

    if (!iaBtn || !iaModal || !iaSlides || !iaDots) return;

    const iaImages = [
      "img/IA/1759760683922.jpg",
      "img/IA/1759755498453.jpg",
      "img/IA/1758926329517.jpg",
      "img/IA/1758927872794.jpg",
      "img/IA/1759083687387.jpg",
      "img/IA/1759282248598.jpg",
      "img/IA/1759286283343.jpg",
      "img/IA/1759354605519.jpg",
      "img/IA/1759356713338.jpg",
      "img/IA/1759366258850.jpg",
      "img/IA/1759440524386.jpg",
      "img/IA/1759611641883.jpg",
      "img/IA/1759612169330.jpg",
      "img/IA/1759621013036.jpg",
      "img/IA/IMG_20250926_232258.png",
      "img/IA/file_0000000008806246a4516ad01916fc61.png",
      "img/IA/file_000000000990620ab3ad95e282e9206a.png",
      "img/IA/file_000000001274622f959587b762ab41d5.png",
      "img/IA/file_000000007f9461fa9adb3182255bfa86.png",
      "img/IA/file_00000000a1906246b272d813a9ba2984.png",
      "img/IA/file_00000000c65c61f4ba5e7fc2640237d0.png",
      "img/IA/file_00000000d2e06243b320d413da14b884.png",
      "img/IA/file_00000000db646243b8de2897aac91b8b.png",
    ];

    let currentIndex = 0;

    const show = (index) => {
      if (index < 0) index = iaImages.length - 1;
      if (index >= iaImages.length) index = 0;

      iaSlides.querySelectorAll(".ia-slide").forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === index);
      });

      iaDots.querySelectorAll(".dot").forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === index);
      });

      currentIndex = index;
    };

    const build = () => {
      if (iaSlides.childElementCount > 0) return;

      iaImages.forEach((src, index) => {
        const slide = document.createElement("div");
        slide.className = "ia-slide";

        const image = document.createElement("img");
        image.src = src;
        image.alt = `Photo IA ${index + 1}`;
        image.loading = "lazy";
        slide.appendChild(image);
        iaSlides.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = "dot";
        dot.type = "button";
        dot.setAttribute("aria-label", `Aller a l'image ${index + 1}`);
        dot.addEventListener("click", () => show(index));
        iaDots.appendChild(dot);
      });

      show(0);
    };

    const open = () => {
      build();
      iaModal.setAttribute("aria-hidden", "false");
      body.style.overflow = "hidden";
    };

    const close = () => {
      iaModal.setAttribute("aria-hidden", "true");
      body.style.overflow = "";
    };

    iaBtn.addEventListener("click", open);
    iaClose?.addEventListener("click", close);
    iaBackdrop?.addEventListener("click", close);
    iaPrev?.addEventListener("click", () => show(currentIndex - 1));
    iaNext?.addEventListener("click", () => show(currentIndex + 1));

    document.addEventListener("keydown", (event) => {
      if (iaModal.getAttribute("aria-hidden") !== "false") return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") show(currentIndex - 1);
      if (event.key === "ArrowRight") show(currentIndex + 1);
    });
  };

  const initPortraitCarousel = () => {
    const carousel = document.querySelector(".portrait-carousel");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll(".slide"));
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");
    const dotsContainer = carousel.querySelector(".dots");
    const viewport = carousel.querySelector(".slides");

    if (!slides.length || !dotsContainer || !viewport) return;

    dotsContainer.innerHTML = "";
    slides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.className = "dot";
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Aller a la photo ${index + 1}`);
      dot.addEventListener("click", () => show(index));
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
    let currentIndex = 0;
    let timerId = 0;

    const show = (index) => {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === index;
        slide.classList.toggle("active", isActive);
        slide.classList.toggle("hidden", !isActive);
      });

      dots.forEach((dot, dotIndex) => {
        dot.setAttribute("aria-selected", String(dotIndex === index));
      });

      currentIndex = index;
    };

    const stopAutoplay = () => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = 0;
      }
    };

    const startAutoplay = () => {
      if (reduceMotion) return;
      stopAutoplay();
      timerId = window.setInterval(() => show(currentIndex + 1), 5500);
    };

    let startX = 0;
    let deltaX = 0;

    viewport.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
      deltaX = 0;
    }, { passive: true });

    viewport.addEventListener("touchmove", (event) => {
      deltaX = event.touches[0].clientX - startX;
    }, { passive: true });

    viewport.addEventListener("touchend", () => {
      if (Math.abs(deltaX) < 50) return;
      show(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
    });

    prevBtn?.addEventListener("click", () => show(currentIndex - 1));
    nextBtn?.addEventListener("click", () => show(currentIndex + 1));
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    show(0);
    startAutoplay();
  };

  const initAppsMarquee = () => {
    document.querySelectorAll("#scrollerV").forEach((scroller) => {
      const inner = scroller.querySelector(".scroller_inner");
      if (!inner || scroller.dataset.dragScrollReady === "true") return;

      scroller.dataset.dragScrollReady = "true";

      const dragSpeed = 1.15;
      const momentumBoost = 18;
      const momentumFriction = 0.94;
      const dragThreshold = 5;
      const autoScrollSpeed = 1.5;
      const autoResumeDelay = 120;

      let isPointerDown = false;
      let isDragging = false;
      let isHorizontalDrag = false;
      let startX = 0;
      let startY = 0;
      let startScrollLeft = 0;
      let lastX = 0;
      let lastMoveAt = 0;
      let velocityX = 0;
      let momentumFrame = 0;
      let autoScrollFrame = 0;
      let autoResumeTimer = 0;
      let lastAutoTime = 0;

      const originalWidth = inner.scrollWidth;
      const items = Array.from(inner.children);
      items.forEach((item) => {
        inner.appendChild(item.cloneNode(true));
      });

      const wrapScroll = () => {
        if (!originalWidth) return;

        if (scroller.scrollLeft >= originalWidth) {
          scroller.scrollLeft -= originalWidth;
        } else if (scroller.scrollLeft < 0) {
          scroller.scrollLeft += originalWidth;
        }
      };

      const stopMomentum = () => {
        if (!momentumFrame) return;
        window.cancelAnimationFrame(momentumFrame);
        momentumFrame = 0;
      };

      const stopAutoScroll = () => {
        if (autoResumeTimer) {
          window.clearTimeout(autoResumeTimer);
          autoResumeTimer = 0;
        }

        if (!autoScrollFrame) return;
        window.cancelAnimationFrame(autoScrollFrame);
        autoScrollFrame = 0;
      };

      const startAutoScroll = () => {
        if (reduceMotion || autoScrollFrame || isPointerDown || isDragging) return;

        lastAutoTime = performance.now();

        const step = (now) => {
          const delta = now - lastAutoTime;
          lastAutoTime = now;

          if (!isPointerDown && !isDragging) {
            scroller.scrollLeft += autoScrollSpeed * (delta / 16.67);
            wrapScroll();
          }

          autoScrollFrame = window.requestAnimationFrame(step);
        };

        autoScrollFrame = window.requestAnimationFrame(step);
      };

      const scheduleAutoResume = () => {
        if (reduceMotion) return;

        if (autoResumeTimer) {
          window.clearTimeout(autoResumeTimer);
        }

        autoResumeTimer = window.setTimeout(() => {
          autoResumeTimer = 0;
          startAutoScroll();
        }, autoResumeDelay);
      };

      const releasePointer = (event) => {
        if (scroller.hasPointerCapture?.(event.pointerId)) {
          scroller.releasePointerCapture(event.pointerId);
        }
      };

      const startMomentum = () => {
        if (reduceMotion || Math.abs(velocityX) < 0.1) return;

        stopMomentum();

        const step = () => {
          velocityX *= momentumFriction;

          if (Math.abs(velocityX) < 0.1) {
            stopMomentum();
            scheduleAutoResume();
            return;
          }

          scroller.scrollLeft -= velocityX * momentumBoost;
          wrapScroll();
          momentumFrame = window.requestAnimationFrame(step);
        };

        momentumFrame = window.requestAnimationFrame(step);
      };

      const stopDragging = (event) => {
        if (!isPointerDown && !isDragging) return;

        isPointerDown = false;
        scroller.classList.remove("is-dragging");
        releasePointer(event);
        startMomentum();
        if (Math.abs(velocityX) < 0.1) {
          scheduleAutoResume();
        }

        window.setTimeout(() => {
          isDragging = false;
          isHorizontalDrag = false;
        }, 0);
      };

      scroller.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;

        stopAutoScroll();
        stopMomentum();
        isPointerDown = true;
        isDragging = false;
        isHorizontalDrag = false;
        startX = event.clientX;
        startY = event.clientY;
        lastX = event.clientX;
        lastMoveAt = performance.now();
        velocityX = 0;
        startScrollLeft = scroller.scrollLeft;
        scroller.setPointerCapture?.(event.pointerId);
      });

      scroller.addEventListener("pointermove", (event) => {
        if (!isPointerDown) return;

        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        if (!isDragging) {
          if (Math.abs(deltaX) < dragThreshold && Math.abs(deltaY) < dragThreshold) return;
          isDragging = true;
          isHorizontalDrag = Math.abs(deltaX) > Math.abs(deltaY);
        }

        if (!isHorizontalDrag) return;

        event.preventDefault();
        scroller.classList.add("is-dragging");
        scroller.scrollLeft = startScrollLeft - (deltaX * dragSpeed);
        wrapScroll();

        const now = performance.now();
        const elapsed = Math.max(now - lastMoveAt, 1);
        velocityX = (event.clientX - lastX) / elapsed;
        lastX = event.clientX;
        lastMoveAt = now;
      }, { passive: false });

      scroller.addEventListener("pointerup", stopDragging);
      scroller.addEventListener("pointercancel", stopDragging);
      scroller.addEventListener("lostpointercapture", stopDragging);

      scroller.addEventListener("click", (event) => {
        if (!isHorizontalDrag) return;
        event.preventDefault();
        event.stopPropagation();
      }, true);

      if (!reduceMotion) {
        startAutoScroll();
      }
    });
  };

  initModalGallery();
  initPortraitCarousel();
  initAppsMarquee();
});
