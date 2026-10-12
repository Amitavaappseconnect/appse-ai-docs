---
title: "Shopify"
slug: /app-integrations/shopify/
description: Step-by-Step guide to set up Shopify credentials and automate e-commerce workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Shopify is a powerful e-commerce platform that enables businesses to build, customize, and manage their online stores with ease. With appse ai, you can connect your Shopify account to automate key operations such as order management, customer data synchronization, and product updates. This integration helps streamline your e-commerce workflows, reduce manual effort, and ensure that your online store runs efficiently across all connected systems.

---

## Authentication Methods

**appse ai** supports two authentication methods: API Key and OAuth 2.0. Among these, OAuth 2.0 is the recommended option.

<Tabs>
  <TabItem value="oauth2" label="OAuth 2.0" default>

## Setup Credential

Follow the steps below to connect your Shopify store to appse ai using OAuth 2.0. This method uses a **Client ID** and **Client Secret** obtained from the Shopify Dev Dashboard.

### Prerequisites

Before starting, make sure:

- You have access to a Shopify store admin account.
- You can log in to the Shopify admin portal.

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                              |
|-----------------|------------------------------------------------------------------------------------------|
| Connection Name | A name to help you identify this connection.                                             |
| Store Domain    | The domain of your Shopify store (e.g., `newstore`).                     |
| Client ID       | Obtained from your app's Settings page in the Shopify Dev Dashboard.                    |
| Client Secret   | Obtained from your app's Settings page in the Shopify Dev Dashboard.                    |
| Scope           | The OAuth 2.0 permission scopes for your credential.                                     |
| Callback URL    | Auto-filled automatically. This field is non-editable and pre-populated by appse ai. Use this URL to configure the Redirect URL while creating the Shopify App.   |

---

### Step-by-Step Guide

#### Step 1: Log in to Shopify Admin

