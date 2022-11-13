import { Injectable } from '@nestjs/common';
import { request } from 'undici';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getReciept(id: string): Promise<RecieptData> {
    const response : RecieptData = await request(`http://localhost:8000/reciept?id=${id}`).then(res => res.body.json());
    return response;
  }
}

interface RecieptData {
  items: Item[];
}

interface Item {
  upc: number;
  name: string;
  price: number;
  quantity: number;
}