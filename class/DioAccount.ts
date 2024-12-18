export abstract class DioAccount {
  private name: string;
  private readonly numberAccount: number;
  private balance: number = 0;
  private status = false;

  constructor(name: string, numberAccount: number) {
    this.name = name;
    this.numberAccount = numberAccount;
    this.status = true;
  }

  setName = (name: string): void => {
    this.name = name;
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (balance: number): number => {
    if (this.validateStatus()) {
      this.balance += balance;
      return this.balance;
    }

    throw new Error('usuário não validado');
  };

  withdraw = (balance: number): number => {
    if (this.validateStatus() && this.balance >= balance) {
      this.balance -= balance;
      return this.balance;
    }
    throw new Error('usuário não validado ou saldo insuficiente');
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Usuário não validado');
  };

  deleteAccount = () => {
    this.status = false;
  };
}
