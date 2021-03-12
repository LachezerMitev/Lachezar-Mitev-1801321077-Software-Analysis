package classes;
import java.util.*;

public class RepairOrder {

    private int orderNumber;
	private float price;
    private Date date;
    private List<Vehicle> vehicleList;
    private User customer;
    
	public RepairOrder(int orderNumber, float price, Date date, List<Vehicle> vehicleList, User user) {
    	this.orderNumber = orderNumber;
    	this.price = price;
    	this.date = date;
    	this.vehicleList = vehicleList;
    	this.customer = user;
    }

    public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
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
}