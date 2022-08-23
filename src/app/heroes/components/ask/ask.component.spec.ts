import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AskComponent } from "./ask.component";
import { HeroesModule } from "./../../heroes.module";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AskComponent", () => {
  let component: AskComponent;
  let fixture: ComponentFixture<AskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesModule],
      providers: [MAT_DIALOG_DATA, MatDialogRef],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AskComponent);
        component = fixture.componentInstance;
      });
  });

  it("Should create the component", () => {
    expect(component).toBeTruthy();
  });
});
