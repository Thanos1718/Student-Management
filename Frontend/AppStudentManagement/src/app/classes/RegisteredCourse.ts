export class RegisteredCourse{
    courseTitle!:string;
    desc!: string;
    endDate!:Date;
    price!:Number;
    startDate!:Date;
    registrationTime!:Date;
    status!:string

    toString(): string {
        return `Course {
          courseName='${this.courseTitle}',
          startDate='${this.startDate}',
          endDate='${this.endDate}',
          description='${this.desc}',
          price=${this.price}
        }`;
      }
}