import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialComponent } from './special/special.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  { path: 'home', component: BannerComponent },
  { path: 'special', component: SpecialComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
