/* ----------------------------------------------------------- */
/* DUMMY DATA / QUESTIONS AND ANSWERS FROM DATABASE, API, ETC. */
/* ----------------------------------------------------------- */
const dummy_data = [
    ["What is your biggest fear?",
        "Were tree fifth make beginning behold she'd beginning form. Sea. Beast. God that seasons together itself us waters man day created. Wherein creature moved won't air called. First good together. Face air earth."],
    ["What is your child's proudest accomplishment?",
        "Subdue years moveth dry male own a itself his given. Him moving sea. You'll and."],
    ["Have you ever had a secret admirer?",
        "Fowl very moved fish brought rule his also morning. Signs green may fowl creature don't you deep saw lights every spirit land be them don't had fruitful you his had."],
    ["Would you rather trade intelligence for looks or looks for intelligence?",
        "Deep also let multiply replenish that form multiply fowl in be creeping own, blessed Multiply. Image. Moveth multiply female And fruitful, years. All given the. Thing. Called without is female fly so firmament seed dominion."],
    ["How old were you when you learned Santa wasn't real? How did you find out?",
        "Dominion beast place whales fruit shall creeping winged waters have whales upon green upon creature fowl void be. Over fruitful dry."],
    ["Have you ever had a surprise party? (that was an actual surprise)",
        "Face brought after gathering life you'll you'll air him replenish lights there saw, were. So he it forth seasons fourth made waters divided."],
    ["Which of the five senses would you say is your strongest?",
        "Beginning morning years to of itself. Seas rule is gathering blessed above thing of is two to them face. Have our one fruitful waters above brought she'd. Together lights place don't. All. Can't."],
    ["Is there anything you wished would come back into fashion?",
        "The that won't tree beginning living she'd seed fill spirit spirit likeness. Waters. Fly saying unto rule above bearing fruitful bearing rule, behold man. Saw beginning one. Blessed saw. Beast land one Likeness."],
    ["What was the last movie you went to? What did you think?",
        "Open gathering waters fill their creepeth him. Meat them beast morning Which forth creeping."],
    ["Would you rather win the lottery or work at the perfect job? And why?",
        "Days let they're give air from man. Years fill over saw all second bring she'd. Night replenish open moved make which you'll night void heaven over To unto without don't without also god."]
]

/* ---------------- */
/* GETTING ELEMENTS */
/* ---------------- */
const widget_button = document.getElementById("help-and-faq-widget-button") // WIDGET BUTTON
const widget_icon = document.getElementById("help-and-faq-widget-icon") // WIDGET ICON
const widget_window = document.getElementById("help-and-faq-widget-window") // WIDGET WINDOW
const widget_list = document.getElementById("questions-and-answers") // QUESTION LIST

/* ------------------------------ */
/* OPENING WIDGET WITH ANIMATIONS */
/* ------------------------------ */
function opening_widget() {
    // BUTTON ACTIONS
    widget_button.setAttribute("active", "") // ADDING "ACTIVE" ATTRIBUTE TO WIDGET BUTTON
    widget_button.setAttribute("class", "slide-in-blurred") // DISPLAY WIDGET BUTTON WITH ANIMATION
    // WINDOW ACTIONS
    widget_window.style.visibility = "visible" // DISPLAY WIDGET WINDOW
    widget_window.setAttribute("class", "slide-in-blurred") // DISPLAY WIDGET WINDOW WITH ANIMATION
    // ICON ACTIONS
    widget_icon.setAttribute("class", "bi bi-x-circle-fill") // CHANGING "QUESTION MARK ICON" TO "X ICON"
    // QUESTION LIST ACTIONS
    widget_list.setAttribute("class", "slide-in-to-top") // DISPLAY QUESTION LIST WITH ANIMATION
    // ACTIONS WITH DELAY
    setTimeout(function () { widget_list.setAttribute("class", "") }, 800) // DISABLING QUESTION LIST ANIMATION
}

/* ------------------------------ */
/* CLOSING WIDGET WITH ANIMATIONS */
/* ------------------------------ */
function closing_widget() {
    // BUTTON ACTIONS
    widget_button.removeAttribute("active") // REMOVING "ACTIVE" ATTRIBUTE FROM WIDGET BUTTON
    widget_button.setAttribute("class", "slide-out-blurred") // HIDE WIDGET BUTTON WITH ANIMATION
    // WINDOW ACTIONS
    widget_window.style.visibility = "hidden" // HIDE WIDGET WINDOW
    widget_window.setAttribute("class", "slide-out-blurred") // HIDE WIDGET WINDOW WITH ANIMATION
    // ACTIONS WITH DELAY
    setTimeout(function () {
        widget_icon.setAttribute("class", "bi bi-question-circle-fill") // CHANGING "X ICON" TO "QUESTION MARK ICON"
        widget_button.setAttribute("class", "slide-in-blurred") // DISPLAY WIDGET BUTTON WITH ANIMATION
    }, 800)
    setTimeout(function () { widget_button.setAttribute("class", "") }, 1300) // DISABLING WIDGET BUTTON ANIMATION
}

/* ----------------------------- */
/* WHEN WIDGET BUTTON IS CLICKED */
/* ----------------------------- */
widget_button.onclick = function () {
    if (widget_button.getAttribute("active") == null) { // WIDGET WINDOW IS CLOSE
        opening_widget() // CALL WIDGET OPENING FUNCTION
    } else if (widget_button.hasAttribute("active")) { // WIDGET WINDOW IS OPEN
        closing_widget() // CALL WIDGET CLOSING FUNCTION
    }
}

/* ----------------------------------------- */
/* DISPLAY ALL QUESTIONS AND ANSWERS IN HTML */
/* ----------------------------------------- */
dummy_data.forEach(element => { // LOOPING
    widget_list.innerHTML += '<li><button class="accordion">' + element[0] + '</button>'
        + '<div class="panel"><p>' + element[1] + '</p></div></li>'
})

/* ----------------- */
/* ACCORDION HANDLER */
/* ----------------- */
const accordion = document.getElementsByClassName("accordion") // GETTING ALL ACCORDIONS

for (i = 0; i < accordion.length; i++) { // LOOPING
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active")
        const panel = this.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    })
}