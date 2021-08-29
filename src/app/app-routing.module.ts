import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircoolerComponent } from './aircooler/aircooler.component';
import { CookingnecessariesComponent } from './cookingnecessaries/cookingnecessaries.component';
import { CrystalComponent } from './crystal/crystal.component';
import { CupsComponent } from './cups/cups.component';
import { DecorationidolsComponent } from './decorationidols/decorationidols.component';
import { EducationnecessariesComponent } from './educationnecessaries/educationnecessaries.component';
import { ElectricthingsComponent } from './electricthings/electricthings.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FacewashComponent } from './facewash/facewash.component';
import { FashionComponent } from './fashion/fashion.component';
import { FlourComponent } from './flour/flour.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { GaneshaComponent } from './ganesha/ganesha.component';
import { GiftsComponent } from './gifts/gifts.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HairoilComponent } from './hairoil/hairoil.component';
import { HeritageComponent } from './heritage/heritage.component';
import { HomeComponent } from './home/home.component';
import { KitchenutensilsComponent } from './kitchenutensils/kitchenutensils.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MilkproductsComponent } from './milkproducts/milkproducts.component';
import { MixergrinderComponent } from './mixergrinder/mixergrinder.component';
import { OthersComponent } from './others/others.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { PlantsComponent } from './plants/plants.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SmileyComponent } from './smiley/smiley.component';
import { SoapsComponent } from './soaps/soaps.component';
import { TeddyComponent } from './teddy/teddy.component';
import { ToysComponent } from './toys/toys.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';

const routes: Routes = [
  {path:'toys',component:ToysComponent},
  {path:'teddy',component:TeddyComponent},
  {path:'washingmachine',component:WashingmachineComponent},
  {path:'vegetables',component:VegetablesComponent},
  {path:'fruits',component:FruitsComponent},
  {path:'soaps',component:SoapsComponent},
  {path:'smiley',component:SmileyComponent},
  {path:'plants',component:PlantsComponent},
  {path:'phones',component:PhonesComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'others',component:OthersComponent},
  {path:'mixergrinder',component:MixergrinderComponent},
  {path:'milkproducts',component:MilkproductsComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'kitchenutensils',component:KitchenutensilsComponent},
  {path:'home',component:HomeComponent},
  {path:'heritage',component:HeritageComponent},
  {path:'hairoil',component:HairoilComponent},
  {path:'groceries',component:GroceriesComponent},
  {path:'gifts',component:GiftsComponent},
  {path:'ganesha',component:GaneshaComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'flour',component:FlourComponent},
  {path:'fashion',component:FashionComponent},
  {path:'facewash',component:FacewashComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'electricthings',component:ElectricthingsComponent},
  {path:'educationnecessaries',component:EducationnecessariesComponent},
  {path:'decorationidols',component:DecorationidolsComponent},
  {path:'cups',component:CupsComponent},
  {path:'crystal',component:CrystalComponent},
  {path:'cookingnecessaries',component:CookingnecessariesComponent},
  {path:'aircooler',component:AircoolerComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'searchbar',component:SearchbarComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
