import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, CommonModule]
})
export class UsersModule {

}