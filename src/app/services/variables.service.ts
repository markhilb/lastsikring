import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VariablesService {
  public weight? = 28_000;
  public numStraps? = 4;
  public friction? = 0.55;
  public stf? = 1_000;
  public alpha? = 90;

  public g = 9.81;
  public cx = 0.8;
  public cy = 0.5;
  public fsx = 1.25;
  public fsy = 1.1;
  public fmu = 0.75;
  public cz = 1;
}
