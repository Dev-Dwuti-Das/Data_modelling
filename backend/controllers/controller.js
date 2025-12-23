
import student from "../models/student.js";
import subjects from "../models/subjects.js";
export async function datafill(req, res) {
  const data = [
    {
      name: "Dev Das",
      rollnumber: 101,
    },
    {
      name: "Rahul Sharma",
      rollnumber: 102,
    },
    {
      name: "Asha Patel",
      rollnumber: 103,
    },
  ];

  const user = await student.insertMany(data);
  return res.json({msg:"done datafilled"})
}


export async function datafill_SUB(req, res) {
  const data = [
  {
    sub_name: "Data Structures",
    sub_code: 201,
    sub_credit: 4
  },
  {
    sub_name: "Operating Systems",
    sub_code: 202,
    sub_credit: 3
  },
  {
    sub_name: "DBMS",
    sub_code: 203,
    sub_credit: 4
  },
  {
    sub_name: "Computer Networks",
    sub_code: 204,
    sub_credit: 3
  }
];

  const user = await subjects.insertMany(data);
  return res.json({msg:"done datafilled"})
}


export async function getinfo(req, res) {

    const user = await student.findOne({rollnumber:191}).populate("subjects");

    return res.json(user);
}