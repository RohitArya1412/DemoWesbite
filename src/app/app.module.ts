import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './dynamicrouting/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DirectiveComponent } from './directive/directive.component';
import { OverViewComponent } from './over-view/over-view.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { FormpracticeComponent } from './forms/formpractice/formpractice.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { AdddataComponent } from './adddata/adddata.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { SearchPipe } from './findpipe/search.pipe';
import { SortPipe } from './sortpipe/sort.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescPipe } from './sortpipe/desc.pipe';
import { FahrenheitPipe } from './sortpipe/fahrenheit.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { OnchangeComponent } from './lifecyclehooks/onchange/onchange.component';
import { PurepipesComponent } from './purepipes/purepipes.component';
import { ImpurepipesPipe } from './service/impurepipes.pipe';
import { PurePipePipe } from './service/pure-pipe.pipe';
import { MookapiComponent } from './mookapi/mookapi.component';
import { MooksearchPipe } from './mookapi/mooksearch.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { StoreComponent } from './store/store.component';
import { BooksComponent } from './store/books/books.component';
import { Book1Component } from './store/books/book1/book1.component';
import { Book2Component } from './store/books/book2/book2.component';
import { Book3Component } from './store/books/book3/book3.component';
import { Book4Component } from './store/books/book4/book4.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartPipe } from './charts/chart.pipe';
import { DatashareComponent } from './datashare/datashare.component';
import { DataChildComponent } from './datashare/data-child/data-child.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { AdminComponent } from './admin/admin.component';
import { Newcomponent1Component } from './newcomponent/newcomponent1/newcomponent1.component';
import { ActivateGuard } from './admin/activate.guard';
import { UsernameService } from './admin/username.service';
import { CandeactiveComponent } from './candeactive/candeactive.component';
import { DeactiveGuard } from './candeactive/deactive.guard';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialcompComponent } from './materialcomp/materialcomp.component';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Comp1Component } from './materialcomp/comp1/comp1.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Comp2Component } from './rxjs/comp2/comp2.component';
import { Comp3Component } from './rxjs/comp3/comp3.component';
import { Comp4Component } from './rxjs/comp4/comp4.component';
import { Comp5Component } from './rxjs/comp5/comp5.component';
import { ReplaysubjectComponent } from './rxjs/replaysubject/replaysubject.component';
import { DropdownComponent } from './rxjs/dropdown/dropdown.component';
import { Dropdown1Component } from './rxjs/dropdown1/dropdown1.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomepageComponent,
    DirectiveComponent,
    OverViewComponent,
    EventbindingComponent,
    PropertybindingComponent,
    FormsComponent,
    TemplateformComponent,
    ReactiveformComponent,
    FormpracticeComponent,
    EmpdetailComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    FooterComponent,
    ShowdataComponent,
    AdddataComponent,
    InputdataComponent,
    SearchPipe,
    SortPipe,
    DescPipe,
    FahrenheitPipe,
    LifecyclehooksComponent,
    OnchangeComponent,
    PurepipesComponent,
    ImpurepipesPipe,
    PurePipePipe,
    MookapiComponent,
    MooksearchPipe,
    StoreComponent,
    BooksComponent,
    Book1Component,
    Book2Component,
    Book3Component,
    Book4Component,
    ChartsComponent,
    ChartPipe,
    DatashareComponent,
    DataChildComponent,
    NewcomponentComponent,
    Newcomponent1Component,
    AdminComponent,
    CandeactiveComponent,
    MaterialcompComponent,
    Comp1Component,
    RxjsComponent,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    ReplaysubjectComponent,
    DropdownComponent,
    Dropdown1Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatTooltipModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatProgressBarModule

  ],
  providers: [SortPipe, DescPipe, ActivateGuard, UsernameService, DeactiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
