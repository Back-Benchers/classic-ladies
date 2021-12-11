import { getCall } from './api_call';
const customerList = () => {
    getCall("/customer/records");
};
const customerInfo = (custId) => {
    getCall(`/customer/records?${custId}`);
};

export default {
    customerList,
    customerInfo
};