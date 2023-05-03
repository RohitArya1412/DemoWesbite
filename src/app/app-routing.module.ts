import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './dynamicrouting/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OverViewComponent } from './over-view/over-view.component';
import { DirectiveComponent } from './directive/directive.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { FormpracticeComponent } from './forms/formpractice/formpractice.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { MookapiComponent } from './mookapi/mookapi.component';


import { StoreComponent } from './store/store.component';
import { BooksComponent } from './store/books/books.component';
import { Book1Component } from './store/books/book1/book1.component';
import { Book2Component } from './store/books/book2/book2.component';
import { Book3Component } from './store/books/book3/book3.component';
import { Book4Component } from './store/books/book4/book4.component';
import { ChartsComponent } from './charts/charts.component';
import { DatashareComponent } from './datashare/datashare.component';
import { DataChildComponent } from './datashare/data-child/data-child.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './admin/activate.guard';
import { CandeactiveComponent } from './candeactive/candeactive.component';
import { DeactiveGuard } from './candeactive/deactive.guard';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ChildGuard } from './admin/child.guard';
import { MaterialcompComponent } from './materialcomp/materialcomp.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{ path: "homePage", component: HomepageComponent, canActivate: [ActivateGuard] },
{ path: "showdata", component: ShowdataComponent, canActivate: [ActivateGuard] },
{ path: "about", component: AboutComponent, canActivate: [ActivateGuard] },
{ path: "hooks", component: LifecyclehooksComponent, canActivate: [ActivateGuard] },
{ path: 'mook', component: MookapiComponent, canActivate: [ActivateGuard] },
{ path: 'chart', component: ChartsComponent, canActivate: [ActivateGuard] },
{ path: 'deactive', component: CandeactiveComponent, canDeactivate: [DeactiveGuard] },
{ path: 'matcomp', component: MaterialcompComponent },
{ path: 'rxjs', component: RxjsComponent },
{
  path: 'datashare', component: DatashareComponent, canActivate: [ActivateGuard], children: [
    { path: 'datachild', component: DataChildComponent },
  ]
},
{
  path: "admin", component: AdminComponent, canActivateChild: [ChildGuard], children: [
    { path: "newcomp", component: NewcomponentComponent }
  ]
},
{
  path: 'stores', canActivate: [ActivateGuard],
  component: StoreComponent,
  children: [
    { path: 'books', component: BooksComponent },
    { path: 'books/book1', component: Book1Component },
    { path: 'books/book2', component: Book2Component },
    { path: 'books/book3', component: Book3Component },
    { path: 'books/book4', component: Book4Component }
  ]
},



{
  path: "overview", component: OverViewComponent, canActivate: [ActivateGuard], children: [

    { path: 'directive', component: DirectiveComponent },
    { path: 'propertybinding', component: PropertybindingComponent },
    { path: 'eventbinding', component: EventbindingComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'twowaybinding', component: TwowaybindingComponent },
  ]
},
{ path: 'directive', component: DirectiveComponent },
{ path: 'propertybinding', component: PropertybindingComponent },
{ path: 'propertybinding/:id', component: EmpdetailComponent },
{ path: 'eventbinding', component: EventbindingComponent },
{ path: 'interpolation', component: InterpolationComponent },
{ path: 'twowaybinding', component: TwowaybindingComponent },
{
  path: 'forms', component: FormsComponent, children: [
    { path: 'tempform', component: TemplateformComponent },
    { path: 'reactform', component: ReactiveformComponent },
    { path: 'formpractice', component: FormpracticeComponent }
  ]
},

{ path: 'empolyee', component: EmployeeComponent, canActivate: [ActivateGuard] },
{ path: 'empolyeeDet', component: EmployeeDetailComponent, canActivate: [ActivateGuard] },

{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
