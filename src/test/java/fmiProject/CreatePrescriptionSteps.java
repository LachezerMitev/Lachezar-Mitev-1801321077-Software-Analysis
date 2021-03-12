package fmiProject;

import static org.junit.Assert.assertEquals;

import java.util.Date;
import java.util.List;

import classes.User;
import classes.Vehicle;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import screenmodels.CreateScreenModel;

public class CreatePrescriptionSteps {
	
	public CreateScreenModel model = new CreateScreenModel();
	
	@Given("^User navigated to the order entry panel$")
	public void user_navigated_to_order_panel() throws Throwable {
		model.navigateToMe();
	}

	@When("^User added his credentials \"([^\"]*)\"$")
	public void потребителят_въведе_име_на_лекуващ_лекар(User user) throws Throwable {
		model.setUser(user);
	}

	@When("^User added vehicle \"([^\"]*)\"$")
	public void user_added_vehicle(List<Vehicle> vehicleList) throws Throwable {
		model.setVehicleList(vehicleList);
	}

	@When("^User entered current date \"([^\"]*)\"$")
	public void user_entered_date(Date arg1) throws Throwable {
		model.setDate(arg1);
	}

	@When("^User entered price\"([^\"]*)\"$")
	public void user_enters_price(float price) throws Throwable {
		model.setPrice(price);
	}

	@When("^User entered Order Number\"([^\"]*)\"$")
	public void user_enters_order_number(int orderNumber) throws Throwable {
		model.setOrderNumber(orderNumber);
	}
	
	@When("^User presses the create order button")
	public void user_presses_create_order_button() throws Throwable {
		model.clickCreateButton();
	}

	@Then("^Messege Pop-up \"([^\"]*)\"$")
	public void messege_pop_up(String arg1) throws Throwable {
		final String resultMessage = model.getCreateMessage();
		assertEquals(arg1, resultMessage);
	}



}