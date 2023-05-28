import { IUser } from "./user.interface";
import { User } from "./user.model";

// create async function for create user
export const createUser = async (data: IUser): Promise<IUser> => {
  //   create instance
  const user = new User(data);
  await user.save();
  return user;
};

// { 
//     id: parseInt((Math.random() * 1000).toFixed(0)),
//     name: {
//       firstName: "Toufiquer",
//       middleName: " ",
//       lastName: "Rahman",
//     },
//     roll: 23,
//     email: "example@gmail.com",
//     contactNo: "017 772 3234",
//     gender: "Male",
//     school: ["Physic", 4, "University"],
//     dateOfBirth: "31-12-1999",
//   }
