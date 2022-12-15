import {
	Column,
	Entity,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity()

export class Report {
	@PrimaryGeneratedColumn()
	reports_id: number;

	@Column({ type: "varchar"})
	problem: string;

	@Column({ type: "varchar", length: 350 })
	description: string;

	@Column({ type: "varchar", length: 380})
	img_url: string;

	@Column({ type: "varchar", length: 20 })
	latitude: string;

	@Column({ type: "varchar", length: 20 })
	longitude: string;
}
