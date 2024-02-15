export class Present {

    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.profileIdsOpened = data.profileIdsOpened
    }


    get PresentHTMLTemplate() {
        return `<div class="col-4 p-2">
        <div onclick="app.PresentController.getOpenedPresent('${this.id}) role="button" class="card text-center shadow present-card">
            <div class="card-body">
                <h4 class="card-title">${this.tag}</h4>
                <i class="card-text">Click to Open</i>
            </div>
        </div>
    </div>`

    }

    get
}