const selectElement = document.querySelector("#select");

const KOREA = document.querySelector("#select option[value=KR]");
const GREECE = document.querySelector("#select option[value=GR]");
const TURKEY = document.querySelector("#select option[value=TR]");
const FINLAND = document.querySelector("#select option[value=FI]");

const COUNTRY_KEY = "country";

function selectCountry(event) {
  event.preventDefault();
  const countryName = event.target.value;
  localStorage.setItem(COUNTRY_KEY, countryName);
}

const savedCountry = localStorage.getItem(COUNTRY_KEY);

if (savedCountry === "KR") {
  KOREA.setAttribute("selected", true);
} else if (savedCountry === "GR") {
  GREECE.setAttribute("selected", true);
} else if (savedCountry === "TR") {
  TURKEY.setAttribute("selected", true);
} else if (savedCountry === "FI") {
  FINLAND.setAttribute("selected", true);
}

selectElement.addEventListener("change", selectCountry);