Open [Shopify Admin](https://admin.shopify.com) and log in using your Shopify admin credentials.

---

#### Step 2: Open Apps Settings

From the left-hand menu, click **Settings** at the bottom.
<img src="/img/credentials/shopify/s1.png" alt="Shopify settings option" width="700"/>

Then, from the Settings menu, click **Apps**.
<img src="/img/credentials/shopify/s2.png" alt="App option inside settings" width="700"/>

---

#### Step 3: Open Develop Apps

On the Apps page, click **"Develop apps"** from the top-right section.
<img src="/img/credentials/shopify/s3.png" alt="Develop Apps button" width="700"/>

---

#### Step 4: Open the Dev Dashboard

Click **"Build apps in Dev Dashboard"**.
<img src="/img/credentials/shopify/s4.png" alt="Build apps in Dev Dashboard button" width="700"/>

---

#### Step 5: Create a New App

In the Dev Dashboard, click **Create app**. For the first app creation, the **Create app** link is displayed in the bottom-right section
<img src="/img/credentials/shopify/s20.png" alt="Create first app button" width="700"/>

If any app pre-exists, the **Create app** button to create another app is displayed in the top-right section.
<img src="/img/credentials/shopify/s5.png" alt="Create app button" width="700"/>

You will see the **"Start from Dev Dashboard"** section.

Enter a valid app name (must be within 30 characters), then click **"Create"**.
<img src="/img/credentials/shopify/s6.png" alt="Name of the app" width="700"/>

---

#### Step 6: App URL

In the **App URL** field, no modification is required since this app is intended for your organization's use only.

---

#### Step 7: Configure API Scopes

Go to the **Admin API scope configuration** section.
Select the scopes relevant to the APIs you want to use — such as customer, order, or product scopes — then **Save** the configuration.

:::note
Add all scopes relevant to the actions and triggers you plan to use in your workflows. After the credential is validated in appse ai, the scopes configured here in the Shopify Dev Dashboard overwrite the scopes in the **API Access Scope** field in the Shopify OAuth credential form. Those scopes are then used for workflow execution. By default, the scopes displayed in the **API Access Scope** field in appse ai are: `read_customers`, `write_customers`, `read_orders`, `write_orders`, `read_products`, `write_products`, `read_all_orders`. After authorization, these scopes are overwritten by the actual scopes that are configured in your shopify app.
:::

<img src="/img/credentials/shopify/s7.png" alt="Select scopes options" width="700"/>

---

#### Step 8: Configure the Redirect URL

In the **Redirect URL** section, add the Callback URL exactly as displayed in the Shopify Credential form in appse ai platform:

**For example**
```
https://embedded-ui.appse.ai/oauth-callback.html
```
<img src="/img/credentials/shopify/s8.png" alt="Redirect URL section" width="700"/>

:::note
Make sure the URL is entered **exactly** as shown in credential form, including `https://`. This URL is required for appse ai to complete the OAuth 2.0 authorization flow.
:::

---

#### Step 9: Release the App Version

Click **"Release"**.
<img src="/img/credentials/shopify/s9.png" alt="Release Button" width="700"/>

You will be prompted for an app version value. Enter a version (e.g., `v1`) to keep track of your app versioning, then click **"Release"** again.

After this, the app version will become active.
<img src="/img/credentials/shopify/s10.png" alt="Release app" width="700"/>

---

#### Step 10: Get Client ID and Client Secret

Click **"Settings"** from the left menu inside your app.
<img src="/img/credentials/shopify/s11.png" alt="App settings option" width="700"/>

You will see:

- **Client ID** — Copy this directly.
- **Client Secret** — Click the copy button next to it.
<img src="/img/credentials/shopify/s12.png" alt="Copy Client ID and Client Secret" width="700"/>

:::caution
Store both values securely. You will need them to complete the credential setup in appse ai.
:::

---

#### Step 11: Configure the Credential Form in appse ai

1. **Enter the Shop Subdomain**  
   From the left-hand menu, click **Settings** at the bottom.
  <img src="/img/credentials/shopify/s1.png" alt="Shopify settings option" width="700"/>

   The Shop Subdomain is displayed at the top of the sidebar menu.
   <img src="/img/credentials/shopify/s19.png" alt="Store Subdomain" width="700"/>
   > **Example:** If your Shopify subdomain looks like **marcostore-9454.myshopify.com**, you only need to paste **marcostore-9454** in the credential form. 

   <img src="/img/credentials/shopify/s14.png" alt="appse ai credential form - Store Subdomain field" width="700"/>

2. **Enter the Client Credentials**  
   Fill in the following details:
   - **Client ID**
   - **Client Secret**  
   <img src="/img/credentials/shopify/s13.png" alt="appse ai credential form - Client ID and Client Secret fields" width="700"/>

3. **Save the Configuration**  
   Click on the **"Save"** button. A popup will appear prompting you to log in using your Shopify account.

4. **Authenticate Your Shopify Account**  
   Enter your Shopify Admin Account's:
   - **Email Address**
   - **Password**
   <img src="/img/credentials/shopify/s17.png" alt="Shopify Oauth Login popup" width="700"/>

5. **Install the App**  
   After logging in, proceed to install the app you developed.
   A warning maybe displayed stating that the app hasn't been reviewed. This is expected for custom or private apps.

   <img src="/img/credentials/shopify/s15.png" alt="Install the app" width="700"/>

6. **Confirmation**  
   Once the installation is successful:
   - The credentials will be authenticated  
   - Saved securely  
   - Displayed on the **Credentials** page with a green tick that confirms that the credential is successfully validated

   You can now use the credential for the required workflow integrations.  
   <img src="/img/credentials/shopify/s18.png" alt="Credential Listing Page" width="700"/>

  </TabItem>
    <TabItem value="api-key" label="API Key">

## Setup Credential

Follow the steps below to quickly set up your Shopify credential using an Admin API Access Token.

### Required Fields

You'll be asked to fill in the following details:

| Field                  | Description                                                   |
|------------------------|---------------------------------------------------------------|
| Connection Name        | A name to help you identify this connection.                  |
| Store Subdomain        | Your Shopify store subdomain ID.                              |
| Admin API Access Token | Create a custom app in your Shopify account to obtain this.   |

First, log in to your [Shopify account](https://accounts.shopify.com/select?rid=539d146c-195f-4011-97ab-fe776d9c0e58). Then follow the step-by-step guide below.

---

### Step-by-Step Guide

#### Step 1: Find your Store Subdomain

<img src="/img/credentials/shopify/settings.png" alt="appse ai Shopify Settings" width="700"/>

Go to **Settings**. Under your store name, you will find your Shopify store subdomain.

<img src="/img/credentials/shopify/store-id.png" alt="appse ai shopify store id" width="700"/>

> **Example:** If your Shopify subdomain looks like `5bazzn-ja.myshopify.com`, you only need to paste `5bazzn-ja` in the credential form.

---

#### Step 2: Find your Admin API Access Token

<img src="/img/credentials/shopify/develop-apps.png" alt="appse ai shopify develop apps" width="700"/>

In the **Settings** section, navigate to **Apps and Sales Channels**, then click **Develop Apps**.

##### Enable Custom Legacy App Development

<img src="/img/credentials/shopify/allow-legacy-custom-app-development.png" alt="appse ai allow custom legacy apps shopify" width="400"/>

<img src="/img/credentials/shopify/allow-legacy-custom-app-development-2.png" alt="appse ai allow custom legacy app development shopify 2" width="400"/>

Click **"Allow custom legacy app development"**, then click **"Allow custom app development"**.

<img src="/img/credentials/shopify/allow-legacy-custom-app-development-3.png" alt="appse ai allow custom legacy app development shopify 3" width="400"/>

<img src="/img/credentials/shopify/create-legacy-app.png" alt="appse ai shopify create legacy app" width="400"/>

You should now see a **"Create a custom legacy app"** button — click on it.

---

#### Step 3: Create the App

<img src="/img/credentials/shopify/create-app-name.png" alt="appse ai shopify create app name" width="700"/>

Set a name for your custom app and click **"Create app"**.

---

#### Step 4: Configure Scopes

<img src="/img/credentials/shopify/choose-scopes-button.png" alt="appse ai shopify choose scopes button" width="700"/>

Click **"Configure Admin API scopes"** and enable the following scopes:

`read_all_orders` `read_customers` `write_customers` `read_fulfillments` `write_fulfillments` `read_inventory` `write_inventory` `read_locations` `write_locations` `read_orders` `write_orders` `read_products` `write_products` `read_publications` `write_publications` `read_discounts` `write_discounts` `read_shipping` `write_shipping`

<img src="/img/credentials/shopify/choose-scopes.png" alt="appse ai shopify choose scopes" width="700"/>

Once all scopes are selected, click **"Save"**.

---

#### Step 5: Install the App

<img src="/img/credentials/shopify/install-app.png" alt="appse ai shopify install app" width="700"/>

Return to the **Overview** tab and click the **"Install"** button.

---

#### Step 6: Copy the Admin API Access Token

<img src="/img/credentials/shopify/admin-api-access-token.png" alt="appse ai shopify admin api access token" width="700"/>

In the **API credentials** tab, your Admin API Access Token will be displayed.

Click the **"Reveal token once"** button. Copy the token and store it somewhere secure — you will **not** be able to see it again.

:::caution
The Admin API Access Token is shown **only once**. If you lose it, you will have to create a new custom app.
:::

---

#### Step 7: Add the Fields to appse ai

Enter the **Store Subdomain** and **Admin API Access Token** in appse ai and click **"Save"**.

If you followed all the steps correctly, your credential will be connected successfully.

  </TabItem>
</Tabs>

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application-specific activities within the platform. Here is the current Shopify action set available in the platform.

<Tabs>

<TabItem value="triggers" label="Triggers" default>

### Trigger Events

- [New Company Created](#new-company-created)
- [New Customers Created](#new-customers-created)
- [Customers Updated](#customers-updated)
- [New Company Location Created](#new-company-location-created)
- [New Products Created](#new-products-created)
- [Products Updated](#products-updated)
- [New Orders Created](#new-orders-created)
- [Orders Cancelled](#orders-cancelled)
- [New Refund Created](#new-refund-created)
- [New Return Created](#new-return-created)
- [New Abandoned Checkout](#new-abandoned-checkout)

#### New Company Created

New Company Created trigger is activated whenever a new company is created in Shopify. It helps capture newly added company records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NCMPNYC1.jpg" alt="Shopify New Company Created trigger configuration" width="700" />

Click on **Continue** button

-------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------

##### Example Configuration

<img src="/img/credentials/shopify/TC-NCMPNYC2.jpg" alt="Shopify New Company Created trigger example configuration" width="700" />


--------------

##### Result
```json
[
  {
    "id": "gid://shopify/Company/733937836",
    "name": "WinterFell",
    "note": null,
    "createdAt": "2024-12-27T06:15:31Z",
    "updatedAt": "2024-12-27T06:15:32Z",
    "customerSince": "2024-12-27T06:15:31Z",
    "externalId": null,
    "contactRoles": {
      "nodes": [
        {
          "id": "gid://shopify/CompanyContactRole/1404371116",
          "name": "Location admin",
          "note": "System-defined Location admin role"
        },
        {
          "id": "gid://shopify/CompanyContactRole/1404403884",
          "name": "Ordering only",
          "note": "System-defined Ordering only role"
        }
      ]
    },
    "contacts": {
      "nodes": [
        {
          "id": "gid://shopify/CompanyContact/502857900",
          "title": null,
          "customer": {
            "id": "gid://shopify/Customer/8221165420716",
            "email": "aryastrk@yopmail.com",
            "firstName": "Aryaa",
            "lastName": "Staark Staark Staark Staark Staark Staark Staark Staar"
          },
          "createdAt": "2024-12-27T06:15:31Z",
          "updatedAt": "2024-12-27T06:15:32Z",
          "__typename": "CompanyContact"
        }
      ]
    },
    "contactsCount": {
      "count": 1,
      "precision": "EXACT"
    },
    "defaultRole": {
      "id": "gid://shopify/CompanyContactRole/1404403884",
      "name": "Ordering only",
      "note": "System-defined Ordering only role"
    },
    "locations": {
      "nodes": [
        {
          "billingAddress": {
            "id": "gid://shopify/CompanyAddress/955318444",
            "address1": "Begumpet",
            "address2": "AecCompany",
            "city": "Hyderabad",
            "zip": "500038",
            "companyName": "WinterFell",
            "country": "India",
            "countryCode": "IN",
            "createdAt": "2024-12-27T06:15:31Z",
            "phone": "+919191919191",
            "province": "Telangana",
            "zoneCode": "TS",
            "updatedAt": "2024-12-27T06:15:31Z",
            "formattedAddress": [
              "WinterFell",
              "Begumpet",
              "AecCompany",
              "500038 Hyderabad TS",
              "India"
            ],
            "firstName": "Arya",
            "lastName": "Stark",
            "formattedArea": "Hyderabad TG, India",
            "recipient": "WinterFell "
          },
          "shippingAddress": {
            "id": "gid://shopify/CompanyAddress/955285676",
            "address1": "Begumpet",
            "address2": "AecCompany",
            "city": "Hyderabad",
            "companyName": "WinterFell",
            "zip": "500038",
            "phone": "+919191919191",
            "province": "Telangana",
            "lastName": "Stark",
            "firstName": "Arya",
            "formattedAddress": [
              "WinterFell",
              "Begumpet",
              "AecCompany",
              "500038 Hyderabad TS",
              "India"
            ],
            "formattedArea": "Hyderabad TG, India",
            "country": "India",
            "countryCode": "IN",
            "zoneCode": "TS",
            "createdAt": "2024-12-27T06:15:31Z",
            "updatedAt": "2024-12-27T06:15:31Z",
            "recipient": "WinterFell "
          },
          "taxSettings": {
            "taxExempt": false,
            "taxExemptions": []
          },
          "catalogs": {
            "nodes": []
          }
        }
      ]
    },
    "orders": {
      "nodes": []
    },
    "ordersCount": {
      "__typename": "Count",
      "count": 0,
      "precision": "EXACT"
    },
    "metafields": {
      "nodes": []
    }
  }
]
```
----------------

#### New Customers Created

New Customer Created trigger is activated whenever a new customer is created in Shopify. It helps capture newly added customer records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NCUSTMRC3.jpg" alt="Shopify New Customer Created trigger configuration" width="700" />

Click on **Continue** button

-------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "id": "gid://shopify/Customer/7703263445164",
    "firstName": "Don",
    "lastName": "Max",
    "defaultEmailAddress": {
      "emailAddress": "shawn.michel@yopmail.com",
      "marketingState": "NOT_SUBSCRIBED"
    },
    "metafields": {
      "nodes": []
    },
    "defaultPhoneNumber": {
      "phoneNumber": "+919988779898",
      "marketingState": "NOT_SUBSCRIBED",
      "marketingCollectedFrom": null
    },
    "smsMarketingConsent": {
      "marketingState": "NOT_SUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN",
      "consentUpdatedAt": null
    },
    "createdAt": "2024-05-27T05:54:24Z",
    "updatedAt": "2025-11-25T12:56:53Z",
    "numberOfOrders": "2",
    "state": "DISABLED",
    "amountSpent": {
      "amount": "0.0",
      "currencyCode": "USD"
    },
    "verifiedEmail": true,
    "taxExempt": false,
    "tags": [],
    "addresses": [
      {
        "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
        "firstName": "Shawn",
        "lastName": "Michel",
        "company": "",
        "address1": "New Street",
        "city": "Los Angeles",
        "province": "California",
        "country": "United States",
        "zip": "90001",
        "phone": "+11234512345",
        "name": "Shawn Michel",
        "provinceCode": "CA",
        "countryCodeV2": "US"
      }
    ],
    "defaultAddress": {
      "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
      "address1": "New Street",
      "city": "Los Angeles",
      "province": "California",
      "country": "United States",
      "zip": "90001",
      "phone": "+11234512345",
      "provinceCode": "CA",
      "countryCodeV2": "US"
    }
  }
]
```
----------------

#### Customers Updated

Customer Updated trigger is activated whenever a customer is updated in Shopify. It helps capture modified customer records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CUSTMRU4.jpg" alt="Shopify Customer Updated trigger configuration" width="700" />

Click on **Continue** button

----------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch updated items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "id": "gid://shopify/Customer/7703263445164",
    "firstName": "Don",
    "lastName": "Max",
    "defaultEmailAddress": {
      "emailAddress": "shawn.michel@yopmail.com",
      "marketingState": "NOT_SUBSCRIBED"
    },
    "metafields": {
      "nodes": []
    },
    "defaultPhoneNumber": {
      "phoneNumber": "+919988779898",
      "marketingState": "NOT_SUBSCRIBED",
      "marketingCollectedFrom": null
    },
    "smsMarketingConsent": {
      "marketingState": "NOT_SUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN",
      "consentUpdatedAt": null
    },
    "createdAt": "2024-05-27T05:54:24Z",
    "updatedAt": "2025-11-25T12:56:53Z",
    "numberOfOrders": "2",
    "state": "DISABLED",
    "amountSpent": {
      "amount": "0.0",
      "currencyCode": "USD"
    },
    "verifiedEmail": true,
    "taxExempt": false,
    "tags": [],
    "addresses": [
      {
        "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
        "firstName": "Shawn",
        "lastName": "Michel",
        "company": "",
        "address1": "New Street",
        "city": "Los Angeles",
        "province": "California",
        "country": "United States",
        "zip": "90001",
        "phone": "+11234512345",
        "name": "Shawn Michel",
        "provinceCode": "CA",
        "countryCodeV2": "US"
      }
    ],
    "defaultAddress": {
      "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
      "address1": "New Street",
      "city": "Los Angeles",
      "province": "California",
      "country": "United States",
      "zip": "90001",
      "phone": "+11234512345",
      "provinceCode": "CA",
      "countryCodeV2": "US"
    }
  }
]
```
----------------


#### New Company Location Created

New Company Location Created trigger is activated whenever a new company location is created in Shopify. It helps capture newly added company location records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CMPNYLOCTINC5.jpg" alt="Shopify New Company Location Created trigger configuration" width="700" />

Click on **Continue** button

-------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "id": "gid://shopify/CompanyLocation/769884332",
    "createdAt": "2024-12-27T06:15:31Z",
    "updatedAt": "2024-12-27T06:15:32Z",
    "name": "WinterFell",
    "note": null,
    "billingAddress": {
      "id": "gid://shopify/CompanyAddress/955318444",
      "city": "Hyderabad",
      "companyName": "WinterFell",
      "firstName": "Arya",
      "lastName": "Stark",
      "zip": "500038",
      "phone": "+919191919191",
      "province": "Telangana",
      "zoneCode": "TS",
      "countryCode": "IN",
      "country": "India",
      "__typename": "CompanyAddress",
      "createdAt": "2024-12-27T06:15:31Z",
      "updatedAt": "2024-12-27T06:15:31Z"
    },
    "shippingAddress": {
      "id": "gid://shopify/CompanyAddress/955285676",
      "city": "Hyderabad",
      "companyName": "WinterFell",
      "firstName": "Arya",
      "lastName": "Stark",
      "zip": "500038",
      "phone": "+919191919191",
      "province": "Telangana",
      "zoneCode": "TS",
      "countryCode": "IN",
      "country": "India",
      "__typename": "CompanyAddress",
      "createdAt": "2024-12-27T06:15:31Z",
      "updatedAt": "2024-12-27T06:15:31Z"
    },
    "buyerExperienceConfiguration": {
      "checkoutToDraft": false,
      "editableShippingAddress": false,
      "paymentTermsTemplate": null
    },
    "company": {
      "id": "gid://shopify/Company/733937836",
      "name": "WinterFell",
      "note": null,
      "contacts": {
        "nodes": [
          {
            "id": "gid://shopify/CompanyContact/502857900",
            "isMainContact": true,
            "title": null
          }
        ]
      }
    },
    "orders": {
      "nodes": []
    },
    "taxSettings": {
      "taxExempt": false,
      "taxExemptions": []
    }
  }
]
```
----------------

#### New Products Created

New Product Created trigger is activated whenever a new product is created in Shopify. It helps capture newly added product records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NPRDTC6.jpg" alt="Shopify New Product Created trigger configuration" width="700" />

Click on **Continue** button

--------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

------------------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "id": "gid://shopify/Product/7947306008748",
    "title": "TEST1",
    "description": "TEST1",
    "productType": "Simple",
    "handle": "test1",
    "totalInventory": 2000,
    "tags": [],
    "createdAt": "2024-05-27T09:57:09Z",
    "updatedAt": "2026-03-22T06:24:36Z",
    "status": "ACTIVE",
    "unpublishedPublications": {
      "nodes": [
        {
          "id": "gid://shopify/Publication/123613937836"
        },
        {
          "id": "gid://shopify/Publication/124182200492"
        }
      ]
    },
    "metafields": {
      "nodes": []
    },
    "variants": {
      "nodes": [
        {
          "sku": "QASY0002",
          "id": "gid://shopify/ProductVariant/43504611917996",
          "title": "Default Title",
          "price": "100.00",
          "displayName": "TEST1 - Default Title",
          "inventoryItem": {
            "id": "gid://shopify/InventoryItem/45577551904940",
            "sku": "QASY0002",
            "inventoryLevels": {
              "nodes": [
                {
                  "location": {
                    "id": "gid://shopify/Location/71018905772",
                    "name": "Shop location",
                    "address": {
                      "address1": "California",
                      "address2": "APT",
                      "city": "California",
                      "province": "California",
                      "country": "United States",
                      "zip": "00029"
                    }
                  }
                },
                {
                  "location": {
                    "id": "gid://shopify/Location/71027851436",
                    "name": "Hyderabad Warehouse",
                    "address": {
                      "address1": "Hyderabad",
                      "address2": "Near Metro Pillar N0 1034, Kauveri Apartmets",
                      "city": "Hyderabad",
                      "province": "Telangana",
                      "country": "India",
                      "zip": "500038"
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
]
```
----------------

#### Products Updated

Products Updated trigger is activated whenever a product is updated in Shopify. It helps capture modified product records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-PRDCTU7.jpg" alt="Shopify Products Updated trigger configuration" width="700" />

Click on **Continue** button

------------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch updated items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------------------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

------------------------

##### Result
```json
[
  {
    "id": "gid://shopify/Product/7947306008748",
    "title": "TEST1",
    "description": "TEST1",
    "productType": "Simple",
    "handle": "test1",
    "totalInventory": 2000,
    "tags": [],
    "createdAt": "2024-05-27T09:57:09Z",
    "updatedAt": "2026-03-22T06:24:36Z",
    "status": "ACTIVE",
    "unpublishedPublications": {
      "nodes": [
        {
          "id": "gid://shopify/Publication/123613937836"
        },
        {
          "id": "gid://shopify/Publication/124182200492"
        }
      ]
    },
    "metafields": {
      "nodes": []
    },
    "variants": {
      "nodes": [
        {
          "sku": "QASY0002",
          "id": "gid://shopify/ProductVariant/43504611917996",
          "title": "Default Title",
          "price": "100.00",
          "displayName": "TEST1 - Default Title",
          "inventoryItem": {
            "id": "gid://shopify/InventoryItem/45577551904940",
            "sku": "QASY0002",
            "inventoryLevels": {
              "nodes": [
                {
                  "location": {
                    "id": "gid://shopify/Location/71018905772",
                    "name": "Shop location",
                    "address": {
                      "address1": "California",
                      "address2": "APT",
                      "city": "California",
                      "province": "California",
                      "country": "United States",
                      "zip": "00029"
                    }
                  }
                },
                {
                  "location": {
                    "id": "gid://shopify/Location/71027851436",
                    "name": "Hyderabad Warehouse",
                    "address": {
                      "address1": "Hyderabad",
                      "address2": "Near Metro Pillar N0 1034, Kauveri Apartmets",
                      "city": "Hyderabad",
                      "province": "Telangana",
                      "country": "India",
                      "zip": "500038"
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
]
```
----------------

#### New Orders Created

New Order Created trigger is activated whenever a new order is created in Shopify. It helps capture newly added order records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NORDC8.jpg" alt="Shopify New Order Created trigger configuration" width="700" />

Click on **Continue** button

----------------------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "billingAddress": {
      "id": "gid://shopify/MailingAddress/12566611820716?model_name=Address",
      "firstName": "Shawn",
      "lastName": "Michel",
      "company": null,
      "address1": "New Street",
      "address2": "New APT 01",
      "city": "New Town",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "700156",
      "province": "West Bengal",
      "provinceCode": "WB"
    },
    "shippingAddress": {
      "id": "gid://shopify/MailingAddress/12566611787948?model_name=Address",
      "firstName": "Shawn",
      "lastName": "Michel",
      "company": null,
      "address1": "New Street",
      "address2": "New APT 01",
      "city": "New Town",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "700156",
      "province": "West Bengal",
      "provinceCode": "WB"
    },
    "tags": [],
    "metafields": {
      "nodes": []
    },
    "customer": {
      "id": "gid://shopify/Customer/7703263445164",
      "firstName": "Don",
      "lastName": "Max",
      "displayName": "Don Max",
      "phone": "+919988779898",
      "email": "shawn.michel@yopmail.com",
      "addresses": [
        {
          "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
          "address1": "New Street",
          "address2": "New APT 01",
          "city": "Los Angeles",
          "country": "United States",
          "countryCodeV2": "US",
          "firstName": "Shawn",
          "lastName": "Michel",
          "name": "Shawn Michel",
          "phone": "+11234512345",
          "province": "California",
          "provinceCode": "CA",
          "zip": "90001"
        }
      ],
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
        "address1": "New Street",
        "address2": "New APT 01",
        "city": "Los Angeles",
        "country": "United States",
        "countryCodeV2": "US",
        "firstName": "Shawn",
        "lastName": "Michel",
        "name": "Shawn Michel",
        "phone": "+11234512345",
        "province": "California",
        "provinceCode": "CA",
        "zip": "90001"
      }
    },
    "id": "gid://shopify/Order/6012594225324",
    "name": "#1001",
    "createdAt": "2024-05-27T06:01:08Z",
    "currencyCode": "USD",
    "displayFinancialStatus": "REFUNDED",
    "email": "shawn.michel@yopmail.com",
    "fullyPaid": true,
    "updatedAt": "2024-07-08T12:53:40Z",
    "paymentTerms": null,
    "currentSubtotalPriceSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "transactions": [
      {
        "id": "gid://shopify/OrderTransaction/7215226421420",
        "gateway": "manual",
        "paymentIcon": {
          "altText": "other"
        },
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "100.0"
          }
        }
      },
      {
        "id": "gid://shopify/OrderTransaction/7325794861228",
        "gateway": "manual",
        "paymentIcon": {
          "altText": "unknown"
        },
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "100.0"
          }
        }
      }
    ],
    "totalDiscountsSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "discountApplications": {
      "nodes": []
    },
    "lineItems": {
      "nodes": [
        {
          "id": "gid://shopify/LineItem/14588819210412",
          "sku": "AM-A-01",
          "quantity": 1,
          "title": "SM Anchor 10A",
          "name": "SM Anchor 10A",
          "originalUnitPriceSet": {
            "presentmentMoney": {
              "amount": "100.0"
            }
          },
          "taxLines": []
        }
      ]
    },
    "fulfillmentOrders": {
      "nodes": [
        {
          "id": "gid://shopify/FulfillmentOrder/6961387962540",
          "lineItems": {
            "nodes": [
              {
                "id": "gid://shopify/FulfillmentOrderLineItem/14723974693036"
              }
            ]
          }
        }
      ]
    },
    "taxLines": [],
    "currentTotalTaxSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "shippingLines": {
      "nodes": []
    }
  }
]
```
----------------

#### Orders Cancelled

Orders Cancelled trigger is activated whenever an order is cancelled in Shopify. It helps capture cancelled order records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-ORDCANCLD9.jpg" alt="Shopify Orders Cancelled trigger configuration" width="700" />

Click on **Continue** button

----------------------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch cancelled items from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

------------------------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "billingAddress": {
      "id": "gid://shopify/MailingAddress/12566611820716?model_name=Address",
      "firstName": "Shawn",
      "lastName": "Michel",
      "company": null,
      "address1": "New Street",
      "address2": "New APT 01",
      "city": "New Town",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "700156",
      "province": "West Bengal",
      "provinceCode": "WB"
    },
    "shippingAddress": {
      "id": "gid://shopify/MailingAddress/12566611787948?model_name=Address",
      "firstName": "Shawn",
      "lastName": "Michel",
      "company": null,
      "address1": "New Street",
      "address2": "New APT 01",
      "city": "New Town",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "700156",
      "province": "West Bengal",
      "provinceCode": "WB"
    },
    "tags": [],
    "cancelledAt": "2024-07-08T12:53:40Z",
    "refunds": [
      {
        "id": "gid://shopify/Refund/904384315564",
        "note": "Order canceled",
        "refundLineItems": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/RefundLineItem/416966934700",
                "lineItem": {
                  "id": "gid://shopify/LineItem/14588819210412",
                  "currentQuantity": 0
                }
              }
            }
          ]
        }
      }
    ],
    "returns": {
      "edges": []
    },
    "returnStatus": "NO_RETURN",
    "metafields": {
      "edges": []
    },
    "customer": {
      "id": "gid://shopify/Customer/7703263445164",
      "firstName": "Don",
      "lastName": "Max",
      "displayName": "Don Max",
      "phone": "+919988779898",
      "email": "shawn.michel@yopmail.com",
      "addresses": [
        {
          "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
          "address1": "New Street",
          "address2": "New APT 01",
          "city": "Los Angeles",
          "country": "United States",
          "countryCodeV2": "US",
          "firstName": "Shawn",
          "lastName": "Michel",
          "name": "Shawn Michel",
          "phone": "+11234512345",
          "province": "California",
          "provinceCode": "CA",
          "zip": "90001"
        }
      ],
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
        "address1": "New Street",
        "address2": "New APT 01",
        "city": "Los Angeles",
        "country": "United States",
        "countryCodeV2": "US",
        "firstName": "Shawn",
        "lastName": "Michel",
        "name": "Shawn Michel",
        "phone": "+11234512345",
        "province": "California",
        "provinceCode": "CA",
        "zip": "90001"
      }
    },
    "id": "gid://shopify/Order/6012594225324",
    "name": "#1001",
    "createdAt": "2024-05-27T06:01:08Z",
    "currencyCode": "USD",
    "displayFinancialStatus": "REFUNDED",
    "email": "shawn.michel@yopmail.com",
    "fullyPaid": true,
    "updatedAt": "2024-07-08T12:53:40Z",
    "currentSubtotalPriceSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "transactions": [
      {
        "id": "gid://shopify/OrderTransaction/7215226421420",
        "gateway": "manual",
        "paymentIcon": {
          "altText": "other"
        },
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "100.0"
          }
        }
      },
      {
        "id": "gid://shopify/OrderTransaction/7325794861228",
        "gateway": "manual",
        "paymentIcon": {
          "altText": "unknown"
        },
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "100.0"
          }
        }
      }
    ],
    "totalDiscountsSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "discountApplications": {
      "edges": []
    },
    "lineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/LineItem/14588819210412",
            "sku": "AM-A-01",
            "quantity": 1,
            "title": "SM Anchor 10A",
            "name": "SM Anchor 10A",
            "originalUnitPriceSet": {
              "presentmentMoney": {
                "amount": "100.0"
              }
            },
            "variant": null,
            "taxLines": []
          }
        }
      ]
    },
    "fulfillmentOrders": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/FulfillmentOrder/6961387962540",
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/FulfillmentOrderLineItem/14723974693036"
                  }
                }
              ]
            }
          }
        }
      ]
    },
    "taxLines": [],
    "currentTotalTaxSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "shippingLines": {
      "edges": []
    }
  }
]
```
----------------

#### New Refund Created

New Refund Created trigger is activated whenever a new refund is created in Shopify. It helps capture newly created refund records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NRFNDC10.jpg" alt="Shopify New Refund Created trigger configuration" width="700" />

Click on **Continue** button

