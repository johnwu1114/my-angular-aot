import { Component, VERSION } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    name = "Angular";
    version = VERSION.full;
}