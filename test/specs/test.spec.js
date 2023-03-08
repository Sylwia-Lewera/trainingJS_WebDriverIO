describe("Test suite", () => {
    const elementWaitClick = async (elem) => {
        await elem.waitForExist();
        elem.click({
            button: "0",
            x: 10,
            y: 3
        });
    };
    const elementSetValue = async (elem,value) => {
        await elem.waitForDisplayed();
        elem.addValue(value);
};
    afterEach(()=> {
        validator = null;
      });
    //   beforeEach(async() => {
    //     await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    //   });
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
        const elem = await $('div.blood-group');
        await expect(elem).toExist();
    });
    it("Check patients data Symptoms", async () => {
        await $("div.patients").click();
        const elem = await $("//span[text()='Symptoms']")
        await expect(elem).toBePresent();
    });
    it("Wait for patients view and click Add New Patient button", async () => {
        await elementWaitClick(await $("//span[text()='Patients']"));
        await $("//button[text()='Add New Patient']").click();
        await $('body > div:nth-child(16) > ejs-dialog > div.e-footer-content > div > button:nth-child(1)').click();
        await browser.pause(5000);

    });
    it("Add New Patient name", async () => {
        await elementWaitClick(await $("//span[text()='Patients']"));
        await $("//button[text()='Add New Patient']").click();
        const patientNameInput = await $("#Name input");
        await elementSetValue(patientNameInput,"Axel Doe");
        expect(await patientNameInput.getValue()).toEqual("Axel Doe");
        await $('body > div:nth-child(16) > ejs-dialog > div.e-footer-content > div > button:nth-child(1)').click();
        await browser.pause(5000);

    });
    it("scenario that utilizes execute() command", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        await elementWaitClick(await $("//span[text()='Patients']"));
        const doctor = await $("a[href='#/doctor-details/5']");
        await browser.execute(function (doctor){
doctor.style.border = "red solid 2px";
        }, doctor);
        await browser.pause(5000);
    });
    it("scenario that utilizes waitUntil() command", async () => {
        await $("div.doctors").click();
        await browser.waitUntil(
            async() => (await $(await $("//button[text()='Add New Doctor']")).isDisplayed()),
            {
                timeout: 100,
                interval: 60,
                timeoutMsg: "not loaded"
            }
        );
    });
    it("scenario that utilizes browser actions", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        const row = await $("#grid_394431918_0_content_table > tbody > tr:nth-child(1) > td:nth-child(2)"); 
        await row.moveTo();
        await browser.pause(5000);
    });
});