-------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created refunds from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "id": "gid://shopify/Order/6012594225324",
    "name": "#1001",
    "createdAt": "2024-05-27T06:01:08Z",
    "updatedAt": "2024-07-08T12:53:40Z",
    "cancelledAt": "2024-07-08T12:53:40Z",
    "currencyCode": "USD",
    "displayFinancialStatus": "REFUNDED",
    "email": "shawn.michel@yopmail.com",
    "fullyPaid": true,
    "tags": [],
    "returnStatus": "NO_RETURN",
    "billingAddress": {
      "id": "gid://shopify/MailingAddress/12566611820716?model_name=Address",
      "firstName": "Shawn",
      "lastName": "Michel",
      "company": null,
      "address1": "New Street",
      "address2": "New APT 01",
      "city": "New Town",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "700156",
      "province": "West Bengal",
      "provinceCode": "WB"
    },
    "shippingAddress": {
      "id": "gid://shopify/MailingAddress/12566611787948?model_name=Address",
      "firstName": "Shawn",
      "lastName": "Michel",
      "company": null,
      "address1": "New Street",
      "address2": "New APT 01",
      "city": "New Town",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "700156",
      "province": "West Bengal",
      "provinceCode": "WB"
    },
    "customer": {
      "id": "gid://shopify/Customer/7703263445164",
      "firstName": "Don",
      "lastName": "Max",
      "displayName": "Don Max",
      "phone": "+919988779898",
      "email": "shawn.michel@yopmail.com",
      "addresses": [
        {
          "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
          "address1": "New Street",
          "address2": "New APT 01",
          "city": "Los Angeles",
          "country": "United States",
          "countryCodeV2": "US",
          "firstName": "Shawn",
          "lastName": "Michel",
          "name": "Shawn Michel",
          "phone": "+11234512345",
          "province": "California",
          "provinceCode": "CA",
          "zip": "90001"
        }
      ],
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/9034324672684?model_name=CustomerAddress",
        "address1": "New Street",
        "address2": "New APT 01",
        "city": "Los Angeles",
        "country": "United States",
        "countryCodeV2": "US",
        "firstName": "Shawn",
        "lastName": "Michel",
        "name": "Shawn Michel",
        "phone": "+11234512345",
        "province": "California",
        "provinceCode": "CA",
        "zip": "90001"
      }
    },
    "refunds": [
      {
        "id": "gid://shopify/Refund/904384315564",
        "createdAt": "2024-07-08T12:53:40Z",
        "updatedAt": "2024-07-08T12:53:40Z",
        "note": "Order canceled",
        "refundLineItems": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/RefundLineItem/416966934700",
                "lineItem": {
                  "id": "gid://shopify/LineItem/14588819210412",
                  "requiresShipping": true,
                  "restockable": false,
                  "currentQuantity": 0,
                  "nonFulfillableQuantity": 1,
                  "name": "SM Anchor 10A",
                  "quantity": 1,
                  "originalTotalSet": {
                    "presentmentMoney": {
                      "amount": "100.0",
                      "__typename": "MoneyV2"
                    }
                  },
                  "unfulfilledOriginalTotalSet": {
                    "presentmentMoney": {
                      "amount": "100.0",
                      "__typename": "MoneyV2"
                    }
                  },
                  "product": null
                }
              }
            }
          ]
        }
      }
    ],
    "returns": {
      "edges": []
    },
    "metafields": {
      "edges": []
    },
    "currentSubtotalPriceSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "transactions": [
      {
        "id": "gid://shopify/OrderTransaction/7215226421420",
        "gateway": "manual",
        "paymentIcon": {
          "altText": "other"
        },
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "100.0"
          }
        }
      },
      {
        "id": "gid://shopify/OrderTransaction/7325794861228",
        "gateway": "manual",
        "paymentIcon": {
          "altText": "unknown"
        },
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "100.0"
          }
        }
      }
    ],
    "totalDiscountsSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "discountApplications": {
      "edges": []
    },
    "lineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/LineItem/14588819210412",
            "sku": "AM-A-01",
            "quantity": 1,
            "title": "SM Anchor 10A",
            "name": "SM Anchor 10A",
            "originalUnitPriceSet": {
              "presentmentMoney": {
                "amount": "100.0"
              }
            },
            "variant": null,
            "taxLines": []
          }
        }
      ]
    },
    "fulfillmentOrders": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/FulfillmentOrder/6961387962540",
            "lineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/FulfillmentOrderLineItem/14723974693036"
                  }
                }
              ]
            }
          }
        }
      ]
    },
    "taxLines": [],
    "currentTotalTaxSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "shippingLines": {
      "edges": []
    }
  }
]
```
----------------

#### New Return Created

New Return Created trigger is activated whenever a new return is created in Shopify. It helps capture newly created return records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NRRTNC11.jpg" alt="Shopify New Return Created trigger configuration" width="700" />

Click on **Continue** button

--------------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly created returns from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------------------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "tags": [],
    "returnStatus": "IN_PROGRESS",
    "returns": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Return/31826280620",
            "requestApprovedAt": "2026-04-22T13:36:22Z",
            "createdAt": "2026-04-22T13:36:22Z",
            "closedAt": null,
            "totalQuantity": 260,
            "refunds": {
              "edges": []
            },
            "returnLineItems": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/ReturnLineItem/49485480108",
                    "processedQuantity": 0,
                    "processableQuantity": 60,
                    "customerNote": null,
                    "refundedQuantity": 0,
                    "refundableQuantity": 60,
                    "unprocessedQuantity": 60,
                    "returnReasonNote": ""
                  }
                },
                {
                  "node": {
                    "id": "gid://shopify/ReturnLineItem/49485512876",
                    "processedQuantity": 0,
                    "processableQuantity": 200,
                    "customerNote": null,
                    "refundedQuantity": 0,
                    "refundableQuantity": 200,
                    "unprocessedQuantity": 200,
                    "returnReasonNote": ""
                  }
                }
              ]
            },
            "returnShippingFees": []
          }
        }
      ]
    },
    "metafields": {
      "edges": []
    },
    "customer": {
      "id": "gid://shopify/Customer/9163292246188",
      "firstName": "Rohit",
      "lastName": "Dalmia",
      "displayName": "Rohit Dalmia",
      "phone": "+919897654378",
      "email": "Falcon67@yopmail.com",
      "addresses": [
        {
          "id": "gid://shopify/MailingAddress/10243801186476?model_name=CustomerAddress",
          "address1": "Newtown",
          "address2": "BD block",
          "city": "Kolkata",
          "country": "India",
          "countryCodeV2": "IN",
          "firstName": "Rohit",
          "lastName": "Dalmia",
          "name": "Rohit Dalmia",
          "phone": "+919690890090",
          "province": "West Bengal",
          "provinceCode": "WB",
          "zip": "700156"
        },
        {
          "id": "gid://shopify/MailingAddress/10261301330092?model_name=CustomerAddress",
          "address1": "Amsterdam",
          "address2": null,
          "city": "Amsterdam",
          "country": "United States",
          "countryCodeV2": "US",
          "firstName": "Rohit",
          "lastName": "Dalmia",
          "name": "Rohit Dalmia",
          "phone": null,
          "province": "New York",
          "provinceCode": "NY",
          "zip": "12010"
        },
        {
          "id": "gid://shopify/MailingAddress/10262229647532?model_name=CustomerAddress",
          "address1": "Newtown",
          "address2": "BD block",
          "city": "Kolkata",
          "country": "India",
          "countryCodeV2": "IN",
          "firstName": "Rohit",
          "lastName": "Dalmia",
          "name": "Rohit Dalmia",
          "phone": null,
          "province": "West Bengal",
          "provinceCode": "WB",
          "zip": "700156"
        }
      ],
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/10262229647532?model_name=CustomerAddress",
        "address1": "Newtown",
        "address2": "BD block",
        "city": "Kolkata",
        "country": "India",
        "countryCodeV2": "IN",
        "firstName": "Rohit",
        "lastName": "Dalmia",
        "name": "Rohit Dalmia",
        "phone": null,
        "province": "West Bengal",
        "provinceCode": "WB",
        "zip": "700156"
      }
    },
    "id": "gid://shopify/Order/7234699690156",
    "name": "#1761",
    "createdAt": "2026-04-21T11:18:19Z",
    "updatedAt": "2026-04-22T13:36:22Z",
    "currencyCode": "USD",
    "displayFinancialStatus": "PAID",
    "email": "Falcon67@yopmail.com",
    "fullyPaid": true,
    "currentSubtotalPriceSet": {
      "presentmentMoney": {
        "amount": "18700.0"
      }
    },
    "transactions": [
      {
        "id": "gid://shopify/OrderTransaction/8854310650028",
        "gateway": "manual",
        "paymentIcon": {
          "altText": "other"
        },
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "20570.0"
          }
        }
      }
    ],
    "totalDiscountsSet": {
      "presentmentMoney": {
        "amount": "0.0"
      }
    },
    "discountApplications": {
      "edges": []
    },
    "lineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/LineItem/17054211965100",
            "sku": "RE021",
            "quantity": 60,
            "title": "Water Bottle",
            "name": "Water Bottle",
            "originalUnitPriceSet": {
              "presentmentMoney": {
                "amount": "45.0"
              }
            },
            "variant": {
              "id": "gid://shopify/ProductVariant/45377173029036",
              "product": {
                "id": "gid://shopify/Product/8486624952492"
              }
            },
            "taxLines": [
              {
                "title": "IGST2",
                "rate": 0.1,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "270.0"
                  }
                }
              }
            ]
          }
        },
        {
          "node": {
            "id": "gid://shopify/LineItem/17054211997868",
            "sku": "YELL67",
            "quantity": 200,
            "title": "Yellow Skirt",
            "name": "Yellow Skirt",
            "originalUnitPriceSet": {
              "presentmentMoney": {
                "amount": "80.0"
              }
            },
            "variant": {
              "id": "gid://shopify/ProductVariant/45377190822060",
              "product": {
                "id": "gid://shopify/Product/8486628622508"
              }
            },
            "taxLines": [
              {
                "title": "IGST2",
                "rate": 0.1,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "1600.0"
                  }
                }
              }
            ]
          }
        }
      ]
    },
    "taxLines": [
      {
        "title": "IGST2",
        "rate": 0.1
      }
    ],
    "currentTotalTaxSet": {
      "presentmentMoney": {
        "amount": "1870.0"
      }
    },
    "shippingLines": {
      "edges": []
    }
  }
]
```
----------------

#### New Abandoned Checkout

New Abandoned Checkout trigger is activated whenever a new abandoned checkout is created in Shopify. It helps capture newly created abandoned checkout records for automation and workflow processing.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NABNDNCHKOUT12.jpg" alt="Shopify New Abandoned Checkout trigger configuration" width="700" />

Click on **Continue** button

-------------

##### Configuration Fields

| Field          | Description |
|---------------|------------|
| Fetch data since | Select the date and time to fetch newly abandoned checkouts from that point onward. (e.g., 27/03/2026 06:51) |
| Limit | Set the maximum number of items to retrieve per run. (e.g., 10) |

Click on **Continue**, then **Run** the node.

---------------------

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

--------------

##### Result
```json
[
  {
    "id": "gid://shopify/AbandonedCheckout/36270641348780",
    "abandonedCheckoutUrl": "https://aecqa.myshopify.com/65225425068/checkouts/ac/hWN9BnOsWHe9H8pVWYacHHG5/recover?key=8a0dccedfd237694ea3d70fc4de33b83&locale=en-IN",
    "createdAt": "2026-02-25T11:22:05Z",
    "updatedAt": "2026-02-25T21:24:01Z",
    "completedAt": null,
    "billingAddress": {
      "country": "India",
      "zip": "700089",
      "city": "Barrackpore",
      "countryCodeV2": "IN",
      "province": "WB",
      "provinceCode": "WB",
      "phone": null,
      "address1": "Barrackpore Trunk Road Titagarh",
      "address2": "BD block"
    },
    "shippingAddress": null,
    "customer": {
      "firstName": "Rohit",
      "lastName": "Dalmia",
      "email": "Falcon67@yopmail.com"
    },
    "lineItems": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/AbandonedCheckoutLineItem/27de62d447ef7152ac11e5b187ee680d?checkout=d8fe1f92aaa118b8612883199976aec5&index=0&actoken"
          }
        }
      ]
    }
  }
]
```
----------------

 </TabItem>

<TabItem value="actions" label="Actions">

### Actions

### Customers Actions

#### Get Customer by Email

Get Customer by Email action retrieves customer details using the email address. using the email address. It helps in quickly identifying customer records based on contact information.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GCMPNYbyEMAIL1.jpg" alt="Shopify Get Customer by Email action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Email | Enter the customer email address. (e.g., "john.doe@example.com") |

:::note
If no customer is found with the provided email, the response will be empty or null. If multiple records exist, the system may return one or a list based on configuration.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-GCUSTMRbyEmail2.jpg" alt="Shopify Get Customer by Email action example configuration" width="700"  />

------------

##### Result

```json
[
  {
    "id": "gid://shopify/Customer/9304242225324",
    "firstName": "John",
    "lastName": "Doe",
    "defaultEmailAddress": {
      "emailAddress": "john.doe@example.com",
      "marketingState": "NOT_SUBSCRIBED"
    },
    "metafields": {
      "nodes": []
    },
    "defaultPhoneNumber": {
      "phoneNumber": "+919876543210",
      "marketingState": "NOT_SUBSCRIBED",
      "marketingCollectedFrom": null
    },
    "smsMarketingConsent": {
      "marketingState": "NOT_SUBSCRIBED",
      "marketingOptInLevel": "SINGLE_OPT_IN",
      "consentUpdatedAt": null
    },
    "createdAt": "2026-04-23T10:02:28Z",
    "updatedAt": "2026-04-23T10:02:28Z",
    "numberOfOrders": "0",
    "state": "DISABLED",
    "amountSpent": {
      "amount": "0.0",
      "currencyCode": "USD"
    },
    "verifiedEmail": true,
    "taxExempt": false,
    "tags": [],
    "addresses": [
      {
        "id": "gid://shopify/MailingAddress/10384399302828?model_name=CustomerAddress",
        "firstName": "John",
        "lastName": "Doe",
        "company": null,
        "address1": "123 Main Street",
        "city": "Hyderabad",
        "province": "Telangana",
        "country": "India",
        "zip": "500001",
        "phone": "+919876543210",
        "name": "John Doe",
        "provinceCode": "TS",
        "countryCodeV2": "IN"
      }
    ],
    "defaultAddress": {
      "id": "gid://shopify/MailingAddress/10384399302828?model_name=CustomerAddress",
      "address1": "123 Main Street",
      "city": "Hyderabad",
      "province": "Telangana",
      "country": "India",
      "zip": "500001",
      "phone": "+919876543210",
      "provinceCode": "TS",
      "countryCodeV2": "IN"
    }
  }
]
```

#### Update Customer

The Update Customer action is used to modify an existing customer's details such as contact information, personal details, and address.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-UCUSTMR11.jpg" alt="Shopify Update Customer action configuration" width="700"  />

Click on **Continue** button

-----------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Customer Id | Unique identifier of the customer. (e.g., "gid://shopify/Customer/9304271749292") |
| Optional Fields
Email | Update the customer email address. (e.g., "work.space@yopmail.com") |
| First Name | Customer's first name. (e.g., "Work") |
| Last Name | Customer's last name. (e.g., "Space") |
| Phone | Customer contact number. (e.g., "8765432134") |
| Note | Additional notes about the customer. (e.g., "Demo Purpose") |
| Address (Optional)
First Name | First name for the address. (e.g., "Marie") |
| Last Name | Last name for the address. (e.g., "John") |
| Address 1 | Primary address line. (e.g., "Lake Resort") |
| Address 2 | Secondary address line. (e.g., "Near LakeView Park") |
| City | City name. (e.g., "Hyderabad") |
| Phone | Contact number for the address. (e.g., "8767876567") |

:::note
Only the fields provided will be updated. Ensure the correct Customer Id is used to avoid modifying the wrong record.
:::

Click on **Continue**, then click **Run** node.

-------------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-UCUSTMR12.jpg" alt="Shopify Update Customer action example configuration" width="700"  />
<img src="/img/credentials/shopify/AC-UCUSTMR13.jpg" alt="Shopify Update Customer action example configuration" width="700"  />

--------------------

##### Result
```json
[
  {
    "data": {
      "customerUpdate": {
        "userErrors": [],
        "customer": {
          "id": "gid://shopify/Customer/9304271749292",
          "displayName": "Work Space",
          "firstName": "Work",
          "lastName": "Space",
          "email": "work.space@yopmail.com",
          "phone": "+918765432134",
          "state": "DISABLED",
          "createdAt": "2026-04-23T10:31:04Z",
          "updatedAt": "2026-04-23T10:47:38Z",
          "verifiedEmail": true,
          "tags": [],
          "note": "Demo Purpose",
          "amountSpent": {
            "amount": "0.0",
            "currencyCode": "USD"
          },
          "defaultAddress": {
            "id": "gid://shopify/MailingAddress/10384435216556?model_name=CustomerAddress",
            "firstName": "Marie",
            "lastName": "John",
            "company": null,
            "address1": "Lake Resort",
            "address2": "Near LakeView Park",
            "city": "Hyderabad",
            "province": null,
            "provinceCode": null,
            "countryCodeV2": null,
            "zip": null,
            "phone": "8767876567"
          },
          "addresses": [
            {
              "id": "gid://shopify/MailingAddress/10384435216556?model_name=CustomerAddress",
              "firstName": "Marie",
              "lastName": "John",
              "company": null,
              "address1": "Lake Resort",
              "address2": "Near LakeView Park",
              "city": "Hyderabad",
              "province": null,
              "provinceCode": null,
              "countryCodeV2": null,
              "zip": null,
              "phone": "8767876567"
            }
          ],
          "metafields": {
            "edges": []
          }
        }
      }
    },
    "extensions": {
      "cost": {
        "requestedQueryCost": 16,
        "actualQueryCost": 12,
        "throttleStatus": {
          "maximumAvailable": 2000,
          "currentlyAvailable": 1988,
          "restoreRate": 100
        }
      }
    }
  }
]
```
-----------------------------

#### Create a Customer

Create a Customer action is used to create a new customer record with basic contact details and address information.

##### Select Credential and Action Events

<img src="/img/credentials/shopify/C-CRTCUSTMR14.jpg" alt="Shopify Create Customer action configuration" width="700"  />

Click on **Continue** button

--------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Email | Enter the customer email address. (e.g., "alex.chris@yopmail.com") |
| Optional Fields
First Name | Customer's first name. (e.g., "Chris") |
| Last Name | Customer's last name. (e.g., "Alex") |
| Phone | Customer contact number. (e.g., "9878094534") |
| Note | Additional notes about the customer. (e.g., "Chris david - test customer") |
| Addresses
Country Name | Specify the country code. (e.g., "IN") |
| Address Optional Fields
First Name | First name for the address. (e.g., "Merie") |
| Last Name | Last name for the address. (e.g., "Christ") |
| Address1 | Primary address line. (e.g., "Necklace Road") |
| Address2 | Secondary address line. (e.g., "near cafe street") |
| City | City name. (e.g., "Hyderabad") |
| Phone | Contact number for the address. (e.g., "76546787656") |

