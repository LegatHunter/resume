"use strict";

const header = document.querySelector(".header");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContents = document.querySelectorAll(".operations__content");
const slider = document.querySelector(".slider ");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelector(".dots");

const lazyImg = document.querySelectorAll("img[data-src]");

const btnCloseModalWindow = document.querySelector(".btn--close-modal-window");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);
const btnScrollTo = document.querySelector(".btn--scroll-to");
const tabs = document.querySelectorAll(".operations__tab");
const btnSliderLeft = document.querySelector(".slider__btn--left");
const btnSliderRight = document.querySelector(".slider__btn--right");
const btnCloseBank = document.querySelector('.btn__close_bank')
const section1Coords = section1.getBoundingClientRect();

const account1 = {
  userName: "Cecil Ireland",
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    "2020-10-02T14:43:31.074Z",
    "2020-10-29T11:24:19.761Z",
    "2020-11-15T10:45:23.907Z",
    "2021-01-22T12:17:46.255Z",
    "2021-02-12T15:14:06.486Z",
    "2021-03-09T11:42:26.371Z",
    "2025-03-18T07:43:59.331Z",
    "2025-03-20T15:21:20.814Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account2 = {
  userName: "Amani Salt",
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
  transactionsDates: [
    "2020-10-02T14:43:31.074Z",
    "2020-10-29T11:24:19.761Z",
    "2020-11-15T10:45:23.907Z",
    "2021-01-22T12:17:46.255Z",
    "2021-02-12T15:14:06.486Z",
    "2021-03-09T11:42:26.371Z",
    "2025-03-18T07:43:59.331Z",
    "2025-03-20T15:21:20.814Z",
  ],
  currency: "UAH",
  locale: "uk-UA",
};

const account3 = {
  userName: "Corey Martinez",
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
  transactionsDates: [
    "2020-10-02T14:43:31.074Z",
    "2020-10-29T11:24:19.761Z",
    "2020-11-15T10:45:23.907Z",
    "2021-01-22T12:17:46.255Z",
    "2021-02-12T15:14:06.486Z",
    "2021-03-09T11:42:26.371Z",
    "2025-03-18T07:43:59.331Z",
    "2025-03-20T15:21:20.814Z",
  ],
  currency: "RUB",
  locale: "ru-RU",
};

const account4 = {
  userName: "Kamile Searle",
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
  transactionsDates: [
    "2020-10-02T14:43:31.074Z",
    "2020-10-29T11:24:19.761Z",
    "2020-11-15T10:45:23.907Z",
    "2025-03-18T07:43:59.331Z",
    "2025-03-20T15:21:20.814Z",
  ],
  currency: "CAD",
  locale: "fr-CA",
};

const account5 = {
  userName: "Oliver Avila",
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactionsDates: [
    "2020-10-02T14:43:31.074Z",
    "2020-10-29T11:24:19.761Z",
    "2020-11-15T10:45:23.907Z",
    "2025-03-18T07:43:59.331Z",
    "2025-03-20T15:21:20.814Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4, account5];

let allTransactions = accounts.flatMap((account) => account.transactions);
let bankBalance = allTransactions.reduce((acc, el) => acc + el, 0);

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".total__value--in");
const labelSumOut = document.querySelector(".total__value--out");
const labelSumInterest = document.querySelector(".total__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerTransactions = document.querySelector(".transactions");
const logo = document.querySelector(".logo");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

alert(`Данные для входа в банковское приложение:
  1) ci - 1111
  2) as - 2222
  3) cm - 3333
  4) ks - 4444`)
  console.log(`Данные для входа в банковское приложение:
  1) ci - 1111
  2) as - 2222
  3) cm - 3333
  4) ks - 4444`);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalWindow = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};


const closeBank = function(e){
  e.preventDefault()
  overlay.classList.add("hidden");
  containerApp.style.display = 'none'
};

btnCloseBank.addEventListener('click', closeBank)

btnsOpenModalWindow.forEach((btn) =>
  btn.addEventListener("click", openModalWindow)
);

btnCloseModalWindow.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeModalWindow();
  }
});

