import { LightningElement, api } from 'lwc';

export default class ContactListItemBubbling extends LightningElement {

    //从父页面中传输过来的数据
    @api contact;

    //点击事件
    handleSelect(event) {
        // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
        event.preventDefault();
        //自定义事件
        // 2. Create a custom event that bubbles. Read about event best practices at http://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.events_best_practices
        const selectEvent = new CustomEvent('contactselect', {
            bubbles: true
        });
        //发送自定义事件
        // 3. Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}
