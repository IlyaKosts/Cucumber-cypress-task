Feature: Switch + Save with Telnyx field
    Background:
        Given A user opens a Telnyx page
    Scenario: Click on accept button, if exist
        When A Click on accept button
    Scenario: TC#1 Default sliders values check
        When A user scroll to Switch + Save field
        Then User check the compare costs fields in defaild variant
    Scenario: TC#2 Middle sliders values check
        When A user scroll to Switch + Save field
        And User click on the middle of MOC field
        And User click on the middle of RIC field
        Then User check the compare costs fields in middle variant
    Scenario: TC#3 Minimum sliders values check
        When A user scroll to Switch + Save field
        And User click on the left end of MOC field
        And User click on the left end of RIC field
        Then User check the compare costs fields in minimum variant
    Scenario: TC#4 Maximum sliders values check
        When A user scroll to Switch + Save field
        And User click on the right end of MOC field
        And User click on the right end of RIC field
        Then User check the compare costs fields in maximum variant
    Scenario: TC#5 Unproportional sliders values check
        When A user scroll to Switch + Save field
        And User click on the middle of MOC field
        And User click on the right end of RIC field
        Then User check the compare costs fields in Unproportional variant
    Scenario: TC#6 "Make and receive calls" and "Programmable Voice" ('Toll-free numbers', 'Yes') buttons check
        When A user scroll to Switch + Save field
        And User click on Make and receive calls 'Toll-free' numbers button
        Then User check the compare costs fields in Toll-free and Yes variant
    Scenario: TC#7 "Make and receive calls" and "Programmable Voice" ('Local numbers', 'No') buttons check
        When A user scroll to Switch + Save field
        And User click on Make and receive calls 'No' button
        Then User check the compare costs fields in Local numbers and No variant
    Scenario: TC#8 "Create a free trial account" on Switch + Save with Telnyx field buttons check
        When A user scroll to Switch + Save field
        And User click on 'Create a free trial account' button
        Then User check the current url, sign up 
    Scenario: TC#9 "Speak to our experts" on Switch + Save with Telnyx field buttons check
        When A user scroll to Switch + Save field
        And User click on 'Speak to our experts' button
        Then User check the current url, speack to experts