btnScrollTo.addEventListener("click", () => {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

//Рабочий код, если мало элементов (ссылок) и когда элемент уже существует
// document.querySelectorAll('.nav__link').forEach((element) => {
//   element.addEventListener('click', function (e) {
//     e.preventDefault()
//     const href = this.getAttribute('href')
//     document.querySelector(href).scrollIntoView({behavior: 'smooth'})
//   })
// }

//Нид
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const target = e.target.getAttribute("href");
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  }
});

tabContainer.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".operations__tab");
  if (!clickedBtn) return;
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clickedBtn.classList.add("operations__tab--active");
  tabsContents.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clickedBtn.dataset.tab}`)
    .classList.add("operations__content--active");
});

//Нид
const navLinksHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest(".nav__links")
      .querySelectorAll(".nav__link");
    const logo = linkOver.closest(".nav").querySelector("img");
    const logoText = linkOver.closest(".nav").querySelector(".nav__text");
    siblingLinks.forEach((el) => {
      if (el !== linkOver) el.style.opacity = this;
    });
    logo.style.opacity = this;
    logoText.style.opacity = this;
  }
};
nav.addEventListener("mouseover", navLinksHover.bind(0.4));
nav.addEventListener("mouseout", navLinksHover.bind(1));

//Sticky старый способ
// window.addEventListener("scroll", function () {
//   if (window.scrollY > section1Coords.top) {
//     nav.classList.add("sticky");
//   } else nav.classList.remove("sticky");
// });

//Нид
const navHeight = nav.getBoundingClientRect().height;
const getStickyNav = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: -navHeight + "px",
});
headerObserver.observe(header);

//Появление секций выплывом
const allSections = document.querySelectorAll(".section");
const sectionUp = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionUp, {
  root: null,
  threshold: 0.1,
  rootMargin: -navHeight + "px",
});
headerObserver.observe(header);
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//Lazy изображения
const loadImg = function (ent, obs) {
  const entry = ent[0];
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });
  obs.unobserve(entry.target);
};
const lazyImgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.7,
});
lazyImg.forEach((img) => lazyImgObserver.observe(img));

//slider
let currentSlide = 0;
const sliderNumber = slides.length;

const createDots = () => {
  slides.forEach(function (_, i) {
    dots.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateCurrentDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((e) => e.classList.remove("dots__dot--active"));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active")
};
activateCurrentDot(currentSlide)

const moveToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
moveToSlide(0);

const nextSlide = () => {
  if (currentSlide === sliderNumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveToSlide(currentSlide);
  activateCurrentDot(currentSlide)
};
const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = sliderNumber - 1;
  } else {
    currentSlide--;
  }
  moveToSlide(currentSlide);
  activateCurrentDot(currentSlide)

};

btnSliderRight.addEventListener("click", nextSlide);
btnSliderLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

dots.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    moveToSlide(slide);
  activateCurrentDot(slide)

  }
});


// Bank APP
const createNicknames = (accounts) => {
  accounts.forEach((element) => {
    element.nickName = element.userName
      .toLowerCase()
      .split(" ")
      .map((el) => el[0])
      .join("");
  });
};
createNicknames(accounts);

const formatDate = function (date, locale) {
  const getDay = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = getDay(new Date(), date);
  if (daysPassed === 0) return "Сегодня";
  if (daysPassed === 1) return "Вчера";
  if (daysPassed <= 5) return `${daysPassed} дня назад`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatNumber = (locale, currency, num) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(num);
};

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = "";
  const trans = sort
    ? account.transactions.slice().sort((x, y) => x - y)
    : account.transactions;
  trans.forEach((element, i) => {
    const transactionsType = element > 0 ? "deposit" : "withdrawal";
    const date = new Date(account.transactionsDates[i]);
    const transDate = formatDate(date, account.locale);
    const formattedTrans = formatNumber(
      account.locale,
      account.currency,
      element
    );
    const transactionsRaw = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transactionsType}">
        ${i + 1} ${transactionsType}
      </div>
      <div class="transactions__date">${transDate}</div>
      <div class="transactions__value">${formattedTrans}</div>
    </div>
    `;
    containerTransactions.insertAdjacentHTML("afterbegin", transactionsRaw);
  });
};

