import { translations } from "./translation.js";

const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const pageTitle = document.querySelector(".page-title");
const formTitle = document.querySelector(".form__title");
const formName = document.querySelector(".name");
const formEmail = document.querySelector(".email");
const formNumber = document.querySelector(".number");
const formExpertise = document.querySelector(".expertise");
const formConfirmBtn = document.querySelector(".confirm");
const formCancleBtn = document.querySelector(".cancle");
const options = document.getElementById("languageOptions");

// select language
document.getElementById("languageIcon").onclick = function () {
  options.style.visibility =
    options.style.visibility === "visible" ? "hidden" : "visible";
};

window.onclick = function (event) {
  const selector = document.querySelector(".language-selector");

  if (!selector.contains(event.target)) {
    options.style.visibility = "hidden";
  }
};

document.querySelectorAll(".language__option").forEach((option) => {
  option.onclick = function () {
    const selectedLanguage = this.getAttribute("data-lang");

    pageTitle.textContent = translations[selectedLanguage].title;
    openModalBtn.textContent = translations[selectedLanguage].infoBtn;
    formTitle.textContent = translations[selectedLanguage].formTitle;
    formName.textContent = translations[selectedLanguage].formName;
    formEmail.textContent = translations[selectedLanguage].formEmail;
    formNumber.textContent = translations[selectedLanguage].formNum;
    formExpertise.textContent = translations[selectedLanguage].formExpertise;
    formConfirmBtn.textContent = translations[selectedLanguage].formConfirmBtn;
    formCancleBtn.textContent = translations[selectedLanguage].formCancleBtn;

    const htmlElement = document.documentElement;
    if (selectedLanguage === "fa") {
      htmlElement.setAttribute("lang", "fa");
      htmlElement.setAttribute("dir", "rtl");
    } else if (selectedLanguage === "en") {
      htmlElement.setAttribute("lang", "en");
      htmlElement.setAttribute("dir", "ltr");
    } else if (selectedLanguage === "sv") {
      htmlElement.setAttribute("lang", "sv");
      htmlElement.setAttribute("dir", "ltr");
    }

    document.getElementById("languageOptions").style.visibility = "hidden";
  };
});

// modal
function openModal(e) {
  backdrop.classList.remove("hidden");
}

function closeModal(e) {
  backdrop.classList.add("hidden");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.stopPropagation());