:::note
Email is required for creating a customer. Other fields are optional and can be configured based on requirements.
:::

Click on **Continue**, then click **Run** node.

-------------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-CRTCUSTMR15.jpg" alt="Shopify Create Customer action example configuration" width="700"  />
<img src="/img/credentials/shopify/AC-CRTCUSTMR16.jpg" alt="Shopify Create Customer action example configuration" width="700"  />

--------------

##### Result
```json
[
  {
    "customer": {
      "id": "gid://shopify/Customer/9304339513516",
      "displayName": "Chris Alex",
      "firstName": "Chris",
      "lastName": "Alex",
      "email": "alex.chris@yopmail.com",
      "phone": "+919878094534",
      "state": "DISABLED",
      "createdAt": "2026-04-23T11:23:57Z",
      "updatedAt": "2026-04-23T11:23:57Z",
      "verifiedEmail": true,
      "tags": [],
      "note": "Chris david - test customer",
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/10384469360812?model_name=CustomerAddress",
        "firstName": "Merie",
        "lastName": "Christ",
        "company": null,
        "address1": "Necklace Road",
        "address2": "near cafe street",
        "city": "Hyderabad",
        "province": null,
        "provinceCode": null,
        "country": "India",
        "countryCodeV2": "IN",
        "zip": null,
        "phone": "76546787656"
      },
      "addresses": [
        {
          "id": "gid://shopify/MailingAddress/10384469360812?model_name=CustomerAddress",
          "firstName": "Merie",
          "lastName": "Christ",
          "company": null,
          "address1": "Necklace Road",
          "address2": "near cafe street",
          "city": "Hyderabad",
          "province": null,
          "provinceCode": null,
          "country": "India",
          "countryCodeV2": "IN",
          "zip": null,
          "phone": "76546787656"
        }
      ],
      "metafields": {
        "edges": []
      }
    }
  }
]
```
---------------

### Companies Actions

#### Create Company

Create Company action is used to create a new company record in the system. It helps manage organizations and associate customers or contacts under a company.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CCMPNY19.jpg" alt="Shopify Create Company action configuration" width="700"  />

Click on **Continue** button

---------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Company Name | Enter the name of the company. (e.g., "Libas Store") |

:::note
Company Name is required. Additional details can be added later by updating the company record.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-CCMPNY20.jpg" alt="Shopify Create Company action example configuration" width="700"  />

-------

##### Result

```json
[
  {
    "company": {
      "id": "gid://shopify/Company/13819740332",
      "name": "Libas Store",
      "contactRoles": [
        {
          "id": "gid://shopify/CompanyContactRole/27448967340",
          "name": "Location admin"
        },
        {
          "id": "gid://shopify/CompanyContactRole/27449000108",
          "name": "Ordering only"
        }
      ],
      "locations": [
        {}
      ]
    }
  }
]
```
-----------------

#### Create Company Location

Create Company Location action is used to add a new location for a company, including shipping address and related details. This helps manage multiple locations under a single company.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CCMPNYLCTON21.jpg" alt="Shopify Create Company Location action configuration" width="700"  />

Click on **Continue** button

-----------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Company ID | Unique identifier of the company. (e.g., "gid://shopify/Company/13819740332") |
| Name | Name of the company location. (e.g., "Libas Store") |
| Note | Additional notes for the location. (e.g., "Libas Store") |
| Shipping Address
Country Code | Country code for the address. (e.g., "US") |
| Optional Fields
First Name | First name for the address contact. (e.g., "Dennie") |
| Last Name | Last name for the address contact. (e.g., "John") |
| Address1 | Primary address line. (e.g., "Evergreen Terrace") |
| Address2 | Secondary address line. (e.g., "Apt. 5B") |
| City | City name. (e.g., "Springfield") |
| Province Code | State or province code. (e.g., "IL") |
| ZIP/Postal Code | Postal or ZIP code. (e.g., "62704") |
| Phone | Contact number. (e.g., "9087676767") |
| Tax Exempt | Indicates if the location is tax exempt (**True/False**). (e.g., "True") |

:::note
Ensure the Company ID is valid before creating a location. Country Code is required for defining the shipping address.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-CCMPNYLCTON22.jpg" alt="Shopify Create Company Location action example configuration" width="700"  />
<img src="/img/credentials/shopify/AC-CCMPNYLCTON23.jpg" alt="Shopify Create Company Location action example configuration" width="700"  />

-------------------

##### Result

```json
[
  {
    "companyLocation": {
      "id": "gid://shopify/CompanyLocation/13888946348",
      "name": "Libas Store",
      "note": null,
      "createdAt": "2026-04-23T12:50:18Z",
      "updatedAt": "2026-04-23T12:50:18Z",
      "billingAddress": null,
      "shippingAddress": {
        "id": "gid://shopify/CompanyAddress/2484863148",
        "city": "Springfield",
        "companyName": "Libas Store",
        "firstName": "Dennie",
        "lastName": "John",
        "zip": "62704",
        "phone": "+919087676767",
        "province": "Illinois",
        "countryCode": "US",
        "country": "United States"
      },
      "buyerExperienceConfiguration": {
        "checkoutToDraft": false,
        "editableShippingAddress": false
      },
      "taxSettings": {
        "taxExempt": true,
        "taxExemptions": []
      },
      "company": {
        "id": "gid://shopify/Company/13819740332",
        "name": "Libas Store"
      }
    },
    "userErrors": []
  }
]
```
----------

#### Create Company Contact

Create Company Contact action is used to create a contact person associated with a company. It helps manage company-level contacts with their communication and role details.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CCMPNYCNTCT17.jpg" alt="Shopify Create Company Contact action configuration" width="700"  />

Click on **Continue** button

--------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Company ID | Unique identifier of the company. (e.g., "gid://shopify/Company/3348889772") |
| Email | Enter the contact email address. (e.g., "alex.deny@yopmail.com") |
| Optional Fields
First Name | Contact person's first name. (e.g., "Deny") |
| Last Name | Contact person's last name. (e.g., "Veny") |
| Phone | Contact number. (e.g., "9087612345") |
| Title | Job title of the contact. (e.g., "Sales Manager") |
| Locale | Language/region setting for the contact. (e.g., "en") |

:::note
Ensure the Company ID is valid before creating the contact. Email is typically required to uniquely identify the contact.
:::

Click on **Continue**, then click **Run** node.

---------------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-CCMPNYCNTCTN18.jpg" alt="Shopify Create Company Contact action example configuration" width="700"  />

-------------------

##### Result

```json
[
  {
    "companyContact": {
      "id": "gid://shopify/CompanyContact/1304559788",
      "company": {
        "id": "gid://shopify/Company/13819740332",
        "name": "Libas Store"
      },
      "customer": {
        "id": "gid://shopify/Customer/9304515543212",
        "firstName": "Denna",
        "lastName": "Josh",
        "email": "libas.storemax@yopmail.com"
      }
    },
    "userErrors": []
  }
]
```
--------------
#### Get Company Contact by ID

Get Company Contact by ID action retrieves details of a specific company contact using its unique identifier.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GCMPNYCNTCTbyID24.jpg" alt="Shopify Get Company Contact by ID action configuration" width="700"  />

Click on **Continue** button

----------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Company Contact ID | Enter the unique identifier of the company contact. (e.g., "gid://shopify/CompanyContact/1304559788") |

:::note
If no contact is found for the provided ID, the response will be empty or null.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-GCMPNYCNTCTbyID25.jpg" alt="Shopify Get Company Contact by ID action example configuration" width="700"  />

---------

##### Result

```json
[
  {
    "id": "gid://shopify/CompanyContact/1304559788",
    "title": "Admin",
    "isMainContact": false,
    "createdAt": "2026-04-23T13:04:57Z",
    "updatedAt": "2026-04-23T13:04:57Z",
    "customer": {
      "id": "gid://shopify/Customer/9304515543212",
      "firstName": "Denna",
      "lastName": "Josh",
      "displayName": "Denna Josh",
      "email": "libas.storemax@yopmail.com",
      "phone": "+917865432456"
    },
    "company": {
      "id": "gid://shopify/Company/13819740332",
      "name": "Libas Store",
      "note": null
    },
    "roleAssignments": {
      "nodes": []
    }
  }
]
```
-----------

#### Get Company by Company ID

Get Company by Company ID action retrieves detailed information of a specific company using its unique identifier.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GCMPNYbyCMPNYID26.jpg" alt="Shopify Get Company by Company ID action configuration" width="700"  />

Click on **Continue** button

-------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Company ID | Enter the unique identifier of the company. (e.g., "gid://shopify/Company/13819740332") |

:::note
If no company is found for the provided ID, the response will be empty or null.
:::

Click on **Continue**, then click **Run** node.

-------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-GCMPNYbyCMPNYID27.jpg" alt="Shopify Get Company by Company ID action example configuration" width="700"  />

------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Company/13819740332",
    "name": "Libas Store",
    "externalId": null,
    "note": "Libas store",
    "createdAt": "2026-04-23T12:39:39Z",
    "updatedAt": "2026-04-23T13:12:20Z",
    "mainContact": null,
    "contacts": {
      "nodes": [
        {
          "id": "gid://shopify/CompanyContact/1304559788",
          "title": "Admin",
          "isMainContact": false,
          "createdAt": "2026-04-23T13:04:57Z",
          "updatedAt": "2026-04-23T13:04:57Z",
          "customer": {
            "id": "gid://shopify/Customer/9304515543212",
            "firstName": "Denna",
            "lastName": "Josh",
            "displayName": "Denna Josh",
            "email": "libas.storemax@yopmail.com",
            "phone": "+917865432456"
          },
          "roleAssignments": {
            "nodes": []
          }
        }
      ]
    },
    "locations": {
      "nodes": [
        {
          "id": "gid://shopify/CompanyLocation/13888684204",
          "name": "Libas Store",
          "externalId": null,
          "note": null,
          "createdAt": "2026-04-23T12:39:39Z",
          "updatedAt": "2026-04-23T12:39:39Z",
          "shippingAddress": null,
          "billingAddress": null,
          "buyerExperienceConfiguration": {
            "checkoutToDraft": false,
            "editableShippingAddress": false
          },
          "taxSettings": {
            "taxExempt": false,
            "taxExemptions": []
          },
          "catalogs": {
            "nodes": []
          }
        },
        {
          "id": "gid://shopify/CompanyLocation/13888946348",
          "name": "Libas Store",
          "externalId": null,
          "note": null,
          "createdAt": "2026-04-23T12:50:18Z",
          "updatedAt": "2026-04-23T12:50:18Z",
          "shippingAddress": {
            "id": "gid://shopify/CompanyAddress/2484863148",
            "firstName": "Dennie",
            "lastName": "John",
            "companyName": "Libas Store",
            "address1": "Evergreen Terrace",
            "address2": "Apt. 5B",
            "city": "Springfield",
            "zoneCode": "IL",
            "zip": "62704",
            "countryCode": "US",
            "country": "United States",
            "phone": "+919087676767"
          },
          "billingAddress": null,
          "buyerExperienceConfiguration": {
            "checkoutToDraft": false,
            "editableShippingAddress": false
          },
          "taxSettings": {
            "taxExempt": true,
            "taxExemptions": []
          },
          "catalogs": {
            "nodes": []
          }
        }
      ]
    }
  }
]
```
---------------

#### Get Locations by Company ID

Get Locations by Company ID action retrieves all locations associated with a specific company. It helps in managing and viewing multiple company locations.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GLCTONbyCMPNYID-29.jpg" alt="Shopify Get Locations by Company ID action configuration" width="700"  />

Click on **Continue** button

---------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Company ID | Enter the unique identifier of the company. (e.g., "gid://shopify/Company/13819740332") |
| Limit | Define the maximum number of location records to retrieve. (e.g., "10") |

:::note
If no locations are found for the provided Company ID, the response will be empty or null. The result is limited based on the specified value.
:::

Click on **Continue**, then click **Run** node.

--------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-GLCTONbyCMPNYID30.jpg" alt="Shopify Get Locations by Company ID action example configuration" width="700"  />

-----------------

##### Result

```json
[
  {
    "id": "gid://shopify/CompanyLocation/13888684204",
    "name": "Libas Store",
    "note": null,
    "externalId": null,
    "createdAt": "2026-04-23T12:39:39Z",
    "updatedAt": "2026-04-23T12:39:39Z",
    "shippingAddress": null,
    "billingAddress": null,
    "buyerExperienceConfiguration": {
      "checkoutToDraft": false,
      "editableShippingAddress": false
    },
    "taxSettings": {
      "taxExempt": false,
      "taxExemptions": []
    }
  }
]
```

#### Get Company Payment Terms

Get Company Payment Terms action retrieves the payment terms configured for a specific company. It helps identify billing schedules, due dates, and payment conditions.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GCMPNYPYMNTTERM31.jpg" alt="Shopify Get Company Payment Terms action configuration" width="700"  />

Click on **Continue** button

------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Company ID | Enter the unique identifier of the company. (e.g., "gid://shopify/Company/13819674796") |

:::note
If no payment terms are configured for the provided Company ID, the response may be empty or null.
:::

Click on **Continue**, then click **Run** node.

------------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-GCMPNYPYMNTTERM32.jpg" alt="Shopify Get Company Payment Terms action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "company": {
      "id": "gid://shopify/Company/13819674796",
      "name": "GAP STORE",
      "locations": {
        "nodes": [
          {
            "id": "gid://shopify/CompanyLocation/13888618668",
            "name": "GAP STORE",
            "buyerExperienceConfiguration": {
              "checkoutToDraft": false,
              "editableShippingAddress": false,
              "paymentTermsTemplate": {
                "id": "gid://shopify/PaymentTermsTemplate/2",
                "name": "Net 7",
                "paymentTermsType": "NET",
                "dueInDays": 7,
                "description": "Within 7 days"
              }
            }
          }
        ]
      }
    }
  }
]
```

#### Get Company by External ID

Get Company by External ID action retrieves company details using an external identifier mapped to the company record.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GCMPNYETRNLID33.jpg" alt="Shopify Get Company by External ID action configuration" width="700"  />

Click on **Continue** button

------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| External ID | Enter the external identifier of the company. (e.g., "Nayasa-111") |

:::note
If no company is found for the provided External ID, the response will be empty or null.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-GCMPNYEXTRNLID34.jpg" alt="Shopify Get Company by External ID action example configuration" width="700"  />

----------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Company/13840646316",
    "name": "Nayasa",
    "externalId": "Nayasa-111",
    "note": null,
    "createdAt": "2026-04-24T05:24:17Z",
    "updatedAt": "2026-04-24T05:24:59Z",
    "mainContact": null,
    "contacts": {
      "nodes": [
        {
          "id": "gid://shopify/CompanyContact/1306296492",
          "title": null,
          "isMainContact": false,
          "customer": {
            "id": "gid://shopify/Customer/8300260819116",
            "firstName": "Adhivitha",
            "lastName": "Roy",
            "displayName": "Adhivitha Roy",
            "email": "adhivitha.roy@yopmail.com",
            "phone": null
          }
        }
      ]
    },
    "locations": {
      "nodes": [
        {
          "id": "gid://shopify/CompanyLocation/13909754028",
          "name": "Nayasa",
          "externalId": null,
          "createdAt": "2026-04-24T05:24:17Z",
          "updatedAt": "2026-04-24T05:24:17Z",
          "shippingAddress": null,
          "billingAddress": null
        }
      ]
    }
  }
]
```
------------------

### Products Actions

#### Create Product

Create Product action is used to create a new product record in Shopify with basic product details.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CPRDT35.jpg" alt="Shopify Create Product action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Title | Enter the product title. (e.g., "OnePlus 13R") |
| Description | Provide the product description. (e.g., "OnePlus13R Mobile") |

:::note
Title is required to create the product. Additional details such as variants, pricing, and images can be added later.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-CPRDT36.jpg" alt="Shopify Create Product action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/8536686002348",
      "title": "OnePlus 13R",
      "handle": "oneplus-13r",
      "status": "ACTIVE",
      "vendor": "AECQA",
      "tags": [],
      "unpublishedPublications": {
        "edges": [
          { "node": { "id": "gid://shopify/Publication/123613773996" } },
          { "node": { "id": "gid://shopify/Publication/123613872300" } },
          { "node": { "id": "gid://shopify/Publication/123613937836" } },
          { "node": { "id": "gid://shopify/Publication/124182200492" } },
          { "node": { "id": "gid://shopify/Publication/147472089260" } }
        ]
      },
      "createdAt": "2026-04-24T05:42:06Z",
      "updatedAt": "2026-04-24T05:42:07Z",
      "options": [
        {
          "id": "gid://shopify/ProductOption/10946867757228",
          "name": "Title",
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/4071479771308",
              "name": "Default Title",
              "hasVariants": true
            }
          ]
        }
      ],
      "metafields": { "nodes": [] },
      "variants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/46181637980332",
              "sku": null,
              "title": "Default Title",
              "price": "0.00",
              "inventoryItem": {
                "id": "gid://shopify/InventoryItem/48275854885036",
                "tracked": false
              }
            }
          }
        ]
      }
    }
  }
]
```

#### Update Product

Update Product action is used to update an existing product record in Shopify using the product ID and modified product details.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-UPRDT37.jpg" alt="Shopify Update Product action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Product ID | Enter the Shopify product ID to update. (e.g., "gid://shopify/Product/8536686002348") |
| Optional Fields
Title | Enter the updated product title. (e.g., "OnePlus 13R - Updated") |
| Description | Provide the updated product description. (e.g., "OnePlus13R Mobile - Updated Description") |

