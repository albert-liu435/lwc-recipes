import { LightningElement } from 'lwc';

// import the permission from userPermission (standard Salesforce permissions) or
// customPermission (custom org-defined permissions)
// //查看permissionsets文件夹下面的定义
import hasAccessRestrictedUI from '@salesforce/customPermission/accessRestrictedUIPermission';

import hasRecipes from '@salesforce/userPermission/recipesPermission'

export default class MiscPermissionBasedUI extends LightningElement {
    //自定义permission
   
    // surface imported permission to HTML template with getter
    get isRestrictedUIAccessible() {
        return hasAccessRestrictedUI;
    }

    get isRestrictedRecipesAccessible() {
        return hasRecipes;
    }
}
