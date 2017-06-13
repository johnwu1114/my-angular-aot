import { Component, VERSION } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "/app/app.component.html"
})
export class AppComponent {
    name = "Angular";
    version = VERSION.full;
}