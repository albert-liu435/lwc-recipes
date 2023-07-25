import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';

// Example
import isGuest from "@salesforce/user/isGuest";

export default class MiscGetUserId extends LightningElement {
    userId = Id;

    isGuestFlag=isGuest;
}
