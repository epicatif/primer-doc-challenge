---
title: 'Headless Checkout'
description: 'Take the checkout experience to the next level with a fully customizable integration'
---

Enhance your users' journey by tailoring the look-and-feel and the flow of your checkout's UI. Get control of the checkout experience and features to boost your business payment-handling potential.

<img src="https://primer.io/docs/static/249176d6abf1958f4168d4318af6833a/d9199/payment_instrument.png" alt="headless-checkout" width="650"/>

### How does the Headless Checkout Work?

Primer's displays your custom UIs for the payment methods you associate to your users via Dashboard, while also helping you manage the entire checkout flow.

The flow looks as follows:

1. Initialize Headless Universal Checkout.
2. Retrieve and display the payment methods available for the users.
3. Display your custom UI when users select a payment method.
4. Process payments after users complete the checkout.

After payments are processed, Primer manages their lifecycle and uses callbacks to keep you informed on their status.

> **Info**: For custom UIs, render them using SDKs, or boost the experience even further by building your own custom interface.

## Quick Start for Web Headless Checkout

To ramp up with Headless Checkout for Web:

### Step 1. Install Prerequisites

1. Install the [Universal Checkout Web SDK](https://www.npmjs.com/package/@primer-io/checkout-web).

2. Generate a `clientToken` by [creating a client session](https://primer.io/docs/accept-payments/manage-client-sessions#create-a-client-session) using `POST /client-session`.
    Find the `clientToken` in the body of the response.

### Step 2. Initialize Headless Checkout

1. Create your Headless Checkout instance using the `clientToken`:

    ``` TS
    const headless = await Primer.createHeadless(clientToken)
    ```

2. Configure Headless Checkout with a callback to retrieve payment methods:

    ``` TS
    await headless.configure({
        onAvailablePaymentMethodsLoad
    });
    ```

    >**Info**: Consult [optional callbacks](https://primer.io/docs/accept-payments/headless-universal-checkout/web#configure-headless-universal-checkout) for the Headless Checkout.

3. Set `headless.start()` to retrieve the list of payment methods assigned through Dashboard and start the checkout flow:

    ```TS
    await headless.start()
    ```

    >**Info**: Learn more on [setting up Headless Universal Checkout](https://primer.io/docs/accept-payments/headless-universal-checkout/web#configure-headless-universal-checkout).

### Create a Payment Manually

To create a payment manually using the [Payments API](https://apiref.primer.io/reference/list_payments_payments_get):

1. Initialize Universal Checkout using your `clientToken`.

2. Set `paymentHandling` to `MANUAL` to turn off automatic payment handling.

3. Set up the following callbacks to handle your payments:
   - `onTokenizeSuccess()` to create payments using a `paymentMethodToken`.
   - `onResumeSuccess()` to resume payments using a `resumeToken`.

4. Retrieve the `paymentMethodtoken` from `onTokenizeSucess()` after users submit their payment data.

5. Create a payment request using `POST /payments` with your `paymentMethodToken` in the payload.

The JSON response of your new payment looks as follows:

```JSON
{
  "id": "kHdEw9EG",
  "date": "2021-02-21T15:36:16.367687",
  "status": "AUTHORIZED",
  "orderId": "order-abc",
  "currencyCode": "EUR",
  "amount": 42,
  "customerId": "customer-123",
  "customer": {
    "email": "customer123@gmail.com"
  },
  "paymentMethod": {
    "paymentMethodToken": "heNwnqaeRiqvY1UcslfQc3wxNjEzOTIxNjc4",
    "isVaulted": true,
    "descriptor": "Purchase: Socks",
    "analyticsId": "VtkMDAxZW5isH0HsbbNxZ3lo",
    "paymentMethodType": "PAYMENT_CARD",
    "paymentMethodData": {
      "first6Digits": "411111",
      "last4Digits": "1111",
      "expirationMonth": "12",
      "expirationYear": "2030",
      "cardholderName": "John Biggins",
      "network": "Visa",
      "isNetworkTokenized": false,
      "binData": {
        "network": "VISA",
        "regionalRestriction": "UNKNOWN",
        "accountNumberType": "UNKNOWN",
        "accountFundingType": "UNKNOWN",
        "prepaidReloadableIndicator": "NOT_APPLICABLE",
        "productUsageType": "UNKNOWN",
        "productCode": "VISA",
        "productName": "VISA"
      }
    }
  },
  "processor": {
    "name": "STRIPE",
    "processor_merchant_id": "acct_stripe_1234",
    "amountCaptured": 0,
    "amountRefunded": 0
  },
  "transactions": [
    {
      "type": "SALE",
      "processorStatus": "AUTHORIZED",
      "processorName": "STRIPE",
      "processorMerchantId": "acct_stripe_1234",
      "processorTransactionId": "54c4eb5b3ef8a"
    }
  ],
  "metadata": {
    "productId": 123,
    "merchantId": "a13bsd62s"
  }
}
```

> **Info**: Learn more on [creating payments manually](https://apiref.primer.io/reference/create_payment_payments_post).