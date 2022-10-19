import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userList: Array<IUser> = [];

  createUser(user: IUser) {
    this.userList.push(user)
  }

  fetchUser() {
    return this.userList;
  }

  deleteUser(index: number) {
    this.userList = this.userList.filter((val, index_) => index != index_);
  }
}
