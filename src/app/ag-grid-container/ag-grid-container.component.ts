import { Component, Output, EventEmitter } from '@angular/core';
import { rowData } from './demoData/rowData';
import { columnDefs } from './demoData/columnDefs'

interface HandleFormSubmitEvent {
  name: string;
  isPrivate: boolean;
  columnState: any;
}


@Component({
  selector: 'app-ag-grid-container',
  templateUrl: './ag-grid-container.component.html',
  styleUrls: ['./ag-grid-container.component.css']
})


export class AgGridContainerComponent {
   name: string = '';  // Initialize to default value
  isPrivate: boolean = false;  // Initialize to default value
  columnState: any;  // Initialize to default value if needed

  columnDefs = columnDefs;  // use imported columnDefs
  rowData = rowData;  // use imported rowData
 
  @Output() handleFormSubmitEvent = new EventEmitter<any>();

  

  

  constructor() {
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  

  viewListrowData: any[
    
  ] = [
    {
      businessObjectKey: "Univerus.Unity.Crm.Domain.Models.GridView|f8defdca-2ffe-4064-a208-730ab9c46357",
      gridViewId: "f8defdca-2ffe-4064-a208-730ab9c46357",
      name: "Test Page View",
      clusterId: 4,
      gridViewVisibilityTypeId: 2,
      isDefault: false,
      tenantId: "f86a9b7c-bab0-4281-89a2-52b4caf89fab",
      userId: "26c5be02-219d-4a8b-896a-4da10bde0839",
      gridId: "678410c2-430b-454b-bbef-1a6236a686ec",
      domain: "Page",
      apiCatalogId: "5ee7b3ed-8aba-4c40-8b61-fabdcf9a440c",
      serializeFields: null,
      gridViewGridViewVisibilityType: null,
      gridViewTenant: null,
      gridViewUser: null,
      gridViewGrid: null,
      gridViewApiCatalog: null,
      gridViewGridViewGridConfiguration: [],
      udpTags: []
    },
    {
      businessObjectKey: "Univerus.Unity.Crm.Domain.Models.GridView|ef966d75-07e8-4664-ae08-ec30adf756f7",
      gridViewId: "ef966d75-07e8-4664-ae08-ec30adf756f7",
      name: "Test view",
      clusterId: 5,
      gridViewVisibilityTypeId: 1,
      isDefault: false,
      tenantId: "f86a9b7c-bab0-4281-89a2-52b4caf89fab",
      userId: "8fe3b5ce-6a94-4ff4-b35c-be2596ea1380",
      gridId: "678410c2-430b-454b-bbef-1a6236a686ec",
      domain: "Page",
      apiCatalogId: "5ee7b3ed-8aba-4c40-8b61-fabdcf9a440c",
      serializeFields: null,
      gridViewGridViewVisibilityType: null,
      gridViewTenant: null,
      gridViewUser: null,
      gridViewGrid: null,
      gridViewApiCatalog: null,
      gridViewGridViewGridConfiguration: [],
      udpTags: []
    }
  ];  // Define your viewList row data

  
  dialogOpen = false;
  drawerOpen = false;

  ngOnInit() {
    console.log("Column Definitions: ", this.columnDefs);
    console.log("Row Data: ", this.rowData);
  }
  

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  logTest() {
    console.log('log Test...!');
    this.dialogOpen = !this.dialogOpen; // Toggle dialog state
  }

//   handleFormSubmit(name: string, isPrivate: boolean, columnState: any) {
//     // Do something with name and isPrivate
//     console.log('Received event:', event);
//     console.log('from root', name, isPrivate, columnState);

//     // Emit the event
//     this.handleFormSubmitEvent.emit({name, isPrivate, columnState});
// }


handleFormSubmit(event: any) {
  // const typedEvent = event as HandleFormSubmitEvent;
  console.log('Received event:', event);

  // Now you can use typedEvent.name, typedEvent.isPrivate, typedEvent.columnState
  // this.handleFormSubmitEvent.emit(typedEvent);
}
  

  handleButtonClick(cellValue: any) {
    // Do something with the cell value
    console.log('Button in cell clicked in root demo component:', cellValue);
  }


  testButton() {
    console.log("Test button clicked!");
  }
  


}

