package fr.furgerot.demo.jaxrs;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class DataGenerator {
	
	private final static String[] libelles = { "Compte courant",  "Compte chèque", "Livret A", "PEL", "CEL", "Livret jeune"};
	private final Random rand = new Random();

	public List<Account> generateAccounts(int number){
		List<Account> l = new ArrayList<Account>();
		for(int i=0; i<number; i++){
			l.add(generateAccount());
		}
		return l;
	}
	
	public Account generateAccount(){
		
		Account a = new Account();
		a.libelle = libelles[rand.nextInt(libelles.length)];
		a.solde = new BigDecimal(String.format("%05d.%02d", rand.nextInt(5000), rand.nextInt(100)));
		a.iban = generateIban();
				
		return a;
	}
	
	private String generateIban(){
		// Sample FR iban : "FR12 3456 7890 1234 5678 9012 345"
		
		return String.format(
			"FR%02d %04d %04d %04d %04d %04d %03d",
			rand.nextInt(100),
			rand.nextInt(10000),
			rand.nextInt(10000),
			rand.nextInt(10000),
			rand.nextInt(10000),
			rand.nextInt(10000),
			rand.nextInt(1000)
		);
	}
}
