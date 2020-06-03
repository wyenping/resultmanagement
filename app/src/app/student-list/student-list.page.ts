import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { ResultserviceService } from "../resultservice.service";
import {
  ModalController,
  NavController,
  AngularDelegate,
} from "@ionic/angular";
import { UpdateResultPage } from "../update-result/update-result.page";
@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.page.html",
  styleUrls: ["./student-list.page.scss"],
})
export class StudentListPage implements OnInit {
  @Input() public SelectedCourse: any;
  @Input() public Student: any;
  marks: any;
  total_mark: any;

  constructor(
    public router: Router,
    public modalController: ModalController,
    public result_service: ResultserviceService
  ) {
    this.marks = [];
    this.total_mark = [];
  }

  ngOnInit() {
    console.log(this.SelectedCourse);
    console.log(this.Student);
    console.log(this.Student[0].MarkId.Assignment);
    this.calculate_total();
  }

  calculate_total() {
    var i;
    var total;
    for (i = 0; i < this.Student.length; i++) {
      total =
        this.Student[i].MarkId.Assignment +
        this.Student[i].MarkId.Quiz +
        this.Student[i].MarkId.MidTerm +
        this.Student[i].MarkId.Presentation +
        this.Student[i].MarkId.Project +
        this.Student[i].MarkId.Final;
      // this.Student[i].total = total;
      this.total_mark[i] = total;

      console.log(i + " :" + total);
    }
  }
  update_mark(id) {
    this.modalController.dismiss();

    //let modal = await this.modalController.create({ component: AddResultPage});
    //modal.onDidDismiss().then((mark) =>
    //{
    //  console.log('Student List', mark.data)
    //  if(mark) {
    //  this.result_service.update_mark(mark);
    // }
    // });
    //    modal.present();
    //  }
    console.log(id);
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
      },
    };
    this.router.navigate(["/update-result"], navigationExtras);
  }
}
