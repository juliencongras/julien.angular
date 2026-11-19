import { Component, input, output } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-tp-user-active',
    templateUrl: './tp-user-active.html',
})
export class TpUserActive {
    readonly activeUser = input.required<TpUserModel>();
}
