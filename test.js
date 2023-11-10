import { Selector } from "testcafe"

fixture`#1 Testing the converter`
    .page('./index.html');

    // testing miles to km input
    test("Converter to km", async t => {
        await t
        .typeText(Selector("#milesInput"), '12')

        // Act
        .click("#toKmButton")
    });

    // #2 testing km to miles input (evt plus converter)

    // test("Converter to miles", async t => {
    //     await t
    //     .typeText(Selector("#kmInput"), '19.308')

    //     // Act
    //     .click("#toMilesButton")

    //     // Check if output number is converted correctly
    //     .expect(Selector("#resultInMiles").innerText).contains('12');
    // });

