import React, { useState } from 'react';
import './CheckoutForm.css';
import { Button,Avatar,Modal,Select,Form, Input, Radio, message ,Drawer } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import {state_to_props} from '../../util/common_utils'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {LockTwoTone} from '@ant-design/icons'
import {subscribeUser,geStripeCustomer,updateStripeCustomer,getUser} from '../../services/connectToServer'
import {setUserDetailsToStore,userFetchType} from '../../store/action'

const Option={Select};
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripekey=process.env.NODE_ENV==="production"?process.env.REACT_APP_PRODUCTION_STRIPE_PK:process.env.REACT_APP_TEST_STRIPE_PK;
const stripePromise = loadStripe(stripekey);
if (!stripekey) {
  console.error('**Stripe publishable key environment variable not set**');
  console.error(
    '**Add an environemnt variable REACT_APP_STRIPE_PUBLISHABLE_KEY**'
  );
  console.error('**Replace .env.example with .env and **');
}

const CheckoutForm = (props) => {
const customer=props.customer;
const isLicModal=props.isLicModal;
const setLicModal=props.setLicModal;
  const stripe = useStripe();
  const elements = useElements();
  const [subscribing, setSubscribing] = useState(false);
  const [isShowLoading, setShowLoading] = useState(false);
  const [isShowCard,setShowCard]=useState(false);
  const plan_A_priceid=process.env.NODE_ENV==="production"?process.env.REACT_APP_PLAN_A_LIVE_INR_PRICEID:process.env.REACT_APP_PLAN_A_TEST_INR_PRICEID;
  const plan_B_priceid=process.env.NODE_ENV==="production"?process.env.REACT_APP_PLAN_B_LIVE_INR_PRICEID:process.env.REACT_APP_PLAN_B_TEST_INR_PRICEID;
  const [showAddressForm,setAddressForm]=useState(false);
  const [form] = Form.useForm();
  const [plan,setPlan]=useState(props.license.licenseType)


  const handleOk = async (e) => {
    console.log("handle ok")
    setShowLoading(true)
    if(showAddressForm)
    {
      console.log("form",form);
      form.validateFields().then( async (values) => {
        //api call stripe to add address
        console.log("form value",values);
        let updatedStripeCustomer=await updateStripeCustomer({address:values})
        console.log(updatedStripeCustomer);
        setAddressForm(false);
        setShowCard(true)
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
    }
     handleSubmit(e)
     
    
    }

const cancelLicModal=()=>{
setShowCard(false);
setLicModal(false);
}

const handlePlanChange=async (e)=>
{
console.log(e);
setPlan(e);
if(e!=="Free"  && props.license.licenseType!==e){
  let response=await geStripeCustomer()
  console.log("stripe response ",response)
  setShowCard(true);
  // if(response.data.address){
  //   setAddressForm(true);
  // }
  // else
  // {
  //   setAddressForm(true);
  // }
}
else{
  setShowCard(false);
}

}


  function handleCustomerActionRequired({
    subscription,
    invoice,
    priceId,
    paymentMethodId,
    isRetry,
  }) {
    if (subscription && subscription.status === 'active') {
      // subscription is active, no customer actions required.
      return { subscription, priceId, paymentMethodId };
    }

    // If it's a first payment attempt, the payment intent is on the subscription latest invoice.
    // If it's a retry, the payment intent will be on the invoice itself.
    let paymentIntent = invoice
      ? invoice.payment_intent
      : subscription.latest_invoice.payment_intent;

    if (
      paymentIntent.status === 'requires_action' ||
      (isRetry === true && paymentIntent.status === 'requires_payment_method')
    ) {
      return stripe
        .confirmCardPayment(paymentIntent.client_secret, {
          payment_method: paymentMethodId,
        })
        .then((result) => {
          if (result.error) {
            // start code flow to handle updating the payment details
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc)
            throw result;
          } else {
            if (result.paymentIntent.status === 'succeeded') {
              // There's a risk of the customer closing the window before callback
              // execution. To handle this case, set up a webhook endpoint and
              // listen to invoice.payment_succeeded. This webhook endpoint
              // returns an Invoice.
              return {
                priceId: priceId,
                subscription: subscription,
                invoice: invoice,
                paymentMethodId: paymentMethodId,
              };
            }
          }
        });
    } else {
      // No customer action needed
      return { subscription, priceId, paymentMethodId };
    }
  }

  function handlePaymentMethodRequired({
    subscription,
    paymentMethodId,
    priceId,
  }) {
    if (subscription.status === 'active') {
      // subscription is active, no customer actions required.
      return { subscription, priceId, paymentMethodId };
    } else if (
      subscription.latest_invoice.payment_intent.status ===
      'requires_payment_method'
    ) {
      // Using localStorage to store the state of the retry here
      // (feel free to replace with what you prefer)
      // Store the latest invoice ID and status
      localStorage.setItem('latestInvoiceId', subscription.latest_invoice.id);
      localStorage.setItem(
        'latestInvoicePaymentIntentStatus',
        subscription.latest_invoice.payment_intent.status
      );
      throw new Error({ error: { message: 'Your card was declined.' } });
    } else {
      return { subscription, priceId, paymentMethodId };
    }
  }

  function onSubscriptionComplete(result) {
    console.log(result);
    // Payment was successful. Provision access to your service.
    // Remove invoice from localstorage because payment is now complete.
    // clearCache();
    // Change your UI to show a success message to your customer.
    // onSubscriptionSampleDemoComplete(result);
    // Call your backend to grant access to your service based on
    // the product your customer subscribed to.
    // Get the product by using result.subscription.price.product
  }

  function createSubscription({ paymentMethodId }) {

    let priceId = plan==="planA"?plan_A_priceid:plan_B_priceid;
    if(plan==="Free"){
      priceId="Free";
    }else if(plan==="planA"){
      priceId=plan_A_priceid;
    }else if(plan==="planB"){
      priceId=plan_B_priceid;
    }
    return (
    subscribeUser({
      customerId: props.license.stripe_customer_id,
      paymentMethodId: paymentMethodId,
      priceId: priceId,
    })
      .then((result) => {
          return {
            // Use the Stripe 'object' property on the
            // returned result to understand what object is returned.
            subscription: result.data,
            paymentMethodId: paymentMethodId,
            priceId: priceId,
          };
        })
        .then(handlePaymentThatRequiresCustomerAction)
       // .then(handlePaymentMethodRequired)
        .then(onSubscriptionComplete)
        .catch((error) => {
          console.log(error);
          message.error("exception in updating license kindly contact customer care")
        })
    );
  }

  const handleSubmit = async () => {
    // Block native form submission.
    setSubscribing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    if(props.license.licenseType===plan){
      return;
    }

    if(isShowCard){
        const cardElement = elements.getElement(CardElement);
        if(cardElement===null || cardElement===undefined){
          return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
        
        console.log(paymentMethod);
        if (error) {
          console.log('[error]', error);
          message.error(error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          await createSubscription({ paymentMethodId: paymentMethod.id });
          props.setUserDetailsToStore(null,userFetchType.ACCOUNTS)
        }
        setShowLoading(false)
        setLicModal(false);
  }
  else if(plan=="Free"){
         await createSubscription({ paymentMethodId: "Free"});
          props.setUserDetailsToStore(null,userFetchType.ACCOUNTS)
          setShowLoading(false)
          setLicModal(false);
  }
    
  };


  function handlePaymentThatRequiresCustomerAction({
    subscription,
    invoice,
    priceId,
    paymentMethodId,
    isRetry,
  }) {
    if (subscription && subscription.status === 'active') {
      // Subscription is active, no customer actions required.
      return { subscription, priceId, paymentMethodId };
    }
  
    // If it's a first payment attempt, the payment intent is on the subscription latest invoice.
    // If it's a retry, the payment intent will be on the invoice itself.
    let paymentIntent = invoice ? invoice.payment_intent : subscription.latest_invoice.payment_intent;
  
    if (
      paymentIntent.status === 'requires_action' ||
      (isRetry === true && paymentIntent.status === 'requires_payment_method')
    ) {
      return stripe
        .confirmCardPayment(paymentIntent.client_secret, {
          payment_method: paymentMethodId,
        })
        .then((result) => {
          if (result.error) {
            // Start code flow to handle updating the payment details.
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc).
            throw result;
          } else {
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer.
              // There's a risk of the customer closing the window before the callback.
              // We recommend setting up webhook endpoints later in this guide.
              return {
                priceId: priceId,
                subscription: subscription,
                invoice: invoice,
                paymentMethodId: paymentMethodId,
              };
            }
          }
        })
        .catch((error) => {
          //displayError(error);
          console.error(error);
        });
    } else {
      // No customer action needed.
      return { subscription, priceId, paymentMethodId };
    }
  }

    return (


           <Drawer title="update plan"
            visible={isLicModal}
            width={"30vw"}
            onClose={cancelLicModal}
            confirmLoading={isShowLoading}
           
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={!isShowLoading&&  cancelLicModal} style={{ marginRight: 8 }} visible={!isShowLoading} loading={isShowLoading}>
                Cancel
              </Button>
              <Button onClick={handleOk} type="primary" loading={isShowLoading} >
                Submit
              </Button>
            </div>
          }>
                <Select
                size="large" 
                prefix={<LockTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="select your plan" 
                onChange={handlePlanChange} >
                <Option value="Free">Free, 50MB</Option>
                <Option value="planA">plan A, 100MB</Option>
                <Option value="planB">plan B, 200MB</Option>
                 </Select>
                
           
              {isShowCard&&  <form id="payment-form" onSubmit={handleSubmit}>
                    <br/>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#32325d',
                            fontFamily:
                              '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
                            '::placeholder': {
                              color: '#a0aec0',
                            },
                          },
                          invalid: {
                            color: '#9e2146',
                          },
                        },
                      }}
                    />
            </form>}
            <br/>
        </Drawer>
    );
  
};

const PaymentForm = (props) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm {...props} />
  </Elements>
);
export default connect(state_to_props,{setUserDetailsToStore:setUserDetailsToStore})(PaymentForm);