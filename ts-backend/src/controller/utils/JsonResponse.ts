export class JsonResponse {
  public readonly success: boolean;
  constructor (public readonly data: any, customStatus?: boolean) {
    this.success = customStatus === undefined ? data !== undefined && data !== null : customStatus;
  }
}
