import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const newPeopleAccount = new PeopleAccount(1, 'João', 10);
console.log(newPeopleAccount.newDeposit(10));
console.log(newPeopleAccount.deposit(10));
console.log(newPeopleAccount.withdraw(20));

newPeopleAccount.getBalance();

const newCompanyAccount = new CompanyAccount('Company', 114);
console.log(newCompanyAccount.getLoan(500));
