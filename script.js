// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Only close menu on mobile devices
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("active")
    }
  })
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active")
  }
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe project cards and skill categories
document.querySelectorAll(".project-card, .skill-category, .stat").forEach((el) => {
  el.style.opacity = "0"
  observer.observe(el)
})
