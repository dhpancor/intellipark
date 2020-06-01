import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Client } from '../entity/Client';
import { DummyClientsSeed } from './seeds/dummyclients.seed';
import { Vehicle } from '../entity/Vehicle';

export class DummyClients1590931131580 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    const clients = await getRepository(Client).save(DummyClientsSeed);
    for (const client of clients) {
      for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
        await getRepository(Vehicle).save({
          plate: this.generateRandomPlate(),
          client: client,
          createdAt: `${new Date()}`,
          updatedAt: `${new Date()}`
        });
      }
    }
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    // do nothing
  }

  private generateRandomPlate (): string {
    const letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3);
    const numbers = Math.floor(Math.random() * (9999 - 1000) + 1000);
    return `${numbers}${letters.toUpperCase()}`;
  }
}
