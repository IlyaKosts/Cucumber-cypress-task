Feature: Contact with telnyx Experts
    Background:
        Given A user opens a Telnyx contact us page
    Scenario: Click on accept button, if exist
        When Click on accept button
    Scenario: TC#10 Submit "contact to expert" info with empty inputs
        When A user click on Talk to expert button 
        And A user click on Submit button
        Then User check the red banners under input fields
    Scenario: TC#11 Submit "contact to expert" info with completed inputs
        When A user click on Talk to expert button 
        And User enter first name
        And User enter last name
        And User enter business email
        And User enter company website
        And A user click on Submit button
        Then User check the red banner under choose reason for contact
    Scenario: TC#12 Сhecking the presence of all three items(topics) in the help to the right of the form 
        When A user click on Talk to expert button 
        Then User check the topics
    Scenario: TC#13 Go to login page by clicking login button on contact support field
        When A user click on Talk to expert button 
        And User click on login button
        Then User check the actual url for login page
    Scenario: TC#14 Go to support page by clicking support button on contact support field
        When A user click on Talk to expert button 
        And User click on support button
        Then User check the actual url for support page
    Scenario: TC#15 Сhecking the presence of copyright element on the bottom of the page 
        When A user click on Talk to expert button 
        And User scroll to bottom
        Then User check the copyright