import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  private readonly balanceLoan: number = 0;

  constructor(name: string, numberAccount: number) {
    super(name, numberAccount);
  }

  getLoan = (balance: number): number => {
    if (this.deposit(balance)) return this.balanceLoan + balance;
    throw new Error('Empréstimo negado');
  };
}
