package screenmodels;

import java.util.Date;
import java.util.List;

import classes.User;
import classes.Vehicle;
import services.CreateService;

public class CreateScreenModel {
    private String message;
    
    private int orderNumber;
    private float price;
    private Date date;
    private List<Vehicle> vehicleList;
    private User user;
    
    public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(int orderNumber) {
		this.orderNumber = orderNumber;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<Vehicle> getVehicleList() {
		return vehicleList;
	}

	public void setVehicleList(List<Vehicle> vehicleList) {
		this.vehicleList = vehicleList;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void navigateToMe()
	{
		System.out.println("Order Creation window is now open");
	}

    public void clickCreateButton() 
	{
		message = CreateService.create(orderNumber, price, date, vehicleList, user);
	}

	public String getCreateMessage() {
		return message;
	}

}
