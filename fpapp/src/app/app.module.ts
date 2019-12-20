import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ExtensionComponent } from './extension/extension.component';
import { ExtensionsListComponent } from './extensions-list/extensions-list.component';

//Graficos
import { ChartsModule } from 'ng2-charts';
import { ExtensionDonaComponent } from './extension-dona/extension-dona.component';
import { PasantiaDonaComponent } from './pasantia-dona/pasantia-dona.component';
import { MateriaDonaComponent } from './materia-dona/materia-dona.component';
import { PasantiasListComponent } from './pasantias-list/pasantias-list.component';
import { MateriasListComponent } from './materias-list/materias-list.component';
import { CorrelatividadListComponent } from './correlatividad-list/correlatividad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    ExtensionComponent,
    ExtensionsListComponent,
    ExtensionDonaComponent,
    PasantiaDonaComponent,
    MateriaDonaComponent,
    PasantiasListComponent,
    MateriasListComponent,
    CorrelatividadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
