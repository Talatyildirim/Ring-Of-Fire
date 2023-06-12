import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allProfilePictures = ['user.png','user-women.png','animal.png','avatar.png','kitten.png','lion.png'];

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}


  ngOnInit(): void {
    
  }

}
