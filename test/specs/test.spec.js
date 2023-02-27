describe("Test suite", () => {
    it("First test", async () =>{
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    })
})