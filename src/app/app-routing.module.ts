import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokComponent } from './adminpage/brok/brok.component';
import { DashbdComponent } from './adminpage/dashbd/dashbd.component';
import { MwanaComponent } from './adminpage/mwana/mwana.component';
import { OrdersComponent } from './adminpage/orders/orders.component';
import { PayComponent } from './adminpage/pay/pay.component';
import { TradiComponent } from './adminpage/tradi/tradi.component';
import { DashComponent } from './brokpage/dash/dash.component';
import { FeedComponent } from './brokpage/feed/feed.component';
import { AdminComponent } from './dashboards/layout/admin/admin.component';
import { BrokerComponent } from './dashboards/layout/broker/broker.component';
import { MwanamkeComponent } from './dashboards/layout/mwanamke/mwanamke.component';
import { LoginComponent } from './form/login/login.component';
import { RegComponent } from './form/reg/reg.component';
import { FormadminComponent } from './formadmin/formadmin/formadmin.component';
import { FormbrokerComponent } from './formbroker/formbroker/formbroker.component';
import { FormmwanaComponent } from './formmwana/formmwana/formmwana.component';
import { LandingpageComponent } from './landing/landingpage/landingpage.component';
import { LinkerComponent } from './linker/linker.component';
import { MenuComponent } from './menu/menu.component';
import { MenupageComponent } from './menupage/menupage.component';
import { FeedbackComponent } from './mwanapage/feedback/feedback.component';
import { HomeComponent } from './mwanapage/home/home.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavComponent } from './share/nav/nav.component';

const routes: Routes = [
  {path:'',component:LinkerComponent,
  children:[
   {path:'',component:LandingpageComponent}
  ]
},
{path:'menu',component:MenuComponent},
{path:'menu/:id',component:MenupageComponent},
{
  path:'login',component:LoginComponent
},
{
  path:'reg',component:RegComponent
},
{path:'admin',component:AdminComponent,
children:[
  {path:'',component:DashbdComponent},
  {path:'admin/dashbd',component:DashbdComponent},
  {path:'admin/brok',component:BrokComponent},
  {path:'admin/mwana',component:MwanaComponent},
  {path:'admin/orders',component:OrdersComponent},
  {path:'admin/tradi',component:TradiComponent},
  {path:'admin/pay',component:PayComponent}
]
},
{path:'broker',component:BrokerComponent,
children:[
  {path:'',component:DashComponent},
  {path:'broker/feed',component:FeedComponent},
  {path:'broker/dash',component:DashComponent},
  
]
},
{path:'mwanamke',component:MwanamkeComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'mwanamke/feedback',component:FeedbackComponent},
  {path:'mwanamke/home',component:HomeComponent}
]},
{path:'formmwana',component:FormmwanaComponent},
{path:'formbroker',component:FormbrokerComponent},
{path:'formadmin',component:FormadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
