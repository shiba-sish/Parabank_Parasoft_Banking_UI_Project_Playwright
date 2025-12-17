Feature: ParaBank Login Functionality

  Background:
    Given User navigates to the login page

  Scenario: User can see login page
    Then Current page URL should contain "index"

  Scenario: User can navigate to login page
    Given User navigates to the login page
    Then Current page URL should contain "index"
