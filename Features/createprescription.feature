Feature: Create Order

Scenario: Create Order
    Given User navigated to the order entry panel
    When User added his credentials
    And User added vehicle "Toyota"
    And User entered current date "2020-03-08"
    And User entered price "10000"
    And User entered Order Number "1583771"
    And User presses the create order button
    Then Messege Pop-up "Order accepted"
    
Scenario: Create Order without user
    Given User navigated to the order entry panel
    When User added vehicle "Toyota"
    And User entered current date "2020-03-08"
    And User entered price "10000"
    And User entered Order Number\"135723"
    And User presses the create order button
    Then Messege Pop-up "Missing user"
    
Scenario: Create Order without vehicle
    Given User navigated to the order entry panel
    When User added his credentials
    And User entered current date "2020-03-08"
    And User entered price "10000"
    And User entered Order Number "47895419"
    And User presses the create order button
    Then Messege Pop-up "Missing vehicle"
    
Scenario: Create Order without date
    Given User navigated to the order entry panel
    When User added his credentials
    And User added vehicle "Toyota"
    And User entered price "10000"
    And User entered Order Number "1583771"
    And User presses the create order button
    Then Messege Pop-up "Missing date"

Scenario: Create Order without order number
    Given User navigated to the order entry panel
    When User added his credentials
    And User added vehicle "Toyota"
    And User entered current date "2020-03-08"
    And User entered price "10000"
    And User presses the create order button
    Then Messege Pop-up "Missing order numuber"
    
