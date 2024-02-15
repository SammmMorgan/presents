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
        if (!this.opened)
            return `<div class="col-4 p-2">
        <div onclick="app.PresentController.openPresent('${this.id}')" role="button" class="h-100 card text-center shadow present-card">
            <div class="card-body">
                <h4 class="card-title">${this.tag}</h4>
                <i class="card-text">Click to Open</i>
            </div>
        </div>
    </div>`
        else
            return `
    
        `

    }


    get
}