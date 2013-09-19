package fr.furgerot.demo.jaxrs;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/account")
public class AccountService {

	private List<Account> l = new DataGenerator().generateAccounts(5);
	
	@GET
	@Path("/list")
	@Produces("application/json")
	public List<Account> getAccounts() {
		System.out.println("Call to account.list");
		return l;
	}
}
