"use strict"

const form = document.querySelector(".form")
const containerWorkouts = document.querySelector(".workouts")
const inputType = document.querySelector(".form__input--type")
const inputDistance = document.querySelector(".form__input--distance")
const inputDuration = document.querySelector(".form__input--duration")
const inputTemp = document.querySelector(".form__input--temp")
const inputClimb = document.querySelector(".form__input--climb")

class Workout {
  date = new Date().getTime()
  id = (Date.now() + "").slice(-10)
  clickNumber = 0
  constructor(distance, duration, coords) {
    this.distance = distance
    this.duration = duration
    this.coords = coords
    this._setDescription()
  }
  _setDescription() {
    this.type === "running"
      ? (this.description = `Пробежка ${new Intl.DateTimeFormat("ru-Ru").format(
          this.date
        )}`)
      : (this.description = `Велопрогулка ${new Intl.DateTimeFormat(
          "ru-Ru"
        ).format(this.date)}`)
  }
  click() {
    this.clickNumber++
  }
}

class Running extends Workout {
  type = "running"
  constructor(distance, duration, coords, temp) {
    super(distance, duration, coords)
    this.temp = temp
    this.calculatePace()
    this._setDescription()
  }
  calculatePace() {
    this.pace = this.duration / this.distance
  }
}

class Cycling extends Workout {
  type = "cycling"
  constructor(distance, duration, coords, climb) {
    super(distance, duration, coords)
    this.climb = climb
    this.calculateSpeed()
    this._setDescription()
  }
  calculateSpeed() {
    this.speed = this.distance / this.duration / 60
  }
}

const running = new Running([50, 39], 7, 40, 170)
const cycling = new Cycling([50, 39], 37, 80, 370)

class App {
  #map
  #mapEvent
  #workouts = []

  constructor() {
    this._getPosition()
    this._getLocalStorage()
    form.addEventListener("submit", this._newWorkout.bind(this))
    inputType.addEventListener("change", this._toggleClimbField)
    containerWorkouts.addEventListener("click", this._moveToWorkout.bind(this))
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          console.log("Ошибка")
        }
      )
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords
    const { longitude } = position.coords
    // console.log(`https://www.google.ru/maps/@${latitude},${longitude},13z`);
    const coords = [latitude, longitude]
    this.#map = L.map("map").setView(coords, 13)
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map)
    this.#map.on("click", this._showForm.bind(this))
    this.#workouts.forEach((work) => {
      this._displayWorkout(work)
    })
  }

  _showForm(e) {
    this.#mapEvent = e
    form.classList.remove("hidden")
    inputDistance.focus()
  }

  _hideForm() {
    form.style.display = "none"
    form.classList.add("hidden")
    setTimeout(() => (form.style.display = "grid"), 1000)
  }

  _toggleClimbField() {
    inputClimb.closest(".form__row").classList.toggle("form__row--hidden")
    inputTemp.closest(".form__row").classList.toggle("form__row--hidden")
  }

  _newWorkout(e) {
    const areNumbers = (...numbers) =>
      numbers.every((num) => Number.isFinite(num))
    const areNumbersPositive = (...numbers) => numbers.every((num) => num > 0)
    e.preventDefault()

    const { lat, lng } = this.#mapEvent.latlng
    let workout
    const type = inputType.value
    const distance = +inputDistance.value
    const duration = +inputDuration.value

    if (type === "running") {
      const temp = +inputTemp.value
      if (
        !areNumbers(distance, duration, temp) ||
        !areNumbersPositive(distance, duration, temp)
      )
        return alert("Введите положительное число")
      workout = new Running(distance, duration, [lat, lng], temp)
    }
    if (type === "cycling") {
      const climb = +inputClimb.value
      if (
        !areNumbers(distance, duration, climb) ||
        !areNumbersPositive(distance, duration, climb)
      )
        return alert("Введите положительное число")
      workout = new Cycling(distance, duration, [lat, lng], climb)
    }
    this.#workouts.push(workout)
    this._displayWorkout(workout)
    this._displayWorkoutOnSidebar(workout)
    inputDuration.value =
      inputTemp.value =
      inputClimb.value =
      inputDistance.value =
        ""
    this._hideForm()

    this._addWorkoutLocalStorage()
  }

  _displayWorkout(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♂️"} ${workout.description}`
      )
      .openPopup()
  }
  _displayWorkoutOnSidebar(workout) {
    const html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === "running" ? "🏃‍♂️" : "🚴‍♂️"
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    ${
      workout.type === "running"
        ? `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🌡</span>
      <span class="workout__value">${workout.temp}</span>
      <span class="workout__unit">°C</span>
    </div>`
        : `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.climb}</span>
      <span class="workout__unit">m</span>
    </div>`
    }
  </li>
    `
    containerWorkouts.insertAdjacentHTML("beforeend", html)
  }
  _moveToWorkout(e) {
    const workoutEl = e.target.closest(".workout")
    if (!workoutEl) return
    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    )
    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    })
  }
  _addWorkoutLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts))
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"))
    if (!data) return
    this.#workouts = data
    this.#workouts.forEach((work) => {
      this._displayWorkoutOnSidebar(work)
    })
  }
  resetTo() {
    localStorage.removeItem("workouts")
    location.reload
  }
}

const app = new App()
