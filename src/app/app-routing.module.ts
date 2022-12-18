import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookProductComponent } from './book-product/book-product.component';

const routes: Routes = [
  { path: 'book/:id', component: BookProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
