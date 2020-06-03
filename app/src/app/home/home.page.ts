import { Component } from "@angular/core";
import { ResultserviceService } from "../resultservice.service";
import { ModalController } from "@ionic/angular";
import { StudentListPage } from "../student-list/student-list.page";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  Courses: any[];
  Code: String;
  Section: String;
  Student: any;
  SelectedCourseID: any;
  SelectedCourse: any;

  constructor(
    private result_Service: ResultserviceService,
    private modalController: ModalController
  ) {
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    this.result_Service.get_course().then((data) => {
      console.log(data["course_list"]);

      this.Courses = data["course_list"];
      // console.log(this.Courses['course_list']['Code']);
    });
  }
  async openModal() {
   const modal = await this.modalController.create({
     component: StudentListPage,
      cssClass: "mymodal",
     componentProps: {
       SelectedCourse: this.SelectedCourse,
        Student: this.Student,
      },
    });
    return await modal.present();
  }
  //get_course_id(id) {
  //this.result_Service.get_course_id(id).subscribe(res=> {

  //})
  //}
  get_student() {
    console.log(this.SelectedCourseID);
    this.result_Service.get_student(this.SelectedCourseID).then((data) => {
      console.log(data);
      this.SelectedCourse = data;
      console.log(data["Student"]);
      this.Student = data["Student"];
      
    
      this.openModal();
      if (data["Student"].length == 0) {
        console.log("No student");
      }
    });
    // .subscribe(
    //   res => {
    //     this.Courses = res["Course"][0]
    //     this.Student = res["Student"]
    //     this.openModal;
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
  }
}
