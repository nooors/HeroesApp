import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Hero } from "../../interfaces/hero.interface";

@Component({
  selector: "app-ask",
  templateUrl: "./ask.component.html",
  styles: [],
})
export class AskComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { hero: Hero },
    public dialogRef: MatDialogRef<AskComponent>,
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  confirmOption(): void {
    this.dialogRef.close(true);
  }
}