const displayBalance = function (account) {
  const balance = account.transactions.reduce((acc, el) => acc + el);
  account.balance = balance;
  labelBalance.textContent = `${formatNumber(
    account.locale,
    account.currency,
    account.balance
  )}`;
};

const displayTotal = function (account) {
  const depositTotal = account.transactions
    .filter((trans) => trans > 0)
    .reduce((acc, trans) => acc + trans, 0)
    .toFixed(2);
  labelSumIn.textContent = `${formatNumber(
    account.locale,
    account.currency,
    depositTotal
  )}`;

  const withdrawalsTotal = account.transactions
    .filter((trans) => trans < 0)
    .reduce((acc, trans) => acc + trans, 0)
    .toFixed(2);
  labelSumOut.textContent = `${formatNumber(
    account.locale,
    account.currency,
    withdrawalsTotal
  )}`;

  const interestTotal = account.transactions
    .filter((trans) => trans > 0)
    .map((depos) => (depos * account.interest) / 100)
    .filter((interest) => interest >= 5)
    .reduce((acc, interest) => acc + interest, 0)
    .toFixed(2);
  labelSumInterest.textContent = `${formatNumber(
    account.locale,
    account.currency,
    interestTotal
  )}`;
};

const updateUI = (account) => {
  //Display trans
  displayTransactions(account);
  //Display balance
  displayBalance(account);
  //Display total
  displayTotal(account);
};

let currentAccount, currentLogOutTimer;
// currentAccount = account1;
// containerApp.style.opacity = 100;
// updateUI(currentAccount);

const startLogOutTimer = function () {
  const logOut = function () {
    const minute = Math.trunc(time / 60);
    const seconds = time % 60;
    labelTimer.textContent = `${String(minute).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    if (time === 0) {
      clearInterval(logOutTimer);
      containerApp.style.display = 'none';
      labelWelcome.textContent = "Войдите в свой аккаунт";
    }
    time--;
  };
  let time = 300;
  logOut();
  const logOutTimer = setInterval(logOut, 1000);
  return logOutTimer;
};

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  
  currentAccount = accounts.find(
    (account) => account.nickName === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    containerApp.style.display = 'grid';
    labelWelcome.textContent = `Рады что вы с нами, ${
      currentAccount.userName.split(" ")[0]
    }!`;
    overlay.classList.remove("hidden");

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, "0");
    // const month = `${now.getMonth() + 1}`.padStart(2, "0");
    // const year = now.getFullYear();
    // labelDate.textContent = `${day}/${month}/${year}`;

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      weekday: "long",
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginPin.blur();
    if (currentLogOutTimer) clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogOutTimer();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  const recipientNickname = inputTransferTo.value;
  const recipientAccount = accounts.find(
    (account) => account.nickName === recipientNickname
  );
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    recipientAccount &&
    currentAccount.nickName !== recipientAccount?.nickName
  ) {
    currentAccount.transactions.push(-transferAmount);
    recipientAccount.transactions.push(transferAmount);
    currentAccount.transactionsDates.push(new Date().toISOString());
    recipientAccount.transactionsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogOutTimer();
  }
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    currentAccount.nickName === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const currentAccountIndex = accounts.findIndex(
      (account) => account.nickName === currentAccount.nickName
    );
    accounts.splice(currentAccountIndex, 1);
    containerApp.style.display = 'none';
    labelWelcome.textContent = "Войдите в свой аккаунт";
  }
  inputCloseUsername.value = "";
  inputClosePin.value = "";
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.transactions.some((trans) => trans >= loanAmount / 10)
  ) {
    setTimeout(() => {
      currentAccount.transactions.push(loanAmount);
      currentAccount.transactionsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = "";
  clearInterval(currentLogOutTimer);
  currentLogOutTimer = startLogOutTimer();
});

let currentSort = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayTransactions(currentAccount, !currentSort);
  currentSort = !currentSort;
});