:::note
Product ID is required to update a product. Any field left empty will remain unchanged in Shopify.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-UPRDT38.jpg" alt="Shopify Update Product action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/8536686002348",
      "title": "OnePlus 13RRR",
      "handle": "oneplus-13r",
      "status": "ACTIVE",
      "vendor": "AECQA",
      "tags": [],
      "createdAt": "2026-04-24T05:42:06Z",
      "updatedAt": "2026-04-24T06:41:12Z",
      "options": [
        {
          "id": "gid://shopify/ProductOption/10946867757228",
          "name": "Title",
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/4071479771308",
              "name": "Default Title",
              "hasVariants": true
            }
          ]
        }
      ],
      "metafields": { "nodes": [] },
      "variants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/46181637980332",
              "sku": null,
              "title": "Default Title",
              "price": "0.00",
              "inventoryItem": {
                "id": "gid://shopify/InventoryItem/48275854885036",
                "tracked": false
              }
            }
          }
        ]
      }
    }
  }
]
```

#### Publish a Product

Publish a Product action is used to publish an existing Shopify product to a selected sales channel or publication.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-PBLSHPRDT39.jpg" alt="Shopify Publish Product action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Product ID | Enter the Shopify product ID to publish. (e.g., "gid://shopify/Product/8536686002348") |
| Publication ID | Enter the publication (sales channel) ID where the product should be published. (e.g., "gid://shopify/Publication/123613773996") |

:::note
Product ID and Publication ID are required. If the product is already published in that channel, the action may return no changes.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-PBLSHPRDT40.jpg" alt="Shopify Publish Product action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/8536686002348",
      "title": "OnePlus 13RRR",
      "status": "ACTIVE",
      "publishedOnPublication": true,
      "publicationId": "gid://shopify/Publication/123613773996",
      "updatedAt": "2026-04-24T06:55:10Z"
    }
  }
]
```

#### Get Product by Default Variant SKU

Get Product by Default Variant SKU action is used to fetch product details in Shopify using the default variant SKU.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GPRDTbySKU41.jpg" alt="Shopify Get Product by SKU action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Product SKU | Enter the default variant SKU to fetch product details. (e.g., "ONEPLUS-R") |

:::note
Default Variant SKU is required. If no product matches the SKU, the response may return an empty result.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GPRDTbySKU42.jpg" alt="Shopify Get Product by SKU action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Product/8536686002348",
    "title": "OnePlus 13RRR",
    "description": "OnePlus 13R Mobile - Colour(Sea blue) Looks smart and Performance was good",
    "productType": "",
    "handle": "oneplus-13r",
    "totalInventory": 0,
    "createdAt": "2026-04-24T05:42:06Z",
    "updatedAt": "2026-04-24T06:57:51Z",
    "status": "ACTIVE",
    "tags": [],
    "variants": {
      "nodes": [
        {
          "sku": "ONEPLUS-R",
          "id": "gid://shopify/ProductVariant/46181637980332",
          "title": "Default Title",
          "price": "0.00",
          "displayName": "OnePlus 13RRR - Default Title",
          "inventoryItem": {
            "id": "gid://shopify/InventoryItem/48275854885036",
            "sku": "ONEPLUS-R",
            "inventoryLevels": {
              "nodes": [
                {
                  "location": {
                    "id": "gid://shopify/Location/71342817452",
                    "name": "Action Area",
                    "address": {
                      "address1": "Newtown",
                      "address2": "",
                      "city": "New Town",
                      "province": "Tamil Nadu",
                      "country": "India",
                      "zip": "700026"
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
]
```
---

#### Create Product with Options and Media

Create Product with Options and Media action is used to create a new product in Shopify along with product details, media assets, and additional optional information.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-NewPrdctwithMedia.jpg" alt = "Create Product with Media" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|------|--------------|
| Title | Specify the product title or name. (e.g., `IQ-V1`) |
| Description | Enter the product description with details about the product features or specifications. (e.g., `IQ Mobile - Colour(Sea blue) Looks smart and Performance was good`) |
| Product Type | Specify the category or type of the product. (e.g., `T-Shirt`) |
| Status | Define the product status in Shopify. (e.g., `ACTIVE`) |
| Media | Configure one or more media items for the product. |
| Source URL | Specify the Shopify file URL for the media asset. (e.g., `https://admin.shopify.com/store/aecqa/content/files/33353411887276?selectedView=all`) |
| Media Content Type | Select the type of media content to upload. (e.g., `Image`) |
| Alt Text | Specify alternative text for the media asset to improve accessibility and SEO. (e.g., `Mobileimg`) |

:::note
Title and Media fields are mandatory. Multiple media items can be added if required.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/shopify/AC-CreatePrdouctwithMedia1.jpg" alt="Shopify Create Product with Options and Media - Example Configuration" width="700" />
<img src="/img/credentials/shopify/AC-CreatePrdoctwithMedia2.jpg" alt="Shopify Create Product with Options and Media - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/8569637372076",
      "title": "IQ-V1",
      "handle": "iq-v1",
      "status": "ACTIVE",
      "vendor": "AECQA",
      "tags": [],
      "unpublishedPublications": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/Publication/123613773996"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Publication/123613872300"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Publication/123613937836"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Publication/124182200492"
            }
          },
          {
            "node": {
              "id": "gid://shopify/Publication/147472089260"
            }
          }
        ]
      },
      "metafields": {
        "nodes": []
      },
      "createdAt": "2026-05-26T11:12:49Z",
      "updatedAt": "2026-05-26T11:12:49Z",
      "options": [
        {
          "id": "gid://shopify/ProductOption/10986411032748",
          "name": "Title",
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/4199242399916",
              "name": "Default Title",
              "hasVariants": true
            }
          ]
        }
      ],
      "variants": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/ProductVariant/46311828979884",
              "sku": null,
              "title": "Default Title",
              "price": "0.00",
              "inventoryItem": {
                "id": "gid://shopify/InventoryItem/48406657335468",
                "tracked": false
              }
            }
          }
        ]
      },
      "media": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/MediaImage/33353414181036",
              "alt": "Mobileimg",
              "mediaContentType": "IMAGE",
              "status": "UPLOADED"
            }
          }
        ]
      }
    }
  }
]
```
---

### Product Variants Actions

#### Update Product Variants

Update Product Variants action is used to update an existing product variant in Shopify using the variant ID and modified variant details.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-UPRDTVRNT43.jpg" alt="Shopify Update Product Variant action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Variant ID | Enter the Shopify variant ID to update. (e.g., "gid://shopify/ProductVariant/46181637980332") |
| Price (Optional) | Enter the updated variant price. (e.g., "100") |
| SKU (Optional) | Enter the updated SKU value. (e.g., "ONEPLUS-R") |
| Tracked (Optional) | Set inventory tracking to `TRUE` or `FALSE`. (e.g., `TRUE`) |

:::note
Variant ID is required. Only the provided optional fields are updated; other values remain unchanged. In this example, `Tracked` is selected as `TRUE`.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-UPRDTVRNT44.jpg" alt="Shopify Update Product Variant action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "product": {
      "id": "gid://shopify/Product/8536686002348",
      "metafields": { "nodes": [] }
    },
    "productVariants": [
      {
        "id": "gid://shopify/ProductVariant/46181637980332",
        "price": "100.00",
        "compareAtPrice": null,
        "metafields": { "nodes": [] },
        "inventoryItem": {
          "id": "gid://shopify/InventoryItem/48275854885036",
          "sku": "ONEPLUS-R",
          "tracked": true
        }
      }
    ],
    "userErrors": []
  }
]
```

### Inventory Actions

#### Activate Inventory Locations

Activate Inventory Locations action is used to activate a specific inventory location in Shopify using the location ID, enabling it to track and manage inventory.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-ACTVATINVTRYLCATN45.jpg" alt="Shopify Activate Inventory Location action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Inventory Item Id | Enter the inventory item identifier. (e.g., "gid://shopify/InventoryItem/48275854885036") |
| Items (Inventory Update)
Location ID | Enter the Shopify location ID to activate. (e.g., "gid://shopify/Location/71342817452") |
| Activate | Set to `TRUE` to activate the inventory location. (e.g., `TRUE`) |

:::note
All fields are required. In this example, `Activate` is set to `TRUE` to enable the inventory location.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-ACTVTINVTRYLCTON46.jpg" alt="Shopify Activate Inventory Location action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "inventoryItem": {
      "id": "gid://shopify/InventoryItem/48275854885036"
    },
    "inventoryLevels": [
      {
        "id": "gid://shopify/InventoryLevel/105708880044?inventory_item_id=48275854885036",
        "location": {
          "id": "gid://shopify/Location/71342817452",
          "name": "Action Area"
        },
        "quantities": [
          {
            "name": "available",
            "quantity": 0
          }
        ]
      }
    ],
    "userErrors": []
  }
]
```
------------

#### Update Product Inventory

Update Product Inventory action is used to update inventory quantities for a specific product variant at a designated location in Shopify.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-UPDTQNTY47.jpg" alt="Shopify Update Quantity action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Inventory Name | Enter the inventory quantity type to update. (e.g., "available") |
| Reason | Enter the reason for the inventory adjustment. (e.g., "correction") |
| Ignore Compare Quantity | Set to `TRUE` to skip comparison quantity validation. (e.g., `TRUE`) |
| Quantities (Item)
Inventory Item ID | Enter the Shopify inventory item ID. (e.g., "gid://shopify/InventoryItem/48275854885036") |
| Location ID | Enter the Shopify location ID where inventory will be updated. (e.g., "gid://shopify/Location/71342817452") |
| Quantity | Enter the updated inventory quantity. (e.g., "250") |

:::note
All fields are required. `Quantities` supports multiple items; in this example, one item is configured. `Ignore Compare Quantity` is set to `TRUE` and inventory is set to `250` at the specified location.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-UPDTQNTY48.jpg" alt="Shopify Update Quantity action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "data": {
      "inventorySetQuantities": {
        "inventoryAdjustmentGroup": {
          "createdAt": "2026-04-24T09:35:47Z",
          "reason": "correction",
          "referenceDocumentUri": null,
          "changes": [
            { "name": "available", "delta": 250 },
            { "name": "on_hand", "delta": 250 }
          ]
        },
        "userErrors": []
      }
    },
    "extensions": {
      "cost": {
        "requestedQueryCost": 11,
        "actualQueryCost": 11,
        "throttleStatus": {
          "maximumAvailable": 2000,
          "currentlyAvailable": 1989,
          "restoreRate": 100
        }
      }
    }
  }
]
```
---------------

### Locations Actions

#### Get List of Locations

Get List of Locations action is used to retrieve a list of inventory locations configured in your Shopify store.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTLSTLCTONS49.jpg" alt="Shopify Get List of Locations action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Limit | Enter the maximum number of locations to retrieve. (e.g., "10") |

:::note
`Limit` controls how many locations are returned in the response. In this example, up to 10 locations will be retrieved.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTLSTLCTONS50.jpg" alt="Shopify Get List of Locations action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Location/71342817452",
    "name": "Action Area",
    "address": {
      "province": "Tamil Nadu",
      "zip": "700026",
      "address1": "Newtown",
      "address2": "",
      "city": "New Town",
      "country": "India",
      "formatted": ["Newtown", "700026 New Town TN", "India"]
    }
  },
  {
    "id": "gid://shopify/Location/73551904940",
    "name": "Amsterdam Warehouse",
    "address": {
      "province": "New York",
      "zip": "10006",
      "address1": "101 Liberty Street",
      "address2": null,
      "city": "New York",
      "country": "United States",
      "formatted": ["101 Liberty Street", "New York NY 10006", "United States"]
    }
  },
  {
    "id": "gid://shopify/Location/75635589292",
    "name": "ATP-WAREHOUSE1",
    "address": {
      "province": "Telangana",
      "zip": "500016",
      "address1": "Ameerpet1",
      "address2": "Vijayalakshmi Nagara1",
      "city": "Hyderabad",
      "country": "India",
      "formatted": ["Ameerpet1", "Vijayalakshmi Nagara1", "500016 Hyderabad TS", "India"]
    }
  }
]
```
--------------

### Price List Actions

#### Create Price List

Create Price List action is used to create a custom price list in Shopify with currency and adjustment rules for targeted customers.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CRTPRCELST51.jpg" alt="Shopify Create Price List action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Price List Name | Enter the name of the price list. (e.g., "VIPs' Customer Price") |
| Currency Code | Enter the currency code for this price list. (e.g., "USD") |
| Parent Adjustment | Configure parent-level adjustment details for the price list. |
| Adjustment | Select and configure the adjustment block under Parent Adjustment. |
| Adjustment Type | Select the adjustment type. (e.g., `PERCENTAGE_INCREASE`) |
| Adjustment Value | Enter the adjustment value. (e.g., "10") |

:::note
All fields are required. In this example, prices are increased by 10% using `PERCENTAGE_INCREASE`.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTPRCELST52.jpg" alt="Shopify Get Price List action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "priceList": {
      "id": "gid://shopify/PriceList/24368971948",
      "name": "VIPs' Customer Price",
      "currency": "USD",
      "parent": {
        "adjustment": {
          "type": "PERCENTAGE_INCREASE",
          "value": 10
        }
      }
    },
    "userErrors": []
  }
]
```
--------------

#### Add Fixed Prices to Price List

Add Fixed Prices to Price List action is used to add fixed variant pricing to an existing Shopify price list.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTADDFXPRCLST53.jpg" alt="Shopify Get Add Fixed Price List action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Price List ID | Enter the Shopify price list ID. (e.g., "gid://shopify/PriceList/24368971948") |
| Prices - (Item)
Variant ID | Enter the Shopify variant ID. (e.g., "gid://shopify/ProductVariant/46181637980332") |
| Price Amount | Enter the fixed price amount. (e.g., "150") |
| Price Currency Code | Enter the currency code for the fixed price. (e.g., "USD") |

:::note
All fields are required. In this example, one fixed price item is added for the specified variant with amount `150` in `USD`.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC_GTADDFXPRCLST54.jpg" alt="Shopify Get Add Fixed Price List action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "compareAtPrice": null,
    "price": {
      "amount": "150.0",
      "currencyCode": "USD"
    },
    "variant": {
      "id": "gid://shopify/ProductVariant/46181637980332"
    }
  }
]
```
--------------

#### Update Price List Fixed Prices

Update Price List Fixed Prices action is used to update fixed prices in an existing Shopify price list by adding new prices and optionally removing variant prices.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-UPDTFXDPRCLST55.jpg" alt="Shopify Update Fixed Price List action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Price List ID | Enter the Shopify price list ID. (e.g., "gid://shopify/PriceList/24368971948") |
| Prices to Add / Update
Variant ID | Enter the product variant identifier. (e.g., "gid://shopify/ProductVariant/46181637980332") |
| Price Amount | Specify the fixed price amount. (e.g., "190") |
| Currency Code | Enter the currency code. (e.g., "USD") |
| Variant IDs to Delete
Variant ID | Enter the variant identifier to remove fixed pricing from the price list. (e.g., "gid://shopify/ProductVariant/46181637980332") |

:::note
`Price List ID` and `Prices to Add` item fields are required for adding/updating prices. `Variant IDs to Delete` is optional and can be used in the same request.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-UPDTFXDPRCLST56.jpg" alt="Shopify Update Fixed Price List action example configuration" width="700"  />
<img src="/img/credentials/shopify/AC-UPDTFXDPRCLST57.jpg" alt="Shopify Update Fixed Price List action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "deletedFixedPriceVariantIds": [
      "gid://shopify/ProductVariant/46181637980332"
    ],
    "priceList": {
      "id": "gid://shopify/PriceList/24368971948",
      "name": "VIPs' Customer Price",
      "currency": "USD"
    },
    "userErrors": []
  }
]
```
--------------

#### Delete Price List Fixed Prices

Delete Price List Fixed Prices action is used to delete fixed prices for one or more variants from an existing Shopify price list.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-DLTFXDPRCLIST58.jpg" alt="Shopify Delete Fixed Price List action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Price List ID | Enter the Shopify price list ID. (e.g., "gid://shopify/PriceList/24368971948") |
| Variant IDs - Item
Variant ID | Enter the Shopify variant ID. (e.g., "gid://shopify/ProductVariant/46181637980332") |

:::note
`Price List ID` and at least one `Variant ID` are required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-DLTFXDPRCLIST59.jpg" alt="Shopify Delete Fixed Price List action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "deletedFixedPriceVariantIds": [
      "gid://shopify/ProductVariant/46181637980332"
    ],
    "priceList": {
      "id": "gid://shopify/PriceList/24368971948",
      "name": "VIPs' Customer Price",
      "currency": "USD"
    },
    "userErrors": []
  }
]
```
--------------

### Markets Actions

#### Create Market

Create Market action is used to create a new market in Shopify.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CRTMRKT60.jpg" alt="Shopify Create Market action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Market Name | Enter the market name. (e.g., "USA") |

:::note
`Market Name` is required to create a market.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-CRTMRKT61.jpg" alt="Shopify Create Market action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "market": {
      "id": "gid://shopify/Market/41233940652",
      "name": "USA",
      "handle": "usa",
      "enabled": false,
      "status": "DRAFT",
      "conditions": {
        "regionsCondition": null,
        "companyLocationsCondition": null,
        "locationsCondition": null
      },
      "currencySettings": null,
      "catalogs": {
        "edges": []
      },
      "webPresences": {
        "edges": []
      }
    },
    "userErrors": []
  }
]
```
--------------

#### Get List of Markets

Get List of Markets action is used to fetch the list of markets from Shopify.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTLSTALLMRKT62.jpg" alt="Shopify Get List of Markets action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Limit | Enter the maximum number of market records to retrieve. (e.g., "10") |

