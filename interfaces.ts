interface User {
  readonly dbid: number;
  email: string;
  userID: number;
  googleId?: string; // optional

  //  startTrial: ()=>string

  startTrial(): string;

  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
    role: "admin"|"ta"|"learner"
}

const Prabal: Admin = {
  dbid: 22,
  email: "abc",
  userID: 45,
  githubToken: "xyz",
  role: "learner",
  startTrial: () => {
    return "trail started";
  },

  getCoupon: (name: "amit", off: 10) => {
    return 5;
  },
};

export{}