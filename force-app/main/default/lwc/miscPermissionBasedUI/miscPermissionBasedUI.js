import { LightningElement } from 'lwc';

// import the permission from userPermission (standard Salesforce permissions) or
// customPermission (custom org-defined permissions)
// //查看permissionsets文件夹下面的定义
import hasAccessRestrictedUI from '@salesforce/customPermission/accessRestrictedUIPermission';

import hasRunReports from '@salesforce/userPermission/RunReports';

//查看 Permission Sets->System Permissions或者Users
//Manage Users
import hasManageUsers from '@salesforce/userPermission/ManageUsers';

export default class MiscPermissionBasedUI extends LightningElement {
    //自定义permission
   
    // surface imported permission to HTML template with getter
    get isRestrictedUIAccessible() {
        return hasAccessRestrictedUI;
    }

    get isRestrictedRecipesAccessible() {
        return hasRunReports;
    }

    get isManageUsers() {
        return hasManageUsers;
    }
}
