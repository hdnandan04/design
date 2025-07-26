// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")
const menuIcon = document.getElementById("menuIcon")

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active")

  if (mobileNav.classList.contains("active")) {
    menuIcon.className = "fas fa-times"
  } else {
    menuIcon.className = "fas fa-bars"
  }
})

// Smooth Scrolling Function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  // Close mobile menu if open
  mobileNav.classList.remove("active")
  menuIcon.className = "fas fa-bars"
}

// Navigation Link Event Listeners
document.querySelectorAll(".nav-link, .nav-link-mobile").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})

// Header Background on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".card, .feature-card, .future-card, .tech-item")

  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Active Navigation Link Highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const heroImage = document.querySelector(".mockup-image")

  if (hero && heroImage) {
    const rate = scrolled * -0.5
    heroImage.style.transform = `translateY(${rate}px)`
  }
})

// Counter Animation for Statistics (if needed)
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    element.textContent = Math.floor(start)

    if (start >= target) {
      element.textContent = target
      clearInterval(timer)
    }
  }, 16)
}

// Loading Animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Resize Handler
window.addEventListener("resize", () => {
  // Close mobile menu on resize
  if (window.innerWidth >= 768) {
    mobileNav.classList.remove("active")
    menuIcon.className = "fas fa-bars"
  }
})

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileNav.classList.remove("active")
    menuIcon.className = "fas fa-bars"
  }
})

// Form Validation (if contact form is added)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error")
      isValid = false
    } else {
      input.classList.remove("error")
    }
  })

  return isValid
}

// Smooth reveal animation for cards
const revealCards = () => {
  const cards = document.querySelectorAll(".card, .feature-card, .future-card")

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 100)
  })
}

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set initial state for cards
  const cards = document.querySelectorAll(".card, .feature-card, .future-card")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"
  })

  // Trigger animations after a short delay
  setTimeout(revealCards, 500)
})