:::note
`Limit` controls how many market records are returned.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTLSTALLMRKT63.jpg" alt="Shopify Get List of Markets action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Market/27113423020",
    "name": "India",
    "handle": "india",
    "enabled": true,
    "status": "ACTIVE",
    "currencySettings": {
      "baseCurrency": {
        "currencyCode": "USD"
      },
      "localCurrencies": false
    },
    "catalogs": {
      "nodes": []
    },
    "webPresences": {
      "nodes": []
    }
  },
  {
    "id": "gid://shopify/Market/27098415276",
    "name": "United States",
    "handle": "us",
    "enabled": true,
    "status": "ACTIVE",
    "currencySettings": {
      "baseCurrency": {
        "currencyCode": "USD"
      },
      "localCurrencies": false
    },
    "catalogs": {
      "nodes": []
    },
    "webPresences": {
      "nodes": []
    }
  },
  {
    "id": "gid://shopify/Market/41233940652",
    "name": "USA",
    "handle": "usa",
    "enabled": false,
    "status": "DRAFT",
    "currencySettings": null,
    "catalogs": {
      "nodes": []
    },
    "webPresences": {
      "nodes": []
    }
  }
]
```
--------------

### Discounts Actions

#### Create Discount Code

Create Discount Code action is used to create a new discount code in Shopify with customer and item eligibility settings.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CRTDISC64.jpg" alt="Shopify Create Discount action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Title | Enter the discount title. (e.g., "SUMMER DIS") |
| Discount Code | Enter the discount code customers will use. (e.g., "SMR DISCOUNT") |
| Starts At | Enter the discount start date and time. (e.g., "24/04/2026 13:05") |
| Customer Selection (Optionals)
 All Customers | Set to `True` to apply discount to all customers. (e.g., `True`) |
| Customer Gets (Discount Items) | Configure what the customer receives with this discount.
All Items | Set to `True` to apply discount to all items. (e.g., `True`) |
| Discount Value (Optional) | Configure the discount value settings.
Percentage | Enter the discount percentage value. (e.g., "1") |

:::note
`Title`, `Discount Code`, and `Starts At` are required. `Customer Selection` and `Discount Items` both default to `All` when set to `True`.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-CRTDISC65.jpg" alt="Shopify Create Discount action example configuration" width="700"  />
<img src="/img/credentials/shopify/AC-CRTDISC66.jpg" alt="Shopify Create Discount action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "codeDiscountNode": {
      "id": "gid://shopify/DiscountCodeNode/1485046349996",
      "codeDiscount": {
        "title": "SUMMER DIS",
        "codes": {
          "nodes": [
            {
              "id": "gid://shopify/DiscountRedeemCode/15721092251820",
              "code": "SMR DISCOUNT"
            }
          ]
        },
        "startsAt": "2026-04-24T13:05:00Z",
        "endsAt": null,
        "appliesOncePerCustomer": false,
        "usageLimit": null,
        "customerSelection": {
          "allCustomers": true
        },
        "customerGets": {
          "appliesOnOneTimePurchase": true,
          "appliesOnSubscription": false,
          "value": {
            "percentage": 1
          },
          "items": {
            "allItems": true
          }
        }
      }
    },
    "userErrors": []
  }
]
```
--------------

### Orders Actions

#### Get Order by Order ID

Get Order by Order ID action is used to retrieve order details in Shopify using a specific order identifier.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTORDbyORDID67.jpg" alt="Shopify Get Order by Order ID action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Order ID | Enter the Shopify order ID. (e.g., "gid://shopify/Order/1234567890") |

:::note
`Order ID` is required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTORDbyORDID68.jpg" alt="Shopify Get Order by Order ID action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Order/7240844705964",
    "name": "#1768",
    "createdAt": "2026-04-24T17:44:48Z",
    "updatedAt": "2026-04-24T17:44:49Z",
    "currencyCode": "USD",
    "displayFinancialStatus": "PAID",
    "email": "alex.chris@yopmail.com",
    "fullyPaid": true,
    "billingAddress": {
      "id": "gid://shopify/MailingAddress/14865507877036?model_name=Address",
      "firstName": "Merie",
      "lastName": "Christ",
      "company": null,
      "address1": "Necklace Road",
      "address2": "near cafe street",
      "city": "Hyderabad",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "500038",
      "province": "Telangana",
      "provinceCode": "TS"
    },
    "shippingAddress": {
      "id": "gid://shopify/MailingAddress/14865507844268?model_name=Address",
      "firstName": "Merie",
      "lastName": "Christ",
      "company": null,
      "address1": "Necklace Road",
      "address2": "near cafe street",
      "city": "Hyderabad",
      "country": "India",
      "countryCodeV2": "IN",
      "zip": "500038",
      "province": "Telangana",
      "provinceCode": "TS"
    },
    "tags": [],
    "metafields": {
      "nodes": []
    },
    "customer": {
      "id": "gid://shopify/Customer/9304339513516",
      "firstName": "Chris",
      "lastName": "Alex",
      "displayName": "Chris Alex",
      "phone": "+919878094534",
      "email": "alex.chris@yopmail.com",
      "addresses": [
        {
          "id": "gid://shopify/MailingAddress/10384469360812?model_name=CustomerAddress",
          "address1": "Necklace Road",
          "address2": "near cafe street",
          "city": "Hyderabad",
          "country": "India",
          "countryCodeV2": "IN",
          "firstName": "Merie",
          "lastName": "Christ",
          "name": "Merie Christ",
          "phone": "76546787656",
          "province": null,
          "provinceCode": null,
          "zip": null
        },
        {
          "id": "gid://shopify/MailingAddress/10386802573484?model_name=CustomerAddress",
          "address1": "Necklace Road",
          "address2": "near cafe street",
          "city": "Hyderabad",
          "country": "India",
          "countryCodeV2": "IN",
          "firstName": "Merie",
          "lastName": "Christ",
          "name": "Merie Christ",
          "phone": "76546787656",
          "province": "Telangana",
          "provinceCode": "TS",
          "zip": "500038"
        }
      ],
      "defaultAddress": {
        "id": "gid://shopify/MailingAddress/10384469360812?model_name=CustomerAddress",
        "address1": "Necklace Road",
        "address2": "near cafe street",
        "city": "Hyderabad",
        "country": "India",
        "countryCodeV2": "IN",
        "firstName": "Merie",
        "lastName": "Christ",
        "name": "Merie Christ",
        "phone": "76546787656",
        "province": null,
        "provinceCode": null,
        "zip": null
      }
    },
    "currentSubtotalPriceSet": {
      "presentmentMoney": {
        "amount": "950.0"
      }
    },
    "transactions": [
      {
        "id": "gid://shopify/OrderTransaction/8862900551852",
        "gateway": "manual",
        "accountNumber": "",
        "amountSet": {
          "presentmentMoney": {
            "amount": "1045.0"
          }
        },
        "paymentIcon": {
          "altText": "other"
        }
      }
    ],
    "totalDiscountsSet": {
      "presentmentMoney": {
        "amount": "50.0"
      }
    },
    "discountApplications": {
      "nodes": [
        {
          "allocationMethod": "ACROSS",
          "index": 0,
          "targetSelection": "ALL",
          "targetType": "LINE_ITEM",
          "value": {
            "__typename": "MoneyV2",
            "amount": "50.0",
            "currencyCode": "USD"
          }
        }
      ]
    },
    "lineItems": {
      "nodes": [
        {
          "id": "gid://shopify/LineItem/17065684533420",
          "sku": "ONEPLUS-R",
          "quantity": 10,
          "title": "OnePlus 13RRR",
          "name": "OnePlus 13RRR",
          "originalUnitPriceSet": {
            "presentmentMoney": {
              "amount": "100.0"
            }
          },
          "taxLines": [
            {
              "title": "IGST2",
              "rate": 0.1,
              "priceSet": {
                "presentmentMoney": {
                  "amount": "95.0"
                }
              }
            }
          ]
        }
      ]
    },
    "fulfillmentOrders": {
      "nodes": [
        {
          "id": "gid://shopify/FulfillmentOrder/8230582943916",
          "lineItems": {
            "nodes": [
              {
                "id": "gid://shopify/FulfillmentOrderLineItem/17189762039980"
              }
            ]
          }
        }
      ]
    },
    "taxLines": [
      {
        "title": "IGST2",
        "rate": 0.1
      }
    ],
    "currentTotalTaxSet": {
      "presentmentMoney": {
        "amount": "95.0"
      }
    },
    "shippingLines": {
      "nodes": []
    }
  }
]
```
--------------

#### Get Transactions by Order ID

Get Transactions by Order ID action is used to retrieve transaction details for a specific Shopify order.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTTRNSTONbyORDID69.jpg" alt="Shopify Get Transactions by Order ID action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Order ID | Enter the Shopify order ID. (e.g., "gid://shopify/Order/7240844705964") |

:::note
`Order ID` is required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTTRANSCTONbyORDID70.jpg" alt="Shopify Get Transactions by Order ID action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Order/7240844705964",
    "name": "#1768",
    "currencyCode": "USD",
    "displayFinancialStatus": "PAID",
    "transactions": [
      {
        "id": "gid://shopify/OrderTransaction/8862900551852",
        "kind": "SALE",
        "status": "SUCCESS",
        "gateway": "manual",
        "formattedGateway": "Manual",
        "createdAt": "2026-04-24T17:44:48Z",
        "processedAt": "2026-04-24T17:44:48Z",
        "test": false,
        "authorizationCode": null,
        "authorizationExpiresAt": null,
        "errorCode": null,
        "accountNumber": "",
        "amountSet": {
          "shopMoney": {
            "amount": "1045.0",
            "currencyCode": "USD"
          },
          "presentmentMoney": {
            "amount": "1045.0",
            "currencyCode": "USD"
          }
        },
        "fees": [],
        "paymentDetails": null,
        "paymentIcon": {
          "altText": "other",
          "url": "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/generic-bfeecc5cc2d14154c4282166d726acdd723bebe3a16b54267520db3181397523.svg.png"
        },
        "parentTransaction": null,
        "totalUnsettledSet": {
          "shopMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          },
          "presentmentMoney": {
            "amount": "0.0",
            "currencyCode": "USD"
          }
        }
      }
    ]
  }
]
```
--------------

#### Create Order Risk Assessment

Create Order Risk Assessment action is used to create a risk assessment for a specific Shopify order.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CRTRSKASSMNT71.jpg" alt="Shopify Create Risk Assessment action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Order ID | Enter the Shopify order ID. (e.g., "gid://shopify/Order/7240844705964") |
| Risk Level | Enter the risk level. (e.g., "Low") |
| Risk Facts | Add risk facts to assess the order risk. |
| Item Risk Fact (Item)
Description | Enter the description for item (e.g., "Billing Address region is Risk") |
| Sentiment | Enter the sentiment for item (e.g., "Positive (lowers risk)") |

:::note
`Order ID`, `Risk Level`, `Risk Facts`, `Risk Fact`, `Description`, and `Sentiment` are required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-CRTRSKASSMNT72.jpg" alt="Shopify Create Risk Assessment action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "data": {
      "orderRiskAssessmentCreate": {
        "orderRiskAssessment": {
          "riskLevel": "LOW",
          "facts": [
            {
              "description": "Billing Address region is Risk",
              "sentiment": "POSITIVE"
            }
          ],
          "provider": {
            "title": "AEC-QA",
            "handle": null
          }
        },
        "userErrors": []
      }
    },
    "extensions": {
      "cost": {
        "requestedQueryCost": 12,
        "actualQueryCost": 12,
        "throttleStatus": {
          "maximumAvailable": 2000,
          "currentlyAvailable": 1988,
          "restoreRate": 100
        }
      }
    }
  }
]
```
--------------

#### Get Order Risk Details by Order ID

Get Order Risk Details by Order ID action is used to retrieve risk assessment details for a specific Shopify order.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTRSKASSMNTbyORDID73.jpg" alt="Shopify Get Risk Assessment by Order ID action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Order ID | Enter the Shopify order ID. (e.g., "gid://shopify/Order/7240844705964") |

:::note
`Order ID` is required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTRSKASSMNTbyORDID74.jpg" alt="Shopify Get Risk Assessment by Order ID action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "data": {
      "order": {
        "id": "gid://shopify/Order/7240844705964",
        "legacyResourceId": "7240844705964",
        "name": "#1768",
        "createdAt": "2026-04-24T17:44:48Z",
        "displayFinancialStatus": "PAID",
        "risk": {
          "recommendation": "ACCEPT",
          "assessments": [
            {
              "riskLevel": "NONE",
              "facts": [
                {
                  "description": "Card Verification Value (CVV) isn't available",
                  "sentiment": "NEUTRAL"
                },
                {
                  "description": "Billing address or credit card's address wasn't available",
                  "sentiment": "NEUTRAL"
                },
                {
                  "description": "Billing address ZIP or postal code isn't available to match with credit card's registered address",
                  "sentiment": "NEUTRAL"
                },
                {
                  "description": "A payment method other than a credit card was used",
                  "sentiment": "NEUTRAL"
                },
                {
                  "description": "Location of IP address used to place the order is Hyderabad, Telangana, India",
                  "sentiment": "NEUTRAL"
                },
                {
                  "description": "There was 1 payment attempt",
                  "sentiment": "POSITIVE"
                },
                {
                  "description": "Shipping address is 4 miles from location of IP address",
                  "sentiment": "POSITIVE"
                },
                {
                  "description": "Billing country matches the country from which the order was placed",
                  "sentiment": "POSITIVE"
                },
                {
                  "description": "The IP address used to place the order isn't a high risk internet connection (web proxy)",
                  "sentiment": "POSITIVE"
                }
              ],
              "provider": null
            },
            {
              "riskLevel": "LOW",
              "facts": [
                {
                  "description": "Billing Address region is Risk",
                  "sentiment": "POSITIVE"
                }
              ],
              "provider": {
                "title": "AEC-QA",
                "handle": null
              }
            }
          ]
        }
      }
    },
    "extensions": {
      "cost": {
        "requestedQueryCost": 5,
        "actualQueryCost": 5,
        "throttleStatus": {
          "maximumAvailable": 2000,
          "currentlyAvailable": 1995,
          "restoreRate": 100
        }
      }
    }
  }
]
```
--------------

#### Update Order

Update Order action is used to modify an existing Shopify order by updating purchase order details and shipping address information.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-UPDTORD93.jpg" alt="Shopify Update Order action configuration" width="700"  />

Click on **Continue** button

--------------------

#### Configuration Fields

| Field | Description |
|------|-------------|
| Order ID | Enter the unique identifier of the order. (e.g., "gid://shopify/Order/7245694337196") |
| Optional Fields
PO Number | Update the purchase order/reference number. (e.g., "PO 2026") |
| Shipping Address (Optional)
First Name | Recipient first name. (e.g., "Antony") |
| Last Name | Recipient last name. (e.g., "Mathew") |
| Company | Company name. (e.g., "GAP STORE") |
| Address Line 1 | Primary street address. (e.g., "Lake district") |
| Address Line 2 | Secondary address line. (e.g., "Geetak Line") |
| City | City name. (e.g., "Hyderabad") |
| State / Province Code | State or province code. (e.g., "TS") |
| Country Code | Country code. (e.g., "IN") |
| ZIP / Postal Code | Postal code. (e.g., "500039") |
| Phone | Contact phone number. (e.g., "+919878094511") |

:::note
Only the fields provided will be updated. Ensure the correct Order ID is used to avoid modifying the wrong order.
:::

Click on **Continue**, then click **Run** node.

---------------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-UPDTORD94.jpg" alt="Shopify Update Order action example configuration" width="700"  />
<img src="/img/credentials/shopify/AC-UPDTORD95.jpg" alt="Shopify Update Order action example configuration" width="700"  />

----------------

##### Result

```json
[
  {
    "order": {
      "id": "gid://shopify/Order/7245694337196",
      "name": "#1769",
      "note": null,
      "email": "alex.chris@yopmail.com",
      "phone": "+919878094534",
      "tags": [],
      "poNumber": "PO 2026",
      "createdAt": "2026-04-27T07:03:01Z",
      "updatedAt": "2026-04-27T09:07:11Z",
      "displayFinancialStatus": "PENDING",
      "displayFulfillmentStatus": "UNFULFILLED",
      "shippingAddress": {
        "firstName": "Antony",
        "lastName": "Mathew",
        "company": "GAP STORE",
        "address1": "Lake district",
        "address2": "Geetak Line",
        "city": "Hyderabad",
        "province": "Telangana",
        "provinceCode": "TS",
        "countryCodeV2": "IN",
        "zip": "500039",
        "phone": "+919878094511"
      },
      "customAttributes": []
    },
    "userErrors": []
  }
]
```
-----------------

#### Create Payment Terms

Create Payment Terms action is used to create payment terms for an order in Shopify by configuring payment term attributes, templates, and payment schedules.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/AC-CRTPMNTTRMS.jpg" alt="Shopify Create Payment Terms" width="700" />

Click on **Continue** button.

---------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Reference ID | Specify the unique Shopify order reference ID for which the payment terms should be created. (e.g., `gid://shopify/Order/7245694337196`) |
| Payment Terms Attributes | Configure the payment term details required for the order payment setup. |
| Payment Terms Template ID | Specify the Shopify payment terms template ID to apply predefined payment conditions. (e.g., `gid://shopify/PaymentTermsTemplate/1`) |
| Payment Schedules | Configure one or more payment schedules for the payment terms. |
| Issued At | Specify the date and time when the payment terms are issued. (e.g., `22/05/2026 10:46`) |

:::note
Reference ID, Payment Terms Attributes, Payment Terms Template ID, and Payment Schedules are required fields.
:::

Click on **Continue**, then click **Run** node..

-------------------------

##### Example Configuration
<img src="/img/credentials/shopify/AC-CRTPMNTTRMS12.jpg" alt="Shopify Create Payment Terms - Example Configuration" width="700" />

-------------------------

##### Result

