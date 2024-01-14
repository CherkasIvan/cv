import { IAuth } from '../../model/auth.interface';

export interface AuthState {
    user: IAuth | null;
    isFetching: boolean;
}
