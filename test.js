import { Selector } from "testcafe"

fixture`Demo`
    .page("./index.html");

    // testings for TS application

    test("backgroundcolor", async t => {
        await t
        // expectning backgroundcolor
        // .expect(Selector("body")).eql(background-color:#688cc8)
    })

    test("Converter", async t => {
        await t
        // pre-assertion that validates that no existing number is in the inputfield.
        .expect(Selector("#milesInput").count).eql(0)
        
        // Write a test yourself that creates a new task, marks it as completed.
        .typeText(Selector("#milesInput"), "20")
        
        // Act
        .pressKey("enter")
        .click(Selector("body > div.siteContainer > div:nth-child(1) > div > button"))

        // Check if output number is converted correctly
        .expect(Selector("#kmAnswer")).eql(36)
    });