```json
[
  {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/39358660780",
      "translatedName": "Due on receipt",
      "paymentTermsName": "Due on receipt",
      "paymentSchedules": {
        "edges": []
      }
    },
    "userErrors": []
  }
]
```
---------------------------------------

#### Update Payment Terms

Update Payment Terms action is used to modify existing payment terms for an order in Shopify by updating payment term attributes, templates, schedules, and issued date details.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/AC-UPDTPMNTTRMS13.jpg" alt="Shopify Update Payment Terms" width="700" />

Click on **Continue** button.

---------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Payment Terms ID | Specify the unique Shopify payment terms ID that needs to be updated. (e.g., `gid://shopify/PaymentTerms/39358660780`) |
| Payment Terms Attributes | Configure the updated payment term details for the order. |
| Payment Terms Template ID | Specify the Shopify payment terms template ID to update predefined payment conditions. (e.g., `gid://shopify/PaymentTermsTemplate/2`) |
| Payment Schedules | Configure one or more updated payment schedules for the payment terms. |
| Issued At | Specify the updated issued date and time for the payment terms. (e.g., `22/05/2026 10:57`) |

:::note
Payment Terms ID and Payment Terms Attributes are required fields. Other fields are optional and can be updated as needed.
:::

Click on **Continue**, then click **Run** node..

-------------------------

##### Example Configuration
<img src="/img/credentials/shopify/AC-UPDTPMNTTRMS14.jpg" alt="Shopify Update Payment Terms - Example Configuration" width="700" />

-------------------------

##### Result

```json
[
  {
    "paymentTerms": {
      "id": "gid://shopify/PaymentTerms/39358660780",
      "paymentTermsName": "Net 7",
      "paymentTermsType": "NET",
      "dueInDays": 7,
      "overdue": false,
      "paymentSchedules": {
        "edges": [
          {
            "node": {
              "id": "gid://shopify/PaymentSchedule/28532637868",
              "dueAt": "2026-05-29T10:57:00Z",
              "issuedAt": "2026-05-22T10:57:00Z",
              "completedAt": null
            }
          }
        ]
      }
    },
    "userErrors": []
  }
]
```
---------------------------------------

#### Create Draft Order

Create Draft Order action is used to create a draft order in Shopify with customer details, line items, billing and shipping addresses, discounts, and shipping information.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/create-draft-order.png" alt="Shopify Create Draft Order action configuration" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|------|--------------|
| Line Items | Configure one or more products to include in the draft order. |
| Quantity | Specify the quantity of the line item. (e.g., `1`) |
| Variant ID (Optional) | Specify the Shopify product variant ID for the line item. (e.g., `gid://shopify/ProductVariant/44001881456812`) |
| Title (Optional) | Specify the line item title. (e.g., `128 meg SDRAM`) |
| Original Unit Price (Optional) Amount | Specify the unit price of the line item. (e.g., `150.0`) |
| Currency Code | Specify the currency code for the unit price. (e.g., `USD`) |
| SKU (Optional) | Specify the SKU of the line item. (e.g., `128 SDRAM`) |
| Email (Optional) | Specify the customer's email address for the draft order. (e.g., `hilsy33@yopmail.com`) |
| Phone (Optional) | Specify the customer's phone number. (e.g., `+919080034561`) |
| PO Number (Optional) | Specify a purchase order/reference number for the draft order. (e.g., `PO-109302`) |
| Note (Optional) | Add any additional notes for the draft order. (e.g., `Test Note`) |
| Billing Address (Optional) First Name | Billing contact's first name. (e.g., `Hilsy`) |
| Last Name | Billing contact's last name. (e.g., `Update`) |
| Address 1 | Primary billing address line. (e.g., `10 Downing Street`) |
| City | Billing city. (e.g., `Hollister`) |
| Province Code | Billing state/province code. (e.g., `CA`) |
| Country Code | Billing country code. (e.g., `US`) |
| Zip | Billing postal code. (e.g., `95023`) |
| Phone | Billing contact phone number. (e.g., `+919080034561`) |
| Shipping Address (Optional) | Configure the shipping destination using the same fields as the Billing Address. |
| Applied Discount (Optional) Title | Title of the discount applied on the draft order. (e.g., `Discount`) |
| Description | Description of the discount. (e.g., `Discount In Percentage`) |
| Value | Discount value. (e.g., `2`) |
| Value Type | Type of the discount value. (e.g., `PERCENTAGE`) |
| Shipping Line (Optional) Title | Shipping method title. (e.g., `Freight`) |
| Price | Shipping price. (e.g., `10.0`) |

:::note
Line Items with Quantity is the only required field. All other fields are optional and can be configured as needed.
:::

Click on **Continue**, then click **Run** node.

---

##### Example Configuration

<img src="/img/credentials/shopify/draft-order-items.png" alt="Shopify Create Draft Order action example configuration" width="700" />

---

##### Result

```json
[
  {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/1140832501932",
      "name": "#D583",
      "status": "OPEN",
      "email": "hilsy33@yopmail.com",
      "phone": "+919080034561",
      "poNumber": "PO-109302",
      "note2": "Test Note",
      "tags": [],
      "createdAt": "2026-07-27T08:22:36Z",
      "updatedAt": "2026-07-27T08:22:36Z",
      "invoiceUrl": "https://aecqa.myshopify.com/65225425068/invoices/5c39a715858db5d86d1e004893ee58e2",
      "completedAt": null,
      "taxExempt": false,
      "visibleToCustomer": true,
      "presentmentCurrencyCode": "USD",
      "acceptAutomaticDiscounts": true,
      "allowDiscountCodesInCheckout": true,
      "discountCodes": [],
      "paymentTerms": null,
      "billingAddress": {
        "firstName": "Hilsy",
        "lastName": "Update",
        "company": null,
        "address1": "10 Downing Street",
        "address2": null,
        "city": "Hollister",
        "province": "California",
        "provinceCode": "CA",
        "countryCodeV2": "US",
        "zip": "95023",
        "phone": "+919080034561"
      },
      "shippingAddress": {
        "firstName": "Hilsy",
        "lastName": "Update",
        "company": null,
        "address1": "10 Downing Street",
        "address2": null,
        "city": "Hollister",
        "province": "California",
        "provinceCode": "CA",
        "countryCodeV2": "US",
        "zip": "95023",
        "phone": "+919080034561"
      },
      "customer": {
        "id": "gid://shopify/Customer/9536366674092",
        "firstName": "Hilsy",
        "lastName": "Update",
        "email": "hilsy33@yopmail.com",
        "phone": "+919080034561"
      },
      "lineItems": {
        "nodes": [
          {
            "id": "gid://shopify/DraftOrderLineItem/57997144424620",
            "name": "128 meg SDRAM",
            "sku": "128 SDRAM",
            "quantity": 1,
            "originalUnitPriceSet": {
              "presentmentMoney": {
                "amount": "150.0"
              }
            },
            "discountedUnitPriceSet": {
              "presentmentMoney": {
                "amount": "150.0"
              }
            },
            "appliedDiscount": null,
            "taxLines": [
              {
                "title": "Federal Tax",
                "rate": 0.1,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "14.7"
                  }
                }
              },
              {
                "title": "State Tax",
                "rate": 0.06,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "8.82"
                  }
                }
              }
            ]
          },
          {
            "id": "gid://shopify/DraftOrderLineItem/57997144457388",
            "name": "Dove Body Wash",
            "sku": "AS569",
            "quantity": 1,
            "originalUnitPriceSet": {
              "presentmentMoney": {
                "amount": "30.0"
              }
            },
            "discountedUnitPriceSet": {
              "presentmentMoney": {
                "amount": "30.0"
              }
            },
            "appliedDiscount": null,
            "taxLines": [
              {
                "title": "Federal Tax",
                "rate": 0.1,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "2.94"
                  }
                }
              },
              {
                "title": "State Tax",
                "rate": 0.06,
                "priceSet": {
                  "presentmentMoney": {
                    "amount": "1.76"
                  }
                }
              }
            ]
          }
        ]
      },
      "appliedDiscount": {
        "title": "Discount",
        "description": "Discount In Percentage",
        "value": 2,
        "valueType": "PERCENTAGE"
      },
      "shippingLine": {
        "title": "Freight",
        "originalPriceSet": {
          "presentmentMoney": {
            "amount": "10.0"
          }
        }
      },
      "subtotalPriceSet": {
        "presentmentMoney": {
          "amount": "176.4"
        }
      },
      "totalPriceSet": {
        "presentmentMoney": {
          "amount": "214.62"
        }
      },
      "totalTaxSet": {
        "presentmentMoney": {
          "amount": "28.22"
        }
      },
      "totalDiscountsSet": {
        "presentmentMoney": {
          "amount": "3.6"
        }
      }
    },
    "userErrors": []
  }
]
```
---------------------------------------

### Fulfillment Actions

#### Create Order Fulfillment

Create Order Fulfillment action is used to create a fulfillment for a specific Shopify fulfillment order.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CRTORDFULFLMT75.jpg" alt="Shopify Create Order Fulfillment action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Line Items by Fulfillment Order * | Configure line items grouped by fulfillment order. |
| Fulfillment Order ID * | Enter the fulfillment order ID. (e.g., "gid://shopify/FulfillmentOrder/8230582943916") |
| Item - Fulfillment Order Line Items (Optional)
Line Item ID * | Enter the fulfillment order line item ID. (e.g., "gid://shopify/FulfillmentOrderLineItem/17189762039980") |
| Quantity * | Enter the quantity to fulfill. (e.g., "1") |
| Tracking Info (Optional)
Tracking Number (Optional) | Enter the tracking number. (e.g., "TRACK-123") |

:::note
`Fulfillment Input`, `Line Items by Fulfillment Order`, `Fulfillment Order ID`, `Line Item ID`, and `Quantity` are required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-CRTORDFULFILMT76.jpg" alt="Shopify Create Order Fulfillment action example configuration" width="700"  />
<img src="/img/credentials/shopify/AC-CRTORDFULFILMT77.jpg" alt="Shopify Create Order Fulfillment action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "data": {
      "fulfillmentCreate": {
        "fulfillment": {
          "id": "gid://shopify/Fulfillment/6371401564332",
          "createdAt": "2026-04-27T03:41:16Z",
          "updatedAt": "2026-04-27T03:41:16Z",
          "status": "SUCCESS",
          "trackingInfo": [
            {
              "number": "TRACK-123",
              "url": null,
              "company": null
            }
          ],
          "fulfillmentLineItems": {
            "nodes": [
              {
                "id": "gid://shopify/FulfillmentLineItem/14559757140140",
                "lineItem": {
                  "id": "gid://shopify/LineItem/17065684533420",
                  "name": "OnePlus 13RRR",
                  "sku": "ONEPLUS-R",
                  "currentQuantity": 10,
                  "nonFulfillableQuantity": 0
                },
                "quantity": 1
              }
            ]
          }
        },
        "userErrors": []
      }
    },
    "extensions": {
      "cost": {
        "requestedQueryCost": 21,
        "actualQueryCost": 15,
        "throttleStatus": {
          "maximumAvailable": 2000,
          "currentlyAvailable": 1985,
          "restoreRate": 100
        }
      }
    }
  }
]
```
--------------

#### Get Fulfillment Orders by Order ID

Get Fulfillment Orders by Order ID action is used to retrieve fulfillment orders for a specific Shopify order.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTORDRFULMT78.jpg" alt="Shopify Get Order Fulfillment action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Order ID | Enter the Shopify order ID. (e.g., "gid://shopify/Order/7240844705964") |

:::note
`Order ID` is required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTORDRFULMT79.jpg" alt="Shopify Get Order Fulfillment action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/Order/7240844705964",
    "name": "#1768",
    "fulfillmentOrders": {
      "nodes": [
        {
          "id": "gid://shopify/FulfillmentOrder/8230582943916",
          "status": "IN_PROGRESS",
          "requestStatus": "UNSUBMITTED",
          "createdAt": "2026-04-24T17:44:49Z",
          "updatedAt": "2026-04-27T03:41:16Z",
          "assignedLocation": {
            "location": {
              "id": "gid://shopify/Location/71342817452",
              "name": "Action Area",
              "address": {
                "address1": "Newtown",
                "address2": "",
                "city": "New Town",
                "province": "Tamil Nadu",
                "zip": "700026",
                "countryCode": "IN"
              }
            }
          },
          "destination": {
            "firstName": "Merie",
            "lastName": "Christ",
            "address1": "Necklace Road",
            "address2": "near cafe street",
            "city": "Hyderabad",
            "province": "Telangana",
            "zip": "500038",
            "countryCode": "IN",
            "phone": "76546787656",
            "email": "alex.chris@yopmail.com"
          },
          "lineItems": {
            "nodes": [
              {
                "id": "gid://shopify/FulfillmentOrderLineItem/17189762039980",
                "totalQuantity": 10,
                "remainingQuantity": 9,
                "lineItem": {
                  "id": "gid://shopify/LineItem/17065684533420",
                  "name": "OnePlus 13RRR",
                  "sku": "ONEPLUS-R",
                  "quantity": 10,
                  "currentQuantity": 10
                }
              }
            ]
          },
          "fulfillments": {
            "nodes": [
              {
                "id": "gid://shopify/Fulfillment/6371401564332",
                "status": "SUCCESS",
                "createdAt": "2026-04-27T03:41:16Z",
                "updatedAt": "2026-04-27T03:41:16Z",
                "trackingInfo": [
                  {
                    "number": "TRACK-123",
                    "url": null,
                    "company": null
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
]
```
--------------

### Payment Terms Templates Actions

#### Get Payment Term Templates by Type

Get Payment Term Templates by Type action is used to retrieve payment term templates in Shopify based on the selected payment term type.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTPAYMNTTERMbyTYPE80.jpg" alt="Shopify Get Payment Term by Type action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Payment Term Type | Select the payment term template type. Supported values: `Receipt`, `Net`, `Fixed`, `Fulfillment`, `deferred`, `Unknown ` (e.g., "Net"). |

:::note
`Payment Term Type` is required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTPAYMNTTERMbyTYPE81.jpg" alt="Shopify Get Payment Term by Type action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/PaymentTermsTemplate/2",
    "name": "Net 7",
    "paymentTermsType": "NET",
    "dueInDays": 7,
    "description": "Within 7 days",
    "translatedName": "Net 7"
  },
  {
    "id": "gid://shopify/PaymentTermsTemplate/3",
    "name": "Net 15",
    "paymentTermsType": "NET",
    "dueInDays": 15,
    "description": "Within 15 days",
    "translatedName": "Net 15"
  },
  {
    "id": "gid://shopify/PaymentTermsTemplate/4",
    "name": "Net 30",
    "paymentTermsType": "NET",
    "dueInDays": 30,
    "description": "Within 30 days",
    "translatedName": "Net 30"
  },
  {
    "id": "gid://shopify/PaymentTermsTemplate/8",
    "name": "Net 45",
    "paymentTermsType": "NET",
    "dueInDays": 45,
    "description": "Within 45 days",
    "translatedName": "Net 45"
  },
  {
    "id": "gid://shopify/PaymentTermsTemplate/5",
    "name": "Net 60",
    "paymentTermsType": "NET",
    "dueInDays": 60,
    "description": "Within 60 days",
    "translatedName": "Net 60"
  },
  {
    "id": "gid://shopify/PaymentTermsTemplate/6",
    "name": "Net 90",
    "paymentTermsType": "NET",
    "dueInDays": 90,
    "description": "Within 90 days",
    "translatedName": "Net 90"
  }
]
```
--------------

### Refund Actions

#### Create Refund

Create Refund action is used to create a refund for an existing Shopify order.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CRTREFND82.jpg" alt="Shopify Create Refund action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Refund Input * | Enter the refund input payload. |
| Order ID * | Enter the Shopify order ID. (e.g., "gid://shopify/Order/7240844705964") |
| Refund Line Items (Optional) | Configure line items to be refunded. |
| Line Item ID * | Enter the line item ID to refund. (e.g., "gid://shopify/LineItem/17065684533420") |
| Quantity * | Enter the quantity to refund. (e.g., "1") |

:::note
`Refund Input` and `Order ID` are required. For line item refunds, `Line Item ID` and `Quantity` are required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-CRTREFND83.jpg" alt="Shopify Create Refund action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "data": {
      "refundCreate": {
        "refund": {
          "id": "gid://shopify/Refund/963174891692",
          "totalRefundedSet": {
            "presentmentMoney": {
              "amount": "0.0",
              "currencyCode": "USD"
            }
          }
        },
        "userErrors": []
      }
    },
    "extensions": {
      "cost": {
        "requestedQueryCost": 20,
        "actualQueryCost": 20,
        "throttleStatus": {
          "maximumAvailable": 2000,
          "currentlyAvailable": 1980,
          "restoreRate": 100
        }
      }
    }
  }
]
```
--------------

### Price Lists Actions

#### Get Price List by Catalog ID

Get Price List by Catalog ID action is used to retrieve price list details associated with a specific Shopify catalog.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-GTPRCLSTbyCATLOG84.jpg" alt="Shopify Get Price List by Catalog action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Catalog ID | Enter the Shopify catalog ID. (e.g., "gid://shopify/CompanyLocationCatalog/64039649452") |

