import { ApiProperty } from '@nestjs/swagger';

export class DaoJob {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;

    @ApiProperty()
    salary_range: string;
    @ApiProperty()
    how_to_apply: string;
    @ApiProperty()
    link_apply: string;
    @ApiProperty({ type: () => [String] })
    responsibilities: [string];
    @ApiProperty()
    role_mission: string;
    @ApiProperty({ type: () => [String] })
    hard_skills_requirements: [string];
    @ApiProperty({ type: () => [String] })
    soft_skills_requirements: [string];
    @ApiProperty({ type: () => [String] })
    culture_requirements: [string];
    @ApiProperty({ type: () => [String] })
    experience_requirements: [string];
    @ApiProperty({ type: () => [String] })
    education_requirements: [string];
    @ApiProperty({ type: () => [String] })
    work_conditions: [string];
    @ApiProperty({ type: () => [String] })
    benefits: [string];
    @ApiProperty({ type: () => [String] })
    red_alerts: [string];
    @ApiProperty({ type: () => [String] })
    additional_role_benefits: [string];
    @ApiProperty()
    location: string;
    @ApiProperty()
    timezone: string;
    @ApiProperty()
    payment: string;
    @ApiProperty()
    time_length: string; // may be enum

    @ApiProperty()
    dao_id: string; // name may change

    @ApiProperty()
    created_at: Date;
}
