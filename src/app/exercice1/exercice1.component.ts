import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component {
  public inputType = "date";

  public label = "Veuillez cliquer sur ce texte";

  public color = "red";

  public changeColor(color: string): void {
    this.color = color;
  }
}
