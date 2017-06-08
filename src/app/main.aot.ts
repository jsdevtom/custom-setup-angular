import '../polyfill'
import { platformBrowser } from '@angular/platform-browser'
import { enableProdMode } from '@angular/core'
import { AppModuleNgFactory } from "./app.module.ngfactory";
import { AppModule } from "./app.module";

enableProdMode()

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
