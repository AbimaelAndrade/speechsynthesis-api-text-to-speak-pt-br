/**
 * References MDN - SpeechSynthesis
 * https://developer.mozilla.org/pt-BR/docs/Web/API/SpeechSynthesis
 */

const form = document.querySelector("#form-text"),
  alert = document.querySelector(".alert-suport"),
  init = () => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      let text = document.querySelector("#text");
      speak(text.value);
    });
  },
  speak = text => {
    let msg = new SpeechSynthesisUtterance(text);
    msg.voice = speechSynthesis
      .getVoices()
      .filter(voice => voice.lang === "pt-BR")[1];
    msg.voiceURI = "Google português do Brasil";
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "pt-BR";

    speechSynthesis.speak(msg);
  };

if ("speechSynthesis" in window) {
  init();
} else {
  alert.classList.remove("d-none");
}
