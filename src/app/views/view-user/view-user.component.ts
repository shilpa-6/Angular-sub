import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  userList: Array<IUser> = []
  userLmtList: Array<Partial<IUser>> = []

  ngOnInit(): void {
    this.userList = []
    this.userLmtList = []
    this.userList = this.userService.fetchUser();
    this.userList.map((item) => {
      this.userLmtList.push({
        Name: item.Name,
        Email: item.Email,
        id: item.id
      })
    })
  }

  showMore(index: number) {
    this.userList.map((item, index_) => {
      if (item.id == index) {
        this.userLmtList[index_] = {
          Phone: item.Phone,
          Address: item.Address,
          Name: item.Name,
          Email: item.Email,
          id: item.id
        }
      }

    })
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index)
    this.ngOnInit()
  }

  addUsers(){
    this.router.navigate(['/create-user'])
  }
}
