// app-ag-grid-container.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-container',
  templateUrl: './app-ag-grid-container.component.html',
  styleUrls: ['./app-ag-grid-container.component.css']
})
export class AppAgGridContainerComponent {
  columnDefs: any[] = [];  // Define your column definitions
  rowData: any[] = [];  // Define your row data
  viewListrowData: any[] = [];  // Define your viewList row data

  dialogOpen = false;
  drawerOpen = false;

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  logTest() {
    console.log('log Test...!');
    this.dialogOpen = !this.dialogOpen; // Toggle dialog state
  }

  handleFormSubmit(name: string, isPrivate: boolean, columnState: any) {
    // Do something with name and isPrivate
    console.log('from root', name, isPrivate, columnState);
  }
  

  handleButtonClick(cellValue: any) {
    // Do something with the cell value
    console.log('Button in cell clicked in root demo component:', cellValue);
  }
}
