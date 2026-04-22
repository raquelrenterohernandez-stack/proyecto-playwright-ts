import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { loginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import * as interfaces from '../pages/login-page/login-page.interfaces'

const userCredentials = loginPageData.credentials

test.describe('Login', () => {

    test('Login with valid credentials', async({page})=>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
        await loginPageMethods.insertPassword(userCredentials.password)
        await loginPageMethods.clickLoginButton()
        await productsPageMethods.verifyProductsPageIsDisplayed()
    })

    test('Login with invalid credentials', async({page})=>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.insertUsername('jajajaja')
        await loginPageMethods.insertPassword('jijijiji')
        await loginPageMethods.clickLoginButton()
        await loginPageMethods.verifyMessage('Username and password do not match any user in this service')
    })

    test ('Login', async({page})=>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login({username: userCredentials.usernames.standardUser, password: userCredentials.password})
    })

    test ('Empty credentials', async({page})=>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.clickLoginButton()
        await loginPageMethods.verifyMessage('Username is required')
    })

})