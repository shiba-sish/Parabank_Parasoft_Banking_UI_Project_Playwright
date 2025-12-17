Feature: ParaBank Home Page Functionality

  Scenario: User can navigate to home page
    Given User navigates to the login page
    Then Current page URL should contain "index"
