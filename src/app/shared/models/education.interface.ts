import { IEducationPlaceName } from './education-place-name.interface';
import { IProfilePhoto } from './profile-photo.interface';

export interface IEducation {
    educationTitle: string;
    educationLogo?: IProfilePhoto[];
    educationPlaceName: IEducationPlaceName[];
}
