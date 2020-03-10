import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'Test Server',
    content: 'Test Content'
  }];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!'; 
    /* we couldn't use the element as an object because objects are the reference types, so we passed the object via input, therefore
    both properties in the server element component, this one here and the object in the array of server elements here in the app 
    component, they both point to the same place in memory and therefore if we change the name there, it will update in the child component, 
    in the server element component but it will not trigger ngOnChanges because technically, the property we're binding to, we use here with 
    @input, that didn't change the value of that didn't change it, it's still the same object in memory. 
    */
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
