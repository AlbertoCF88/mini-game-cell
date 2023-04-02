import { GuardFase2Guard } from './guard/guard-fase2.guard';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { HomeLevelSelectPageComponent } from './pages/home-level-select-page/home-level-select-page.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RingPageComponent } from './pages/ring-page/ring-page.component';

const routes: Routes = [
  {
    path: 'home', component: HomeLevelSelectPageComponent
  },

  {
    path: 'rules', component: RulesPageComponent
  },
  {
    path: 'ring', component: RingPageComponent
  },
  // {
  //   path: 'rules', component: RulesPageComponent, canActivate: [GuardFase2Guard]
  // },
  // {
  //   path: 'game',
  //   loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  // },
  // {
  //   path: 'game2',
  //   loadChildren: () => import('./game2/game2.module').then( m => m.Game2PageModule)
  // },
  // {
  //   path: 'game3',
  //   loadChildren: () => import('./game3/game3.module').then( m => m.Game3PageModule)
  // },
  //para cargar ruta por defecto o ruta vacia
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  //** ruta incorrecta, siempre al final
  {
    path: '**', redirectTo: 'home'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
