import {test} from '@playwright/test'
import { commonPageMethods } from '../pages/common-page/common-page.methods'

test('login', async({page})=>{
    const commonPage = new commonPageMethods(page)
    await commonPage.navigateToTheApplication()
    
})