:::note
`Catalog ID` is required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-GTPRCLSTbyCATLOG85.jpg" alt="Shopify Get Price List by Catalog action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "id": "gid://shopify/CompanyLocationCatalog/64039649452",
    "title": "B2B Catalog",
    "status": "ACTIVE",
    "priceList": {
      "id": "gid://shopify/PriceList/24205361324",
      "name": "B2B Catalog - d544236a-8c9e-4f45-8d9e-6f96ba03e751",
      "currency": "USD",
      "fixedPricesCount": 2,
      "parent": {
        "adjustment": {
          "type": "PERCENTAGE_DECREASE",
          "value": 5
        }
      }
    },
    "publication": {
      "id": "gid://shopify/Publication/147472089260",
      "name": ""
    },
    "companyLocations": {
      "nodes": [
        {
          "id": "gid://shopify/CompanyLocation/892502188",
          "name": "Anitha kumari",
          "externalId": null
        }
      ]
    }
  }
]
```
--------------

### Catalogs Actions

#### Create Catalog

Create Catalog action is used to create a catalog in Shopify with status and context settings.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-CRTCATLOG86.jpg" alt="Shopify Create Catalog action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Title * | Enter the catalog title. (e.g., "Retail Sales") |
| Status * | Enter the catalog status. (e.g., "ACTIVE") |
| Context * | Configure catalog context details. |
| Company Location IDs (Optional)Item
Company Location ID | Enter the company location ID. (e.g., "gid://shopify/CompanyLocation/13888618668") |

:::note
`Title`, `Status`, and `Context` are required.
:::

##### Example Configuration

<img src="/img/credentials/shopify/AC-CRTCATLOG87.jpg" alt="Shopify Create Catalog action example configuration" width="700"  />

--------------------

##### Result

```json
[
  {
    "catalog": {
      "id": "gid://shopify/CompanyLocationCatalog/82843992236",
      "status": "ACTIVE",
      "title": "Retail Sales",
      "publication": null,
      "priceList": null
    },
    "userErrors": []
  }
]
```
--------------

#### Update Catalog Context

Update Catalog Context action is used to update the context of an existing catalog in Shopify, including company location associations.

##### Select Credentials and Action Events
<img src="/img/credentials/shopify/C-UPDTCATLOG88.jpg" alt="Shopify Update Catalog action configuration" width="700"  />

Click on **Continue** button

-------------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Catalog ID * | Enter the catalog ID to update. (e.g., "gid://shopify/CompanyLocationCatalog/82843992236") |
| Contexts (Optional) | Configure catalog context details. |
| Company Location IDs (Optional) Item.
Company Location ID | Enter the company location ID. (e.g., "gid://shopify/CompanyLocation/13888618668") |

:::note
`Catalog ID` is required.
:::

##### Example Configuration
 1. Remove
<img src="/img/credentials/shopify/AC-UPDTCATLOG89.jpg" alt="Shopify Update Catalog action example configuration" width="700"  />

 2. Add

 <img src="/img/credentials/shopify/AC-UPDTCATLOG90.jpg" alt="Shopify Update Catalog action example configuration" width="700"  />

--------------------

##### Result
```json
[
  {
    "catalog": {
      "id": "gid://shopify/CompanyLocationCatalog/82843992236",
      "title": "Retail Sales",
      "status": "ACTIVE",
      "publication": null,
      "priceList": null
    },
    "userErrors": []
  }
]
```
--------------

### Metafields Actions

#### Add and Update Metafields

Add and Update Metafields action is used to create or update metafields for a Shopify resource such as a product, order, customer, or collection. Metafields help store custom data against records.

##### Select Credentials and Action Events

<img src="/img/credentials/shopify/C-AD&UDMETAFLDS91.jpg" alt="Shopify Add Update Metafields action configuration" width="700"  />

Click on **Continue** button.

-------------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Object ID | Enter the unique identifier of the resource. (e.g., "gid://shopify/Product/8536686002348") |
| Namespace | Group name used to organize metafields. (e.g., "PRD_IMG") |
| Key | Unique key name for the metafield inside the namespace. (e.g., "Type") |
| Value | Enter the metafield value. (e.g., "png") |
| Type | Specify the metafield data type. (e.g., "Single Line Text") |

:::note
If the namespace and key already exist for the given object, the value will be updated. Otherwise, a new metafield will be created.
:::

Click on **Continue**, then click **Run** node.

------------

##### Example Configuration

<img src="/img/credentials/shopify/AC-AD&UDMETAFLDS92.jpg" alt="Shopify Add Update Metafields action example configuration" width="700"  />

--------------

##### Result

```json
[
  {
    "id": "gid://shopify/Metafield/32894181998764",
    "namespace": "PRD_IMG",
    "key": "Type",
    "value": "png",
    "type": "single_line_text_field",
    "ownerType": "PRODUCT",
    "createdAt": "2026-04-27T08:40:50Z",
    "updatedAt": "2026-04-27T08:40:50Z"
  }
]
```
-----------------

#### Search Records by Metafield

Search Records by Metafield action finds Shopify records whose metafield matches a given value, using the `metafields.<namespace>.<key>` search filter. Use it to look up a Shopify record by an identifier held in an external system — for example an ERP reference stored on a custom field.

##### Configuration Fields

| Field | Description |
|------|-------------|
| Record Type | The kind of Shopify record to search. Supported values: `Orders`, `Products`, `Companies`, `Company Locations`. (e.g., "Orders") |
| Metafield Namespace | Namespace of the metafield definition. Custom fields created in the Shopify admin use `custom`; app-owned metafields use `$app`. (e.g., "custom") |
| Metafield Key | Key of the metafield definition, without the namespace. Together with the namespace this builds the filter `metafields.custom.erp_reference_id`. (e.g., "erp_reference_id") |
| Metafield Value | The exact value stored in the metafield. (e.g., "123456789") |
| Limit | Maximum number of matching records to return, up to Shopify's connection maximum of 250. When looking up a single record by an external ID, set this to 1. (e.g., 1) |

:::note
The metafield definition must have the **Admin filterable** capability enabled on the same record type, otherwise Shopify ignores the filter and returns unfiltered records. Matching is exact and case-sensitive, so the value must match what is stored in Shopify exactly. Enter the value on its own — the action wraps it in the double quotes Shopify's filter syntax expects.
:::

Click on **Continue**, then click **Run** node.

------------

##### Result

```json
[
  {
    "id": "gid://shopify/Order/7240844705964",
    "name": "#1768",
    "createdAt": "2026-04-24T17:44:48Z",
    "updatedAt": "2026-04-24T18:02:11Z",
    "displayFinancialStatus": "PAID",
    "displayFulfillmentStatus": "UNFULFILLED",
    "customer": {
      "id": "gid://shopify/Customer/9304242225324",
      "displayName": "John Doe",
      "email": "john.doe@example.com"
    },
    "totalPriceSet": {
      "shopMoney": {
        "amount": "150.00",
        "currencyCode": "USD"
      }
    }
  }
]
```
-----------------

### Payouts Actions

#### Get Payout

Get Payout action retrieves Shopify Payments payout details for the connected store. Use it to reconcile the amounts Shopify deposits into your bank account against the charges, refunds, and fees that make up each payout.

##### Configuration Fields

| Field | Description |
|------|-------------|
| Payout ID | Unique identifier of the payout to retrieve. (e.g., "gid://shopify/ShopifyPaymentsPayout/1234567890") |

:::note
This action requires Shopify Payments to be enabled on the store and the `read_shopify_payments_payouts` scope on the credential.
:::

Click on **Continue**, then click **Run** node.

------------

##### Result

```json
[
  {
    "id": "gid://shopify/ShopifyPaymentsPayout/1234567890",
    "legacyResourceId": "1234567890",
    "status": "PAID",
    "transactionType": "DEPOSIT",
    "issuedAt": "2026-04-24T00:00:00Z",
    "net": {
      "amount": "842.35",
      "currencyCode": "USD"
    },
    "summary": {
      "chargesGross": {
        "amount": "900.00",
        "currencyCode": "USD"
      },
      "chargesFee": {
        "amount": "-27.65",
        "currencyCode": "USD"
      },
      "refundsFeeGross": {
        "amount": "-30.00",
        "currencyCode": "USD"
      },
      "refundsFee": {
        "amount": "0.00",
        "currencyCode": "USD"
      },
      "adjustmentsGross": {
        "amount": "0.00",
        "currencyCode": "USD"
      },
      "adjustmentsFee": {
        "amount": "0.00",
        "currencyCode": "USD"
      },
      "reservedFundsGross": {
        "amount": "0.00",
        "currencyCode": "USD"
      },
      "reservedFundsFee": {
        "amount": "0.00",
        "currencyCode": "USD"
      },
      "retriedPayoutsGross": {
        "amount": "0.00",
        "currencyCode": "USD"
      },
      "retriedPayoutsFee": {
        "amount": "0.00",
        "currencyCode": "USD"
      }
    }
  }
]
```
-----------------

#### Get Payout Balance Transactions

Get Payout Balance Transactions action retrieves the individual Shopify Payments balance transactions — charges, refunds, disputes, adjustments, and reserves — that make up a payout. Use it to break a single payout down to the order level for finance reconciliation.

##### Configuration Fields

| Field | Description |
|------|-------------|
| Payout ID | Unique identifier of the payout whose transactions you want to retrieve. (e.g., "gid://shopify/ShopifyPaymentsPayout/1234567890") |

:::note
This action requires Shopify Payments to be enabled on the store and the `read_shopify_payments_payouts` scope on the credential.
:::

Click on **Continue**, then click **Run** node.

------------

##### Result

```json
[
  {
    "id": "gid://shopify/ShopifyPaymentsBalanceTransaction/9876543210",
    "type": "CHARGE",
    "test": false,
    "transactionDate": "2026-04-22T11:18:04Z",
    "amount": {
      "amount": "150.00",
      "currencyCode": "USD"
    },
    "fee": {
      "amount": "-4.65",
      "currencyCode": "USD"
    },
    "net": {
      "amount": "145.35",
      "currencyCode": "USD"
    },
    "sourceType": "CHARGE",
    "sourceId": "7240844705964",
    "sourceOrderTransactionId": "6712344567890",
    "associatedOrder": {
      "id": "gid://shopify/Order/7240844705964",
      "name": "#1768"
    },
    "associatedPayout": {
      "id": "gid://shopify/ShopifyPaymentsPayout/1234567890",
      "status": "PAID"
    }
  }
]
```
-----------------

### Draft Orders Actions

#### Complete Draft Order

Complete Draft Order action converts an existing draft order into a real order in Shopify. Use it to finalize quotes and manually created carts, either as a paid order or with payment left pending so the customer can be invoiced.

##### Configuration Fields

| Field | Description |
|------|-------------|
| Draft Order ID | Unique identifier of the draft order to complete. (e.g., "gid://shopify/DraftOrder/1157317255212") |

:::note
The draft order must be in `OPEN` or `INVOICE_SENT` status. A draft order that is already `COMPLETED` cannot be completed again, and inventory must be available for the line items unless the draft order reserves it.
:::

Click on **Continue**, then click **Run** node.

------------

##### Result

```json
[
  {
    "data": {
      "draftOrderComplete": {
        "userErrors": [],
        "draftOrder": {
          "id": "gid://shopify/DraftOrder/1157317255212",
          "name": "#D12",
          "status": "COMPLETED",
          "totalPrice": "150.00",
          "currencyCode": "USD",
          "completedAt": "2026-04-24T17:44:48Z",
          "order": {
            "id": "gid://shopify/Order/7240844705964",
            "name": "#1768",
            "displayFinancialStatus": "PENDING",
            "createdAt": "2026-04-24T17:44:48Z"
          }
        }
      }
    }
  }
]
```
-----------------

### Returns Actions

#### Process Return

Process Return action processes an existing return in Shopify. Use it to confirm which returned items were received and which exchange items should be shipped, completing an exchange started with the **Create Return** action. Only the line items you map are processed — anything left unmapped is omitted from the request.

##### Configuration Fields

| Field | Description |
|------|-------------|
| Return ID | Unique identifier of the return to process. (e.g., "gid://shopify/Return/9628778560") |
| Return Line Items (Optional)
Return Line Item ID | Returned item being confirmed as received. Use the Return Line Item IDs from **Create Return**. (e.g., "gid://shopify/ReturnLineItem/13953695808") |
| Quantity | Number of units to process. Cannot exceed the processable quantity on the return line item. (e.g., 1) |
| Exchange Line Items (Optional)
Exchange Line Item ID | Exchange item to release to the customer. Use the Exchange Line Item IDs from **Create Return**. (e.g., "gid://shopify/ExchangeLineItem/433291328") |
| Quantity | Number of exchange units to process. Cannot exceed the processable quantity on the exchange line item. (e.g., 1) |
| Financial Transfer (Optional)
Issue Refund → Order Transactions → Parent Transaction ID | The original payment transaction to refund against. Must be of kind `CAPTURE` or `SALE` — use the **Get Transactions by Order ID** action to find it. (e.g., "gid://shopify/OrderTransaction/6039361192000") |
| Issue Refund → Order Transactions → Transaction Amount → Amount | Decimal money amount to refund from this transaction. (e.g., "65.00") |
| Issue Refund → Order Transactions → Transaction Amount → Currency Code | ISO 4217 currency code, matching the order's presentment currency. (e.g., "AUD") |
| Issue Refund → Allow Over Refunding | Allows the refund to exceed the amount normally refundable for the returned items. (e.g., false) |
| Notify Customer | Whether to send the customer a notification about the processed return. (e.g., false) |
| Note | An internal note recorded against the return. (e.g., "Items received in good condition") |

:::note
**Financial Transfer** is optional. Leave it unmapped to process the return without any money movement, and refund separately if needed. When **Issue Refund** is mapped, at least one order transaction is required, and the transaction amount must be in the **presentment currency of the order** — not the shop currency. The total across all transactions cannot exceed the refundable amount unless **Allow Over Refunding** is enabled.
:::

Click on **Continue**, then click **Run** node.

------------

##### Result

```json
[
  {
    "return": {
      "id": "gid://shopify/Return/9628778560",
      "name": "#1768-R1",
      "status": "CLOSED",
      "totalQuantity": 2,
      "order": {
        "id": "gid://shopify/Order/7240844705964",
        "name": "#1768"
      },
      "refunds": {
        "nodes": [
          {
            "id": "gid://shopify/Refund/912345678901",
            "createdAt": "2026-04-25T09:14:33Z",
            "note": "Items received in good condition",
            "totalRefundedSet": {
              "shopMoney": {
                "amount": "65.00",
                "currencyCode": "USD"
              },
              "presentmentMoney": {
                "amount": "65.00",
                "currencyCode": "AUD"
              }
            }
          }
        ]
      }
    },
    "userErrors": []
  }
]
```
-----------------

#### Close Return

Close Return action closes an existing return in Shopify. Use it to finalise a return once every returned item has been processed, or to shut a return that will not be completed.

##### Configuration Fields

| Field | Description |
|------|-------------|
| Return ID | Unique identifier of the return to close. (e.g., "gid://shopify/Return/9628778560") |

:::note
A return can be closed at any point, whether or not its line items have been processed. Shopify also closes a return automatically once every item has been processed and given a disposition, so use this action when you need to close a return early — for example one the customer never shipped back. On success, `status` becomes `CLOSED` and `closedAt` carries the timestamp. A closed return can be reopened in Shopify if needed.
:::

Click on **Continue**, then click **Run** node.

------------

##### Result

```json
[
  {
    "return": {
      "id": "gid://shopify/Return/9628778560",
      "name": "#1768-R1",
      "status": "CLOSED",
      "closedAt": "2026-04-25T09:21:07Z",
      "totalQuantity": 2,
      "order": {
        "id": "gid://shopify/Order/7240844705964",
        "name": "#1768"
      }
    },
    "userErrors": []
  }
]
```
-----------------

</TabItem>

<TabItem value="tools" label="Tools">

### Tools

Tools expose Shopify operations to the AI layer so an agent can call them directly while reasoning over a task. Each tool takes a small, natural input and returns the matching Shopify records.

#### Get Customer by Phone

`get_customer_by_phone_tool` looks up a customer in Shopify using their phone number. Use it when an agent has a caller's or messaging contact's number and needs the matching customer record.

##### Input Fields

| Field | Description |
|------|-------------|
| Phone | Customer phone number to search for, including the country code where available. (e.g., "+919876543210") |

:::note
If no customer matches the phone number, the tool returns an empty result. Numbers are matched against the customer's phone and default phone number in Shopify, so formatting differences (spaces, dashes, missing country code) can prevent a match.
:::

##### Result

```json
[
  {
    "id": "gid://shopify/Customer/9304242225324",
    "firstName": "John",
    "lastName": "Doe",
    "displayName": "John Doe",
    "defaultEmailAddress": {
      "emailAddress": "john.doe@example.com"
    },
    "defaultPhoneNumber": {
      "phoneNumber": "+919876543210"
    },
    "numberOfOrders": "3",
    "state": "ENABLED",
    "amountSpent": {
      "amount": "450.00",
      "currencyCode": "USD"
    },
    "createdAt": "2026-04-23T10:02:28Z",
    "updatedAt": "2026-04-23T10:02:28Z"
  }
]
```
-----------------

#### Get Product by Name

`get_product_by_name_tool` finds products in Shopify by their title. Use it when an agent knows what a customer asked for by name and needs the product, its variants, and pricing.

##### Input Fields

| Field | Description |
|------|-------------|
| Product Name | Full or partial product title to search for. (e.g., "Wireless Headphones") |

:::note
The search matches on the product title, so a partial name can return multiple products. Use a more specific name when the agent needs a single, unambiguous match.
:::

##### Result

```json
[
  {
    "id": "gid://shopify/Product/8536686002348",
    "title": "Wireless Headphones",
    "handle": "wireless-headphones",
    "status": "ACTIVE",
    "productType": "Audio",
    "vendor": "appse ai Store",
    "totalInventory": 42,
    "createdAt": "2026-04-20T09:11:02Z",
    "updatedAt": "2026-04-24T06:35:17Z",
    "variants": {
      "nodes": [
        {
          "id": "gid://shopify/ProductVariant/46203847561324",
          "title": "Black",
          "sku": "WH-BLK-01",
          "price": "150.00",
          "inventoryQuantity": 20
        }
      ]
    }
  }
]
```
-----------------

</TabItem>

</Tabs>

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)

