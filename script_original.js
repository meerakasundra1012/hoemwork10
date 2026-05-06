// pet_info: object with name (string), weight (number), happiness (number).
var pet_info = {
  name: "Buddy",
  weight: 10,
  happiness: 50,
};

// Array (course topic): sample lines the pet can show after a treat.
var treatComments = ["Yum, thanks!", "That hit the spot!"];

$(function () {
  function checkWeightAndHappinessBeforeUpdating() {
    if (pet_info.weight < 0) {
      pet_info.weight = 0;
    }
    if (pet_info.happiness < 0) {
      pet_info.happiness = 0;
    }
  }

  function updatePetInfoInHtml() {
    $(".name").text(pet_info.name);
    $(".weight").text(pet_info.weight);
    $(".happiness").text(pet_info.happiness);
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();
    updatePetInfoInHtml();
  }

  // Pet message on the page (not alert/console). Uses jQuery .fadeTo() and .delay() — see write-up.
  function showPetNote(message) {
    var $note = $("#pet-note");
    $note.stop(true, true);
    $note.text(message);
    $note
      .css("opacity", 0)
      .fadeTo(200, 1)
      .delay(2000)
      .fadeTo(300, 0);
  }

  function clickedTreatButton() {
    pet_info.happiness = pet_info.happiness + 5;
    pet_info.weight = pet_info.weight + 3;
    checkAndUpdatePetInfoInHtml();
    showPetNote(
      treatComments[Math.floor(Math.random() * treatComments.length)]
    );
  }

  function clickedPlayButton() {
    pet_info.happiness = pet_info.happiness + 5;
    pet_info.weight = pet_info.weight - 2;
    checkAndUpdatePetInfoInHtml();
    showPetNote("Playing is the best!");
  }

  function clickedExerciseButton() {
    pet_info.happiness = pet_info.happiness - 4;
    pet_info.weight = pet_info.weight - 3;
    checkAndUpdatePetInfoInHtml();
    showPetNote("Exercise done. I need water.");
  }

  function clickedNapButton() {
    pet_info.happiness = pet_info.happiness + 3;
    pet_info.weight = pet_info.weight + 1;
    checkAndUpdatePetInfoInHtml();
    showPetNote("Zzz… nice nap.");
  }

  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".nap-button").click(clickedNapButton);

  checkAndUpdatePetInfoInHtml();
});
