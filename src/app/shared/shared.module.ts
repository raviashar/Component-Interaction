import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { StringConstant } from './stringConstant';

@NgModule({
  declarations: [
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [StringConstant],
  exports: [CommonModule, FormsModule, AngularMaterialModule, SearchFilterPipe]

})
export class SharedModule { }
