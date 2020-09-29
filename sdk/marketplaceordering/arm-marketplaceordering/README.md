## Azure MicrosoftMarketplaceOrderingAgreements SDK for JavaScript

This package contains an isomorphic SDK for MicrosoftMarketplaceOrderingAgreements.

### Currently supported environments

- Node.js version 6.x.x or higher
- Browser JavaScript

### How to Install

```bash
npm install @azure/arm-marketplaceordering
```

### How to use

#### nodejs - Authentication, client creation and getAgreement agreement as an example written in TypeScript.

##### Install @azure/ms-rest-nodeauth

- Please install minimum version of `"@azure/ms-rest-nodeauth": "^3.0.0"`.
```bash
npm install @azure/ms-rest-nodeauth@"^3.0.0"
```

##### Sample code

```typescript
import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { MicrosoftMarketplaceOrderingAgreements, MicrosoftMarketplaceOrderingAgreementsModels, MicrosoftMarketplaceOrderingAgreementsMappers } from "@azure/arm-marketplaceordering";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new MicrosoftMarketplaceOrderingAgreements(creds, subscriptionId);
  const subscriptionId = ec7b1657-199d-4d8a-bbb2-89a11a42e02a;
  const publisherId = "testpublisherId";
  const offerId = "testofferId";
  const planId = "testplanId";
  const apiVersion = "testapiVersion";
  client.agreement.getAgreement(subscriptionId, publisherId, offerId, planId, apiVersion).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
```

#### browser - Authentication, client creation and getAgreement agreement as an example written in JavaScript.

##### Install @azure/ms-rest-browserauth

```bash
npm install @azure/ms-rest-browserauth
```

##### Sample code

See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@azure/arm-marketplaceordering sample</title>
    <script src="node_modules/@azure/ms-rest-js/dist/msRest.browser.js"></script>
    <script src="node_modules/@azure/ms-rest-azure-js/dist/msRestAzure.js"></script>
    <script src="node_modules/@azure/ms-rest-browserauth/dist/msAuth.js"></script>
    <script src="node_modules/@azure/arm-marketplaceordering/dist/arm-marketplaceordering.js"></script>
    <script type="text/javascript">
      const subscriptionId = "<Subscription_Id>";
      const authManager = new msAuth.AuthManager({
        clientId: "<client id for your Azure AD app>",
        tenant: "<optional tenant for your organization>"
      });
      authManager.finalizeLogin().then((res) => {
        if (!res.isLoggedIn) {
          // may cause redirects
          authManager.login();
        }
        const client = new Azure.ArmMarketplaceordering.MicrosoftMarketplaceOrderingAgreements(res.creds, subscriptionId);
        const subscriptionId = ec7b1657-199d-4d8a-bbb2-89a11a42e02a;
        const publisherId = "testpublisherId";
        const offerId = "testofferId";
        const planId = "testplanId";
        const apiVersion = "testapiVersion";
        client.agreement.getAgreement(subscriptionId, publisherId, offerId, planId, apiVersion).then((result) => {
          console.log("The result is:");
          console.log(result);
        }).catch((err) => {
          console.log("An error occurred:");
          console.error(err);
        });
      });
    </script>
  </head>
  <body></body>
</html>
```

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js/sdk/marketplaceordering/arm-marketplaceordering/README.png)
