import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["card", "infos", "form"]

    connect() {
    }

    displayForm() {
        this.formTarget.classList.remove("d-none")
        this.infosTarget.classList.add("d-none")
    }

    updateMovie(event) {
        event.preventDefault();
        const url = this.formTarget.action
        console.log(url);
        fetch(url, {
            method: "PATCH",
            headers: { "Accept": "text/plain" },
            body: new FormData(this.formTarget)
        })
        .then(response => response.text())
        .then(data => {
            this.cardTarget.outerHTML = data;
        })
    }


}
