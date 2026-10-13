---
title: "SAP Business One"
slug: /app-integrations/sap-b1/
description: Step-by-step guide to set up SAP Business One credentials and automate business workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SAP Business One (SAP B1) is an integrated enterprise resource planning (ERP) solution designed for small and medium-sized businesses. With appse ai, you can seamlessly connect SAP B1 to your workflows, automating processes like inventory management, financial reporting, and customer relationship management to improve business performance and agility.

---

## Setup Credential

### Setup Credentials in Portal

Go to the **Credentials** page and click **Add Credentials**, then choose **SAP Business One** app.

<img src="/img/credentials/sap-b1/Portal-AppSelect.jpg" width="700"  alt="SAP B1 Setup Credentials in Portal — Select App screenshot" />

### Select Authentication

When adding an SAP Business One credential, first choose your authentication type:

<img src="/img/credentials/sap-b1/select-authentication.png" width="700" alt="Select Authentication screen showing Service Layer (Cloud) and Service Layer (On-Premises Agent) options" />

SAP Business One Service Layer supports two authentication modes:

- **Service Layer (Cloud)** — connect directly to a cloud-accessible SAP B1 Service Layer
- **Service Layer (On-Premises Agent)** — connect through an active On-Prem Connector to SAP B1 Service Layer

Select your authentication type on the **Select Authentication** screen, then configure credentials as shown below.

<Tabs groupId="sap-b1-auth" queryString="sap-b1-auth">
<TabItem value="cloud" label="Service Layer (Cloud)" default>

#### Service Layer (Cloud)

If you have selected **Service Layer (Cloud)** on the Select Authentication screen, then configure the credential fields below.

##### Configuration Fields

| Field       | Description                                  |
|-------------|----------------------------------------------|
| Host URL    | The server URL where your SAP B1 is hosted   |
| Port        | Optional. Default is `50000`. Leave blank if your Service Layer URL has no explicit port. Example URL: `https://example.com:50000/b1s/v1/` → port is `50000`. |
| Username    | Your SAP B1 username                         |
| Password    | Your SAP B1 password                         |
| Company DB  | The company database name used in SAP B1     |
| Additional Path | Provide Additional Path (Optional) |

##### Step-by-Step Guide

##### 1. Add Connection Name

Provide a name for your credential in the `Connection Name` field. This will be showcased in the credential listing page.

##### 2. Find Your Host URL and Port

- Open the SAP Business One **Service Layer** configuration or ask your SAP B1 administrator.
   - It will look something like: `https://{localip}:50000/ControlCenter/`
   - You should see page titled - `System Landscape Directory`

- Login to the platform using your **System Landscape Directory Credentials**.
<img src="/img/credentials/sap-b1/sap-b1-cred-sld-login.png" alt="SAP B1 Step-by-Step Guide step 1 of 5 screenshot" />

- Locate the base URL used to access the Service Layer API. Go to _Services_ -> _Service Layer_
<img src="/img/credentials/sap-b1/sap-b1-cred-host-url.png" alt="SAP B1 Step-by-Step Guide step 2 of 5 screenshot" />

- Add your Host URL and Port. The Port field is optional; the default is `50000`. Leave it blank if your Service Layer URL has no explicit port. With respect to the image you will be adding:
> - **Host URL**: `https://10.0.2.68`
> - **Port**: `50000` (or leave blank if your Service Layer URL has no explicit port)

##### 3. Find Your Company DB Name

- In the same **System Landscape Directory**
- Go to _DB Instances and Companies_ -> Click on Your Server Name
<img src="/img/credentials/sap-b1/sap-b1-cred-db-name.png" alt="SAP B1 Step-by-Step Guide step 3 of 5 screenshot" />

Copy the **Schema Name**, this is your `Database Name`

<img src="/img/credentials/sap-b1/sap-b1-cred-db-name2.png" alt="SAP B1 Step-by-Step Guide step 4 of 5 screenshot" />

:::note
Depending on your setup, you might see `https://insync.pro` instead of `https://10.0.2.68`. Either can be used as your Host URL input.
:::

##### 4. Get Your Username and Password
<img src="/img/credentials/sap-b1/sap-b1-credentials.png" alt="SAP B1 Step-by-Step Guide step 5 of 5 screenshot" width="602" height="306" />

- Use your **SAP B1 client login credentials**.
- Make sure the user has sufficient API permissions for integration.

##### Configure Credentials in Portal

<img src="/img/credentials/sap-b1/Portal-CredsConfig.png" width="700"  alt="SAP B1 Cloud credential configuration form" />
<img src="/img/credentials/sap-b1/Portal-CredConfig2.png" width="700"  alt="SAP B1 Cloud credential fields including Host URL, Port, Username, Password, and Company DB" />

</TabItem>
<TabItem value="on-prem" label="Service Layer (On-Premises Agent)">

#### Service Layer (On-Premises Agent)

If you have selected **Service Layer (On-Premises Agent)** on the Select Authentication screen, then complete the steps below.

:::note
For **Service Layer (On-Premises Agent)**, you must also select an active **On-Prem Connector** before the credential fields appear. If you have not set up a connector yet, follow the [On-Prem Connector setup guide](/platform/key-concepts/on-premise-agent/on-premise-agent-setup) first.
:::

##### Select an On-Prem Connector

On the **Configure Credentials** screen, select an active connector from the **On-Prem Connector** dropdown. The connector must be online before you can continue.

<img src="/img/credentials/sap-b1/select-on-prem-connector.png" width="700" alt="Configure Credentials screen with On-Prem Connector dropdown" />

##### Configuration Fields

After selecting a connector, fill in the Service Layer credential fields:

| Field       | Description                                  |
|-------------|----------------------------------------------|
| Host URL    | The server URL where your SAP B1 is hosted   |
| Port        | Optional. Default is `50000`. Leave blank if your Service Layer URL has no explicit port. Example URL: `https://example.com:50000/b1s/v1/` → port is `50000`. |
| Username    | Your SAP B1 username                         |
| Password    | Your SAP B1 password                         |
| Company DB  | The company database name used in SAP B1     |
| Additional Path | Provide Additional Path (Optional) |

##### Step-by-Step Guide

##### 1. Add Connection Name

Provide a name for your credential in the `Connection Name` field. This will be showcased in the credential listing page.

##### 2. Find Your Host URL and Port

- Open the SAP Business One **Service Layer** configuration or ask your SAP B1 administrator.
   - It will look something like: `https://{localip}:50000/ControlCenter/`
   - You should see page titled - `System Landscape Directory`

- Login to the platform using your **System Landscape Directory Credentials**.
<img src="/img/credentials/sap-b1/sap-b1-cred-sld-login.png" alt="SAP B1 Step-by-Step Guide step 1 of 5 screenshot" />

- Locate the base URL used to access the Service Layer API. Go to _Services_ -> _Service Layer_
<img src="/img/credentials/sap-b1/sap-b1-cred-host-url.png" alt="SAP B1 Step-by-Step Guide step 2 of 5 screenshot" />

- Add your Host URL and Port. The Port field is optional; the default is `50000`. Leave it blank if your Service Layer URL has no explicit port. With respect to the image you will be adding:
> - **Host URL**: `https://10.0.2.68`
> - **Port**: `50000` (or leave blank if your Service Layer URL has no explicit port)

##### 3. Find Your Company DB Name

- In the same **System Landscape Directory**
- Go to _DB Instances and Companies_ -> Click on Your Server Name
<img src="/img/credentials/sap-b1/sap-b1-cred-db-name.png" alt="SAP B1 Step-by-Step Guide step 3 of 5 screenshot" />

Copy the **Schema Name**, this is your `Database Name`

<img src="/img/credentials/sap-b1/sap-b1-cred-db-name2.png" alt="SAP B1 Step-by-Step Guide step 4 of 5 screenshot" />

:::note
Depending on your setup, you might see `https://insync.pro` instead of `https://10.0.2.68`. Either can be used as your Host URL input.
:::

##### 4. Get Your Username and Password
<img src="/img/credentials/sap-b1/sap-b1-credentials.png" alt="SAP B1 Step-by-Step Guide step 5 of 5 screenshot" width="602" height="306" />

- Use your **SAP B1 client login credentials**.
- Make sure the user has sufficient API permissions for integration.

##### Configure Credentials in Portal

<img src="/img/credentials/sap-b1/Portal-CredsConfig.png" width="700"  alt="SAP B1 On-Premises Agent credential configuration form" />
<img src="/img/credentials/sap-b1/Portal-CredConfig2.png" width="700"  alt="SAP B1 On-Premises Agent credential fields including Host URL, Port, Username, Password, and Company DB" />

</TabItem>
</Tabs>

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your SAP B1 credential will show a "check" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your API Key and Domain or contact support.

--------

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

<Tabs groupId="sap-b1-section" queryString="sap-b1-section" defaultValue="triggers">
<TabItem value="triggers" label="Trigger">

### Triggers

Use these links to open the matching trigger directly in the Trigger tab:

