enum StudentStatus {
  Active = 1,
  Inactive, // 2
  Paused // 3
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus); // 2

enum StatusCodes { 
  OK = 200,
  BadRequest = 400,
  Unauthorized, // 401
  PaymentRequired, // 402
  Forbidden, // 403
  NotFound, // 404 
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes['OK'];
const stringBadRequest = StatusCodes[400];

console.log(ok); // 200
console.log(indiceOk); // 200
console.log(stringBadRequest); // BadRequest
