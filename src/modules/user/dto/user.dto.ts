import { IsNotEmpty } from 'class-validator';
import { RoleType } from '../../role/enums/roletype.enum';
import { UserDetails } from '../entities/user.details.entity';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  roles: RoleType[];

  @IsNotEmpty()
  dtails: UserDetails;
  details: any;
}
