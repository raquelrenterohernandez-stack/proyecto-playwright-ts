import {step} from 'allure-js-commons';

export class Logger {
    static async logStep(description: string) {
        await step('STEP - ' + description, () => {})
    }

    static async logVerification(description: string) {
        await step('VERIFICATION - ' + description, () => {})
    }

    static async logPrecondition(description: string) {
        await step('PRECONDITION - ' + description, () => {})
    }

    static async logPostCondition(description: string) {
        await step('POSTCONDITION - ' + description, () => {})  
    }
}