import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { CurrencyEntity } from './entity/currency.entity';
import { ICurrency } from './interfaces/currency.interface';
import { CreateCurrencyDto } from './dto/create-currency.dto';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>,
  ) {}

  async findAll(): Promise<ICurrency[]> {
    return await this.currencyRepository.find();
  }

  async findOne(code: string): Promise<ICurrency> {
    const findOptions: FindOneOptions = { where: { code } };
    const currency = await this.currencyRepository.findOne(findOptions);
    if (!currency) {
      throw new NotFoundException(`Currency with code ${code} not found`);
    }
    return currency;
  }

  async create(createCurrencyDto: CreateCurrencyDto): Promise<ICurrency> {
    const currency = new CurrencyEntity();
    Object.assign(currency, createCurrencyDto);
    return await this.currencyRepository.save(currency);
  }

  async update(
    code: string,
    updateData: Partial<CreateCurrencyDto>,
  ): Promise<ICurrency> {
    await this.findOne(code);
    await this.currencyRepository.update({ code }, updateData);
    return await this.findOne(code);
  }

  async remove(code: string): Promise<void> {
    const currency = await this.findOne(code);
    await this.currencyRepository.delete(currency.code);
  }
}
