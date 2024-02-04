import { AbstractEntity } from 'src/common/entity-base-adapter/abstract.entity';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToOne,
} from 'typeorm';
import { AcademicsClassInterface } from '../interfaces/entity/class.entity.interface';
import { AcademicsUser } from '../../user-module/entity/user.entity';
import { Transform } from 'class-transformer';

@Entity()
export class AcademicsClass
    extends AbstractEntity
    implements AcademicsClassInterface
{
    @Column({ length: 100, name: 'class_name' })
    className: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, name: 'class_fee' })
    classFee: number;

    @OneToOne(() => AcademicsUser, { cascade: true })
    @JoinColumn({ name: 'class_in_charge_id' })
    classInCharge: AcademicsUser;

    @ManyToMany(() => AcademicsUser)
    @JoinTable({
        joinColumn: { name: 'academics_class_id' },
        inverseJoinColumn: { name: 'academics_student_id' },
    })
    students: AcademicsUser[];
}
