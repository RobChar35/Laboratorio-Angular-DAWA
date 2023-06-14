import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'users'},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailsComponent},

  {path: 'notfound', component: NotFoundComponent},
  {path: '**', redirectTo: 'notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
