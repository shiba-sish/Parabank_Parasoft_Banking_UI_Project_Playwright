Feature: Navigation and Administration Page Test

@E2ETest @NavigationAdmin
  Scenario: Navigate through all main menu links and validate pages
    Given User is on the Parabank home page
    
    When User navigates to Solutions page
    Then Solutions page should be displayed
    
    When User navigates to About Us page
    Then About Us page should be displayed
    
    When User navigates to Services page
    Then Services page should be displayed
    
    When User navigates to Products page
    Then Products page should be displayed
    
    When User navigates to Locations page
    Then Locations page should be displayed
    
    When User navigates to Admin Page via navigation
    Then Admin Page should be displayed

  Scenario: Fill admin form and verify success message
    Given User navigates to Admin Page
    
    When User fills the admin form with following details
      | First Name  | John          |
      | Last Name   | Doe           |
      | Address     | 123 Main St   |
      | City        | New York      |
      | State       | NY            |
      | Zip Code    | 10001         |
      | Phone Number| 5551234567    |
      | Email       | john@test.com |
    
    When User submits the admin form
    
    Then Success message should be displayed with text "Settings saved successfully."
