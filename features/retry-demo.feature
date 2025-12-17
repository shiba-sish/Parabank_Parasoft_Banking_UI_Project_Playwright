Feature: Retry Test Demo

  Scenario: This will pass on retry (demonstrates retry mechanism)
    Given User navigates to the about page
    Then Current page URL should contain "about"
