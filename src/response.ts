import * as http from 'http';

import { IDynamicObject } from './interfaces';
const ServerResponse = http.ServerResponse;

export class SuGoResponse extends ServerResponse implements IDynamicObject {
  public body: IDynamicObject = {};
  public id: string = '';
  public method: string = '';
  public url: string = '';

  public end(data?: any) {
    this.body = data;
    return super.end(data);
  }

  public json(data: any) {
    this.setHeader('Content-Type', 'application/json');
    this.end(JSON.stringify(data));
    return this;
  }

  public status(code: number) {
    this.statusCode = code;
    return this;
  }

  public write(data: any) {
    this.body = data;
    return super.write(data);
  }
}

export default SuGoResponse;
