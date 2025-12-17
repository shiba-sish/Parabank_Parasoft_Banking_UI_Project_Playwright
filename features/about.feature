Feature: ParaBank About Page Functionality

  Scenario: User can navigate to about page
    Given User navigates to the about page
    Then About page should be displayed

  Scenario: Current URL shows about page
    Given User navigates to the about page
    Then Current page URL should contain "about"
