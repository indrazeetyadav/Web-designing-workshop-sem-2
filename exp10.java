// Abstract Class (Abstraction)
abstract class BankAccount {
    private int accountNumber;     //Encapsulation
    private String accountHolder;
    protected double balance;

    public BankAccount(int accountNumber, String accountHolder, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Getters (Encaps)
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    // Abstract method
    public abstract void calculateInterest();

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: ₹" + amount);
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: ₹" + amount);
        } else {
            System.out.println("Insufficient Balance!");
        }
    }

    public void displayDetails() {
        System.out.println("Account No: " + accountNumber);
        System.out.println("Holder Name: " + accountHolder);
        System.out.println("Balance: ₹" + balance);
    }
}

// Inheritance
class SavingsAccount extends BankAccount {

    public SavingsAccount(int accNo, String holder, double balance) {
        super(accNo, holder, balance);
    }

    @Override
    public void calculateInterest() {
        double interest = balance * 0.04; // 4% interest
        System.out.println("Interest Earned: ₹" + interest);
    }
}

class CurrentAccount extends BankAccount {

    public CurrentAccount(int accNo, String holder, double balance) {
        super(accNo, holder, balance);
    }

    @Override
    public void calculateInterest() {
        System.out.println("Current Account: No Interest");
    }
}

// Main Class
public class BankManagementSystem {
    public static void main(String[] args) {

        SavingsAccount s1 = new SavingsAccount(101, "Ajay", 10000);
        CurrentAccount c1 = new CurrentAccount(201, "Rahul", 15000);

        System.out.println("=== Savings Account ===");
        s1.displayDetails();
        s1.deposit(2000);
        s1.withdraw(3000);
        s1.calculateInterest();

        System.out.println("\n=== Current Account ===");
        c1.displayDetails();
        c1.deposit(5000);
        c1.withdraw(4000);
        c1.calculateInterest();
    }
}