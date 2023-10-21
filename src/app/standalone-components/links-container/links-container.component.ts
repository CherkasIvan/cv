import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-links-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-container.component.html',
  styleUrls: ['./links-container.component.scss']
})
export class LinksContainerComponent {
  @Input() public socialMediaLinks: any[] = [];
  @Input() public modeTheme!: boolean;
  @Input() public pwaView!: boolean;
}
