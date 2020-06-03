import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class ResultserviceService {
  data: any;
  data2: any;
  data3: any;
  constructor(private http: HttpClient) {}

  get_course() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise((resolve) => {
      this.http
        .get("http://localhost:3002/api/get_course")
        .subscribe((data) => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  get_selectedmarks(mark_id) {
    console.log("Here " + mark_id);
    return new Promise((resolve) => {
      this.http
        .get("http://localhost:3002/api/get_selectedmarks/" + mark_id)
        .subscribe((data) => {
          this.data3 = data;
          resolve(this.data3);
        });
    });
  }

  get_student(CourseID) {
    return new Promise((resolve) => {
      this.http
        .get("http://localhost:3002/api/get_student/" + CourseID)
        .subscribe((data) => {
          this.data2 = data;
          resolve(this.data2);
        });
    });
  }

  update_mark(mark) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:3002/api/update_mark/" + mark._id, mark, {
        headers: headers,
      })
      .toPromise();
  }
}
