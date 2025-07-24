document.addEventListener("DOMContentLoaded", () => {
  // --- Countdown Timer Logic ---
  const countdownElement = document.getElementById("countdown-timer")
  const targetDate = new Date("2025-09-18T21:30:00").getTime() // Set your wedding date here!

  function updateCountdown() {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference < 0) {
      countdownElement.innerHTML = '<p class="countdown-title">¡YA NOS CASAMOS!</p>'
      return
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    countdownElement.innerHTML = `
            <div class="countdown-item"><span>${String(days).padStart(2, "0")}</span><span>DÍAS</span></div>
            <span class="countdown-separator">:</span>
            <div class="countdown-item"><span>${String(hours).padStart(2, "0")}</span><span>HORAS</span></div>
            <span class="countdown-separator">:</span>
            <div class="countdown-item"><span>${String(minutes).padStart(2, "0")}</span><span>MINUTOS</span></div>
            <span class="countdown-separator">:</span>
            <div class="countdown-item"><span>${String(seconds).padStart(2, "0")}</span><span>SEGUNDOS</span></div>
        `
  }

  setInterval(updateCountdown, 1000)
  updateCountdown() // Initial call

  // --- Audio Player Logic ---
  const audio = document.getElementById("background-music")
  const playPauseButton = document.getElementById("play-pause-button")
  const playIcon = playPauseButton.querySelector(".icon-play")
  const pauseIcon = playPauseButton.querySelector(".icon-pause")

  let isPlaying = false

  playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause()
      playIcon.classList.remove("d-none") // Usar d-none de Bootstrap
      pauseIcon.classList.add("d-none") // Usar d-none de Bootstrap
    } else {
      audio.play().catch((e) => {
        console.error("Error playing audio:", e)
        alert(
          "No se pudo reproducir el audio. Es posible que el navegador requiera una interacción del usuario primero.",
        )
      })
      playIcon.classList.add("d-none") // Usar d-none de Bootstrap
      pauseIcon.classList.remove("d-none") // Usar d-none de Bootstrap
    }
    isPlaying = !isPlaying
  })

  // --- Image Carousel Logic ---
  const carouselImages = document.querySelectorAll(".carousel-image")
  const carouselDotsContainer = document.getElementById("carousel-dots")
  const carouselPrevButton = document.getElementById("carousel-prev")
  const carouselNextButton = document.getElementById("carousel-next")
  let currentImageIndex = 0
  let carouselInterval

  function createDots() {
    carouselImages.forEach((_, index) => {
      const dot = document.createElement("div")
      dot.classList.add("carousel-dot")
      if (index === 0) dot.classList.add("active")
      carouselDotsContainer.appendChild(dot)
    })
  }

  function updateCarousel() {
    carouselImages.forEach((img, index) => {
      img.classList.remove("active")
      if (index === currentImageIndex) {
        img.classList.add("active")
      }
    })
    document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
      dot.classList.remove("active")
      if (index === currentImageIndex) {
        dot.classList.add("active")
      }
    })
  }

  function goToSlide(index) {
    currentImageIndex = index
    updateCarousel()
    resetCarouselInterval()
  }

  function nextSlide() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length
    updateCarousel()
  }

  function prevSlide() {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length
    updateCarousel()
  }

  function startCarouselInterval() {
    carouselInterval = setInterval(nextSlide, 5000) // Auto-slide every 5 seconds
  }

  function resetCarouselInterval() {
    clearInterval(carouselInterval)
    startCarouselInterval()
  }

  if (carouselImages.length > 0) {
    createDots()
    startCarouselInterval()
    carouselPrevButton.addEventListener("click", prevSlide)
    carouselNextButton.addEventListener("click", nextSlide)
  }

  // --- RSVP Form Logic (WhatsApp Integration) ---
  const rsvpForm = document.getElementById("rsvpForm")
  const numGuestsSelect = document.getElementById("num-guests")
  const guestFieldsContainer = document.getElementById("guest-fields-container")

  // Function to generate guest fields
  function generateGuestFields(num) {
    guestFieldsContainer.innerHTML = "" // Clear existing fields
    if (num === 0) {
      // If "No asistiré" is selected
      guestFieldsContainer.innerHTML = `
        <div class="guest-fields">
          <h3>Confirmación de no asistencia</h3>
          <p>Gracias por informarnos. Lamentamos que no puedas asistir.</p>
        </div>
      `
      return
    }

    for (let i = 1; i <= num; i++) {
      const guestDiv = document.createElement("div")
      guestDiv.classList.add("guest-fields")
      guestDiv.innerHTML = `
                <h3>Persona ${i}</h3>
                <div class="form-group">
                    <input type="text" id="name-${i}" name="name${i}" placeholder="Nombre *" required>
                </div>
                <div class="form-group">
                    <input type="text" id="lastname-${i}" name="lastname${i}" placeholder="Apellido *" required>
                </div>
                <div class="form-group">
                    <label for="dietary-req-${i}">¿Algún requerimiento en la alimentación?</label>
                    <select id="dietary-req-${i}" name="dietaryReq${i}">
                        <option value="Ninguno">Ninguno</option>
                        <option value="Vegetariano">Vegetariano</option>
                        <option value="Vegano">Vegano</option>
                        <option value="Sin Gluten">Sin Gluten</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
            `
      guestFieldsContainer.appendChild(guestDiv)
    }
  }

  // Initial generation of guest fields for 1 person
  generateGuestFields(Number.parseInt(numGuestsSelect.value))

  // Event listener for number of guests change
  numGuestsSelect.addEventListener("change", (event) => {
    generateGuestFields(Number.parseInt(event.target.value))
  })

  rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault() // Prevent default form submission

    const whatsappNumber = "+5492314477062"

    let message = "¡Hola! Confirmo asistencia para la boda.\n\n"
    const numGuests = Number.parseInt(document.getElementById("num-guests").value)

    if (numGuests === 0) {
      message = "¡Hola! Lamento informar que no podré asistir a la boda."
    } else {
      for (let i = 1; i <= numGuests; i++) {
        const name = document.getElementById(`name-${i}`).value
        const lastname = document.getElementById(`lastname-${i}`).value
        const dietaryReq = document.getElementById(`dietary-req-${i}`).value

        message += `Persona ${i}:\n`
        message += `  Nombre: ${name} ${lastname}\n`
        message += `  Requerimiento alimenticio: ${dietaryReq}\n\n`
      }

      const musicRecommendation = document.getElementById("music-recommendation").value
      if (musicRecommendation) {
        message += `Mi recomendación de música es: ${musicRecommendation}.\n`
      } else {
        message += `No tengo recomendaciones de música.\n`
      }
    }

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")

    alert("¡Gracias por confirmar! Se abrirá WhatsApp para enviar tu mensaje.")
  })

  // --- Honeymoon Modal Logic ---
  const openHoneymoonModalButton = document.getElementById("open-honeymoon-modal")
  const honeymoonModal = document.getElementById("honeymoon-modal")
  const modalCloseButton = honeymoonModal.querySelector(".modal-close-button")

  // Add console logs for debugging
  console.log("openHoneymoonModalButton:", openHoneymoonModalButton)
  console.log("honeymoonModal:", honeymoonModal)
  console.log("modalCloseButton:", modalCloseButton)

  if (openHoneymoonModalButton && honeymoonModal && modalCloseButton) {
    openHoneymoonModalButton.addEventListener("click", () => {
      console.log("Button clicked! Showing modal.")
      honeymoonModal.classList.add("visible")
      honeymoonModal.classList.remove("d-none") // Asegurarse de que Bootstrap no lo oculte
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    })

    modalCloseButton.addEventListener("click", () => {
      console.log("Close button clicked! Hiding modal.")
      honeymoonModal.classList.remove("visible")
      honeymoonModal.classList.add("d-none") // Ocultar con d-none de Bootstrap
      document.body.style.overflow = "" // Restore scrolling
    })

    // Close modal when clicking outside the content
    honeymoonModal.addEventListener("click", (event) => {
      if (event.target === honeymoonModal) {
        console.log("Clicked outside modal! Hiding modal.")
        honeymoonModal.classList.remove("visible")
        honeymoonModal.classList.add("d-none") // Ocultar con d-none de Bootstrap
        document.body.style.overflow = ""
      }
    })
  } else {
    console.error("Error: One or more modal elements not found. Check IDs in HTML.")
  }
})
