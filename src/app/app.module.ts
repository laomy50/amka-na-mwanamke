import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './share/nav/nav.component';
import { FooterComponent } from './share/footer/footer.component';
import { LinkerComponent } from './linker/linker.component';
import { LandingpageComponent } from './landing/landingpage/landingpage.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { LoginComponent } from './form/login/login.component';
import { RegComponent } from './form/reg/reg.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {CdkTableModule} from '@angular/cdk/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminComponent } from './dashboards/layout/admin/admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrokerComponent } from './dashboards/layout/broker/broker.component';
import { MwanamkeComponent } from './dashboards/layout/mwanamke/mwanamke.component';


import { OrdersComponent } from './adminpage/orders/orders.component';
import { MwanaComponent } from './adminpage/mwana/mwana.component';
import { PayComponent } from './adminpage/pay/pay.component';

import { FormadminComponent } from './formadmin/formadmin/formadmin.component';
import { FormbrokerComponent } from './formbroker/formbroker/formbroker.component';
import { FormmwanaComponent } from './formmwana/formmwana/formmwana.component';
import { DashComponent } from './brokpage/dash/dash.component';
import { DashbdComponent } from './adminpage/dashbd/dashbd.component';
import { BrokComponent } from './adminpage/brok/brok.component';
import { TradiComponent } from './adminpage/tradi/tradi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LinkerComponent,
    LandingpageComponent,
    MenuComponent,
    MenupageComponent,
    LoginComponent,
    RegComponent,
    AdminComponent,
    BrokerComponent,
    MwanamkeComponent,
    OrdersComponent,
    MwanaComponent,
    PayComponent,
    FormadminComponent,
    FormbrokerComponent,
    FormmwanaComponent,
    DashComponent,
    DashbdComponent,
    BrokComponent,
    TradiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSortModule,
    CdkTableModule,
    MatDatepickerModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    MatTabsModule,
    MatTableModule,
    MatRadioModule,
    MatListModule,
    MatRadioModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    CdkStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    DragDropModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