- [New Items Created](?sap-b1-section=triggers#new-items-created)
- [Items Updated](?sap-b1-section=triggers#items-updated)
- [New Order Created](?sap-b1-section=triggers#new-order-created)
- [New Quotation Created](?sap-b1-section=triggers#new-quotation-created)
- [New Business Partner Created](?sap-b1-section=triggers#new-business-partner-created)
- [Business Partners Updated](?sap-b1-section=triggers#business-partners-updated)
- [New AR Invoices Created](?sap-b1-section=triggers#new-ar-invoices-created)
- [New Credit Note Created](?sap-b1-section=triggers#new-credit-note-created)
- [New Delivery Notes Created](?sap-b1-section=triggers#new-delivery-notes-created)
- [New Incoming Payments Created](?sap-b1-section=triggers#new-incoming-payments-created)
- [New Service Calls Created](?sap-b1-section=triggers#new-service-calls-created)
- [New Returns Created](?sap-b1-section=triggers#new-returns-created)
- [New Activities Created](?sap-b1-section=triggers#new-activities-created)


#### New Items Created

**New Item Created** trigger starts the workflow automatically when a new item is created in SAP Business One.
It captures the item details and passes them to the next step for further processing.

:::note
This is a trigger node, so it does not take any input data.
:::

------------------

#### Select Credentials and Trigger Event

  <img src="/img/credentials/sap-b1/NWITMCRTD1.jpg" width="700"  alt="SAP B1 New Items Created step 1 of 2 screenshot" />

Click on the **Continue** button.

----------------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

----------------

##### Example Configuration

<img src="/img/credentials/sap-b1/TriggerConfiguration.jpg" width="700"  alt="SAP B1 New Items Created step 2 of 2 screenshot" />

##### Result
```json
[
  {
    "ItemCode": "ITM-1001",
    "ItemName": "Sample Item",
    "CreateDate": "2026-03-27",
    "UpdateDate": "2026-03-27",
    "InventoryItem": "tYES",
    "Valid": "tYES"
  }
]
```
-------

#### Items Updated

**Items Updated Trigger** initiates a workflow whenever existing item details are modified in the SAP Business One. It captures the updated item information and passes it as structured data.


:::note
The trigger executes only after the item update is successfully saved. All relevant details (such as item ID, updated fields, and timestamps) are included in the output payload.
:::

---------------------

#### Select Credentials and Trigger Event

  <img src="/img/credentials/sap-b1/ITMUPDTD2.jpg" width="700"  alt="SAP B1 Items Updated screenshot" />

Click on the **Continue** button.

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

-----------------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "ItemCode": "SGLW1234",
    "ItemName": "Revamp Skin Toner",
    "ForeignName": null,
    "ItemsGroupCode": 100,
    "CustomsGroupCode": -1,
    "SalesVATGroup": null,
    "BarCode": null,
    "VatLiable": "tYES",
    "PurchaseItem": "tYES",
    "SalesItem": "tYES",
    "InventoryItem": "tYES",
    "User_Text": "Testing Purpose",
    "QuantityOnStock": 0,
    "QuantityOrderedByCustomers": 9,
    "ManageSerialNumbers": "tNO",
    "ManageBatchNumbers": "tNO",
    "Valid": "tYES",
    "Frozen": "tNO",
    "SalesUnit": null,
    "PurchaseUnit": null,
    "ItemType": "itItems",
    "MaterialType": "mt_FinishedGoods",
    "CreateDate": "2026-01-22",
    "UpdateDate": "2026-03-18",
    "ItemPrices": [
      {
        "PriceList": 1,
        "Price": 70,
        "Currency": "$"
      },
      {
        "PriceList": 117,
        "Price": 70,
        "Currency": "$"
      },
      {
        "PriceList": 118,
        "Price": 70,
        "Currency": "$"
      }
    ]
  }
]
```

------

#### New Order Created

**New Order Created Trigger** initiates a workflow whenever a new order is successfully created in the SAP Business One. It automatically captures order details and passes them as structured data to subsequent steps in the workflow.    

:::note
The trigger executes only after the order is fully created and confirmed in the system. All relevant order fields (such as order ID, customer details, and items) are included in the output payload.
:::

--------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWORDRCRTD3.jpg" width="700"  alt="SAP B1 New Order Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

--------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "DocEntry": 11464,
    "DocNum": 503,
    "CardCode": "BC6129916",
    "DocDate": "2026-03-27",
    "DocumentLines": [
      {
        "ItemCode": "BCB2B0001",
        "Quantity": 5
      }
    ]
  }
]
```
#### New Quotation Created

**New Quotation Created Trigger** initiates a workflow whenever a new quotation is generated in the SAP Business One. It captures quotation details and passes them as structured data to subsequent steps in the workflow.

:::note
The trigger executes only after the quotation is successfully created. All relevant quotation details (such as quotation ID, customer information, pricing, and items) are included in the output payload.
:::

------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWQTONCRTD4.jpg" width="700"  alt="SAP B1 New Quotation Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "DocEntry": 503,
    "DocNum": 221,
    "CardCode": "BC6129916",
    "DocDate": "2026-03-27",
    "NumAtCard": "REF-145",
    "DocumentLines": [
      {
        "ItemCode": "BCB2B0001",
        "Quantity": 3,
        "UnitPrice": 100
      }
    ]
  }
]
```
-------

#### New Business Partner Created

**New Business Partner Created Trigger** initiates a workflow whenever a new business partner is added to the SAP Business One. It captures partner details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the business partner is successfully created. All relevant details (such as partner ID, name, contact information, and address) are included in the output payload.
:::

-------------------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWBPCRTD5.jpg" width="700"  alt="SAP B1 New Business Partner Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "CardCode": "BP-001",
    "CardName": "Joe Mark",
    "Phone1": "9XXXXXXXXX",
    "EmailAddress": "example@domain.com",
    "CardType": "cCustomer"
  }
]
```

#### Business Partners Updated

**Business Partners Updated Trigger** initiates a workflow whenever existing business partner details are modified in the SAP Business One. It captures the updated information and passes it as structured data to subsequent workflow steps.


:::note
The trigger executes only after the business partner update is successfully saved. All relevant details (such as partner ID, modified fields, contact information, and timestamps) are included in the output payload.
:::

-----

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/BPUPDTD6.jpg" width="700" alt="SAP B1 Business Partners Updated screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result

```json
[
  {
    "CardCode": "BP-001",
    "CardName": "Joe Mark Updated",
    "Phone1": "9XXXXXXXXX",
    "EmailAddress": "example@domain.com",
    "UpdateDate": "2026-03-27"
  }
]
```

--------

#### New AR Invoices Created

**New AR Invoices Created Trigger** initiates a workflow whenever a new Accounts Receivable (AR) invoice is created in the SAP Business One. It captures invoice details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the AR invoice is successfully created. All relevant invoice details (such as invoice ID, customer information, amount, due date, and line items) are included in the output payload.
:::

--------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWARINVCCRTD7.jpg" width="700"  alt="SAP B1 New AR Invoices Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |


Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "DocEntry": 11462,
    "DocNum": 715,
    "CardCode": "BC6129916",
    "DocTotal": 3500,
    "DocDueDate": "2026-03-27"
  }
]
```

-------

#### New Credit Note Created

**New Credit Note Created Trigger** initiates a workflow whenever a new credit note is generated in the SAP Business One. It captures credit note details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the credit note is successfully created. All relevant details (such as credit note ID, customer information, amount, and related invoice details) are included in the output payload.
:::

-------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWCRDTNTCRTD8.jpg" width="700"  alt="SAP B1 New Credit Note Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "DocEntry": 188,
    "DocNum": 91,
    "CardCode": "BC6129916",
    "DocTotal": 500,
    "BaseType": 13
  }
]
```

---------

#### New Delivery Notes Created

**New Delivery Notes Created Trigger** initiates a workflow whenever a new delivery note is created in the SAP Business One. It captures delivery details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the delivery note is successfully created. All relevant details (such as delivery note ID, customer information, shipment details, and items) are included in the output payload.
:::

-------

#### Select Credentials and Trigger Event

  <img src="/img/credentials/sap-b1/NWDLVRYNTCRTD9.jpg" width="700"  alt="SAP B1 New Delivery Notes Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "DocEntry": 151,
    "DocNum": 65,
    "CardCode": "ZC0001",
    "DocDate": "2026-03-27",
    "DocumentLines": [
      {
        "ItemCode": "DIET002",
        "Quantity": 10
      }
    ]
  }
]
```

--------

#### New Incoming Payments Created

**New Incoming Payments Created Trigger** initiates a workflow whenever a new incoming payment is recorded in the SAP Business One. It captures payment details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the incoming payment is successfully created. All relevant details (such as payment ID, customer information, amount, payment method, and associated invoices) are included in the output payload.
:::

-------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWINCMGPMNTSCRTD10.jpg" width="700"  alt="SAP B1 New Incoming Payments Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "DocEntry": 522,
    "DocNum": 301,
    "CardCode": "ZC0001",
    "PaymentMeans": "IncomingPayment",
    "DocTotal": 500
  }
]
```

---------

#### New Service Calls Created

**New Service Calls Created Trigger** initiates a workflow whenever a new service call is logged in the SAP Business One. It captures service request details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the service call is successfully created. All relevant details (such as service call ID, customer information, issue description, and priority) are included in the output payload.
:::

-------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWSRVCCLSCRTD11.jpg" width="700"  alt="SAP B1 New Service Calls Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "ServiceCallID": 1024,
    "CustomerCode": "CUST-001",
    "Subject": "System Installation Issue",
    "Status": "Open",
    "Priority": "High"
  }
]
```

--------------

#### New Returns Created

**New Returns Created Trigger** initiates a workflow whenever a new return request is created in the SAP Business One. It captures return details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the return is successfully created. All relevant details (such as return ID, customer information, returned items, and reason for return) are included in the output payload.
:::

-------

#### Select Credentials and Trigger Event

  <img src="/img/credentials/sap-b1/NWRTNSCRTD12.jpg" width="700"  alt="SAP B1 New Returns Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "DocEntry": 205,
    "DocNum": 88,
    "CardCode": "ZC0001",
    "Comments": "Damaged item returned",
    "DocumentLines": [
      {
        "ItemCode": "DIET001",
        "Quantity": 1
      }
    ]
  }
]
```

---------------

#### New Activities Created

**New Activities Created Trigger** initiates a workflow whenever a new activity is logged in the SAP Business One. It captures activity details and passes them as structured data to subsequent workflow steps.

:::note
The trigger executes only after the activity is successfully created. All relevant details (such as activity ID, type, associated entity, and timestamps) are included in the output payload.
:::

--------

#### Select Credentials and Trigger Event

   <img src="/img/credentials/sap-b1/NWACTVTCRTD13.jpg" width="700"  alt="SAP B1 New Activities Created screenshot" />

Click on the **Continue** button.


##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward . (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue** button, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

##### Result
```json
[
  {
    "ActivityCode": 9001,
    "ActivityType": "Task",
    "Subject": "Follow-up call",
    "CreateDate": "2026-03-27",
    "AssignedTo": "Sales Team"
  }
]
```

</TabItem>
<TabItem value="actions" label="Action">

### Actions

**Actions** component represents a set of operations that are executed within a workflow after a trigger or condition is met. Actions perform specific tasks by processing input data and producing outputs that can be used in subsequent steps.

Actions are commonly used to **create, update, retrieve, or delete records**, **send notifications**, **integrate with external systems**, or **transform data** within workflows.

:::note
Each action requires proper configuration of inputs and may produce output data that can be referenced in later steps of the workflow.
:::

Use these links to open the matching action section directly in the Action tab:

- [BusinessPartners Actions](?sap-b1-section=actions#businesspartners-actions)
- [Items Actions](?sap-b1-section=actions#items-actions)
- [Quotations Actions](?sap-b1-section=actions#quotations-actions)
- [Orders Actions](?sap-b1-section=actions#orders-actions)
- [Invoices Actions](?sap-b1-section=actions#invoices-actions)
- [Returns Actions](?sap-b1-section=actions#returns-actions)
- [ServiceCall Actions](?sap-b1-section=actions#servicecall-actions)
- [SalesOpportunities Actions](?sap-b1-section=actions#salesopportunities-actions)
- [Exchange Rate Actions](?sap-b1-section=actions#exchange-rate-actions)
- [Sales Tax Codes Actions](?sap-b1-section=actions#sales-tax-codes-actions)
- [Special Prices Action](?sap-b1-section=actions#special-prices-action)
- [Return Request Actions](?sap-b1-section=actions#return-request-actions)
- [Sales Opportunities Action](?sap-b1-section=actions#sales-opportunities-action)
- [Purchase Order Action](?sap-b1-section=actions#purchase-order-action)
- [Incoming Payments Action](?sap-b1-section=actions#incoming-payments-action)
- [Delivery Note Actions](?sap-b1-section=actions#delivery-note-actions)
- [DownPayment Actions](?sap-b1-section=actions#downpayments-actions)
- [SalesForecast Action](?sap-b1-section=actions#salesforecast-action)
- [PaymentDraft Actions](?sap-b1-section=actions#paymentdraft-actions)
- [Blanket Agreements Actions](?sap-b1-section=actions#blanket-agreements-actions)
- [Serial Number Details Action](?sap-b1-section=actions#serial-number-details-action)
- [Service Contracts Action](?sap-b1-section=actions#service-contracts-action)
- [Customer Equipment Card Actions](?sap-b1-section=actions#customer-equipment-card-actions)
- [Goods Receipt Actions](?sap-b1-section=actions#goods-receipt-actions)
- [Goods Issue Actions](?sap-b1-section=actions#goods-issue-actions)
- [Search Records Action](?sap-b1-section=actions#search-records-action)

----
### BusinessPartners Actions

#### Get a BusinessPartner by EmailAddress

**Get a Business Partner by Email Address** action retrieves the details of a business partner using their email address as the search criteria. It returns the matching record as a structured object.

This action is commonly used to **lookup partner information**, **validate existing records**, **avoid duplicates**, or **fetch customer/vendor details** in workflows.

:::note
If multiple records match the provided email address, the system may return the first matching result or a list of records based on configuration. If no match is found, the output will be empty or null.
:::

-------

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GBPbyEM44.jpg" width="700"  alt="SAP B1 Get a BusinessPartner by EmailAddress step 1 of 2 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Email Address | Enter the email address of the business partner to search for. This field is used as the primary identifier to fetch the corresponding record. (e.g., "tesla.nesla@yopmail.com") |

Click on the **Continue** button, then **Run** the node.

##### Example Configuration

   <img src="/img/credentials/sap-b1/SAP-AC-GETBPbyEmail14.jpg" width="700"  alt="SAP B1 Get a BusinessPartner by EmailAddress step 2 of 2 screenshot" />

-------------

##### Result
```json
{
  "CardCode": "165120",
  "CardName": "TESLA COM",
  "CardType": "cCustomer",
  "GroupCode": 100,

  "Phone1": "6789067890",
  "EmailAddress": "tesla.nesla@yopmail.com",

  "City": "Hyderabad",
  "Country": "IN",
  "Currency": "$",

  "BPAddresses": [
    {
      "AddressName": "ADD 14",
      "AddressType": "bo_BillTo",
      "Street": "Begumpet",
      "City": "Hyderabad",
      "ZipCode": "500038",
      "Country": "IN",
      "State": "TS"
    },
    {
      "AddressName": "ADD 15",
      "AddressType": "bo_ShipTo",
      "Street": "TLR LUXURY RESIDENCY",
      "City": "Serilingampalle (M), Hyderabad",
      "ZipCode": "500081",
      "Country": "IN",
      "State": "TS"
    }
  ]
}
```
----------------

#### Get CardCode by ContactEmployee email

**Get a Business Partner by Email Address** action retrieves the details of a business partner using their email address as the search criteria. It returns the matching record as a structured object.

This action is commonly used to **lookup partner information**, **validate existing records**, **avoid duplicates**, or **fetch customer/vendor details** in workflows.

:::note
If multiple records match the provided email address, the system may return the first matching result or a list of records based on configuration. If no match is found, the output will be empty or null.
:::

------

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GCCbyCEmp45.jpg" width="700"  alt="SAP B1 Get CardCode by ContactEmployee email step 1 of 2 screenshot" />

Click on the **Continue** button.

----------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Email | Enter the email address of the business partner to search for. This field is used as the primary identifier to fetch the corresponding record (e.g., "amrutha.roy@yopmail.com"). |

Click on the **Continue** button, then **Run** the node.

-------

##### Example Configuration
   <img src="/img/credentials/sap-b1/SAP-AC-GET-CC-by-CE-email16.jpg" width="700"  alt="SAP B1 Get CardCode by ContactEmployee email step 2 of 2 screenshot" />

-----------------

##### Result
```json
[
  {
    "BusinessPartners": {
      "CardCode": "DEMOBP143",
      "CardName": "VEDANTU CO",
      "EmailAddress": "vedantu.co@yopmail.com",
      "Phone1": "8909876567",
      "Phone2": null,
      "ContactPerson": "AMRUTHA ROY",
      "Currency": "$",
      "MailAddress": "Tirumala Apartment-B2BBC",
      "MailCity": "Hyderabad",
      "MailZipCode": "500044",
      "MailCountry": "IN",
      "Address": "JAYALAKSHMI NAGAR-B2BBC",
      "City": "Hyderabad",
      "ZipCode": "500038",
      "Country": "IN",
      "BillToState": "TS",
      "Website": null,
      "Industry": null,
      "IndustryType": null
    },
    "BusinessPartners/ContactEmployees": {
      "CardCode": "DEMOBP143",
      "InternalCode": 365,
      "Title": "0",
      "Gender": "E",
      "Name": "AMRUTHA ROY",
      "LastName": "ROY",
      "MiddleName": null,
      "FirstName": "AMRUTHA",
      "Phone1": null,
      "Phone2": null,
      "MobilePhone": "9878987654",
      "Address": null
    }
  }
]
```

-----------

#### Create New Business Partner

**Create New Business Partner with CardCode** action creates a new business partner in the SAP using a unique CardCode. It allows you to configure mandatory and optional details, which are then stored and passed as structured data for further workflow steps.
This action is commonly used to **onboard new customers or vendors**, **store contact and address information**.

:::note
CardCode must be unique. Optional fields can be configured based on business requirements, and missing optional values will not block the creation process.
:::

--------------------

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CNBP46.jpg" width="700"  alt="SAP B1 Create New BusinessPartner step 1 of 5 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| CardCode | Enter a unique identifier for the business partner (e.g., "STOP002"). |

##### Optional Fields
##### Customer Details

| Field | Description |
|---|---|
| Customer Name | Enter required customer name (e.g., "Config") |
| Phone1 | Enter required phone number (e.g., "9987654321") |
| Email Address | Enter required mobile number (e.g., "config.co@yopmail.com") |

##### BP Addresses

| Field | Description |
|---|---|
| Address Name | Enter address name (e.g., "ADD 12345") |
| Address Type | Select either **Ship To** or **Bill To** (e.g., "ShipTo") |
| Street | Enter street name (e.g., "Madhura Nagar") |
| Block or Sector | Enter block or sector (e.g., "B70 TLR Residency") |
| Zip Code | Enter zip code (e.g., "500038") |
| City | Enter city (e.g., "Hyderabad") |
| Country | Enter country (e.g., "India") |
| State | Enter state (e.g., "Telangana") |

##### Contact Employees

| Field | Description |
|---|---|
| Name | Enter contact employee name (e.g., "Check 0110") |
| First Name | Enter first name (e.g., "Demo") |
| Last Name | Enter last name (e.g., "Customer") |
| Phone1 | Enter phone number if required. |
| Email Address | Enter email address (e.g., "demo.1234co@yopmail.com") |
| Job Title | Enter job title if required. |
| Position | Enter position if required. |

Click on the **Continue** button, then **Run** the node.

-----------------

##### Configuration Fields

   <img src="/img/credentials/sap-b1/SAP-AC-CNBPD19.jpg" width="700"  alt="SAP B1 Create New BusinessPartner step 2 of 5 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-NBPD20.jpg" width="700"  alt="SAP B1 Create New BusinessPartner step 3 of 5 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-NBPD21.jpg" width="700"  alt="SAP B1 Create New BusinessPartner step 4 of 5 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-NBPD22.jpg" width="700"  alt="SAP B1 Create New BusinessPartner step 5 of 5 screenshot" />

-----------

##### Result
```json
[
  {
    "CardCode": "STOP002",
    "CardName": "Config",
    "Phone1": "9987654321",
    "EmailAddress": "config.co@yopmail.com",
    "BPAddresses": [
      {
        "AddressName": "ADD 12345",
        "AddressType": "bo_ShipTo",
        "Street": "Madhura Nagar",
        "Block": "B70 TLR Residency",
        "ZipCode": "500038",
        "City": "Hyderabad",
        "Country": "India",
        "State": "Telangana"
      }
    ],
    "ContactEmployees": [
      {
        "Name": "Check 0110",
        "FirstName": "Demo",
        "LastName": "Customer",
        "EmailAddress": "demo.1234co@yopmail.com"
      }
    ]
  }
]
```

-----------------

#### Create a New Business Partner Without CardCode

**Create New Business Partner (Without CardCode)** action creates a new business partner in the SAP without requiring a CardCode. The SAP automatically generates a unique CardCode upon successful creation.

:::note
The CardCode is auto-generated by the system. Optional fields can be configured as needed, and leaving them empty will not prevent the creation of the business partner.
:::

##### Select the Credential and Action Event
   <img src="/img/credentials/sap-b1/SAP-C-CNBWOUTCC24.jpg" width="700"  alt="SAP B1 Create a New Business Partner Without CardCode step 1 of 5 screenshot" />

Click on the **Continue** button.

##### Configuration Fields

##### 1. Customer Name

| Field          | Description |
|---------------|------------|
| Customer Name | Enter required customer name (e.g., "WilliamRober") |
| Phone1 | Enter required phone number (e.g., "8909876545") |
| Email Address | Enter required email address (e.g., "william.rober333@yopmail.com") |
| Address Name | Enter address name (e.g., "ADD 12346") |
| Address Type | Select either **Ship To** or **Bill To** (e.g., "ShipTo") |
| Street | Enter street name (e.g., "Madhura Nagar") |
| Block or Sector | Enter block or sector (e.g., "B70 TLR Residency") |
| Zip Code | Enter ZIP code (e.g., "500038") |
| City | Enter city (e.g., "Hyderabad") |
| Country | Enter country (e.g., "India") |
| State | Enter state (e.g., "Telangana") |
| Name | Enter contact employee name (e.g., "Check 0111") |
| First Name | Enter first name (e.g., "Demo") |
| Last Name | Enter last name (e.g., "Customer") |
| Phone1 | Enter phone number if required (e.g., "9987654322") |
| Email Address | Enter email address (e.g., "demo.auto@yopmail.com") |
| Job Title | Enter job title if required (e.g., "Sales Executive") |
| Position | Enter position if required (e.g., "Manager") |

Click on the **Continue** button, then **Run** the node.

---------------

##### Configuration Fields

  <img src="/img/credentials/sap-b1/SAP-AC-CNBPWOUTCC25.jpg" width="700"  alt="SAP B1 Create a New Business Partner Without CardCode step 2 of 5 screenshot" />
  <img src="/img/credentials/sap-b1/SAP-AC-CNBPWOUTCC26.jpg" width="700"  alt="SAP B1 Create a New Business Partner Without CardCode step 3 of 5 screenshot" />
  <img src="/img/credentials/sap-b1/SAP-AC-CNBPWOUTCC27.jpg" width="700"  alt="SAP B1 Create a New Business Partner Without CardCode step 4 of 5 screenshot" />
  <img src="/img/credentials/sap-b1/SAP-AC-NBPWOUTCC28.jpg" width="700"  alt="SAP B1 Create a New Business Partner Without CardCode step 5 of 5 screenshot" />

--------------

##### Result
```json
[
  {
    "CardCode": "V10025",
    "CardName": "WilliamRober",
    "Phone1": "8909876545",
    "EmailAddress": "william.rober333@yopmail.com"
  }
]
```

-----------------

#### Update a Business Partner

**Update Business Partner** action modifies the details of an existing business partner in the SAP. It allows updating specific fields while retaining unchanged information.

This action is commonly used to **maintain accurate partner records**, **update contact and address information**, and **sync changes across SAP**.

:::note
Only the fields provided in the configuration will be updated. Fields left empty will remain unchanged in the existing business partner record.
:::

##### Select the Credential and Action Event
   <img src="/img/credentials/sap-b1/SAP-C-UBP29.jpg" width="700"  alt="SAP B1 Update a businesspartner step 1 of 5 screenshot" />

Click on the **Continue** button.

-----------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Card Code | Enter business partner code to update. (e.g., "STOP001") |
| Customer Name | Enter required customer name (e.g., "Robbin Martin") |
| Phone1 | Enter required phone number (e.g., "9879090907") |
| Email Address | Enter required email address (e.g., "config.co@yopmail.com") |
| Address Name | Enter address name (e.g., "ADD 12345") |
| Address Type | Select either **Ship To** or **Bill To** (e.g., "ShipTo") |
| Street | Enter street name (e.g., "Madhura Nagar") |
| Block or Sector | Enter block or sector (e.g., "B70 TLR Residency") |
| Zip Code | Enter ZIP code (e.g., "500038") |
| City | Enter city (e.g., "Hyderabad") |
| Country | Enter country (e.g., "India") |
| State | Enter state (e.g., "Telangana") |
| Name | Enter contact employee name (e.g., "Check 0110") |
| First Name | Enter first name (e.g., "Demo") |
| Last Name | Enter last name (e.g., "Customer") |
| Phone1 | Enter phone number if required (e.g., "9987654322") |
| Email Address | Enter email address (e.g., "demo.1234co@yopmail.com") |
| Job Title | Enter job title if required (e.g., "Sales Lead") |
| Position | Enter position if required (e.g., "Manager") |

Click on the **Continue** button, then **Run** the node.

-----------------

##### Example Configuration

   <img src="/img/credentials/sap-b1/SAP-AC-UBP30.jpg" width="700"  alt="SAP B1 Update a businesspartner step 2 of 5 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-UBP31.jpg" width="700"  alt="SAP B1 Update a businesspartner step 3 of 5 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-UBP32.jpg" width="700"  alt="SAP B1 Update a businesspartner step 4 of 5 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-UBP33.jpg" width="700"  alt="SAP B1 Update a businesspartner step 5 of 5 screenshot" />

-----------------

##### Result
```json
[
  {
    "_pair_index": 0,
    "value": ""
  }
]
```

---------


### Items Actions

#### Get a Item by ItemCode

**Get an Item by ItemCode** action retrieves the details of an item using its unique ItemCode. It returns the matching item record as a structured object.

This action is commonly used to **lookup item information**, **validate product records**, **fetch inventory details**.

:::note
If the provided ItemCode does not exist, the output will be empty or null.
:::

##### Select the Credential and Action Event
   <img src="/img/credentials/sap-b1/SAP-C-GIC35.jpg" width="700"  alt="SAP B1 Get a Item by ItemCode step 1 of 2 screenshot" />

Click on the **Continue** button.

--------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| ItemCode | Enter the unique identifier of the item to fetch its details. (e.g,. "AN005")|

Click on the **Continue** button, then **Run** the node.

##### Example Configuration

   <img src="/img/credentials/sap-b1/SAP-AC-GIC36.jpg" width="700"  alt="SAP B1 Get a Item by ItemCode step 2 of 2 screenshot" />

----------

##### Result
```json
[
  {
    "ItemCode": "AN005",
    "ItemName": "Demo Item",
    "InventoryItem": "tYES",
    "SalesItem": "tYES",
    "PurchaseItem": "tYES"
  }
]
```

-------------

#### Create a New Item {#create-a-new-item}

**Create New Item** action creates a new item in the SAP with the specified details. It captures item information and stores it as a structured record for use in workflows and inventory processes.

This action is commonly used to **add new products**, **manage inventory**.

:::note
If ItemCode is not provided, SAP may not generate Item. Optional fields can be configured as needed without blocking item creation.
:::

##### Select the Credential and Action Event
   <img src="/img/credentials/sap-b1/SAP-C-CNI38.jpg" width="700"  alt="SAP B1 Create a New Item step 1 of 6 screenshot" />

Click on the **Continue** button.

----------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Item Code | Unique identifier for the item (e.g., "DOC-910"). |
| Item Name | Enter the name of the item (e.g., "ThinkPad-V1.2.2"). |
| Optional Fields Remarks | Additional notes or comments related to the item. (e.g., "ThinkPad is a line of business-focused laptops developed by Lenovo, originally created by IBM.") |
| Item Prices | Defines pricing details for the item across different price lists. (e.g., "PriceList: 1 - 500 INR, PriceList: 2 - 550 INR") |
| Inventory Item | Indicates whether the item is managed in inventory. (e.g., "Yes or No")|
| InventoryUOM | Item's stock is tracked and managed in the inventory system (e.g., Nos, Kg, Liters). |
| Location | Specifies the storage location of the item.(e.g., "Warehouse-1")|
|Item Group Code | Categorizes the item into a specific group. (e.g., "100")|
| Additional Identifier | Any extra reference ID for the item (e.g., "ALT-56789"). |
| Purchase Item | Marks the item as available for purchasing. (e.g., "Yes or No")|
| Sales Item | Marks the item as available for sales. (e.g., "Yes or No")|
| Ship Type | Defines the shipping method applicable to the item. (e.g., "5, 6")|
| Tax Type | Specifies the tax category applicable to the item. (e.g., "tt_Yes")|
| Manage Stock by Warehouse | Enables stock tracking per warehouse. (e.g., "Yes or No")|
| WT Liable | Indicates if withholding tax is applicable. (e.g., "Yes or No")|
| BaseUnitName | Defines the base unit of measurement for the item. (e.g., "Nos")|
| ItemType | Specifies the type of item (e.g., product or service).(e.g., "Items, Labour, travel")|
| ServiceGroup | Groups service-type items under a category. (e.g., "-1")|
| ProductSource | Defines the origin/source of the product.(e.g., "Local")|
| BarCode | Unique barcode identifier for the item (e.g., "8901234567890"). |
| VatLiable | Indicates if VAT is applicable to the item.(e.g., "Yes or No")|

:::note
These fields are optional and can be configured based on business requirements.
:::

Click on the **Continue** button, then **Run** the node.

##### Example Configuration Fields

   <img src="/img/credentials/sap-b1/SAP-AC-NIC39.jpg" width="700"  alt="SAP B1 Create a New Item step 2 of 6 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-NIC40.jpg" width="700"  alt="SAP B1 Create a New Item step 3 of 6 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-NIC41.jpg" width="700"  alt="SAP B1 Create a New Item step 4 of 6 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-ACNIC42.jpg" width="700"  alt="SAP B1 Create a New Item step 5 of 6 screenshot" />
   <img src="/img/credentials/sap-b1/SAP-AC-NIC43.jpg" width="700"  alt="SAP B1 Create a New Item step 6 of 6 screenshot" />

##### Result
```json
[
  {
    "ItemCode": "DOC-910",
    "ItemName": "ThinkPad-V1.2.2",
    "Remarks": "ThinkPad is a line of business-focused laptops developed by Lenovo, originally created by IBM.",
    "InventoryUOM": "Nos",
    "ItemGroupCode": 100,
    "SalesItem": "tYES",
    "PurchaseItem": "tYES",
    "VatLiable": "tYES"
  }
]
```

-----------------

#### Update an Item {#update-a-item}

**Update Item** action modifies the details of an existing item in the SAP using its ItemCode. It allows updating specific fields while keeping other data unchanged.

This action is commonly used to **maintain accurate product data**, **update pricing and availability**, and **sync item details across SAP**.

:::note
Only the fields provided will be updated. Fields left empty will remain unchanged.
:::

##### Select the Credential and Action Event
   <img src="/img/credentials/sap-b1/ItemUpdate_C.jpg" width="700"  alt="SAP B1 Update an Item step 1 of 3 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields
| Field          | Description |
|---------------|------------|
| Item Code | Unique identifier of the item to be updated.(e.g.,"ITM-1001")
| Optionals
Item Name | Name of the item. (e.g., "Laptop Pro 15") |
| Remarks | Additional notes or comments related to the item. (e.g.,"Updated model with enhanced features") |
| Additional Identifier | Any extra reference ID for the item.(e.g., "ALT-56789") |
| Item Group Code | Categorizes the item into a specific group. (e.g., "100") |
| Purchase Item | Marks the item as available for purchasing (e.g., "tYES"). |
| Sales Item | Marks the item as available for sales (e.g., "tYES"). |
| Inventory Item | Indicates whether the item is managed in inventory (e.g., "tYES"). |
| Manufacturer | Specifies the manufacturer of the item (e.g., "HP"). |
| Default Warehouse | Defines the default warehouse for the item. (e.g., "WH-01") |
| Item Price | Defines the price of the item. (e.g., "65000") |

:::note
Only the fields provided will be updated. Fields left empty will remain unchanged.
:::

Click on the **Continue** button, then **Run** the node.

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-UI48.jpg" width="700"  alt="SAP B1 Update an Item step 2 of 3 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UI49.jpg" width="700"  alt="SAP B1 Update an Item step 3 of 3 screenshot" />

##### Result
```json
[
  {
    "_pair_index": 0,
    "value": ""
  }
]
```

---------------


### Quotations Actions

#### Get a quotation by customer reference no

**Get a Quotation by Customer Reference Number** action retrieves quotation details using the customer reference number (`NumAtCard`). It returns the matching quotation record as a structured object.

This action is commonly used to **lookup quotation details**, **track customer-specific references**, **validate records**, or **fetch quotation data for further processing**.

:::note
If multiple quotations match the provided reference number, the SAP may return the first matching result or a list based on configuration. If no match is found, the output will be empty or null.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GETQTbyNumAtCard51.jpg" width="700"  alt="SAP B1 Get a quotation by customer reference no step 1 of 2 screenshot" />

-------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| NumAtCard | Enter the customer reference number associated with the quotation. (e.g., "664111000000373064") |

Click on the **Continue** button, then **Run** the node.

----------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GETQbyNumAtCard52.jpg" width="700"  alt="SAP B1 Get a quotation by customer reference no step 2 of 2 screenshot" />

----------

##### Result
```json
[
  {
    "DocEntry": 503,
    "DocNum": 221,
    "NumAtCard": "664111000000373064",
    "CardCode": "BC6129916",
    "DocTotal": 300
  }
]
```

--------------


#### Create a new quotation

**Create New Quotation** action creates a new sales quotation in the SAP using customer and item details. It captures all configured data and stores it as a structured document for further processing.

:::note
Mandatory fields must be provided to create a quotation. Optional fields can be configured as needed without blocking the process.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-NQTC54.jpg" width="700"  alt="SAP B1 Create a new quotation step 1 of 6 screenshot" />

Click on the **Continue** button.

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocDueDate | Specify the due date of the quotation. (e.g., "2026-08-04") |
| CardCode | Enter the customer code. (e.g., "BC6129916") |
| DocumentLines
ItemCode | Unique identifier of the item. (e.g., "BCB2B0001")
| Quantity | Quantity of the item. (e.g., "3") |
| Optional Fields (Document Lines)
UnitPrice | Price per unit of the item. (e.g., "100") |
| TaxCode | Tax code applicable to the item. (e.g., "NT") |
| Vat Group | VAT group classification. (e.g., "VAT1") |
| Discount Percentage | Discount applied to the item. (e.g., "10") |
| Optional Fields
DocDate | Date of the quotation. (e.g., "2026-03-13") |
| NumAtCard | Customer reference number. (e.g., "REF-145") |
| ShipToStreet | Enter the ShipTo street. (e.g., "Madhura Nagar") |
| ShipToBlock | Enter the ShipTo block. (e.g., "B70 TLR Residency") |
| ShipToCity | Enter the ShipTo city. (e.g., "Hyderabad") |
| ShipToCountry | Enter the ShipTo country. (e.g., "India") |
| ShipToZipCode | Enter the ShipTo ZIP code. (e.g., "500038") |
| ShipToState | Enter the ShipTo state. (e.g., "Telangana") |
| BillToStreet | Enter the BillTo street. (e.g., "Begumpet") |
| BillToBlock | Enter the BillTo block. (e.g., "Lane 2") |
| BillToCity | Enter the BillTo city. (e.g., "Hyderabad") |
| BillToCountry | Enter the BillTo country. (e.g., "India") |
| BillToZipCode | Enter the BillTo ZIP code. (e.g., "500016") |
| BillToState | Enter the BillTo state. (e.g., "Telangana") |
| Document Additional Expenses (Optional) 
Freight or Expenses Code | Additional costs applied to the quotation such as freight, handling, or service charges. (e.g., "300") |

Click on the **Continue** button, then **Run** the node.

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-NQTC55.jpg" width="700"  alt="SAP B1 Create a new quotation step 2 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-NQTC56.jpg" width="700"  alt="SAP B1 Create a new quotation step 3 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-NQTC57.jpg" width="700"  alt="SAP B1 Create a new quotation step 4 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-NQTC58.jpg" width="700"  alt="SAP B1 Create a new quotation step 5 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-NQTC59.jpg" width="700"  alt="SAP B1 Create a new quotation step 6 of 6 screenshot" />

##### Result
```json
[
  {
    "DocEntry": 503,
    "DocNum": 221,
    "DocDate": "2026-03-13",
    "DocDueDate": "2026-08-04",
    "CardCode": "BC6129916",
    "NumAtCard": "REF-145",
    "DocumentLines": [
      {
        "ItemCode": "BCB2B0001",
        "Quantity": 3,
        "UnitPrice": 100,
        "TaxCode": "NT"
      }
    ]
  }
]
```

-----------------

#### Update quotation

**Update Quotation** action modifies an existing quotation in the SAP using the document number (DocNum). It allows updating header details, address information, document lines, and additional expenses.

This action is commonly used to **modify quotation details**, **update pricing or items**, and **maintain accurate sales records**.

:::note
Only the fields provided will be updated. Fields left empty will remain unchanged in the quotation.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-UQT61.jpg" width="700"  alt="SAP B1 Update quotation step 1 of 6 screenshot" />

Click on the **Continue** button.

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocEntry | Enter the quotation document number to be updated. (e.g., "503") |
| Optional Document Fields  
| DocDueDate | Update the due date of the quotation. (e.g., "2026-08-09") | 
| CardCode | CardCode will be unique. (e.g., "BC6129916") |
| NumAtCard | Update the customer reference number. (e.g., "Ref-100") |
| ShipToStreet | Enter the ShipTo street. (e.g., "Madhura Nagar") |
| ShipToBlock | Enter the ShipTo block. (e.g., "B70 TLR Residency") |
| ShipToCity | Enter the ShipTo city. (e.g., "Hyderabad") |
| ShipToCountry | Enter the ShipTo country. (e.g., "India") |
| ShipToZipCode | Enter the ShipTo ZIP code. (e.g., "500038") |
| ShipToState | Enter the ShipTo state. (e.g., "Telangana") |
| BillToStreet | Enter the BillTo street. (e.g., "Begumpet") |
| BillToBlock | Enter the BillTo block. (e.g., "Lane 2") |
| BillToCity | Enter the BillTo city. (e.g., "Hyderabad") |
| BillToCountry | Enter the BillTo country. (e.g., "India") |
| BillToZipCode | Enter the BillTo ZIP code. (e.g., "500016") |
| BillToState | Enter the BillTo state. (e.g., "Telangana") |
| DocumentLines
ItemCode | Unique identifier of the item. (e.g., "BCB2B0001")
| Quantity | Quantity of the item. (e.g., "5") |
| Optional Fields (Document Lines)
UnitPrice | Price per unit of the item. (e.g., "123") |
| TaxCode | Tax code applicable to the item. (e.g., "NT") |
| Vat Group | VAT group classification. (e.g., "VAT1") |
| Discount Percentage | Discount applied to the item. (e.g., "10") |
| Document Additional Expenses (Optional) 
Freight or Expenses Code | Additional costs applied to the quotation such as freight, handling, or service charges. (e.g., "300") |

Click on the **Continue** button, then **Run** the node.

##### Example Configuration 

<img src="/img/credentials/sap-b1/SAP-AC-UQT62.jpg" width="700"  alt="SAP B1 Update quotation step 2 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UQT63.jpg" width="700"  alt="SAP B1 Update quotation step 3 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UQT64.jpg" width="700"  alt="SAP B1 Update quotation step 4 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UQT65.jpg" width="700"  alt="SAP B1 Update quotation step 5 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UQT66.jpg" width="700"  alt="SAP B1 Update quotation step 6 of 6 screenshot" />

##### Result
```json
[
  {
    "_pair_index": 0,
    "value": ""
  }
]
```

-----------

#### Update quotation customer reference no

**Update Quotation Customer Reference Number** action updates the customer reference number (`NumAtCard`) for an existing quotation in the SAP.

This action is commonly used to **update customer-specific references**, **align documents with external systems**, or **correct quotation details**.

:::note
Only the `NumAtCard` field will be updated for the specified quotation. Ensure the correct DocEntry is provided to avoid updating the wrong record.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-UQTbyNumAtCard68.jpg" width="700"  alt="SAP B1 Update quotation customer reference no step 1 of 2 screenshot" />

Click on the **Continue** button.

---------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocEntry | Enter the internal document entry number of the quotation. (e.g., "503") |
| NumAtCard | Enter the updated customer reference number. (e.g., "REF-104") |

Click on the **Continue** button, then **Run** the node.

---------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-UQTbyNumAtCard69.jpg" width="700"  alt="SAP B1 Update quotation customer reference no step 2 of 2 screenshot" />

------------------

##### Result
```json
[
  {
    "_pair_index": 0,
    "value": ""
  }
]
```

------------------

### Orders Actions

#### Get an sales order by customer reference no

**Get a Sales Order by Customer Reference Number** action retrieves sales order details using the customer reference number (`NumAtCard`). It returns the matching sales order record as a structured object.

This action is commonly used to **lookup sales order details**, **track customer-specific references**, **validate records**, or **fetch order data for further processing**.

:::note
If multiple sales orders match the provided reference number, SAP may return the first matching result or a list based on configuration. If no match is found, the output will be empty or null.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GETSObyCRno71.jpg" width="700"  alt="SAP B1 Get an sales order by customer reference no step 1 of 2 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| NumAtCard | Enter the customer reference number associated with the sales order. (e.g., "Ref-104") |

Click on the **Continue** button, then **Run** the node.

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GETSObyNumAtCard72.jpg" width="700"  alt="SAP B1 Get an sales order by customer reference no step 2 of 2 screenshot" />

------------

##### Result
```json
[
  {
    "DocEntry": 11464,
    "DocNum": 503,
    "NumAtCard": "Ref-104",
    "CardCode": "BC6129916",
    "DocTotal": 1280
  }
]
```

#### Get order list by item code

**Get Order List by Item Code** action retrieves a list of sales orders that contain a specific item. It returns the matching orders as a structured collection of records.

This action is commonly used to **track item demand**, **analyze order history**, **monitor sales activity**, or **fetch related orders for processing**.

:::note
The result will include only up to the specified size limit. If no matching records are found, the output will be empty.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GETSOLbyIC74.jpg" width="700"  alt="SAP B1 Get order list by item code step 1 of 2 screenshot" />

Click on the **Continue** button.

----------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| Size Limit | Specify the maximum number of records to retrieve. (e.g., "100") |
| Item Code | Enter the unique identifier of the item to search for in orders. (e.g., "BCB2B0001") |

Click on the **Continue** button, then **Run** the node.

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GETSOLbyIC75.jpg" width="700"  alt="SAP B1 Get order list by item code step 2 of 2 screenshot" />

----------

##### Result
```json
[
  {
    "DocEntry": 11464,
    "DocNum": 503,
    "ItemCode": "BCB2B0001",
    "Quantity": 5,
    "CardCode": "BC6129916"
  }
]
```

---------

#### Create a new sales order

**Create New Sales Order** action creates a new sales order in the SAP using customer, item, and delivery details. It captures all configured data and stores it as a structured document for further processing.

This action is commonly used to **create customer orders**, **manage sales transactions**.

:::note
Mandatory fields must be provided to create a sales order. Optional fields can be configured as needed without blocking the process.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CNO77.jpg" width="700"  alt="SAP B1 Create a new sales order step 1 of 5 screenshot" />

Click on the **Continue** button.

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| Document Date | Specify the date of the sales order. (e.g., "2026-04-01") |
| Document Due Date | Specify the due or delivery date. (e.g., "2026-04-05") |
| Card Code | Enter the customer code. (e.g., "BC6129916") |
| DocumentLines
ItemCode | Unique identifier of the item. (e.g., "BCB2B0001")
| Quantity | Quantity of the item. (e.g., "5") |
| Optional Fields (Document Lines)
UnitPrice | Price per unit of the item. (e.g., "123") |
| TaxCode | Tax code applicable to the item. (e.g., "NT") |
| Vat Group | VAT group classification. (e.g., "VAT1") |
| Discount Percentage | Discount applied to the item. (e.g., "10") |
| Additional Fields 
Contact Person Code | Identifier for the contact person. (e.g., "134") |
| NumAtCard | Customer reference number. (e.g., "Ref-104") |
| ShipToStreet | Enter the ShipTo street. (e.g., "Madhura Nagar") |
| ShipToBlock | Enter the ShipTo block. (e.g., "B70 TLR Residency") |
| ShipToCity | Enter the ShipTo city. (e.g., "Hyderabad") |
| ShipToCountry | Enter the ShipTo country. (e.g., "India") |
| ShipToZipCode | Enter the ShipTo ZIP code. (e.g., "500038") |
| ShipToState | Enter the ShipTo state. (e.g., "Telangana") |
| BillToStreet | Enter the BillTo street. (e.g., "Begumpet") |
| BillToBlock | Enter the BillTo block. (e.g., "Lane 2") |
| BillToCity | Enter the BillTo city. (e.g., "Hyderabad") |
| BillToCountry | Enter the BillTo country. (e.g., "India") |
| BillToZipCode | Enter the BillTo ZIP code. (e.g., "500016") |
| BillToState | Enter the BillTo state. (e.g., "Telangana") |
| Document Additional Expenses (Optional) 
Freight or Expenses Code | Additional costs applied to the quotation such as freight, handling, or service charges. (e.g., "300") |

-------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CNO78.jpg" width="700"  alt="SAP B1 Create a new sales order step 2 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNO79.jpg" width="700"  alt="SAP B1 Create a new sales order step 3 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNO80.jpg" width="700"  alt="SAP B1 Create a new sales order step 4 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNO81.jpg" width="700"  alt="SAP B1 Create a new sales order step 5 of 5 screenshot" />

------------

##### Result
```json
[
  {
    "DocEntry": 11464,
    "DocNum": 503,
    "DocDate": "2026-04-01",
    "DocDueDate": "2026-04-05",
    "CardCode": "BC6129916",
    "DocumentLines": [
      {
        "ItemCode": "BCB2B0001",
        "Quantity": 5,
        "UnitPrice": 123
      }
    ]
  }
]
```

------------------

#### Create a Service

**Create Service** action creates a service-type document (Order or Quotation) in the SAP using customer and service details. It captures all configured data and stores it as a structured document for further processing.

This action is commonly used to **create service orders or quotations**, **manage service-based transactions**, and **track customer service activities**.

:::note
Mandatory fields must be provided to create the service document. Optional fields can be configured as needed.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CS83.jpg" width="700"  alt="SAP B1 Create a Service step 1 of 4 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| Object Type | Select the document type (**Orders** or **Quotation**). (e.g., "orders") |
| Card Code | Enter the customer code. (e.g., "BC6129916") |
| Document Date | Specify the document date. (e.g., "2026-04-01") |
| Document Due Date | Specify the due date. (e.g., "2026-05-09") |
| Item Descritpion | Description of the service provided. (e.g., "Installation service") |
| Unit Price | Price per unit of service. (e.g., "200") |
| Quantity | Number of service units. (e.g., "3") |
| Optionals 
TaxCode | Tax code applicable to the item. (e.g., "NT") |
| Discount Percentage | Discount applied to the item. (e.g., "10") |
| Additional Field
Comments | Add any remarks or notes related to the service document. (e.g., "Urgent service request") |

Click on the **Continue** button, then **Run** the node.

----------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CS84.jpg" width="700"  alt="SAP B1 Create a Service step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CS85.jpg" width="700"  alt="SAP B1 Create a Service step 3 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CS86.jpg" width="700"  alt="SAP B1 Create a Service step 4 of 4 screenshot" />

---------

##### Result
```json
[
  {
    "ObjectType": "orders",
    "CardCode": "BC6129916",
    "DocDate": "2026-04-01",
    "DocDueDate": "2026-05-09",
    "ServiceDescription": "Installation service",
    "Quantity": 3,
    "UnitPrice": 200
  }
]
```

---------------------

#### Update Order

**Update Order** action modifies an existing sales order in the SAP using the document entry (DocEntry). It allows updating header details, document lines, address information, and additional expenses.

This action is commonly used to **update order details**, **modify pricing or items**, and **maintain accurate sales records**.

:::note
Only the fields provided will be updated. Fields left empty will remain unchanged in the existing order.
:::

------

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-UO88.jpg" width="700"  alt="SAP B1 Update Order step 1 of 6 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields

| Field         | Description |
|---------------|---------------|
| DocEntry | Enter the internal document entry number of the order. (e.g., "11464") |
| Doc Due Date | Update the due/delivery date. (e.g., "2026-08-11") |
| NumAtCard | Update the customer reference number. (e.g., "Ref-104") |
| Rounding | Enable or disable rounding (**tYes** or **tNo**). (e.g., "tYes") |
| Rounding Difference Amount | Specify the rounding adjustment value. (e.g., "2.50") |
| DocumentLines
ItemCode | Unique identifier of the item. (e.g., "BCB2B0001")
| Quantity | Quantity of the item. (e.g., "8") |
| Optional Fields (Document Lines)
UnitPrice | Price per unit of the item. (e.g., "160") |
| TaxCode | Tax code applicable to the item. (e.g., "NT") |
| Vat Group | VAT group classification. (e.g., "VAT1") |
| Discount Percentage | Discount applied to the item. (e.g., "13") |
| ShipToStreet | Enter the ShipTo street. (e.g., "Madhura Nagar") |
| ShipToBlock | Enter the ShipTo block. (e.g., "B70 TLR Residency") |
| ShipToCity | Enter the ShipTo city. (e.g., "Hyderabad") |
| ShipToCountry | Enter the ShipTo country. (e.g., "India") |
| ShipToZipCode | Enter the ShipTo ZIP code. (e.g., "500038") |
| ShipToState | Enter the ShipTo state. (e.g., "Telangana") |
| BillToStreet | Enter the BillTo street. (e.g., "Begumpet") |
| BillToBlock | Enter the BillTo block. (e.g., "Lane 2") |
| BillToCity | Enter the BillTo city. (e.g., "Hyderabad") |
| BillToCountry | Enter the BillTo country. (e.g., "India") |
| BillToZipCode | Enter the BillTo ZIP code. (e.g., "500016") |
| BillToState | Enter the BillTo state. (e.g., "Telangana") |
| Document Additional Expenses (Optional) 
Freight or Expenses Code | Additional costs applied to the quotation such as freight, handling, or service charges. (e.g., "300") |

Click on the **Continue** button, then **Run** the node.

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-UO89.jpg" width="700"  alt="SAP B1 Update Order step 2 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UO90.jpg" width="700"  alt="SAP B1 Update Order step 3 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UO91.jpg" width="700"  alt="SAP B1 Update Order step 4 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UO92.jpg" width="700"  alt="SAP B1 Update Order step 5 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UO93.jpg" width="700"  alt="SAP B1 Update Order step 6 of 6 screenshot" />

------------

##### Result
```json
[
  {
    "value": ""
  }
]
```

------------------

#### Update salesorder customer reference no

**Update Sales Order Customer Reference Number** action updates the customer reference number (`NumAtCard`) for an existing sales order in the SAP.

This action is commonly used to **update customer-specific references**, **align orders with external systems**, or **correct sales order details**.

:::note
Only the `NumAtCard` field will be updated for the specified sales order. Ensure the correct DocEntry is provided to avoid updating the wrong record.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-USOCRno95.jpg" width="700"  alt="SAP B1 Update salesorder customer reference no step 1 of 2 screenshot" />

Click on the **Continue** button.

----------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocEntry | Enter the internal document entry number of the sales order. (e.g., ("11464")) |
| NumAtCard | Enter the updated customer reference number. (e.g., "Ref-104") |

Click on the **Continue** button, then **Run** the node.

-------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-USOCRno96.jpg" width="700"  alt="SAP B1 Update salesorder customer reference no step 2 of 2 screenshot" />

##### Result
```json
[
  {
    "value": ""
  }
]
```

---------------

#### Cancel a Sales Order

**Cancel Sales Order** action cancels an existing sales order in the SAP using the document entry (DocEntry). Once cancelled, the order is marked as inactive and cannot be processed further.

This action is commonly used to **void incorrect orders**, **handle order cancellations**, or **stop further processing of an order**.

:::note
Once a sales order is cancelled, it cannot be reactivated. Ensure the correct DocEntry is provided before performing this action.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CSO98.jpg" width="700"  alt="SAP B1 Cancel a Sales Order step 1 of 2 screenshot" />

Click on the **Continue** button.

---------------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocEntry | Enter the internal document entry number of the sales order to be cancelled. (e.g., "11464") |

Click on the **Continue** button, then **Run** the node.

----------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CSO99.jpg" width="700"  alt="SAP B1 Cancel a Sales Order step 2 of 2 screenshot" />

##### Result
```json
[
  {
    "DocEntry": 11464,
    "Cancelled": "tYES",
    "DocumentStatus": "bost_Close",
    "Message": "Sales order cancelled successfully"
  }
]
```

--------------

### Invoices Actions

#### Get invoice by DocEntry 

**Get Invoice by DocEntry** action retrieves invoice details using the internal document entry number (`DocEntry`). It returns the matching invoice record as a structured object.

This action is commonly used to **lookup invoice details**, **validate financial records**, **track billing information**, or **fetch invoice data for further processing**.

:::note
If the provided DocEntry does not exist, the output will be empty or null.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GETbyDocEntry113.jpg" width="700"  alt="SAP B1 Get invoice by DocEntry step 1 of 2 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocEntry | Enter the internal document entry number of the invoice. (e.g., "11462") |

Click on the **Continue** button, then **Run** the node.


-----------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GETbyDocEntry114.jpg" width="700"  alt="SAP B1 Get invoice by DocEntry step 2 of 2 screenshot" />

-------------

##### Result
```json
[
  {
    "DocEntry": 11462,
    "DocNum": 715,
    "CardCode": "BC6129916",
    "DocDate": "2026-04-01",
    "DocTotal": 3955
  }
]
```

--------------

#### Get invoice by order DocEntry

**Get Invoice by Order DocEntry** action retrieves invoice details associated with a specific sales order using the order's document entry number. It returns the related invoice record(s) as structured data.

This action is commonly used to **track invoices generated from orders**, **validate billing against sales orders**, or **fetch related financial documents for processing**.

:::note
If no invoices are linked to the provided order DocEntry, the output will be empty or null. In case of multiple invoices, the SAP may return one or a list based on configuration.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GETbyODRDocEntry110.jpg" width="700"  alt="SAP B1 Get invoice by order DocEntry step 1 of 2 screenshot" />

Click on the **Continue** button.

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocEntry | Enter the internal document entry number of the sales order. (e.g., "11464") |

Click on the **Continue** button, then **Run** the node.

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GETbyODRDocEntry111.jpg" width="700"  alt="SAP B1 Get invoice by order DocEntry step 2 of 2 screenshot" />

-----------

##### Result
```json
[
  {
    "Invoice": {
      "DocEntry": 11462,
      "DocNum": 715,
      "BaseEntry": 11464
    },
    "DocumentLines": [
      {
        "ItemCode": "BCB2B0001",
        "Quantity": 7,
        "BaseType": 17
      }
    ]
  }
]
```

-------------

#### Get invoice by NumAtCard

**Get Invoice by Customer Reference Number** action retrieves invoice details using the customer reference number (`NumAtCard`). It returns the matching invoice record(s) as structured data.

This action is commonly used to **lookup invoice details**, **track customer-specific references**, **validate billing records**, or **fetch invoice data for further processing**.

:::note
If multiple invoices match the provided reference number, the system may return a single record or a list based on configuration. If no match is found, the output will be empty or null.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GETINVbyNumAtCard107.jpg" width="700"  alt="SAP B1 Get invoice by NumAtCard step 1 of 2 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| NumAtCard | Enter the customer reference number associated with the invoice. (e.g., "REF-INV01") |

Click on the **Continue** button, then **Run** the node.

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GETINVbyNumAtCard108.jpg" width="700"  alt="SAP B1 Get invoice by NumAtCard step 2 of 2 screenshot" />

##### Result
```json
[
  {
    "DocEntry": 11462,
    "DocNum": 715,
    "NumAtCard": "REF-INV01",
    "CardCode": "BC6129916",
    "DocTotal": 3955
  }
]
```

-------------

#### Create a new AR invoice

**Create New AR Invoice** action creates a new Accounts Receivable invoice in the SAP using customer and item details. It supports both standard AR invoices and reserve invoices.

This action is commonly used to **generate invoices**, **bill customers**, and **manage financial transactions**.

:::note
Mandatory fields must be provided to create an invoice. Optional fields can be configured as needed without blocking the process.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CNINV102.jpg" width="700"  alt="SAP B1 Create a new AR invoice step 1 of 4 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocDate | Specify the invoice date. (e.g., "2026-04-01") |
| DocDueDate | Specify the due date of the invoice. (e.g., "2026-05-19") |
| CardCode | Enter the customer code. (e.g., "BC6129916") |
| Reserve Invoice | Select the invoice type (**AR Invoice** or **Reserve Invoice**). (e.g., "AR Invoice") |
| DocumentLines
ItemCode | Unique identifier of the item. (e.g., "WOOCOM101")
| Quantity | Quantity of the item. (e.g., "7") |
| TaxCode | Tax code applicable to the item. (e.g., "NT") |
| Optional Fields (Document Lines)
UnitPrice | Price per unit of the item. (e.g., "500") |
| Vat Group | VAT group classification. (e.g., "VAT1") |
| Discount Percentage | Discount applied to the item. (e.g., "13") |
| BaseLine | Base document line reference. (e.g., "0") |
| BaseType | Base document type. (e.g., "-1") |
| BaseEntry | Base document entry reference. (e.g., "1455") |
| NumAtCard | Enter the customer reference number. (e.g., "REF-INV01") |
| ContactPerson | Identifier of the contact person. (e.g., "134") |
| Document Additional Expenses (Optional) 
Freight or Expenses Code | Additional costs applied to the quotation such as freight, handling, or service charges. (e.g., "300") |

Click on the **Continue** button, then **Run** the node.

------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CNINV103.jpg" width="700"  alt="SAP B1 Create a new AR invoice step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNINV104.jpg" width="700"  alt="SAP B1 Create a new AR invoice step 3 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNINV105.jpg" width="700"  alt="SAP B1 Create a new AR invoice step 4 of 4 screenshot" />

------------

##### Result
```json
[
  {
    "DocEntry": 11462,
    "DocNum": 715,
    "DocDate": "2026-04-01",
    "DocDueDate": "2026-05-19",
    "CardCode": "BC6129916",
    "ReserveInvoice": "AR Invoice",
    "NumAtCard": "REF-INV01",
    "ContactPerson": 134,
    "DocumentLines": [
      {
        "ItemCode": "WOOCOM101",
        "Quantity": 7,
        "UnitPrice": 500,
        "TaxCode": "NT"
      }
    ]
  }
]
```

----------------


### Returns Actions

#### Create Returns

**Create Returns** action creates a return document in the system for items returned by a customer. It captures return details and stores them as a structured document for further processing.

This action is commonly used to **process product returns**, **adjust inventory**, and **manage refund or replacement workflows**.

:::note
Mandatory fields must be provided to create a return document. Optional fields can be configured as needed.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CRETURN107.jpg" width="700"  alt="SAP B1 Create Returns step 1 of 4 screenshot" />

Click on the **Continue** button.

----------

##### Configuration Fields

| Field          | Description |
|---------------|---------------|
| DocDate | Specify the invoice date. (e.g., "2026-04-01") |
| DocDueDate | Specify the due date of the invoice. (e.g., "2026-05-19") |
| CardCode | Enter the customer code. (e.g., "ZC0001") |
| DocumentLines
ItemCode | Unique identifier of the item. (e.g., "DIET001")
| Quantity | Quantity of the item. (e.g., "1") |
| TaxCode | Tax code applicable to the item. (e.g., "NT") |
| Optional Fields (Document Lines)
UnitPrice | Price per unit of the item. (e.g., "20") |
| Vat Group | VAT group classification. (e.g., "tNO") |
| Discount Percentage | Discount applied to the item. (e.g., "0") |
| Warehouse | Warehouse where the return is processed. (e.g., "01") |
| BaseLine | Base document line reference. (e.g., "0") |
| BaseType | Base document type. (e.g., "-1") |
| BaseEntry | Base document entry reference. (e.g., "1455") |
| NumAtCard | Enter the customer reference number. (e.g., "REF-INV01") |
| ContactPerson | Identifier of the contact person. (e.g., "134") |
| Document Additional Expenses (Optional) 
Freight or Expenses Code | Additional costs such as handling or return charges. (e.g., "300") |
| Comments | Add remarks related to the return. (e.g., "Damaged item returned") |

Click on the **Continue** button, then **Run** the node.

--------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CRETURN108.jpg" width="700"  alt="SAP B1 Create Returns step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CRETURN109.jpg" width="700"  alt="SAP B1 Create Returns step 3 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CRETURN110.jpg" width="700"  alt="SAP B1 Create Returns step 4 of 4 screenshot" />

-------------

##### Result
```json
[
  {
    "DocEntry": 205,
    "DocNum": 88,
    "DocDate": "2026-04-01",
    "DocDueDate": "2026-05-19",
    "CardCode": "ZC0001",
    "NumAtCard": "REF-INV01",
    "ContactPerson": 134,
    "Comments": "Damaged item returned",
    "DocumentLines": [
      {
        "ItemCode": "DIET001",
        "Quantity": 1,
        "UnitPrice": 20,
        "TaxCode": "NT",
        "WarehouseCode": "01"
      }
    ]
  }
]
```

--------------------

### ServiceCall Actions

#### Create Service Call

**Create Service Call** action creates a new service request in the SAP with customer, item, and issue details. It helps in tracking service activities and managing support processes.

:::note
 Mandatory fields must be provided to create a service call. Optional fields can be configured based on business requirements.
 :::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CSRVCCL121.jpg" width="700"  alt="SAP B1 Create Service Call step 1 of 7 screenshot" />

Click on the **Continue** button.

-----------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Customer Code | Enter the customer code. (e.g., "BC6129916") |
| Subject | Provide the subject of the service call. (e.g., "DemoCall") |
| Status | Define the current status of the service call. (e.g., "Open") |
| Customer Name | Enter the name of the customer. (e.g., "MAX") |
| Contact Person Code | Identifier of the contact person. (e.g., "134") |
| Description | Detailed description of the issue/request. (e.g., "This call is regarding testing purposes.") |
| Priority | Set the priority level. (e.g., "High") |
| Start Date | Specify the start date of the service. (e.g., "2026-04-06") |
| Start Time | Specify the start time. (e.g., "17:32:00") |
| End Due Date | Specify the expected completion date. (e.g., "2026-04-20") |
| End Time | Specify the expected completion time. (e.g., "23:32:00") |
| Assigned Date | Date when the service is assigned. (e.g., "2026-04-01") |
| Item Code | Unique identifier of the item. (e.g., "BCB2B0001") |
| Item Description | Description of the item. (e.g., "Hyderated Water Bottle1") |
| Item Group Code | Categorizes the item. (e.g., "100") |
| Optionals
| Ship To Address Type | Type of shipping address. (e.g., "Customer") |
| ShipToStreet | Shipping street address. (e.g., "Domin Street") |
| Ship To Address 2 | Additional shipping address line. (e.g., "District Complex") |
| Ship To Address 3 | Additional shipping address line. (e.g., "Old Star Build") |
| ShipToBlock | Shipping block or area. (e.g., "Omega Block") |
| ShipToCity | Shipping city. (e.g., "Hyderabad") |
| ShipToCountry | Shipping country. (e.g., "India") |
| ShipToZipCode | Shipping postal code. (e.g., "500033") |
| ShipToState | Shipping state. (e.g., "Telangana") |
| Bill To Address Type | Type of billing address. (e.g., "Customer") |
| BillToStreet | Billing street address. (e.g., "Zing Street") |
| Bill To Address 2 | Additional billing address line. (e.g., "Domestic Resort") |
| Bill To Address 3 | Additional billing address line. (e.g., "Merchant street") |
| BillToBlock | Billing block or area. (e.g., "d block valley") |
| BillToCity | Billing city. (e.g., "Hyderabad") |
| BillToCountry | Billing country. (e.g., "India") |
| BillToZipCode | Billing postal code. (e.g., "500002") |
| BillToState | Billing state. (e.g., "Telangana") |

Click on the **Continue** button, then **Run** the node.

-----------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCL122.jpg" width="700"  alt="SAP B1 Create Service Call step 2 of 7 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCL123.jpg" width="700"  alt="SAP B1 Create Service Call step 3 of 7 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCL124.jpg" width="700"  alt="SAP B1 Create Service Call step 4 of 7 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCL125.jpg" width="700"  alt="SAP B1 Create Service Call step 5 of 7 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCL126.jpg" width="700"  alt="SAP B1 Create Service Call step 6 of 7 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCL127.jpg" width="700"  alt="SAP B1 Create Service Call step 7 of 7 screenshot" />

---------------

##### Result
```json
[
  {
    "ServiceCallID": 1024,
    "CustomerCode": "BC6129916",
    "CustomerName": "MAX",
    "ContactPersonCode": 134,
    "Subject": "DemoCall",
    "Description": "This call is regarding testing purposes.",
    "Status": "Open",
    "Priority": "High",
    "StartDate": "2026-04-06",
    "StartTime": "17:32:00",
    "EndDueDate": "2026-04-20",
    "EndTime": "23:32:00",
    "ItemCode": "BCB2B0001",
    "ItemDescription": "Hyderated Water Bottle1"
  }
]
```

--------------


#### Update Service Call

**Update Service Call** action is used to modify an existing service request with updated customer, item, status, and resolution details. It helps in tracking progress, updating issue status, and maintaining service history.

:::note
Ensure valid status and priority values are selected based on business rules. Optional address fields can be updated if required.
:::
##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-USVCL130.jpg" width="700"  alt="SAP B1 Update Service Call step 1 of 8 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Service Call Id | Enter the service call identifier. (e.g., "84") |
| Customer Code | Enter the customer code. (e.g., "BC6129916") |
| Customer Name | Enter the name of the customer. (e.g., "MAX WELL") |
| Contact Person Code | Identifier of the contact person. (e.g., "134") |
| Subject | Provide the subject of the service call. (e.g., "DemoCall - updated") |
| Description | Updated description of the issue. (e.g., "This call is regarding testing purposes.") |
| Priority | Select priority based on requirement. (e.g., "Medium") |
| Status | Select current status. (e.g., "Closed") |
| Start Date | Specify the start date. (e.g., "2026-04-06") |
| Start Time | Specify the start time. (e.g., "17:32:00") |
| End Due Date | Specify the expected completion date. (e.g., "2026-04-20") |
| End Time | Specify the expected completion time. (e.g., "23:32:00") |
| Assigned Date | Date when the service is assigned. (e.g., "2026-04-01") |
| Item Code | Unique identifier of the item. (e.g., "BCB2B0001") |
| Item Description | Description of the item. (e.g., "Hyderated Water Bottle1") |
| Item Group Code | Categorizes the item. (e.g., "100") |
| Resolution | Final resolution or action taken. (e.g., "Test") |
| Optional Fields
Ship To Address Type | Type of shipping address. (e.g., "Customer") |
| ShipToStreet | Shipping street address. (e.g., "Domin Street") |
| Ship To Address 2 | Additional shipping address line. (e.g., "District Complex") |
| Ship To Address 3 | Additional shipping address line. (e.g., "Old Star Build") |
| Ship To Number | Shipping Number. (e.g., "1/33 Valley")
| ShipToBlock | Shipping block/area. (e.g., "Omega Block") |
| ShipToCity | Shipping city. (e.g., "Hyderabad") |
| ShipToCountry | Shipping country. (e.g., "IN") |
| ShipToZipCode | Shipping postal code. (e.g., "500033") |
| ShipToState | Shipping state. (e.g., "TS") |
| Bill To Address Type | Type of billing address. (e.g., "Customer") |
| BillToStreet | Billing street address. (e.g., "Zing Street") |
| Billing to Street Number | Billing Street Number (e.g., "1-987") |
| Bill To Address 2 | Additional billing address line. (e.g., "Domestic Resort") |
| Bill To Address 3 | Additional billing address line. (e.g., "Merchant street") |
| BillToBlock | Billing block/area. (e.g., "d block valley") |
| BillToCity | Billing city. (e.g., "Hyderabad") |
| BillToCountry | Billing country. (e.g., "IN") |
| BillToZipCode | Billing postal code. (e.g., "500002") |
| BillToState | Billing state. (e.g., "TS") |

Click on the **Continue** button, then **Run** the node.

-------------

##### Example Configuration
<img src="/img/credentials/sap-b1/SAP-AC-USRVCCL131.jpg" width="700"  alt="SAP B1 Update Service Call step 2 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USRVCCL132.jpg" width="700"  alt="SAP B1 Update Service Call step 3 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USRVCCL133.jpg" width="700"  alt="SAP B1 Update Service Call step 4 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USRVCCL134.jpg" width="700"  alt="SAP B1 Update Service Call step 5 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USRVCCL135.jpg" width="700"  alt="SAP B1 Update Service Call step 6 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USRVCCL136.jpg" width="700"  alt="SAP B1 Update Service Call step 7 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USRVCCL137.jpg" width="700"  alt="SAP B1 Update Service Call step 8 of 8 screenshot" />

-----------

##### Result
```json
[
  {
    "value": ""
  }
]
```

--------------------


### SalesOpportunities Actions

#### Create a new Sales Opportunity

**Create a New Sales Opportunity** action is used to record potential sales deals in the SAP. It helps track leads, monitor progress through different stages, and estimate revenue.

:::note
Sales Opportunity Lines are mandatory to track stages and progress of the opportunity. Optional fields can be configured based on business requirements.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CNSOPPR141.jpg" width="700"  alt="SAP B1 Create a new Sales Opportunity step 1 of 8 screenshot" />

Click on the **Continue** button.

----------

##### Configuration Fields

| Field | Description |
|------|-------------|
| BusinessPartner Code | Enter the customer/business partner code. (e.g., "BC6129916") |
| Opportunity Name | Provide the name of the opportunity. (e.g., "Demo Opportunity") |
| Start Date | Specify the opportunity start date. (e.g., "2026-04-06") |
##### Sales Opportunity Lines

| Field | Description |
|------|-------------|
| Start Date | Specify the start date of the stage. (e.g., "2026-04-06") |
| Closing Date | Expected closing date of the opportunity. (e.g., "2026-04-06") |
| Maximum Local Total | Estimated maximum value of the opportunity. (e.g., "80000") |
| Stage Key | Define the stage of the opportunity. (e.g., "3") |
##### Optional Fields

| Contact Person Code | Identifier of the contact person. (e.g., "134") |
| Total Amount | Total estimated value of the opportunity. (e.g., "80000") |
| Remarks | Additional notes or comments. (e.g., "Test Demo") |

Click on the **Continue** button, then **Run** the node.

----------------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CNSOPP142.jpg" width="700"  alt="SAP B1 Create a new Sales Opportunity step 2 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNSOPP143.jpg" width="700"  alt="SAP B1 Create a new Sales Opportunity step 3 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNSOPP144.jpg" width="700"  alt="SAP B1 Create a new Sales Opportunity step 4 of 8 screenshot" />

------------

##### Result
```json
[
  {
    "OpportunityName": "Demo Opportunity",
    "CardCode": "BC6129916",
    "CustomerName": "MAX6",
    "StartDate": "2026-04-06",
    "PredictedClosingDate": "2026-04-06",
    "Status": "sos_Open",
    "Remarks": "Test Demo",
    "TotalAmountLocal": 80000,
    "TotalAmounSystem": 80000,
    "ClosingPercentage": 100,
    "CurrentStageNo": 3,
    "SalesPerson": -1,

    "SalesOpportunitiesLines": [
      {
        "StageKey": 3,
        "StartDate": "2026-04-06",
        "ClosingDate": "2026-04-06",
        "MaxLocalTotal": 80000,
        "MaxSystemTotal": 80000,
        "PercentageRate": 100,
        "WeightedAmountLocal": 80000,
        "WeightedAmountSystem": 80000
      }
    ]
  }
]
```

-------------


### Exchange Rate Actions

#### Get Currency Exchange Rate

**Get Currency Exchange Rate** action retrieves the exchange rate between two currencies for a specific date. It helps in financial calculations, reporting, and currency conversions.

This action is commonly used to **convert currencies**, **calculate financial values**, or **fetch historical exchange rates**.

:::note
If no date is provided, the system may return the latest available exchange rate.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GCRNCYRATE147.jpg" width="700"  alt="SAP B1 Get Currency Exchange Rate step 1 of 2 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Currency Code | Enter the currency code for which the exchange rate is required. (e.g., "Indian Rupee") |
| Date | Specify the date to fetch the exchange rate. (e.g., "2026-04-06") |

Click on the **Continue** button, then **Run** the node.

------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GCRNCYRATE148.jpg" width="700"  alt="SAP B1 Get Currency Exchange Rate step 2 of 2 screenshot" />

----------

##### Result
```json
[
  {
    "value": "5.60"
  }
]
```

------------


#### Set Currency Rate

**Set Currency Rate** action is used to define or update the exchange rate for a specific currency on a given date. This is useful for maintaining accurate financial records and currency conversions.

:::note
Ensure the exchange rate is accurate, as it impacts financial transactions and reporting.
:::

--------------

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-STCRNCYRATE150.jpg" width="700"  alt="SAP B1 Set Currency Rate step 1 of 2 screenshot" />

Click on the **Continue** button.

------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Currency Code | Enter the currency code for which the rate is being set. (e.g., "INR") |
| Rate Date | Specify the date for the exchange rate. (e.g., "2026-04-06") |
| Exchange Rate | Enter the exchange rate value. (e.g., "3.9") |

Click on the **Continue** button, then **Run** the node.

-------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-SCRNCYRATE151.jpg" width="700"  alt="SAP B1 Set Currency Rate step 2 of 2 screenshot" />

-----------

##### Result
```json
[
  {
    "Currency": "INR",
    "RateDate": "2026-04-06",
    "ExchangeRate": 3.9,
    "Status": "success",
    "Message": "Currency rate updated successfully"
  }
]
```

--------------------


### Sales Tax Codes Actions

#### Create Sales Tax Code

**Create Sales Tax Code** action is used to define a new tax code in the SAP. It helps manage taxation rules for sales and purchasing transactions.

:::note
Tax configurations should be set carefully as they directly impact financial calculations and compliance.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CSLSTAXCODE234.jpg" width="700"  alt="SAP B1 Create Sales Tax Code step 1 of 2 screenshot" />

Click on the **Continue** button.

------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Tax Code | Unique identifier for the tax. (e.g., "IMST") |
| Tax Name | Name of the tax. (e.g., "IMST") |
| Tax Rate (%) | Percentage of the tax rate. (e.g., "5") |
##### Sales Tax Code Lines

| Field | Description |
|------|-------------|
| Tax Authority Code (STACode) | Code representing the tax authority. (e.g., "CA") |
| Tax Authority Type (STAType) | Type of tax authority. (e.g., "Country") |
##### Optional Fields

| Field | Description |
|------|-------------|
| Sales Tax Code | Additional tax code reference if applicable. (e.g., "GST_SALES") |
| Effective Rate | Effective tax rate after adjustments. (e.g., "18") |
| Tax on Tax Code | Specifies dependent tax code. (e.g., "CESS") |
| Tax on Tax Type | Type of tax applied on another tax. (e.g., "Inclusive") |
##### Additional Optional Settings

| Field | Description |
|------|-------------|
| Valid for AR (Accounts Receivable) | Indicates if applicable for sales transactions. (e.g., "Yes") |
| Valid for AP (Accounts Payable) | Indicates if applicable for purchase transactions. (e.g., "Yes") |
| Freight | Specifies if tax applies to freight charges. (e.g., "Yes") |
| Is Item Level | Determines if tax is applied at item level. (e.g., "Yes") |
| FA Debit | Indicates if applicable for fixed asset debit. (e.g., "No") |
| Inactive | Marks the tax code as inactive if not in use. (e.g., "No") |

Click on the **Continue** button, then **Run** the node.

-------------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CSLSTAXCODE235.jpg" width="700"  alt="SAP B1 Create Sales Tax Code step 2 of 2 screenshot" />

-------------

##### Result
```json
[
  {
    "odata.metadata": "https://insync.pro/b1s/v1/$metadata#SalesTaxCodes/@Element",
    "ValidForAR": "tYES",
    "ValidForAP": "tYES",
    "UserSignature": 7,
    "Rate": 5,
    "Name": "IMST",
    "Freight": "tNO",
    "Code": "IMST",
    "IsItemLevel": "tNO",
    "Inactive": "tNO",
    "FADebit": "tNO",
    "SalesTaxCodes_Lines": [
      {
        "STATaxOnTaxType": null,
        "STATaxonTaxCode": null,
        "STCCode": "IMST",
        "STAType": -3,
        "STACode": "CA",
        "RowNumber": 0,
        "EffectiveRate": 6
      }
    ]
  }
]
```
--------------------

#### Update Sales Tax Code

**Update Sales Tax Code** action is used to modify an existing tax code in the SAP. It allows updating tax details and configurations based on business or compliance requirements.

##### Select the Credential and Action Event
Click on the **Continue** button.

-------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Tax Code (Identifier) | Enter the unique tax code to be updated. (e.g., "IMST") |
| Tax Name | Name of the tax. (e.g., "IMST") |
| Tax Rate (%) | Percentage of the tax rate. (e.g., "6") |
##### Sales Tax Code Lines

| Field | Description |
|------|-------------|
| Tax Authority Code (STACode) | Code representing the tax authority. (e.g., "CA") |
| Tax Authority Type (STAType) | Type of tax authority. (e.g., "Country") |
##### Optional Fields

| Field | Description |
|------|-------------|
| Sales Tax Code | Additional tax code reference if applicable. (e.g., "GST_SALES") |
| Effective Rate | Effective tax rate after adjustments. (e.g., "18") |
| Tax on Tax Code | Specifies dependent tax code. (e.g., "CESS") |
| Tax on Tax Type | Type of tax applied on another tax. (e.g., "Inclusive") |
##### Additional Optional Settings

| Field | Description |
|------|-------------|
| Valid for AR (Accounts Receivable) | Indicates if applicable for sales transactions. (e.g., "Yes") |
| Valid for AP (Accounts Payable) | Indicates if applicable for purchase transactions. (e.g., "Yes") |
| Freight | Specifies if tax applies to freight charges. (e.g., "Yes") |
| Is Item Level | Determines if tax is applied at item level. (e.g., "Yes") |
| FA Debit | Indicates if applicable for fixed asset debit. (e.g., "No") |

:::note
Only the provided fields will be updated. Ensure the correct Tax Code is used, as it directly impacts financial calculations and reporting.
:::

Click on the **Continue** button, then **Run** node

-----------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-USLSTAXCODE236.jpg" width="700"  alt="SAP B1 Update Sales Tax Code screenshot" />

----------

##### Result

```json
[
  {
    "value": ""
  }
]
```

-------------------

### Special Prices Action

#### Get Special Prices by Card Code

**Get Special Prices by Card Code** action retrieves all special pricing details configured for a specific business partner. It helps in identifying customer-specific pricing agreements and discounts.

:::note
This action returns all special prices associated with the given Card Code, including item-level pricing and discounts if configured.
:::

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GSPRCbyCRDCDE153.jpg" width="700"  alt="SAP B1 Get Special Prices by Card Code step 1 of 2 screenshot" />

Click on the **Continue** button.

----------

##### Configuration Fields

| Field | Description |
|------|--------------|
| Card Code | Enter the business partner (customer/vendor) code. (e.g., "BC6129916") |

Click on the **Continue** button, then **Run** the node.

------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GETSPRCbyCRDCODE154.jpg" width="700"  alt="SAP B1 Get Special Prices by Card Code step 2 of 2 screenshot" />

--------------

##### Result
```json
[
  {
    "SpecialPrices": {
      "Price": 0,
      "Valid": "Y",
      "ValidTo": null,
      "CardCode": "ZC0001",
      "Currency": null,
      "ItemCode": "DIET001",
      "ValidFrom": null,
      "SourcePrice": 0,
      "PriceListNum": 0,
      "DiscountPercent": 10
    },
    "BusinessPartners": {
      "CardCode": "BC6129916",
      "CardName": "MAX6"
    }
  },
  {
    "SpecialPrices": {
      "Price": 0,
      "Valid": "Y",
      "ValidTo": null,
      "CardCode": "ZC0001",
      "Currency": null,
      "ItemCode": "DIET002",
      "ValidFrom": null,
      "SourcePrice": 0,
      "PriceListNum": 0,
      "DiscountPercent": 10
    },
    "BusinessPartners": {
      "CardCode": "BC6129916",
      "CardName": "MAX6"
    }
  },
  {
    "SpecialPrices": {
      "Price": 0,
      "Valid": "Y",
      "ValidTo": null,
      "CardCode": "ZC0001",
      "Currency": null,
      "ItemCode": "DIET003",
      "ValidFrom": null,
      "SourcePrice": 0,
      "PriceListNum": 0,
      "DiscountPercent": 10
    },
    "BusinessPartners": {
      "CardCode": "BC6129916",
      "CardName": "MAX6"
    }
  },
  {
    "SpecialPrices": {
      "Price": 0,
      "Valid": "Y",
      "ValidTo": null,
      "CardCode": "ZC0001",
      "Currency": null,
      "ItemCode": "1234",
      "ValidFrom": null,
      "SourcePrice": 0,
      "PriceListNum": 0,
      "DiscountPercent": 10
    },
    "BusinessPartners": {
      "CardCode": "BC6129916",
      "CardName": "MAX6"
    }
  }
]
```

--------------

### Return Request Actions

#### Create Return Request

**Create Return Request** action creates a new return request document in the SAP for items that need to be returned. It captures customer, item, and pricing details for further processing.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CRTNRQST161.jpg" width="700"  alt="SAP B1 Create Return Request step 1 of 4 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| DocDate | Specify the return request date. (e.g., "2026-04-30") |
| CardCode | Enter the customer code. (e.g., "BC6129916") |
| Document Lines
ItemCode | Unique identifier of the item. (e.g., "BCB2B0001") |
| Quantity | Quantity of the item to be returned. (e.g., "2") |
| Unit Price | Price per unit. (e.g., "100") |
| Optional Fields (Document Lines)
Tax Code | Applicable tax code. (e.g., "NT") |
| VatGroup | VAT classification. (e.g., "null") |
| DiscountPercentage | Discount applied to the item. (e.g., "0") |
| WarehouseCode | Warehouse for processing return. (e.g., "01") |
| BaseType | Base document type. (e.g., "-1") |
| BaseEntry | Base document entry reference. (e.g., "null") |
| BaseLine | Base document line reference. (e.g., "null") |
| Optional Fields (Header)
DocDate | Specify document date if different. (e.g., "2026-04-10") |
| NumAtCard | Customer reference number. (e.g., "null") |
| ContactPersonCode | Identifier of the contact person. (e.g., "134") |
| Comment | Additional remarks. (e.g., "null") |
| Additional Expenses (Optional)
 Additional Expenses | Extra charges such as handling or logistics. (e.g., "200") |

:::note
Mandatory fields must be provided to create a return request. Optional fields can be configured based on business requirements.
:::

Click on the **Continue** button, then **Run** the node.

-------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CRTNRQST162.jpg" width="700"  alt="SAP B1 Create Return Request step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CRTNRQST163.jpg" width="700"  alt="SAP B1 Create Return Request step 3 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CRTNRQST164.jpg" width="700"  alt="SAP B1 Create Return Request step 4 of 4 screenshot" />

---------

##### Result
```json
[
  {
    "DocEntry": 162,
    "DocNum": 78,
    "DocDate": "2026-04-30",
    "CardCode": "BC6129916",
    "CardName": "MAX6",
    "Comments": null,
    "NumAtCard": null,
    "DocTotal": 200,
    "DocCurrency": "$",
    "ContactPersonCode": 134,
    "DocumentStatus": "bost_Open",
    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "BCB2B0001",
        "Quantity": 2,
        "UnitPrice": 100,
        "TaxCode": "NT",
        "VatGroup": null,
        "DiscountPercent": 0,
        "WarehouseCode": "01",
        "BaseType": -1,
        "BaseEntry": null,
        "BaseLine": null,
        "LineTotal": 200
      }
    ],
    "DocumentAdditionalExpenses": [
      {
        "LineNum": 0,
        "ExpenseCode": 1,
        "LineTotal": 200
      }
    ]
  }
]
```

---------------------


### Sales Opportunities Action

#### Create a new sales opportunity

**Create a New Sales Opportunity** action is used to record and track potential sales deals in the system, including stages, expected value, and customer details.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CSOPP191.jpg" width="700"  alt="SAP B1 Create a new sales opportunity step 5 of 8 screenshot" />

Click on the **Continue** button.

----------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Business Partner Code | Enter the customer/business partner code. (e.g., "BC6129916") |
| Opportunity Name | Provide the name of the opportunity. (e.g., "OPPO TEST 22") |
| Start Date | Specify the opportunity start date and time. (e.g., "14/04/2026 13:18") |
| Sales Opportunity Lines
Start Date | Specify the stage start date and time. (e.g., "14/04/2026 13:20") |
| Closing Date | Expected closing date and time. (e.g., "14/04/2026 13:20") |
| Maximum Local Total | Estimated maximum value of the opportunity. (e.g., "550") |
| Stage Key | Define the stage of the opportunity. (e.g., "1") |
| Optional Fields
Contact Person Code | Identifier of the contact person. (e.g., "134") |
| Total Amount | Total estimated value of the opportunity. (e.g., "550") |
| Remarks | Additional notes or comments. (e.g., "Demo Purpose") |

:::note
Sales Opportunity Lines are required to track the progress and lifecycle of the opportunity. Optional fields can be configured as needed.
:::

Click on the **Continue** button, then **Run** the node.

------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CNSOPP192.jpg" width="700"  alt="SAP B1 Create a new sales opportunity step 6 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNSOPP193.jpg" width="700"  alt="SAP B1 Create a new sales opportunity step 7 of 8 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CNSOPP194.jpg" width="700"  alt="SAP B1 Create a new sales opportunity step 8 of 8 screenshot" />

--------------

##### Result

```json
[
  {
    "odata.metadata": "https://insync.pro/b1s/v1/$metadata#SalesOpportunities/@Element",
    "SequentialNo": 90,
    "CardCode": "BC6129916",
    "SalesPerson": -1,
    "ContactPerson": 134,
    "Source": null,
    "InterestField1": null,
    "InterestField2": null,
    "InterestField3": null,
    "InterestLevel": null,
    "StartDate": "2026-04-14",
    "PredictedClosingDate": "2026-04-14",
    "MaxLocalTotal": 550,
    "MaxSystemTotal": 550,
    "WeightedSumLC": 55,
    "WeightedSumSC": 55,
    "GrossProfit": 0,
    "GrossProfitTotalLocal": 0,
    "GrossProfitTotalSystem": 0,
    "Remarks": "Demo Purpose",
    "Status": "sos_Open",
    "ReasonForClosing": null,
    "TotalAmountLocal": 550,
    "TotalAmounSystem": 550,
    "ClosingGrossProfitLocal": 0,
    "ClosingGrossProfitSystem": 0,
    "ClosingPercentage": 10,
    "CurrentStageNo": 1,
    "CurrentStageNumber": 1,
    "OpportunityName": "OPPO TEST 22",
    "Industry": null,
    "LinkedDocumentType": null,
    "DataOwnershipfield": null,
    "StatusRemarks": null,
    "ProjectCode": null,
    "BPChanelName": null,
    "UserSignature": 7,
    "CustomerName": "MAX6",
    "DocumentCheckbox": null,
    "LinkedDocumentNumber": null,
    "Territory": null,
    "ClosingDate": null,
    "BPChannelContact": null,
    "BPChanelCode": null,
    "ClosingType": "sos_Days",
    "AttachmentEntry": null,
    "OpportunityType": "boOpSales",
    "UpdateDate": "2026-04-14",
    "UpdateTime": "18:51:44",
    "U_WebId": null,
    "SalesOpportunitiesLines": [
      {
        "LineNum": 0,
        "SalesPerson": -1,
        "StartDate": "2026-04-14",
        "ClosingDate": "2026-04-14",
        "StageKey": 1,
        "PercentageRate": 10,
        "MaxLocalTotal": 550,
        "MaxSystemTotal": 550,
        "Remarks": null,
        "Contact": "tNO",
        "Status": "so_Open",
        "WeightedAmountLocal": 55,
        "WeightedAmountSystem": 55,
        "DocumentNumber": null,
        "DocumentType": "bodt_MinusOne",
        "DocumentCheckbox": null,
        "ContactPerson": null,
        "BPChanelName": null,
        "BPChanelCode": null,
        "SequenceNo": 90,
        "DataOwnershipfield": null,
        "BPChannelContact": null
      }
    ],
    "SalesOpportunitiesCompetition": [],
    "SalesOpportunitiesPartners": [],
    "SalesOpportunitiesInterests": [],
    "SalesOpportunitiesReasons": []
  }
]
```

--------------------

### Purchase Order Action

#### Create Purchase Order

**Create Purchase Order** action creates a new purchase order in the SAP for procuring goods or services from a vendor. It captures vendor, item, pricing, and delivery details.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CPRORD205.jpg" width="700"  alt="SAP B1 Create Purchase Order step 1 of 6 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Vendor Code | Enter the vendor code. (e.g., "SRITEST") |
| Document Date | Specify the purchase order date. (e.g., "2026-04-17") |
| Delivery Date | Specify the expected delivery date. (e.g., "2026-04-24") |
| Document Lines
Item Code | Unique identifier of the item. (e.g., "DIET002") |
| Quantity | Quantity of the item. (e.g., "10") |
| Unit Price | Price per unit. (e.g., "20") |
| Optional Fields (Document Lines)
Item Description | Description of the item. (e.g., "TEST") |
| Discount Percentage | Discount applied to the item. (e.g., "2") |
| Tax Code | Applicable tax code. (e.g., "NT") |
| Warehouse Code | Warehouse for receiving goods. (e.g., "01") |
| Required Date | Required delivery date for the item. (e.g., "2026-04-17") |
| VAT Group | VAT classification. (e.g., "VAT18") |
| Optional Fields (Header)
Vendor Reference No | Vendor-provided reference number. (e.g., "728902") |
| Ship To Address Code | Code for shipping address. (e.g., "SHIP 001") |
| Bill To Address Code | Code for billing address. (e.g., "BILL 001") |
| Remarks | Additional notes. (e.g., "Urgent order or Demo purpose") |
| Contact Person Code | Identifier of the contact person. (e.g., "134") |
| Document Currency | Currency of the document. (e.g., "$") |
| Discount Percentage | Overall document discount. (e.g., "5") |
| Additional Expenses | Extra charges such as freight. (e.g., "300") |
| Address Extension (Optional)
Ship To Address |
| ShipToStreet | Shipping street address (e.g., "Lake Street")|
| ShipToStreetNo | Street number (e.g., "1/33") |
| ShipToCity | City (e.g., "Hyderabad") |
| ShipToZipCode | Postal code (e.g., "500039") |
| ShipToCountry | Country (e.g., "IN") |
| ShipToState | State (e.g., "TS") |
| BillToStreet | Billing street address (e.g., "Mark street") | 
| BillToStreetNo | Street number (e.g., "RD 200") | 
| BillToBuilding | Building name (e.g., "Lake Apartment") |
| BillToCity | City (e.g., "Hyderabad") |
| BillToZipCode | Postal code (e.g., "500038") |
| BillToCountry | Country (e.g., "IN") |
| BillToState | State (e.g., "TS") |
| BillToAddressType | Address type |

:::note
Mandatory fields must be provided to create a purchase order. Optional fields can be configured based on business requirements.
:::

Click on the **Continue** button, then **Run** the node.

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CPRORD200.jpg" width="700"  alt="SAP B1 Create Purchase Order step 2 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CPRORD201.jpg" width="700"  alt="SAP B1 Create Purchase Order step 3 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CPRORD202.jpg" width="700"  alt="SAP B1 Create Purchase Order step 4 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CPRORD203.jpg" width="700"  alt="SAP B1 Create Purchase Order step 5 of 6 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CPRORD204.jpg" width="700"  alt="SAP B1 Create Purchase Order step 6 of 6 screenshot" />

##### Result

```json
[
  {
    "DocEntry": 39,
    "DocNum": 19,
    "DocDate": "2026-04-17",
    "DocDueDate": "2026-04-24",
    "CardCode": "SRITEST",
    "CardName": "SRI EXPORTS",
    "DocTotal": 196,
    "DocCurrency": "$",
    "Comments": "",
    "ShipToCode": "SHIP 001",
    "DocumentStatus": "bost_Open",

    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "DIET002",
        "ItemDescription": "TEST",
        "Quantity": 10,
        "Price": 19.6,
        "DiscountPercent": 2,
        "WarehouseCode": "01",
        "TaxCode": "NT",
        "LineTotal": 196,
        "UnitPrice": 20,
        "Currency": "$",
        "RequiredDate": "2026-04-17"
      }
    ],

    "AddressExtension": {
      "ShipToStreet": "Lake Street",
      "ShipToStreetNo": "1/33",
      "ShipToCity": "Hyderabad",
      "ShipToZipCode": "500039",
      "ShipToState": "TS",
      "ShipToCountry": "IN",

      "BillToStreet": "Mark street",
      "BillToStreetNo": "RD 200",
      "BillToCity": "Hyderabad",
      "BillToZipCode": "500038",
      "BillToState": "TS",
      "BillToCountry": "IN"
    }
  }
]
```
--------------

#### Update Purchase Order

**Update Purchase Order** action modifies an existing purchase order using the document entry (DocEntry). It allows updating vendor reference details, item lines, and address information.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-UPRORD201.jpg" width="700"  alt="SAP B1 Update Purchase Order step 1 of 5 screenshot" />

Click on the **Continue** button.

-----------

##### Configuration Fields

| Field | Description |
|------|-------------|
| DocEntry | Enter the internal document entry number of the purchase order. (e.g., "39") |
| NumAtCard (Vendor Ref No) | Enter the vendor reference number. (e.g., "728902") |
| Document Lines
Line Number | Enter Item Line Number e.g., ("01")|
| Item Code | Unique identifier of the item. (e.g., "DIET002") |
| Quantity | Quantity of the item. (e.g., "20") |
| Unit Price | Price per unit. (e.g., "20") |
| Discount Percentage | Discount applied to the item. (e.g., "3") |
| Tax Code | Applicable tax code. (e.g., "NT") |
| Address Extension (Optional)
ShipToStreet | Shipping street address e.g., ("Lake Street2")|
| ShipToStreetNo | Street number e.g., ("1/43")|
| ShipToBlock | Block/area e.g., ("")|
| ShipToCity | City e.g., ("Hyderabad")|
| ShipToZipCode | Postal code e.g., ("500037")|
| ShipToCountry | Country e.g., ("IN")|
| ShipToState | State e.g., ("TS")|
| Bill To Address
BillToStreet | Billing street address e.g., ("Mark Spencer street")|
| BillToStreetNo | Street number e.g., ("RDL 233")|
| BillToCity | City e.g., ("Hyderabad")|
| BillToZipCode | Postal code e.g., ("500036")|
| BillToCountry | Country e.g., ("IN")|
| BillToState | State e.g., ("TS")|


:::note
Only the fields provided will be updated. Ensure the correct DocEntry is used to avoid modifying the wrong purchase order.
:::

Click on the **Continue** button., then **Run** the node

-----------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-UPRORD211.jpg" width="700"  alt="SAP B1 Update Purchase Order step 2 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UPRORD212.jpg" width="700"  alt="SAP B1 Update Purchase Order step 3 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UPRORD213.jpg" width="700"  alt="SAP B1 Update Purchase Order step 4 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UPRORD214.jpg" width="700"  alt="SAP B1 Update Purchase Order step 5 of 5 screenshot" />

##### Result

```json
[
  {
    "value": ""
  }
]
```

----------------------


### Incoming Payments Action

#### Create CreditCard Incoming Payments

**Create Credit Card Incoming Payments** action records an incoming payment made via credit card for a customer. It captures card details, payment amount, and related information.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CCRDPMNT217.jpg" width="700"  alt="SAP B1 Create CreditCard Incoming Payments step 1 of 3 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Card Code | Enter the customer code. (e.g., "BC6129916") |
| Credit Card Details
Credit Card | Specify the credit card type. (e.g., "1") |
| Credit Card Number | Enter the credit card number. (e.g., "4242") |
| Card Valid Until | Enter the card expiry date. (e.g., "2028-04-19") |
| Voucher | Enter the payment voucher/reference number. (e.g., "1") |
| Credit Amount | Enter the payment amount. (e.g., "500") |
| Optional Fields
Remarks | Add any additional notes related to the payment. (e.g., "Payment received via credit card") |

:::note
Ensure credit card details are accurate and valid before processing the payment.
:::


Click on the **Continue** button, then **Run** node

------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CCRDPMNT216.jpg" width="700"  alt="SAP B1 Create CreditCard Incoming Payments step 2 of 3 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CCRDPMNT217.jpg" width="700"  alt="SAP B1 Create CreditCard Incoming Payments step 3 of 3 screenshot" />

----------

##### Result

```json
[
  {
    "DocEntry": 517,
    "DocNum": 299,
    "DocType": "rCustomer",
    "DocDate": "2026-04-17",
    "CardCode": "BC6129916",
    "CardName": "MAX6",
    "DocCurrency": "$",
    "Remarks": "Payment received via credit card",
    "JournalRemarks": "Incoming Payments - BC6129916",
    "DueDate": "2026-04-17",

    "PaymentCreditCards": [
      {
        "LineNum": 0,
        "CreditCard": 1,
        "CreditCardNumber": "4242",
        "CardValidUntil": "2028-04-19",
        "VoucherNum": "1",
        "PaymentMethodCode": 1,
        "NumOfPayments": 1,
        "FirstPaymentDue": "2026-04-17",
        "CreditSum": 500,
        "CreditCur": "$"
      }
    ],

    "CashFlowAssignments": [
      {
        "PaymentMeans": "pmtCreditCard",
        "CheckNumber": "1",
        "AmountLC": 500
      }
    ]
  }
]
```
---------------

#### Create Check Incoming Payments

**Create Check Incoming Payments** action records an incoming payment made via cheque for a customer. It captures bank details, cheque amount, and related payment information.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CCKINMGPMNT218.jpg" width="700"  alt="SAP B1 Create Check Incoming Payments step 1 of 3 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Card Code | Enter the customer code. (e.g., "ZC0001") |
| Payment Checks
Cheque Bank Account | Enter the bank account linked to the cheque. (e.g., "_SYS00000000006") |
| Cheque Amount | Enter the cheque amount. (e.g., "500") |
| Optional Fields
| Cheque Due Date | Specify the cheque clearance date. (e.g., "2026-04-17") |
| Transferable | Indicate if the cheque is transferable (**Yes** or **No**). (e.g., "Yes") |
| Document Due Date | Specify the due date for the payment document. (e.g., "2026-04-17") |
| Remarks | Add any additional notes. (e.g., "Cheque received from customer") |

:::note
Ensure cheque details are accurate before processing to avoid payment discrepancies.
:::

Click on the **Continue** button, then **Run** node

-----------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CCKINCMGPMNT218.jpg" width="700"  alt="SAP B1 Create Check Incoming Payments step 2 of 3 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CCKINMGPMNTS219.jpg" width="700"  alt="SAP B1 Create Check Incoming Payments step 3 of 3 screenshot" />

---------

##### Result

```json
[
  {
    "DocEntry": 522,
    "DocNum": 301,
    "DocType": "rCustomer",
    "DocDate": "2026-04-17",
    "CardCode": "ZC0001",
    "CardName": "GivaJewellers",
    "DocCurrency": "$",
    "Remarks": "Cheque received from customer",
    "JournalRemarks": "Incoming Payments - ZC0001",
    "DueDate": "2026-04-17",

    "PaymentChecks": [
      {
        "LineNum": 0,
        "DueDate": "2026-04-17",
        "CheckNumber": 1,
        "CheckSum": 500,
        "Currency": "$",
        "CheckAccount": "_SYS00000000006"
      }
    ]
  }
]
```

#### Create Cash Incoming Payments

**Create Cash Incoming Payments** action records an incoming payment made via cash for a customer. It captures customer details, cash account, and payment amount.

##### Select Credentials and Action Events

<img src="/img/credentials/sap-b1/SAP-C-CCASHINCMGPMNTS212.jpg" width="700"  alt="SAP B1 Create Cash Incoming Payments step 1 of 2 screenshot" />

Click on the **Continue** button.

--------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| CardCode | Enter the customer code. (e.g., "NR") |
| Cash Account | Specify the cash account to which payment is received. (e.g., "_SYS00000000002") |
| Cash Amount | Enter the amount received in cash. (e.g., "600") |
| Optional Fields
| Posting Date | Specify the posting date of the transaction. (e.g., "2026-04-18") |
| Remarks | Add any notes related to the payment. (e.g., "Demo Purpose") |
| Journal Remarks | Enter journal-related remarks for accounting reference. (e.g., "Incoming Payments - ZC0001") |

:::note
Ensure the correct cash account and amount are provided to maintain accurate financial records.
:::

Click on the **Continue** button, then **Run** node

----------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CCASHINCMGPMNTS221.jpg" width="700"  alt="SAP B1 Create Cash Incoming Payments step 2 of 2 screenshot" />

---------

##### Result

```json
[
  {
    "DocEntry": 523,
    "DocNum": 302,
    "DocType": "rCustomer",
    "DocDate": "2026-04-18",
    "CardCode": "NR",
    "DocCurrency": "$",
    "Remarks": "Demo Purpose",
    "JournalRemarks": "Incoming Payments - ZC0001",

    "PaymentCash": {
        "CashAccount": "_SYS00000000002",
        "CashSum": 600,
        "Currency": "$"
    }
  }
]
```

### Delivery Note Actions

#### Create a Delivery Note

**Create Delivery Note** action creates a delivery document in the SAP for goods being shipped to a customer. It captures delivery, item, and logistics details for order fulfillment.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CDLVRYNT222.jpg" width="700"  alt="SAP B1 Create a Delivery Note step 1 of 4 screenshot" />

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Document Date | Specify the delivery document date. (e.g., "2026-04-18") |
| Delivery Date | Specify the expected delivery date. (e.g., "2026-04-18") |
| Customer Code | Enter the customer code. (e.g., "ZC0001") |
| Document Lines
Item Code | Unique identifier of the item. (e.g., "DIET002") |
| Quantity | Quantity to be delivered. (e.g., "10") |
| Unit Price | Price per unit. (e.g., "100") |
| Optional Fields (Document Lines)
| Warehouse Code | Warehouse from which goods are delivered. (e.g., "01") |
| Tax Code | Applicable tax code. (e.g., "NT") |
| Discount Percentage | Discount applied to the item. (e.g., "10") |
| VAT Group | VAT classification. (e.g., "VAT18") |
| Base Document Line | Reference to base document line. (e.g., "0") |
| Base Document Type | Base document type reference. (e.g., "17") |
| Base Document Entry | Base document entry reference. (e.g., "14012") |
| Optional Fields (Header)
| Contact Person Code | Identifier of the contact person. (e.g., "102") |
| Sales Person Code | Identifier of the sales employee. (e.g., "6") |
| Remarks | Additional notes. (e.g., "Demo Purpose") |
| Customer Reference No | Customer reference number. (e.g., "REF-1455") |
| Ship To Code | Shipping address code. (e.g., "GivaJewellers") |
| Bill To Code | Billing address code. (e.g., "GivaJewellers") |
| Address Extension (Optional)
| ShipToStreet | Shipping street address (e.g., "Adffhgjh") |
| ShipToCity | Shipping city (e.g., "Miami") |
| ShipToCountry | Shipping country (e.g., "US") |
| ShipToZipCode | Postal code (e.g., "33144") |
| BillToStreet | Billing street address (e.g., "streetNo") |
| BillToCity | Billing city (e.g., "NewYork") |
| BillToCountry | Billing country (e.g., "US") |
| BillToZipCode | Postal code (e.g., "10001") |
| Additional Expenses (Optional)
Additional Expenses | Extra charges such as freight or handling. (e.g., "250") |

:::note
Mandatory fields must be provided to create a delivery note. Optional fields can be configured based on business requirements.
:::

Click on the **Continue** button, then **Run** node

------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CDLVRYNT223.jpg" width="700"  alt="SAP B1 Create a Delivery Note step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CDLVRYNT224.jpg" width="700"  alt="SAP B1 Create a Delivery Note step 3 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CDLVRYNT225.jpg" width="700"  alt="SAP B1 Create a Delivery Note step 4 of 4 screenshot" />

----------

##### Result

```json
[
  {
    "DocEntry": 151,
    "DocNum": 65,
    "DocDate": "2026-04-18",
    "DocDueDate": "2026-04-18",
    "CardCode": "ZC0001",
    "CardName": "GivaJewellers",
    "DocTotal": 900,
    "DocCurrency": "$",
    "Comments": "Demo Purpose",
    "NumAtCard": "REF-1455",
    "ContactPersonCode": 102,
    "SalesPersonCode": 6,
    "JournalMemo": "Deliveries - ZC0001",
    "ShipToCode": "GivaJewellers",
    "DocumentStatus": "bost_Open",

    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "DIET002",
        "ItemDescription": "PINK-ROSE-Update-Checking data",
        "Quantity": 10,
        "UnitPrice": 100,
        "DiscountPercent": 10,
        "Price": 90,
        "WarehouseCode": "01",
        "TaxCode": "NT",
        "LineTotal": 900,
        "Currency": "$"
      }
    ],

    "AddressExtension": {
      "ShipToStreet": "Adffhgjh",
      "ShipToCity": "Miami",
      "ShipToZipCode": "33144",
      "ShipToState": "FL",
      "ShipToCountry": "US",

      "BillToStreet": "streetNo",
      "BillToCity": "NewYork",
      "BillToZipCode": "10001",
      "BillToState": "NY",
      "BillToCountry": "US"
    }
  }
]
```

#### Update a Delivery Note

**Update Delivery Note** action modifies an existing delivery document using the document entry (DocEntry). It allows updating item details, quantities, pricing, and header information.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-UDLVRYNT226.jpg" width="700"  alt="SAP B1 Update a Delivery Note step 1 of 4 screenshot" />

Click on the **Continue** button.

##### Configuration Fields

| Field | Description |
|------|-------------|
| DocEntry | Enter the internal document entry number of the delivery note. (e.g., "151") |
| Delivery Date | Enter the updated delivery date. (e.g., "2026-04-18") |
| Customer Code | Enter the Customer Code. (e.g., "ZC0001") |
| Document Lines (Optional)
Line Number | Specify the line number to update. (e.g., "1") |
| Item Code | Update the item code. (e.g., "DIET002") |
| Quantity | Update the quantity. (e.g., "10") |
| Unit Price | Update the unit price. (e.g., "100") |
| Additional Optional Fields (Document Lines)
Warehouse Code | Warehouse from which goods are delivered. (e.g., "01") |
| Tax Code | Applicable tax code. (e.g., "NT") |
| Optional Fields (Header)
Contact Person Code | Identifier of the contact person. (e.g., "102") |
| Sales Person Code | Identifier of the sales employee. (e.g., "6") |
| Remarks | Additional notes. (e.g., "Demo Purpose Update") |
| Customer Reference No | Customer reference number. (e.g., "REF-DEL-002") |
| Ship To Code | Shipping address code. (e.g., "GivaJewellers") |
| Bill To Code | Billing address code. (e.g., "GivaJewellers") |
| Address Extension (Optional)
| ShipToStreet | Shipping street address (e.g., "Domin Street") |
| ShipToCity | Shipping city (e.g., "Hyderabad") |
| ShipToCountry | Shipping country (e.g., "India") |
| ShipToZipCode | Postal code (e.g., "500033") |
| BillToStreet | Billing street address (e.g., "Zing Street") |
| BillToCity | Billing city (e.g., "Hyderabad") |
| BillToCountry | Billing country (e.g., "India") |
| BillToZipCode | Postal code (e.g., "500002") |
| Additional Expenses (Optional)
Additional Expenses | Extra charges such as freight or handling. (e.g., "200") |

:::note
Only the fields provided will be updated. Ensure the correct DocEntry is used to avoid modifying the wrong delivery note.
:::

Click on the **Continue** button, then **Run** node

---------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-UDLVRYNT227.jpg" width="700"  alt="SAP B1 Update a Delivery Note step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UDLVRYNT228.jpg" width="700"  alt="SAP B1 Update a Delivery Note step 3 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-UDLVRYNT229.jpg" width="700"  alt="SAP B1 Update a Delivery Note step 4 of 4 screenshot" />

---------------

##### Result

```json
[
  {
    "value": ""
  }
]
```


#### Get Delivery by Order DocEntry

**Get Delivery by Order DocEntry** action retrieves delivery note details associated with a specific sales order using the order's document entry number. It returns the related delivery document(s) as structured data.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GDLVRYNTbyDOCENTRYNO229.jpg" width="700"  alt="SAP B1 Get Delivery by Order DocEntry step 1 of 2 screenshot" />

Click on the **Continue** button.

------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Order DocEntry | Enter the internal document entry number of the sales order. (e.g., "1876") |

:::note
If no delivery notes are linked to the provided Order DocEntry, the output will be empty or null. If multiple deliveries exist, the system may return one or a list based on configuration.
:::

Click on the **Continue** button, then **Run** node

---------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GDLVRYNTbyDOCENTRYNO230.jpg" width="700"  alt="SAP B1 Get Delivery by Order DocEntry step 2 of 2 screenshot" />

------------

##### Result

```json
[
  {
    "DeliveryNotes": {
      "DocEntry": 134,
      "DocNum": 59,
      "NumAtCard": null
    },
    "DeliveryNotes/DocumentLines": {
      "ItemCode": "TV654",
      "ItemDescription": "LG OLED55C2PUA 55-inch OLED TV",
      "Quantity": 100,
      "ShipDate": "2025-11-29",
      "BaseType": 17,
      "BaseEntry": 1876
    }
  }
]
```
--------------

#### Get Delivery by NumAtCard

**Get Delivery by Customer Reference Number** action retrieves delivery note details using the customer reference number (`NumAtCard`). It returns the matching delivery document(s) as structured data.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GDLVRYNTbyNumAtCard231.jpg" width="700"  alt="SAP B1 Get Delivery by NumAtCard step 1 of 5 screenshot" />

Click on the **Continue** button.

##### Configuration Fields

| Field | Description |
|------|-------------|
| NumAtCard | Enter the customer reference number associated with the delivery. (e.g., "1564") |

:::note
If multiple delivery notes match the provided reference number, the system may return a single record or a list based on configuration. If no match is found, the output will be empty or null.
:::

Click on the **Continue** button, then **Run** node

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GDLVRYNTbyNumAtCard232.jpg" width="700"  alt="SAP B1 Get Delivery by NumAtCard step 2 of 5 screenshot" />

-----------

##### Result

```json
[
  {
    "DocEntry": 108,
    "DocNum": 45,
    "DocDate": "2025-03-11",
    "DocDueDate": "2025-03-11",
    "CardCode": "DEMOBP111",
    "CardName": "SuccessVector Customer1",
    "DocTotal": 7650,
    "DocCurrency": "$",
    "Comments": "Based On Sales Orders 426.",
    "JournalMemo": "Deliveries - DEMOBP111",
    "DocumentStatus": "bost_Open",

    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "DEMO808",
        "ItemDescription": "WATERMELON-01",
        "Quantity": 5,
        "UnitPrice": 720,
        "WarehouseCode": "01",
        "TaxCode": "EXEMPT",
        "LineTotal": 3600,
        "BaseType": 17,
        "BaseEntry": 913,
        "BaseLine": 0
      },
      {
        "LineNum": 1,
        "ItemCode": "DEMO909",
        "ItemDescription": "Rooseberry-BLUE",
        "Quantity": 5,
        "UnitPrice": 810,
        "WarehouseCode": "01",
        "TaxCode": "EXEMPT",
        "LineTotal": 4050,
        "BaseType": 17,
        "BaseEntry": 913,
        "BaseLine": 1
      }
    ],

    "AddressExtension": {
      "ShipToCity": "Hyderabad",
      "ShipToZipCode": "500002",
      "ShipToState": "TS",
      "ShipToCountry": "IN",

      "BillToCity": "Hyderabad",
      "BillToZipCode": "500038",
      "BillToState": "AP",
      "BillToCountry": "IN"
    }
  }
]
```
----------

### DownPayments Actions

#### Create a New Downpayment Invoice

**Create Down Payment** action creates a down payment document for a customer. It is used to record advance payments before the final invoice is generated.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CDNPMNTINVC231.jpg" width="700"  alt="SAP B1 Get Delivery by NumAtCard step 3 of 5 screenshot" />

Click on the **Continue** button.

----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Doc Date | Specify the document date. (e.g., "2026-04-18") |
| DocDueDate | Specify the due date. (e.g., "2026-04-18") |
| Card Code | Enter the customer code. (e.g., "POST321") |
| Document Lines
Item Code | Unique identifier of the item. (e.g., "LT001") |
| Quantity | Quantity of the item. (e.g., "10") |
| Optional Fields (Document Lines)
Unit Price | Price per unit. (e.g., "100") |
| Tax Code | Applicable tax code. (e.g., "NT") |
| Discount Percentage | Discount applied. (e.g., "5") |

:::note
Down payments are typically used for advance billing. Ensure correct customer and pricing details before creating the document.
:::

Click on the **Continue** button, then **Run** node

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CDNPAMNTINV232.jpg" width="700"  alt="SAP B1 Get Delivery by NumAtCard step 4 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CDNPAMNTINV233.jpg" width="700"  alt="SAP B1 Get Delivery by NumAtCard step 5 of 5 screenshot" />

-------------

##### Result

```json
{
  "DocDate": "2026-04-18",
  "DocDueDate": "2026-04-18",
  "CardCode": "POST321",
  "DownPaymentType": "dptInvoice",
  "DownPaymentPercentage": 100,
  "DocumentLines": [
    {
      "ItemCode": "LT001",
      "Quantity": 10,
      "UnitPrice": 100,
      "TaxCode": "NT",
      "DiscountPercent": 5,
      "WarehouseCode": "01"
    }
  ]
}
```
----------------

### SalesForecast Action

#### Create a SalesForecast

**Create Sales Forecast** action is used to define future sales expectations for items over a specified period. It helps in planning inventory, production, and business strategies.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-CSLSFRCST239.jpg" width="700"  alt="SAP B1 Create a SalesForecast step 1 of 3 screenshot" />

Click on the **Continue** button.

--------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Forecast Code | Unique identifier for the forecast. (e.g., "D022") |
| Forecast Name | Name of the forecast. (e.g., "For Daily forecast3") |
| Forecast Start Date (Optional) | Start date of the forecast period. (e.g., "2026-04-19") |
| Forecast End Date (Optional) | End date of the forecast period. (e.g., "2026-04-28") |
| Item Code | Unique identifier of the item in Sales Forecast Lines. (e.g., "DIET003") |
| Forecasted Day | Date for the forecast entry in Sales Forecast Lines. (e.g., "2026-02-27") |
| Quantity | Forecasted quantity in Sales Forecast Lines. (e.g., "10") |
| Warehouse (Optional) | Warehouse related to the forecast line. (e.g., "01") |
| Forecast View (Optional) | Defines how forecast is viewed. (e.g., "fvtDaily") |

:::note
Forecast lines are essential for defining item-level predictions. Optional fields can be configured based on planning requirements.
:::

Click on the **Continue** button, then **Run** node

-------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CSLSFRCST240.jpg" width="700"  alt="SAP B1 Create a SalesForecast step 2 of 3 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSLSFRCST241.png" width="700"  alt="SAP B1 Create a SalesForecast step 3 of 3 screenshot" />

----------------

##### Result

```json
[
  {
    "odata.metadata": "https://insync.pro/b1s/v1/$metadata#SalesForecast/@Element",
    "ForecastStartDate": "2026-04-19",
    "ForecastEndDate": "2026-04-28",
    "ForecastCode": "D022",
    "ForecastName": "For Daily forecast3",
    "Numerator": 42,
    "View": "fvtDaily",
    "SalesForecastLines": [
      {
        "ItemNo": "DIET003",
        "ForecastedDay": "2026-02-27",
        "Quantity": 10,
        "Warehouse": "01"
      }
    ]
  }
]
```

#### Update SalesForecast

**Update Sales Forecast** action is used to modify an existing sales forecast using its unique identifier. It allows updating forecast details and item-level forecast data.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-USLSFRCS242.jpg" width="700"  alt="SAP B1 Update SalesForecast step 1 of 3 screenshot" />

Click on the **Continue** button.

--------------------

#### Configuration

| Field | Description |
|------|-------------|
| Id (Numerator) | Enter the unique identifier of the forecast. (e.g., "42") |
| Forecast Name (Optional) | Update the name of the forecast. (e.g., "For Daily forecast333-Latest") |
| Forecast Start Date (Optional) | Update the start date of the forecast period. (e.g., "2026-04-19") |
| Forecast End Date (Optional) | Update the end date of the forecast period. (e.g., "2026-04-28") |
| Item Code (Optional) | Unique identifier of the item in Sales Forecast Lines. (e.g., "DIET002") |
| Forecasted Day (Optional) | Date for the forecast entry in Sales Forecast Lines. (e.g., "2026-04-19") |
| Quantity (Optional) | Updated forecasted quantity in Sales Forecast Lines. (e.g., "11") |
| Warehouse (Optional) | Warehouse related to the forecast line. (e.g., "01") |

:::note
Only the provided fields will be updated. Ensure the correct forecast Id is used to avoid modifying the wrong forecast data.
:::

Click on the **Continue** button, then **Run** node

------------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-USLSFRCST243.jpg" width="700"  alt="SAP B1 Update SalesForecast step 2 of 3 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USLSFRCST244.jpg" width="700"  alt="SAP B1 Update SalesForecast step 3 of 3 screenshot" />

-----------------

##### Result

```json
[
  {
    "value": ""
  }
]
```

---------------

#### Get Sales Forecast by Id

**Get Sales Forecast by Id** action retrieves details of a specific sales forecast using its unique identifier (Numerator). It returns forecast header and line-level data.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GSLSFRCSTbyId245.jpg" width="700"  alt="SAP B1 Get Sales Forecast by Id step 1 of 2 screenshot" />

Click on the **Continue** button.

---------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Id (Numerator) | Enter the unique identifier of the sales forecast. (e.g., "42") |

:::note
If no forecast exists for the provided Id, the response will be empty or null.
:::

Click on the **Continue** button, then **Run** node

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GSLSFRCSTbyId246.jpg" width="700"  alt="SAP B1 Get Sales Forecast by Id step 2 of 2 screenshot" />

---------------

##### Result

```json
[
  {
    "odata.metadata": "https://insync.pro/b1s/v1/$metadata#SalesForecast/@Element",
    "ForecastStartDate": "2026-04-19",
    "ForecastEndDate": "2026-04-28",
    "ForecastCode": "D022",
    "ForecastName": "For Daily forecast333-Latest",
    "Numerator": 42,
    "View": "fvtDaily",
    "SalesForecastLines": [
      {
        "Quantity": 11,
        "ForecastedDay": "2026-04-19",
        "ItemNo": "DIET002",
        "Warehouse": "01"
      }
    ]
  }
]
```

### PaymentDraft Actions

#### Create Payment Draft

**Create Payment Draft** action is used to create a draft payment document (incoming or outgoing). It allows users to save payment details for review before final posting.

#### Select Credentials and Payments

<img src="/img/credentials/sap-b1/SAP-C-CDRFTPAMNT247.jpg" width="700"  alt="SAP B1 Create Payment Draft step 1 of 3 screenshot" />

Click on the **Continue** button.

--------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Payment Type | Select the type of payment. (e.g., "Incoming Payment (Customer)") |
| Card Code | Enter the customer/vendor code. (e.g., "ZC0001") |
| Document Date (Optional) | Specify the document date. (e.g., "2026-04-19") |
| Tax Date (Optional) | Specify the tax date. (e.g., "2026-04-19") |
| Due Date (Optional) | Specify the due date. (e.g., "2026-04-19") |
| Remarks (Optional) | Add any notes related to the payment. (e.g., "Demo Purpose") |
| Journal Remarks (Optional) | Enter accounting-related remarks. (e.g., "Incoming Payment") |
| Cash Amount (Optional) | Enter the cash amount for the payment. (e.g., "600") |

:::note
Draft payments can be reviewed and finalized later. Mandatory fields must be provided to create the draft successfully.
:::

Click on the **Continue** button, then **Run** node

----------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CDRFTPAMNTS248.jpg" width="700"  alt="SAP B1 Create Payment Draft step 2 of 3 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CDRFTPAMNTS249.jpg" width="700"  alt="SAP B1 Create Payment Draft step 3 of 3 screenshot" />

-------------

##### Result

```json
[
  {
    "DocEntry": 30,
    "DocNum": 308,
    "DocType": "rCustomer",
    "DocDate": "2026-04-19",
    "DueDate": "2026-04-19",

    "CardCode": "ZC0001",
    "CardName": "GivaJewellers",

    "DocCurrency": "$",
    "CashAccount": "_SYS00000000002",
    "CashSum": 600,

    "Remarks": "Demo Purpose",
    "JournalRemarks": "Incoming Payment",

    "PaymentType": "bopt_None",

    "CashFlowAssignments": [
      {
        "PaymentMeans": "pmtCash",
        "AmountLC": 600,
        "AmountFC": 0
      }
    ]
  }
]
```

#### Get Payment Draft by DocEntry

**Get Payment Draft by DocEntry** action retrieves details of a specific payment draft using its internal document entry number. It returns the draft payment information as structured data.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-GDRFTPAMNTbyDOCENTRY249.jpg" width="700"  alt="SAP B1 Get Payment Draft by DocEntry step 1 of 2 screenshot" />

Click on the **Continue** button.

----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| DocEntry | Enter the internal document entry number of the payment draft. (e.g., "30") |

:::note
If no draft exists for the provided DocEntry, the response will be empty or null.
:::

Click on the **Continue** button, then **Run** node

-----------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CDRFTPAMNTbyDOCENTRY250.jpg" width="700"  alt="SAP B1 Get Payment Draft by DocEntry step 2 of 2 screenshot" />

---------------

##### Result

```json
{
  "DocType": "rCustomer",
  "DocDate": "2026-04-19",
  "TaxDate": "2026-04-19",
  "DueDate": "2026-04-19",
  "CardCode": "ZC0001",
  "Remarks": "Demo Purpose",
  "JournalRemarks": "Incoming Payment",

  "CashAccount": "_SYS00000000002",
  "CashSum": 600,

  "DocCurrency": "$",

  "CashFlowAssignments": [
    {
      "PaymentMeans": "pmtCash",
      "AmountLC": 600
    }
  ]
}
```

#### Convert Payment Draft to Incoming Payment

**Convert Payment Draft to Incoming Payment** action converts an existing payment draft into a finalized incoming payment. This is typically done after reviewing and confirming the draft details.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-ConvertdrafttoIncomingPayments251.jpg" width="700"  alt="SAP B1 Convert Payment Draft to Incoming Payment step 1 of 3 screenshot" />

Click on the **Continue** button.

----------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| DocEntry | Enter the internal document entry number of the payment draft. (e.g., "30") |

:::note
Once converted, the draft becomes a posted incoming payment and may no longer be editable as a draft. Ensure all details are verified before conversion.
:::

Click on the **Continue** button, then **Run** node

---------------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-ConvertdrafttoIncomingPayment251.jpg" width="700"  alt="SAP B1 Convert Payment Draft to Incoming Payment step 2 of 3 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AR-ConvertdrafttoIncomingPayment252.jpg" width="700"  alt="SAP B1 Convert Payment Draft to Incoming Payment step 3 of 3 screenshot" />

-------

##### Result

```json
[
  {
    "value": ""
  }
]
```
------------

### Blanket Agreements Actions

#### Create Sales Blanket Agreement

**Create Sales Blanket Agreement** action is used to define long-term agreements with customers for supplying goods or services under predefined terms. It helps in managing recurring sales with agreed pricing and quantities.

##### Select the Credential and Action Event
<img src="/img/credentials/sap-b1/SAP-C-BLNKARGEMNT253.jpg" width="700"  alt="SAP B1 Create Sales Blanket Agreement step 1 of 4 screenshot" />

Click on the **Continue** button.

--------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Agreement Type | Specify the type of agreement. (e.g., "atGeneral") |
| BP Code | Enter the business partner (customer) code. (e.g., "ZC0001") |
| Agreement Method | Define how the agreement is managed. (e.g., "amItem") |
| End Date | Specify the agreement end date. (e.g., "2026-04-20") |
| Item No | Unique identifier of the item in Agreement Item Lines. (e.g., "DIET002") |
| Planned Quantity (Optional) | Planned quantity for the agreement item. (e.g., "4") |
| Unit Price (Optional) | Agreed price per unit. (e.g., "100") |
| Line Discount (Optional) | Discount applied on the item. (e.g., "2") |
| BP Name (Optional) | Name of the business partner. (e.g., "GivaJewellers") |
| NumAtCard (Optional) | Customer reference number. (e.g., "664111000000360085") |
| Contact Person Code (Optional) | Identifier of the contact person. (e.g., "4") |
| Remarks (Optional) | Additional notes. (e.g., "Demo Purpose") |

:::note
Blanket agreements are used for long-term contracts. Ensure correct pricing and quantities are defined before creating the agreement.
:::

Click on the **Continue** button, then **Run** node

--------------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CBLNKTAGREMENT255.jpg" width="700"  alt="SAP B1 Create Sales Blanket Agreement step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CBLNKTAGREMENT256.jpg" width="700"  alt="SAP B1 Create Sales Blanket Agreement step 3 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CBLNKTAGREMENT257.jpg" width="700"  alt="SAP B1 Create Sales Blanket Agreement step 4 of 4 screenshot" />

-----------------------

##### Result

```json
{
  "BPCode": "ZC0001",
  "BPName": "GivaJewellers",
  "StartDate": "2026-04-19",
  "EndDate": "2026-04-20",
  "AgreementType": "atGeneral",
  "AgreementMethod": "amItem",
  "PriceMode": "pmNet",
  "BPCurrency": "$",
  "NumAtCard": "664111000000360085",
  "ContactPersonCode": 4,
  "Remarks": "Demo Purpose",

  "BlanketAgreements_ItemsLines": [
    {
      "ItemNo": "DIET002",
      "PlannedQuantity": 4,
      "UnitPrice": 100,
      "PriceCurrency": "$"
    }
  ]
}
```

#### Update Sales Blanket Agreement

**Update Sales Blanket Agreement** action is used to modify an existing blanket agreement using its agreement number. It allows updating business partner details, agreement validity, and item-level terms.

##### Select Credentials and Action Events

<img src="/img/credentials/sap-b1/SAP-C-USLSBLANKTAGREMENT258.jpg" width="700"  alt="SAP B1 Update Sales Blanket Agreement step 1 of 4 screenshot" />

Click on the **Continue** button.

------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Agreement No | Enter the unique agreement number. (e.g., "22") |
| BP Code (Optional) | Update the business partner code. (e.g., "ZC0001") |
| BP Name (Optional) | Update the business partner name. (e.g., "GivaJewellers") |
| NumAtCard (Optional) | Customer reference number. (e.g., "664111000000360085") |
| Remarks (Optional) | Additional notes. (e.g., "Demo Purpose - Updated") |
| End Date (Optional) | Update the agreement end date. (e.g., "2026-04-20") |
| Agreement Row Number | Specify the line number to update. (e.g., "0") |
| Item No (Optional) | Update the item code. (e.g., "DIET003") |
| Planned Quantity (Optional) | Update the planned quantity. (e.g., "6") |
| Unit Price (Optional) | Update the unit price. (e.g., "100") |
| Line Discount (Optional) | Update the discount percentage. (e.g., "5") |

:::note
Only the provided fields will be updated. Ensure the correct Agreement No and row number are used to avoid unintended changes.
:::

Click on the **Continue** button, then **Run** node

-----------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-USLABLANKTAGREMENT258.jpg" width="700"  alt="SAP B1 Update Sales Blanket Agreement step 2 of 4 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-USLSBLNKTAGREMENT259.jpg" width="700"  alt="SAP B1 Update Sales Blanket Agreement step 3 of 4 screenshot" />

-------------

##### Result

```json
[
  {
    "value": ""
  }
]
```

<img src="/img/credentials/sap-b1/SAP-AR-USLSBLNKTAGREMENT260.jpg" width="700"  alt="SAP B1 Update Sales Blanket Agreement step 4 of 4 screenshot" />

### Serial Number Details Action

#### Get Serial Number Details by serial number

**Get Serial Number Details by Serial Number** action retrieves detailed information of an item using its unique serial number. It helps in tracking item history, availability, and related transactions.

##### Select Credentials and Action Events

<img src="/img/credentials/sap-b1/SAP-C-GSRLNUMbySLNO261.jpg" width="700"  alt="SAP B1 Get Serial Number Details by serial number step 1 of 2 screenshot" />

Click on **Continue** button

----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Serial Number | Enter the unique serial number of the item. (e.g., "SL-001") |

:::note
If the provided serial number does not exist, the response will be empty or null.
:::

Click on the **Continue** button, then **Run** node

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GSRLNUMbySRLNo262.jpg" width="700"  alt="SAP B1 Get Serial Number Details by serial number step 2 of 2 screenshot" />

##### Result

```json
[
  {
    "DocEntry": 1,
    "ItemCode": "SERIAL001",
    "ItemDescription": "Serial Test",
    "MfrSerialNo": "SL001",
    "SerialNumber": "SL-001",
    "LotNumber": "123",
    "SystemNumber": 1,
    "AdmissionDate": "2026-04-20",
    "ManufacturingDate": null,
    "ExpirationDate": null,
    "MfrWarrantyStart": null,
    "MFrWarrantyEnd": null,
    "Location": "01",
    "Details": null
  }
]
```

### Service Contracts Action

#### Create Service Contract

**Create Service Contract** action is used to define a service agreement for a customer, typically covering warranty or support services for specific items or serial numbers.

##### Select Credentials and Action Events

<img src="/img/credentials/sap-b1/SAP-C-CSRVCCNTRCT263.jpg" width="700"  alt="SAP B1 Create Service Contract step 1 of 5 screenshot" />

Click on the **Continue** button.

------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Customer Code | Enter the customer code. (e.g., "ZC0001") |
| Contract Type | Specify the contract type. (e.g., "Serial Number") |
| Service Type | Define the type of service. (e.g., "Warranty") |
| Start Date | Specify the contract start date. (e.g., "2026-04-20") |
| End Date | Specify the contract end date. (e.g., "2026-04-30") |
| Service Contract Lines
Internal Serial Number | Enter the internal serial number. (e.g., "SL-001") |
| Item Code | Unique identifier of the item. (e.g., "SERIAL001") |
| Optional Fields
Manufacturer Serial Number | Manufacturer-provided serial number. (e.g., "SL001") |
| Contact Code | Identifier of the contact person. (e.g., "4") |
| Customer Name | Name of the customer. (e.g., "GivaJewellers") |
| Status | Contract status. (e.g., "Draft") |
| Response Unit | Unit for response time. (e.g., "Hours" or "Days") |
| Monday Enabled | Enable service on Monday (**Yes/No**). (e.g., "Yes") |
| Tuesday Enabled | Enable service on Tuesday (**Yes/No**). (e.g., "Yes") |
| Wednesday Enabled | Enable service on Wednesday (**Yes/No**). (e.g., "Yes") |
| Thursday Enabled | Enable service on Thursday (**Yes/No**). (e.g., "Yes") |
| Friday Enabled | Enable service on Friday (**Yes/No**). (e.g., "Yes") |

:::note
Ensure correct serial numbers and service dates are configured, as they define the validity and scope of the service contract.
:::

Click on the **Continue** button, then **Run** node

--------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCNTRCT264.jpg" width="700"  alt="SAP B1 Create Service Contract step 2 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCNTRCT265.jpg" width="700"  alt="SAP B1 Create Service Contract step 3 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCNTRCT266.jpg" width="700"  alt="SAP B1 Create Service Contract step 4 of 5 screenshot" />
<img src="/img/credentials/sap-b1/SAP-AC-CSRVCCNTRCT267.jpg" width="700"  alt="SAP B1 Create Service Contract step 5 of 5 screenshot" />

--------------------

##### Result

```json
[
  {
    "odata.metadata": "https://insync.pro/b1s/v1/$metadata#ServiceContracts/@Element",
    "ContractID": 6,
    "CustomerCode": "ZC0001",
    "CustomerName": "GivaJewellers",
    "ContactCode": 4,
    "Owner": 7,
    "Status": "scs_Draft",
    "ContractTemplate": null,
    "ContractType": "ct_SerialNumber",
    "Renewal": "tNO",
    "ReminderTime": null,
    "RemindUnit": "reu_Days",
    "DurationOfCoverage": null,
    "StartDate": "2026-04-20",
    "EndDate": "2026-04-30",
    "ResolutionTime": null,
    "ResolutionUnit": "rsu_Days",
    "Description": null,
    "MondayEnabled": "tYES",
    "TuesdayEnabled": "tYES",
    "WednesdayEnabled": "tYES",
    "ThursdayEnabled": "tYES",
    "FridayEnabled": "tYES",
    "SaturdayEnabled": "tYES",
    "SundayEnabled": "tYES",
    "MondayStart": "08:00:00",
    "MondayEnd": "17:00:00",
    "TuesdayStart": "08:00:00",
    "TuesdayEnd": "17:00:00",
    "WednesdayStart": "08:00:00",
    "WednesdayEnd": "17:00:00",
    "ThursdayStart": "08:00:00",
    "ThursdayEnd": "17:00:00",
    "FridayStart": "08:00:00",
    "FridayEnd": "17:00:00",
    "SaturdayStart": "00:00:00",
    "SaturdayEnd": "23:59:00",
    "SundayStart": "00:00:00",
    "SundayEnd": "23:59:00",
    "IncludeParts": "tNO",
    "IncludeLabor": "tNO",
    "IncludeTravel": "tNO",
    "TemplateRemarks": null,
    "Remarks": null,
    "IncludeHolidays": "tNO",
    "ServiceType": "bst_Warranty",
    "ResponseUnit": "boru_Hour",
    "ResponseTime": null,
    "TerminationDate": null,
    "AttachmentEntry": null,
    "ServiceBPType": "srvcSales",
    "ServiceContract_Lines": [
      {
        "LineNum": 1,
        "ManufacturerSerialNum": "SL001",
        "InternalSerialNum": "SL-001",
        "ItemCode": "SERIAL001",
        "ItemName": "Serial Test",
        "ItemGroup": null,
        "StartDate": "2026-04-20",
        "EndDate": "2026-04-30",
        "ItemGroupName": null,
        "TerminationDate": null
      }
    ]
  }
]
```

#### Get Service Contracts by Customer Code

**Get Service Contracts by Customer Code** action retrieves all service contracts associated with a specific customer. It helps in tracking active, expired, or draft service agreements.

##### Select Credentials and Action Events

<img src="/img/credentials/sap-b1/SAP-C-GSRCCNTRCTbyCSTMRCDE268.jpg" width="700"  alt="SAP B1 Get Service Contracts by Customer Code step 1 of 2 screenshot" />

Click on the **Continue** button.

--------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Customer Code | Enter the customer code. (e.g., "ZC0001") |

:::note
If no service contracts are found for the provided customer code, the response will be empty or null.
:::

Click on the **Continue** button, then **Run** node

----------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GSRVCCNTRCTbyCSTMRCDE269.jpg" width="700"  alt="SAP B1 Get Service Contracts by Customer Code step 2 of 2 screenshot" />

-------------

##### Result

```json
[
  {
    "ContractID": 5,
    "CustomerCode": "ZC0001",
    "CustomerName": "GivaJewellers",
    "ContactCode": 4,
    "Owner": 7,
    "Status": "scs_Draft",
    "ContractTemplate": null,
    "ContractType": "ct_SerialNumber",
    "Renewal": "tNO",
    "ReminderTime": null,
    "RemindUnit": "reu_Days",
    "DurationOfCoverage": null,
    "StartDate": "2026-04-20",
    "EndDate": "2029-04-02",
    "ResolutionTime": null,
    "ResolutionUnit": "rsu_Days",
    "Description": null,
    "MondayEnabled": "tYES",
    "TuesdayEnabled": "tYES",
    "WednesdayEnabled": "tYES",
    "ThursdayEnabled": "tYES",
    "FridayEnabled": "tYES",
    "SaturdayEnabled": "tYES",
    "SundayEnabled": "tYES",
    "MondayStart": "08:00:00",
    "MondayEnd": "17:00:00",
    "TuesdayStart": "08:00:00",
    "TuesdayEnd": "17:00:00",
    "WednesdayStart": "08:00:00",
    "WednesdayEnd": "17:00:00",
    "ThursdayStart": "08:00:00",
    "ThursdayEnd": "17:00:00",
    "FridayStart": "08:00:00",
    "FridayEnd": "17:00:00",
    "SaturdayStart": "00:00:00",
    "SaturdayEnd": "23:59:00",
    "SundayStart": "00:00:00",
    "SundayEnd": "23:59:00",
    "IncludeParts": "tNO",
    "IncludeLabor": "tNO",
    "IncludeTravel": "tNO",
    "TemplateRemarks": null,
    "Remarks": "Demo Purpose",
    "IncludeHolidays": "tNO",
    "ServiceType": "bst_Regular",
    "ResponseUnit": "boru_Hour",
    "ResponseTime": null,
    "TerminationDate": null,
    "AttachmentEntry": null,
    "ServiceBPType": "srvcSales",
    "ServiceContract_Lines": [
      {
        "LineNum": 1,
        "ManufacturerSerialNum": "SL001",
        "InternalSerialNum": "SL-001",
        "ItemCode": "SERIAL001",
        "ItemName": "Serial Test",
        "ItemGroup": null,
        "StartDate": "2026-04-20",
        "EndDate": "2029-04-02",
        "ItemGroupName": null,
        "TerminationDate": null
      }
    ]
  },
  {
    "ContractID": 6,
    "CustomerCode": "ZC0001",
    "CustomerName": "GivaJewellers",
    "ContactCode": 4,
    "Owner": 7,
    "Status": "scs_Draft",
    "ContractTemplate": null,
    "ContractType": "ct_SerialNumber",
    "Renewal": "tNO",
    "ReminderTime": null,
    "RemindUnit": "reu_Days",
    "DurationOfCoverage": null,
    "StartDate": "2026-04-20",
    "EndDate": "2026-04-30",
    "ResolutionTime": null,
    "ResolutionUnit": "rsu_Days",
    "Description": null,
    "MondayEnabled": "tYES",
    "TuesdayEnabled": "tYES",
    "WednesdayEnabled": "tYES",
    "ThursdayEnabled": "tYES",
    "FridayEnabled": "tYES",
    "SaturdayEnabled": "tYES",
    "SundayEnabled": "tYES",
    "MondayStart": "08:00:00",
    "MondayEnd": "17:00:00",
    "TuesdayStart": "08:00:00",
    "TuesdayEnd": "17:00:00",
    "WednesdayStart": "08:00:00",
    "WednesdayEnd": "17:00:00",
    "ThursdayStart": "08:00:00",
    "ThursdayEnd": "17:00:00",
    "FridayStart": "08:00:00",
    "FridayEnd": "17:00:00",
    "SaturdayStart": "00:00:00",
    "SaturdayEnd": "23:59:00",
    "SundayStart": "00:00:00",
    "SundayEnd": "23:59:00",
    "IncludeParts": "tNO",
    "IncludeLabor": "tNO",
    "IncludeTravel": "tNO",
    "TemplateRemarks": null,
    "Remarks": null,
    "IncludeHolidays": "tNO",
    "ServiceType": "bst_Warranty",
    "ResponseUnit": "boru_Hour",
    "ResponseTime": null,
    "TerminationDate": null,
    "AttachmentEntry": null,
    "ServiceBPType": "srvcSales",
    "ServiceContract_Lines": [
      {
        "LineNum": 1,
        "ManufacturerSerialNum": "SL001",
        "InternalSerialNum": "SL-001",
        "ItemCode": "SERIAL001",
        "ItemName": "Serial Test",
        "ItemGroup": null,
        "StartDate": "2026-04-20",
        "EndDate": "2026-04-30",
        "ItemGroupName": null,
        "TerminationDate": null
      }
    ]
  }
]
```

#### Get Service Contract by Contract ID

Retrieves the details of a service contract using the specified contract ID.

##### Select Credentials and Action Events
<img src="/img/credentials/sap-b1/SAP-C-GTSRVCCONTRCTbyCNTRCTID.jpg" width="700"  alt="SAP B1 Get Service Contract by Contract ID step 1 of 2 screenshot" />

Click on the **Continue** button.

---------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Contract ID  | Enter the unique identifier of the service contract to retrieve. Example: `5` |

:::note
`Contract ID` is mandatory.
:::

Click on the **Continue** button, then **Run** node.

-------------------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-GTSRVCCONTRCTbyCNTRCTID.jpg" width="700"  alt="SAP B1 Get Service Contract by Contract ID step 2 of 2 screenshot" />

-------------------------

##### Result

```json
[
  {
    "ContractID": 5,
    "CustomerCode": "ZC0001",
    "CustomerName": "GivaJewellers",
    "ContactCode": 4,
    "Owner": 7,
    "Status": "scs_Draft",
    "ContractTemplate": null,
    "ContractType": "ct_SerialNumber",
    "Renewal": "tNO",
    "ReminderTime": null,
    "RemindUnit": "reu_Days",
    "DurationOfCoverage": null,
    "StartDate": "2026-04-20",
    "EndDate": "2029-04-02",
    "ResolutionTime": null,
    "ResolutionUnit": "rsu_Days",
    "Description": null,
    "MondayEnabled": "tYES",
    "TuesdayEnabled": "tYES",
    "WednesdayEnabled": "tYES",
    "ThursdayEnabled": "tYES",
    "FridayEnabled": "tYES",
    "SaturdayEnabled": "tYES",
    "SundayEnabled": "tYES",
    "MondayStart": "08:00:00",
    "MondayEnd": "17:00:00",
    "TuesdayStart": "08:00:00",
    "TuesdayEnd": "17:00:00",
    "WednesdayStart": "08:00:00",
    "WednesdayEnd": "17:00:00",
    "ThursdayStart": "08:00:00",
    "ThursdayEnd": "17:00:00",
    "FridayStart": "08:00:00",
    "FridayEnd": "17:00:00",
    "SaturdayStart": "00:00:00",
    "SaturdayEnd": "23:59:00",
    "SundayStart": "00:00:00",
    "SundayEnd": "23:59:00",
    "IncludeParts": "tNO",
    "IncludeLabor": "tNO",
    "IncludeTravel": "tNO",
    "TemplateRemarks": null,
    "Remarks": "Demo Purpose",
    "IncludeHolidays": "tNO",
    "ServiceType": "bst_Regular",
    "ResponseUnit": "boru_Hour",
    "ResponseTime": null,
    "TerminationDate": null,
    "AttachmentEntry": null,
    "ServiceBPType": "srvcSales",
    "ServiceContract_Lines": [
      {
        "LineNum": 1,
        "ManufacturerSerialNum": "SL001",
        "InternalSerialNum": "SL-001",
        "ItemCode": "SERIAL001",
        "ItemName": "Serial Test",
        "ItemGroup": null,
        "StartDate": "2026-04-20",
        "EndDate": "2029-04-02",
        "ItemGroupName": null,
        "TerminationDate": null
      }
    ]
  }
]
```
---------------------------------------


### Customer Equipment Card Actions

#### Create Customer Equipment Card

**Create Customer Equipment Card** action is used to register and track equipment assigned to a customer. It helps manage installed items, serial numbers, and service-related details.

##### Select Credentials and Action Events

<img src="/img/credentials/sap-b1/SAP-C-CEQPCRD270.jpg" width="700"  alt="SAP B1 Create Customer Equipment Card step 1 of 2 screenshot" />

Click on the **Continue** button.

-------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Customer Code | Enter the customer code. (e.g., "ZC0001") |
| Internal Serial Number | Unique internal serial number of the equipment. (e.g., "SL-002") |
| Item Code | Identifier of the item/equipment. (e.g., "SERIAL001") |
| Install Location | Specify the installation location. (e.g., "01") |
| Optional Fields
Contact Employee Code | Identifier of the contact employee. (e.g., "4") |
| Manufacturer Serial Number | Manufacturer-provided serial number. (e.g., "SL-002") |

:::note
Ensure serial numbers are unique and correctly mapped to the customer for accurate tracking and service management.
:::

Click on the **Continue** button, then **Run** node

-------------------

##### Example Configuration

<img src="/img/credentials/sap-b1/SAP-AC-CEQPCRD271.jpg" width="700"  alt="SAP B1 Create Customer Equipment Card step 2 of 2 screenshot" />

-----------

##### Result

```json
[
  {
    "odata.metadata": "https://insync.pro/b1s/v1/$metadata#CustomerEquipmentCards/@Element",
    "EquipmentCardNum": 2,
    "CustomerCode": "ZC0001",
    "CustomerName": "GivaJewellers",
    "ContactEmployeeCode": 4,
    "DirectCustomerCode": null,
    "DirectCustomerName": null,
    "ManufacturerSerialNum": "SL-002",
    "InternalSerialNum": "SL-002",
    "RequiredResolutionTime": null,
    "RequiredResolutionUnit": "rsu_Days",
    "ItemCode": "SERIAL001",
    "ItemDescription": "Serial Test",
    "InvoiceCode": null,
    "InvoiceNumber": null,
    "DeliveryDate": null,
    "ContactPhone": null,
    "Street": "Adffhgjh",
    "Block": null,
    "ZipCode": "33144",
    "City": "Miami",
    "County": null,
    "CountryCode": "US",
    "StateCode": "FL",
    "InstallLocation": "01",
    "ContractCode": null,
    "ContractStartDate": null,
    "ContractEndDate": null,
    "DeliveryCode": null,
    "DeliveryNumber": null,
    "StatusOfSerialNumber": "sns_Active",
    "ReplaceSN": null,
    "DefaultTechnician": null,
    "ReplacedBySN": null,
    "Defaultterritory": null,
    "BuildingFloorRoom": "",
    "AttachmentEntry": null,
    "StreetNo": null,
    "ServiceBPType": "et_Sales",
    "CustomerEquipmentCardBusinessPartners": [
      {
        "BPCode": "ZC0001"
      }
    ]
  }
]
```


---------------------------------------


### Goods Receipt Actions

#### Create Goods Receipt

**Create Goods Receipt** action posts a new goods receipt in SAP Business One to increase stock in a warehouse without a base document. It is commonly used to **record opening balances or found stock** and **sync stock movements from WMS, production, or external systems**.

##### Select the Credential and Action Event

Select your SAP Business One credential and choose **Create Goods Receipt** as the action event.

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Posting Date | Posting date of the goods receipt in yyyy-MM-dd format. Leave blank for today. (e.g., "2026-10-12") |
| Reference | External reference number, such as a WMS or production document number. (e.g., "WMS-1001") |
| Remarks | Additional notes for the goods receipt. (e.g., "Cycle count adjustment") |
| Journal Remark | Remark posted to the journal entry, max 50 characters. (e.g., "Goods Receipt - WMS-1001") |
| Document Lines (Required)
Item Code | SAP B1 item code to receive. (e.g., "A00001") |
| Quantity | Quantity to receive into the warehouse. Must be greater than 0. (e.g., "10") |
| Warehouse Code | Warehouse the stock is received into. (e.g., "01") |
| Optional Fields (Document Lines)
Unit Price | Price per unit used to value the stock movement. (e.g., "25.50") |
| Account Code | G/L offset account for the line. Overrides the default inventory offset account. (e.g., "_SYS00000000094") |
| UoM Entry | Unit of measure entry. Leave blank to use the item default. (e.g., "1") |
| Project Code | SAP B1 project code for the line. (e.g., "PRJ01") |
| Distribution Rule | Distribution rule (cost center) for the line. (e.g., "CC01") |
| Batch Numbers
Batch Number | Batch number, required only for batch-managed items. (e.g., "B-2026-001") |
| Quantity | Quantity for this batch. Total batch quantity must equal the line quantity. (e.g., "10") |
| Serial Numbers
Serial Number | Serial number, required only for serial-managed items. Add one entry per unit. (e.g., "SN-0001") |
| Quantity | Always 1 per serial number. (e.g., "1") |

:::note
At least one document line with Item Code, Quantity, and Warehouse Code is required. Batch or serial allocation is mandatory for batch- or serial-managed items.
:::

Click on the **Continue** button, then **Run** the node.

--------------

##### Result

```json
[
  {
    "DocEntry": 12,
    "DocNum": 12,
    "DocDate": "2026-10-12",
    "Reference2": "WMS-1001",
    "Comments": "Cycle count adjustment",
    "JournalMemo": "Goods Receipt - WMS-1001",
    "DocumentStatus": "bost_Close",
    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "A00001",
        "ItemDescription": "IBM Infoprint 1312",
        "Quantity": 10,
        "WarehouseCode": "01",
        "UnitPrice": 25.5,
        "LineTotal": 255
      }
    ]
  }
]
```

--------------

#### Update Goods Receipt

**Update Goods Receipt** action modifies an existing goods receipt in SAP Business One using its DocEntry. SAP B1 only allows header fields to change after posting.

:::note
Quantities and document lines are locked once a goods receipt is posted. To correct stock, post a reversing document instead.
:::

##### Select the Credential and Action Event

Select your SAP Business One credential and choose **Update Goods Receipt** as the action event.

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| DocEntry | Unique document entry number of the goods receipt to update. (e.g., "12") |
| Optional Fields
Reference | External reference number. (e.g., "WMS-1001-R") |
| Remarks | Additional notes for the goods receipt. (e.g., "Corrected reference") |
| Journal Remark | Remark posted to the journal entry, max 50 characters. (e.g., "Goods Receipt - corrected") |

:::note
Only the fields provided will be updated. Ensure the correct DocEntry is used to avoid modifying the wrong document.
:::

Click on the **Continue** button, then **Run** the node.

--------------

##### Result

```json
[
  {
    "value": ""
  }
]
```

--------------

### Goods Issue Actions

#### Create Goods Issue

**Create Goods Issue** action posts a new goods issue in SAP Business One to decrease stock in a warehouse without a base document. It is commonly used to **write off damaged, scrapped, or consumed stock** and **sync stock movements from WMS, production, or external systems**.

##### Select the Credential and Action Event

Select your SAP Business One credential and choose **Create Goods Issue** as the action event.

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Posting Date | Posting date of the goods issue in yyyy-MM-dd format. Leave blank for today. (e.g., "2026-10-12") |
| Reference | External reference number, such as a WMS or production document number. (e.g., "WMS-1001") |
| Remarks | Additional notes for the goods issue. (e.g., "Cycle count adjustment") |
| Journal Remark | Remark posted to the journal entry, max 50 characters. (e.g., "Goods Issue - WMS-1001") |
| Document Lines (Required)
Item Code | SAP B1 item code to issue. (e.g., "A00001") |
| Quantity | Quantity to issue from the warehouse. Must be greater than 0. (e.g., "10") |
| Warehouse Code | Warehouse the stock is issued from. (e.g., "01") |
| Optional Fields (Document Lines)
Unit Price | Price per unit. Usually left blank so SAP B1 uses the item cost. (e.g., "25.50") |
| Account Code | G/L offset account for the line. Overrides the default inventory offset account. (e.g., "_SYS00000000094") |
| UoM Entry | Unit of measure entry. Leave blank to use the item default. (e.g., "1") |
| Project Code | SAP B1 project code for the line. (e.g., "PRJ01") |
| Distribution Rule | Distribution rule (cost center) for the line. (e.g., "CC01") |
| Batch Numbers
Batch Number | Batch number, required only for batch-managed items. (e.g., "B-2026-001") |
| Quantity | Quantity for this batch. Total batch quantity must equal the line quantity. (e.g., "10") |
| Serial Numbers
Serial Number | Serial number, required only for serial-managed items. Add one entry per unit. (e.g., "SN-0001") |
| Quantity | Always 1 per serial number. (e.g., "1") |

:::note
At least one document line with Item Code, Quantity, and Warehouse Code is required. Batch or serial allocation is mandatory for batch- or serial-managed items.
:::

Click on the **Continue** button, then **Run** the node.

--------------

##### Result

```json
[
  {
    "DocEntry": 12,
    "DocNum": 12,
    "DocDate": "2026-10-12",
    "Reference2": "WMS-1001",
    "Comments": "Cycle count adjustment",
    "JournalMemo": "Goods Issue - WMS-1001",
    "DocumentStatus": "bost_Close",
    "DocumentLines": [
      {
        "LineNum": 0,
        "ItemCode": "A00001",
        "ItemDescription": "IBM Infoprint 1312",
        "Quantity": 10,
        "WarehouseCode": "01",
        "UnitPrice": 25.5,
        "LineTotal": 255
      }
    ]
  }
]
```

--------------

#### Update Goods Issue

**Update Goods Issue** action modifies an existing goods issue in SAP Business One using its DocEntry. SAP B1 only allows header fields to change after posting.

:::note
Quantities and document lines are locked once a goods issue is posted. To correct stock, post a reversing document instead.
:::

##### Select the Credential and Action Event

Select your SAP Business One credential and choose **Update Goods Issue** as the action event.

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| DocEntry | Unique document entry number of the goods issue to update. (e.g., "12") |
| Optional Fields
Reference | External reference number. (e.g., "WMS-1001-R") |
| Remarks | Additional notes for the goods issue. (e.g., "Corrected reference") |
| Journal Remark | Remark posted to the journal entry, max 50 characters. (e.g., "Goods Issue - corrected") |

:::note
Only the fields provided will be updated. Ensure the correct DocEntry is used to avoid modifying the wrong document.
:::

Click on the **Continue** button, then **Run** the node.

--------------

##### Result

```json
[
  {
    "value": ""
  }
]
```

--------------

### Search Records Action

#### Search Records

**Search Records** action retrieves a list of records from any supported SAP Business One object with dynamic filtering, record limits, and field selection. Each record is returned as a separate item for downstream steps.

This action is commonly used to **look up records by custom criteria**, **poll for recent changes**, and **fetch only the fields a workflow needs**.

##### Select the Credential and Action Event

Select your SAP Business One credential and choose **Search Records** as the action event.

Click on the **Continue** button.

-------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Object Name | SAP B1 object to search. Includes Business Partners, Items, Orders, Invoices, Purchase Orders, **Goods Receipt**, **Goods Issue**, and more. (e.g., "Goods Receipt") |
| Filter Value | OData `$filter` expression, without the `$filter=` prefix. (e.g., "DocDate ge '2026-10-01'") |
| Limit of records | Maximum number of records to return. (e.g., "20") |
| Optional Fields
Select fields to fetch | Comma-separated fields to return. (e.g., "DocEntry, DocNum, DocDate, Comments") |

:::tip
Select **Goods Receipt** or **Goods Issue** as the Object Name to search inventory stock movements, for example all goods issues posted since the start of the month.
:::

Click on the **Continue** button, then **Run** the node.

--------------

##### Result

```json
[
  {
    "DocEntry": 12,
    "DocNum": 12,
    "DocDate": "2026-10-12",
    "Comments": "Cycle count adjustment"
  }
]
```

</TabItem>
</Tabs>

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)