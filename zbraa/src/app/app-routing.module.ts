import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'hobbit-modal', loadChildren: './hobbit-modal/hobbit-modal.module#HobbitModalPageModule' },
  { path: 'hobbitses', loadChildren: './hobbitses/hobbitses.module#HobbitsesPageModule' },
  { path: 'friend-modal', loadChildren: './friend-modal/friend-modal.module#FriendModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
