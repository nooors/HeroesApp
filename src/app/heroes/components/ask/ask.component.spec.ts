import { By } from "@angular/platform-browser";
import { MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AskComponent } from "./ask.component";
import { HeroesModule } from "./../../heroes.module";
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { Hero } from "../../interfaces/hero.interface";

const data = {
  hero: {
    id: "marvel-silver",
    superhero: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    characters: "Norrin Radd",
  },
};
const matDialogRefMock = {
  close: () => {},
};
describe("AskComponent", () => {
  let component: AskComponent;
  let fixture: ComponentFixture<AskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: MatDialogRef, useValue: matDialogRefMock },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it("Should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("Should call the right method when the button is clicked and show the right name", fakeAsync(() => {
    const buttons = fixture.debugElement.queryAll(By.css("button"));

    let mySpy = spyOn(component, "closeDialog");
    buttons[0].triggerEventHandler("click", null);
    fixture.detectChanges;
    tick();

    expect(mySpy).toHaveBeenCalled();
    expect(buttons[0].nativeElement.textContent).toContain("Cancel");
    let mySpy2 = spyOn(component, "confirmOption");
    buttons[1].triggerEventHandler("click", null);
    fixture.detectChanges;
    tick();

    expect(mySpy2).toHaveBeenCalled();
    expect(buttons[1].nativeElement.textContent).toContain("Yes, delete it!");
  }));

  it("Should display an advice in the title", () => {
    const h1: HTMLElement = fixture.debugElement.query(By.css("h1"))
      .nativeElement;
    expect(h1.textContent).toContain("Are you sure?");
  });

  it("Should render the supeheroe name", () => {
    const advice: HTMLElement = fixture.debugElement.query(By.css("p"))
      .nativeElement;
    expect(advice.textContent).toContain(data.hero.superhero);
  });
});
