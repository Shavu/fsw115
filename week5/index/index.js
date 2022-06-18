const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(form.decision.value)
})