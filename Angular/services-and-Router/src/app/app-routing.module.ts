import { NgModule } from '@angular/core';
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';


const routes: Routes = [
  {
      path: 'timelines',
      component: TimelinesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}