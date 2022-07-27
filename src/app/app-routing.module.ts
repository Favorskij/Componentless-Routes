import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageTwoComponent} from "./page-two/page-two.component";

const routes: Routes = [

  {path: '', children: [
      {path:'one', children: [
          {path:'two', component: PageTwoComponent},
        ]},

    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
