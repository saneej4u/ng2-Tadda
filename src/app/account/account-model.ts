export class AccountModel {

    constructor(
        public email: string,
        public password: string,
        public confirmPassword: string,
        public company: string,
        public firstName: string,
        public lastName: string,
        public subId: number) { }

}
