import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BannerComponent } from './banner/banner.component';
import { SpecialComponent } from './special/special.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MenuByCategoryPipe } from './menu-by-category.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BannerComponent,
    SpecialComponent,
    AboutComponent,
    MenuComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    MenuByCategoryPipe,
    ContactFormComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
