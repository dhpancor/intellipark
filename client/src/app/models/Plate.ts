export class Plate {
  constructor(
    public id: number,
    public plate: string,
    public description: string,
    public accessLog: number,
    public accessType: string,
    public isActive: boolean
  ) {
  }
}
