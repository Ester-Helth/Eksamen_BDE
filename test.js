import { Selector } from "testcafe"

fixture`Testing the converter`
    .page('http://localhost:5173/');

     // testing miles to km
    test("Converter to km", async t => {
        await t
        .typeText(Selector("#milesInput"), '12')

        // Act
        .click(Selector("#toKmButton"))

        // Check if output number is converted correctly
        .expect(Selector("#kmAnswer")).eql('19.308');
    });

    //  // testing km to miles
    // test("Converter", async t => {
    //     await t
    //     // pre-assertion that validates that no existing number is in the inputfield.
    //     .expect(Selector("#milesInput").count).eql(0)
        
    //     // Write a test yourself that creates a new task, marks it as completed.
    //     .typeText(Selector("#milesInput"), "20")
        
    //     // Act
    //     .pressKey("enter")
    //     .click(Selector("body > div.siteContainer > div:nth-child(1) > div > button"))

    //     // Check if output number is converted correctly
    //     .expect(Selector("#kmAnswer")).eql(36)
    // });