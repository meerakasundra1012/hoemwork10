var pet_info = {
  name: "Buddy",
  weight: 10,
  happiness: 50,
};

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
    showPetNote("Zzz... nice nap.");
  }

  function messageLoggingExample() {
    console.log("Message Logging: The pet dashboard loaded and this button works.");
  }

  function infoLoggingExample() {
    console.info("Log Info: Current pet_info object is:", pet_info);
  }

  function warningLoggingExample() {
    console.warn("Log Warning: Happiness and weight are clamped at 0 in this demo.");
  }

  function errorLoggingExample() {
    console.error("Log Error: Example console.error() message for HW10.");
  }

  function tableLoggingExample() {
    var petActions = [
      { action: "Treat", happinessChange: 5, weightChange: 3 },
      { action: "Play", happinessChange: 5, weightChange: -2 },
      { action: "Exercise", happinessChange: -4, weightChange: -3 },
      { action: "Nap", happinessChange: 3, weightChange: 1 },
    ];
    console.table(petActions);
  }

  function groupLoggingExample() {
    console.group("Log Group: Pet Stats");
    console.log("Name:", pet_info.name);
    console.log("Weight:", pet_info.weight);
    console.log("Happiness:", pet_info.happiness);
    console.groupEnd();
  }

  function customLoggingExample() {
    console.log(
      "%cLog Custom: Styled message with %c and CSS!",
      "color: #6a1b9a; font-size: 16px; font-weight: bold; background: #f3e5f5; padding: 4px;"
    );
  }

  function viewBrowserLoggedMessages() {
    console.log(
      "User message: After this line, watch for a browser/network error for a missing image."
    );
    var broken = new Image();
    broken.src = "images/this-image-does-not-exist-devtools-demo.png";
  }

  function cause404NetworkError() {
    fetch("assets/file-that-does-not-exist.json");
  }

  function causeTypeError() {
    var petOwner = null;
    console.log(petOwner.name);
  }

  function causeViolation() {
    var start = Date.now();
    while (Date.now() - start < 1200) {}
    console.log("Violation demo: long task finished.");
  }

  function filterMessagesIntro() {
    console.log("FILTER_DEMO alpha: starting filter practice batch.");
    console.info("FILTER_DEMO beta: info level line");
    console.warn("FILTER_DEMO gamma: warning level line");
    console.error("FILTER_DEMO delta: error level line");
    console.log("FILTER_DEMO epsilon: another log for text filtering");
  }

  function filterByLogLevelExample() {
    console.log("Filter Level Example: log");
    console.info("Filter Level Example: info");
    console.warn("Filter Level Example: warn");
    console.error("Filter Level Example: error");
  }

  function filterByTextExample() {
    console.log("FILTER_TEXT_PET: Use the filter box and type FILTER_TEXT_PET.");
    console.log("FILTER_TEXT_PET appears twice so you can see multiple matches.");
  }

  function filterByRegexExample() {
    console.log("pet-100");
    console.log("pet-200");
    console.log("animal-300");
    console.log("Try regex filter: pet-\\d+ (in Chrome: enable regex in the filter options).");
  }

  function filterBySourceExample() {
    console.log("Filter Source Example: messages originate from script.js.");
  }

  function filterByUserMessagesExample() {
    console.log("User Message Example: written by this page’s JavaScript.");
    console.log("Hide browser noise with the Console sidebar / default levels if needed.");
  }

  function sourcesUiIntro() {
    console.log("Sources UI: In DevTools, open Sources → Page → your site → script.js.");
    console.log("Notice: file tree (left), code (center), Breakpoints / Scope / Watch (right).");
  }

  function pauseCodeWithBreakpoint() {
    var petName = pet_info.name;
    var petWeight = pet_info.weight;
    var petHappiness = pet_info.happiness;
    debugger;
    console.log("After pause:", petName, petWeight, petHappiness);
  }

  function lineOfCodeBreakpointPractice() {
    var lineBreakpointA = 40;
    var lineBreakpointB = 2;
    var lineProduct = lineBreakpointA * lineBreakpointB;
    console.log("Line breakpoint practice:", lineBreakpointA, lineBreakpointB, lineProduct);
  }

  function checkVariableValuesPractice() {
    var base = 12;
    var multiplier = 3;
    var computed = base * multiplier;
    console.log("Check variables demo:", computed);
  }

  function scopePanePractice() {
    var scopeX = pet_info.weight;
    var scopeY = pet_info.happiness;
    var scopeTotal = scopeX + scopeY;
    console.log("Scope pane practice total:", scopeTotal);
  }

  function watchExpressionsPractice() {
    var watchA = pet_info.weight;
    var watchB = pet_info.happiness;
    var watchSum = watchA + watchB;
    debugger;
    console.log("Watch practice:", watchA, watchB, watchSum);
  }

  function consoleWhilePausedPractice() {
    var secretCode = pet_info.name.length * 10;
    debugger;
    console.log("Console while paused demo finished. secretCode was:", secretCode);
  }

  function reproduceBug() {
    var currentWeight = $(".weight").text();
    var addedWeight = "3";
    var newWeight = currentWeight + addedWeight;

    console.log("Bug — currentWeight:", currentWeight, typeof currentWeight);
    console.log("Bug — addedWeight:", addedWeight, typeof addedWeight);
    console.log("Bug — wrong newWeight:", newWeight);

    $("#bug-result").text(
      "Bug reproduced: " + currentWeight + " + " + addedWeight + " = " + newWeight
    );
  }

  function applyFix() {
    var currentWeight = Number($(".weight").text());
    var addedWeight = Number("3");
    var newWeight = currentWeight + addedWeight;

    console.log("Fix — currentWeight:", currentWeight, typeof currentWeight);
    console.log("Fix — addedWeight:", addedWeight, typeof addedWeight);
    console.log("Fix — correct newWeight:", newWeight);

    $("#bug-result").text(
      "Fix applied: " + currentWeight + " + " + addedWeight + " = " + newWeight
    );
  }

  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".nap-button").click(clickedNapButton);

  $("#message-log-button").click(messageLoggingExample);
  $("#info-log-button").click(infoLoggingExample);
  $("#warning-log-button").click(warningLoggingExample);
  $("#error-log-button").click(errorLoggingExample);
  $("#table-log-button").click(tableLoggingExample);
  $("#group-log-button").click(groupLoggingExample);
  $("#custom-log-button").click(customLoggingExample);

  $("#browser-message-button").click(viewBrowserLoggedMessages);
  $("#network-404-button").click(cause404NetworkError);
  $("#type-error-button").click(causeTypeError);
  $("#violation-button").click(causeViolation);

  $("#filter-messages-button").click(filterMessagesIntro);
  $("#filter-level-button").click(filterByLogLevelExample);
  $("#filter-text-button").click(filterByTextExample);
  $("#filter-regex-button").click(filterByRegexExample);
  $("#filter-source-button").click(filterBySourceExample);
  $("#filter-user-button").click(filterByUserMessagesExample);

  $("#sources-ui-button").click(sourcesUiIntro);
  $("#pause-breakpoint-button").click(pauseCodeWithBreakpoint);
  $("#line-breakpoint-button").click(lineOfCodeBreakpointPractice);
  $("#check-variables-button").click(checkVariableValuesPractice);
  $("#scope-pane-button").click(scopePanePractice);
  $("#watch-expressions-button").click(watchExpressionsPractice);
  $("#console-while-paused-button").click(consoleWhilePausedPractice);
  $("#bug-button").click(reproduceBug);
  $("#fix-button").click(applyFix);

  checkAndUpdatePetInfoInHtml();
  console.log("HW10: Page ready — use the DevTools Practice buttons or set breakpoints in script.js.");
});
