import { Component } from '@angular/core';
import { contacts } from 'src/assets/constants/contacts';

import { socialMediaLinks } from '../../../../../assets/constants/social-media-linke';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public socialLinks = socialMediaLinks;
  public myContacts = contacts;
}
