var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ThingService } from './services/thing-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration } from '../app.constants';
var CoreModule = CoreModule_1 = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                ThingService,
                Configuration
            ]
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ]
    })
], CoreModule);
export { CoreModule };
var CoreModule_1;
//# sourceMappingURL=core.module.js.map