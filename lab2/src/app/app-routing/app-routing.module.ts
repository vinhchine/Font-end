import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ProductComponent } from 'src/app/component/main/content/product/product.component';
import {DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ProductDetailComponent } from '../component/main/content/product-detail/product-detail.component';
import { HomeComponent } from '../component/home/home.component';
import { AddProductComponent } from '../component/add-product/add-product.component';
import { CategoryComponent } from '../category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: AddProductComponent},
  { path: 'category/:cateId/product', component: ProductComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category/:cateId/product', component: ProductDetailComponent},
  { path: 'category', component: CategoryComponent },
  { path: '**', component: NotfoundComponent}

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
