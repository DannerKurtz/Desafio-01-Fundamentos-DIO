import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
  constructor(doc_number: number, name: string, numberAccount: number) {
    super(name, numberAccount);
  }

  newDeposit = (balance: number): number => {
    const deposit = this.deposit(balance + 10);
    if (deposit) return deposit;
    throw new Error('Erro ao depositar valor');
  };
}
