import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["form", "input", "list"]

    connect() {
        // console.log(this.formTarget)
        // console.log(this.inputTarget)
        // console.log(this.listTarget)
    }

    searchMoviesByTitle(event) {
        // Get the URL of the API
        // Get the input value for query param
        // execute fetch call
        const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
        // const url = `http://localhost:3000/movies?query=${this.inputTarget.value}`
        fetch(url, { headers: { "Accept": "text/plain" } })
            .then(response => response.text())
            .then((data) => {
                this.listTarget.outerHTML = data;
            })
    }
}
