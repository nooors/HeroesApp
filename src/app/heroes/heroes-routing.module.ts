import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HeroComponent } from "./pages/hero/hero.component";
import { ListComponent } from "./pages/list/list.component";
import { SearchComponent } from "./pages/search/search.component";
import { AddComponent } from "./pages/add/add.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent, // Principal route, here comes the router-link to show the children routes of heroes
    children: [
      { path: "list", component: ListComponent },
      { path: "add", component: AddComponent },
      { path: "edit/:id", component: AddComponent },
      { path: "search", component: SearchComponent },
      { path: ":id", component: HeroComponent },
      { path: "**", redirectTo: "list" },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
