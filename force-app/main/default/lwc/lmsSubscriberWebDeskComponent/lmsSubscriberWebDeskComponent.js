import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { reduceErrors } from 'c/ldsUtils';

// Import message service features required for subscribing and the message channel
import { subscribe, MessageContext } from 'lightning/messageService';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';


export default class LmsSubscriberWebComponent extends LightningElement {
    // subscription = null;
    recordId;

    // Name;
    // Title;
    // Phone;
    // Email;
    // Picture__c;

    // @wire(getRecord, { recordId: '$recordId', fields })
    // wiredRecord({ error, data }) {
    //     if (error) {
    //         this.dispatchToast(error);
    //     } else if (data) {
    //         fields.forEach(
    //             (item) => (this[item.fieldApiName] = getFieldValue(data, item))
    //         );
    //     }
    // }

    // By using the MessageContext @wire adapter, unsubscribe will be called
    // implicitly during the component descruction lifecycle.
    @wire(MessageContext)
    messageContext;

    // Encapsulate logic for LMS subscribe.
    subscribeToMessageChannel() {
        //订阅消息通道
        this.subscription = subscribe(
            this.messageContext,
            RECORD_SELECTED_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    //处理获取到的消息信息
    // Handler for message received by component
    handleMessage(message) {
			console.log('message:'+message.recordId)
        this.recordId = message.recordId;
    }

    //标准的lwc声明周期函数，用于进行消息的订阅
    // Standard lifecycle hooks used to sub/unsub to message channel
    connectedCallback() {
        //订阅消息通道
        this.subscribeToMessageChannel();
    }

    // Helper
    dispatchToast(error) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error loading contact',
                message: reduceErrors(error).join(', '),
                variant: 'error'
            })
        );
    }
}
