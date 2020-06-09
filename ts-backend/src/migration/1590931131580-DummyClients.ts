import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Client } from '../entity/Client';
import { DummyClientsSeed } from './seeds/dummyclients.seed';
import { Vehicle } from '../entity/Vehicle';
import { AccessLog } from '../entity/AccessLog';

export class DummyClients1590931131580 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    const clients = await getRepository(Client).save(DummyClientsSeed);
    for (const client of clients) {
      // Generate a random number of vehicles per client. From zero to 3.
      for (let i = 0; i < Math.floor(Math.random() * (4)); i++) {
        const vehicle = await getRepository(Vehicle).save({
          plate: this.generateRandomPlate(),
          client: client,
          createdAt: `${new Date()}`,
          updatedAt: `${new Date()}`
        });

        let initialDate = new Date(2019, 8, 1, 9, 0, 0);

        // Generate random access logs. From zero to 39.
        for (let j = 0; j < Math.floor(Math.random() * (40)); j++) {
          const randomDate = this.getRandomDate(initialDate, new Date(2020, 6, 9, 18), 9, 20);
          if (randomDate.getDate() === initialDate.getDate()) {
            continue;
          }
          initialDate = randomDate;

          await getRepository(AccessLog).save({
            vehicle: vehicle,
            plate: vehicle.plate,
            createdAt: String(randomDate),
            leaveTime: String(
              this.getRandomDate(randomDate,
                randomDate,
                randomDate.getHours(),
                randomDate.getHours() + Math.floor(Math.random() * (2))))
          });
        }
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

  private getRandomDate (start: Date, end: Date, startHour, endHour) {
    // @ts-ignore
    const date = new Date(+start + Math.random() * (end - start));
    const hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    date.setMinutes(Math.floor(Math.random() * (55 - 5) + 5) + start.getMinutes());
    return date;
  }
}
