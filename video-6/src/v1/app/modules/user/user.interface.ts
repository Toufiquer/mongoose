//   create interface
export interface IUser {
  id: number;
  name: {
    firstName: string;
    middleName?: string; // optional
    lastName: string;
  };
  roll: number;
  email?: string; // optional
  contactNo: string;
  gender: "Male" | "Female";
  school: [string, number, string];
  dateOfBirth: string;
}
