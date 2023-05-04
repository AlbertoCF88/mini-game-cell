import { GuardFase2Guard } from './guard/guard-fase2.guard';
import { RulesPageComponent } from './pages/rules-page/rules-page.component';
import { HomeLevelSelectPageComponent } from './pages/home-level-select-page/home-level-select-page.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Ring1PageComponent } from './pages/rings/ring1/ring1-page/ring1-page.component';
import { RingsModule } from './pages/rings/rings.module';
import { Ring2PageComponent } from './pages/rings/ring2/ring2-page/ring2-page.component';
import { GuardFase3Guard } from './guard/guard-fase3.guard';
import { Ring3PageComponent } from './pages/rings/ring3/ring3-page/ring3-page.component';



const routes: Routes = [
  {
    path: 'home', component: HomeLevelSelectPageComponent
  },

  {
    path: 'rules', component: RulesPageComponent
  },
  {
    path: 'fase1', component: Ring1PageComponent
  },
  {
    path: 'fase2', component: Ring2PageComponent , canActivate: [GuardFase2Guard]
  },
  {
    path: 'fase3', component: Ring3PageComponent , canActivate: [GuardFase3Guard]
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
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RingsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
