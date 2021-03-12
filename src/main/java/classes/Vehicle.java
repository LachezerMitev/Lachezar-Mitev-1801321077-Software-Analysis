package classes;
import java.util.*;

public class Vehicle {

    private String vehicleModel;
    private String vehicleMake;
    private Date dateOfProduction;
    
    public Vehicle() {
    }

    public String getVehicleModel() {
        return this.vehicleModel;
    }
    public void setVehicleModel(String vehicleModel) {
    	this.vehicleModel = vehicleModel;
    }
    
    public String getVehicleMake() {
        return this.vehicleMake;
    }
    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    public Date getDateOfProduction() {
        return this.dateOfProduction;
    }
    public void setDateOfProduction(Date dateOfProduction) {
        this.dateOfProduction = dateOfProduction;
    }

}