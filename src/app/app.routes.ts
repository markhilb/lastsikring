import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  // NB! Must be at bottom
  {
    path: "**",
    redirectTo: "",
  },
];
