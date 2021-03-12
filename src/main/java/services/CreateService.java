package services;

import java.util.Date;
import java.util.List;

import classes.RepairOrder;
import classes.User;
import classes.Vehicle;

public class CreateService {
	public static String create(int orderNumber, float price, Date date, List<Vehicle> vehicleList, User user) {
	
		if (orderNumber == 0 && price == 0 && date == null && vehicleList == null) {
			return "Plese enter some data";
		}
		
		if (vehicleList == null) {
			return "Please enter vehicles";
		}
		
		if (orderNumber == 0) {
			return "Please enter am order number";
		}
		
		if (date == null) {
			return "Please enter a date";
		}
		
		if (price == 0) {
			return "Price needs to be greater than 0";
		}

		if (user == null) {
			return "Please enter a user";
		}

		RepairOrder p = new RepairOrder(orderNumber, price, date, vehicleList, user);
		
		return "Order has been accepted";
	}
}
