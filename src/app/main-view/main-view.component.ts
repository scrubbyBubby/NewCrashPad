import { Component, OnInit } from '@angular/core';

import { LinkService } from '../link.service';
import { ContainerService } from '../container.service';
import { NoteService } from '../note.service';
import { MultilinkService } from '../multilink.service';
import { ChecklistService } from '../checklist.service';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.sass']
})
export class MainViewComponent implements OnInit {

  public elementTypes: string;

  constructor(
    public elementService: ElementService,
    public linkService: LinkService,
    public containerService: ContainerService,
    public noteService: NoteService,
    public multilinkService: MultilinkService,
    public checklistService: ChecklistService,
  ) { }

  ngOnInit(): void {
    console.log(`Initializing the main-view`);
    this.linkService.registerWithElementService();
    this.containerService.registerWithElementService();
    this.noteService.registerWithElementService();
    this.multilinkService.registerWithElementService();
    this.checklistService.registerWithElementService();
    console.log(`Loading Templates...`);
    this.elementService.loadTemplates();
    console.log(`Loading Themes...`);
    this.elementService.loadThemes();
    console.log(`Loading Elements...`);
    this.elementService.loadElements();
  }

}
