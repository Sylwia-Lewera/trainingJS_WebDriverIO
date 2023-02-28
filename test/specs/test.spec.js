describe("Test suite", () => {
    afterEach(()=> {
        validator = null;
      });
    it("First test", async () =>{
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    });
    it("Second test", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();
        const emailError = await $("Label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
        await $("//button[text()='Cancel']").click();
    });
    it("providing invalid email results in error", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("John Doe");
        await $("input[name='Email']").setValue("test@test");
        await $("//button[text()='Save']").click();
        const invalidEmailError = await $("Label#Email-info");
        expect(await invalidEmailError.getText()).toEqual("Email address is invalid");
        await $("//button[text()='Cancel']").click();
    });
    it("Check patients data Blood Group", async () => {
        await $("div.patients").click();
        const elem = await $('div.blood-group')
await expect(elem).toExist()
    });
    it("Check patients data Symptoms", async () => {
        await $("div.patients").click();
        const elem = await $("//span[text()='Symptoms']")
await expect(elem).toBePresent()
    });
})