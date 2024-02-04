import { AbstractEntity } from 'src/common/entity-base-adapter/abstract.entity';
import { Entity, Column } from 'typeorm';
import { AcademicsUserInterface } from '../interface/entity/user.entity.interface';

@Entity()
export class AcademicsUser
    extends AbstractEntity
    implements AcademicsUserInterface
{
    @Column({ length: 100, name: 'user_id' })
    userId: string;

    @Column({ length: 100, name: 'f_name' })
    fName: string;

    @Column({ length: 100, name: 'contact_num' })
    contactNum: string;

    @Column({ length: 100, name: 'user_role' })
    userRole: string;
}
