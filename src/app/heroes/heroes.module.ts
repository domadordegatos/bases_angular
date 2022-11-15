import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { heroeComponet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        heroeComponet,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}