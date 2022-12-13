import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportsService {

  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>
  ){}

  async create(createReportDto: CreateReportDto) {
    const report = this.reportRepository.create(createReportDto as any);
    return await this.reportRepository.save(report);
  }

  findAll() {
    return this.reportRepository.find();
  }

  findOne(reports_id: number) {
    return this.reportRepository.findOne(
      { where: {reports_id} }
    );
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return this.reportRepository.update(id, updateReportDto)
  }

  remove(id: number) {
    return this.reportRepository.delete(id);
  }
}
