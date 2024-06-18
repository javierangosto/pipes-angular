import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: "Angular pipes",
        icon: "pi pi-desktop",
        items: [
          {
            label: "Texts and dates",
            icon: "pi pi-align-left",
            routerLink: "/"
          },
          {
            label: "Number",
            icon: "pi pi-dollar",
            routerLink: "numbers"
          },
          {
            label: "Uncommons",
            icon: "pi pi-globe",
            routerLink: "uncommon"
          },
        ]
      },
      {
        label: "Other pipes",
        icon: "pi pi-cog",
        items: [
          {
            label: "Custom",
            icon: "pi pi-cog",
            routerLink: "custom"
          }
        ]
      }
    ]
  }
}
