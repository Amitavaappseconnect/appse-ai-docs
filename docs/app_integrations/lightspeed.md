---
title: "Lightspeed"
description: Step-by-step guide to set up Lightspeed X-Series credentials and automate retail, POS, and inventory workflows in appse ai.
slug: /app-integrations/lightspeed/
---

**Lightspeed** is a cloud-based POS and retail management platform for managing products, customers, sales, and inventory across physical and online stores.

## Set Up Credential

:::info

Before you create a credential for Lightspeed X-Series using appse ai, ensure you have a Lightspeed Developer Account and have created an application to obtain your OAuth 2.0 Client ID and Client Secret.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field                | Description                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| Connection Name      | A name to help you identify this connection                                                                    |
| Client ID            | Your OAuth 2.0 Client ID from the Lightspeed Developer Portal                                                  |
| Client Secret        | Your OAuth 2.0 Client Secret from the Lightspeed Developer Portal                                              |
| Store Domain Prefix  | The subdomain of your Lightspeed store URL (e.g., `mystore` from `mystore.retail.lightspeed.app`)              |

### Step-by-Step Guide

#### 1. Create a Developer Account

Sign up for a Lightspeed Developer account at [https://developers.retail.lightspeed.app/register](https://developers.retail.lightspeed.app/register).

<img src="/img/credentials/lightspeed/create-account-lightspeed.png" alt="appse ai Lightspeed Developer Registration" width="700"/>

:::note

Developer credentials are separate from your Lightspeed Retail store account.

:::

#### 2. Sign In to the Developer Portal

Sign in to the [Lightspeed Developer Portal](https://developers.retail.lightspeed.app).

<img src="/img/credentials/lightspeed/lightspeed-login.png" alt="appse ai Lightspeed Developer Portal Sign In" width="700"/>

#### 3. Navigate to Applications

Go to the **Applications** section in your developer dashboard at [https://developers.retail.lightspeed.app/applications](https://developers.retail.lightspeed.app/applications).

<img src="/img/credentials/lightspeed/click-add-application-lightspeed.png" alt="appse ai Lightspeed Create Application" width="700"/>

#### 4. Create a New Application

Click **Create Application** and provide a name for your app.

<img src="/img/credentials/lightspeed/create-new-cred-appseai-lightspeed.png" alt="appse ai Lightspeed Create a New Application" width="700"/>

#### 5. Add the Redirect URL

Add the **Redirect URL** from the appse ai credential form to the application settings in the Lightspeed Developer Portal.

<img src="/img/credentials/lightspeed/add-redirect-url-lightspeed.png" alt="appse ai Lightspeed Redirect URL" width="700"/>

:::note

The redirect URI must exactly match what is registered in your developer dashboard.

:::

#### 6. Configure Scopes

Ensure the following scopes are added to your application:

`products:read` `products:write` `customers:read` `customers:write` `sales:read` `sales:write` `inventory:read` `inventory:write` `registers:read` `outlets:read` `suppliers:read` `suppliers:write` `payment_types:read` `retailers:read` `products:read:price_books`

<img src="/img/credentials/lightspeed/scopes-lightspeed.png" alt="appse ai Lightspeed Scopes" width="700"/>

:::note

These scopes are added by default when setting up the credential in appse ai. You can adjust them based on your integration needs.

:::

#### 7. Copy Client ID and Client Secret

After creating the application, copy the **Client ID** and **Client Secret** from the application settings page.

<img src="/img/credentials/lightspeed/client-id-client-secret-lightspeed.png" alt="appse ai Lightspeed Client ID and Client Secret" width="700"/>

#### 8. Copy Store Domain Prefix

In the appse ai credential form, copy your **Store Domain Prefix** — the subdomain part of your Lightspeed store URL.

For example, if your store URL is `mystore.retail.lightspeed.app`, enter `mystore`.

<img src="/img/credentials/lightspeed/copy-domain-lightspeed.png" alt="appse ai Lightspeed Copy Store Domain" width="700"/>

#### 9. Paste Credentials in appse ai

Open the Credentials page in appse ai. Paste the **Client ID** and **Client Secret** into the respective fields.

<img src="/img/credentials/lightspeed/enter-domain-appseai-lightspeed.png" alt="appse ai Lightspeed Store Domain Prefix" width="700"/>

#### 10. Save & Authorize

Click **Save & Authorize** to initiate the OAuth 2.0 connection.

<img src="/img/credentials/lightspeed/click-save-authorize-lightspeed.png" alt="appse ai Lightspeed Save and Authorize" width="700"/>

#### 11. Authorize Access

You will be redirected to the Lightspeed authorization page. Sign in with your **Lightspeed Retail store account** (not your developer account) and authorize the application.

<img src="/img/credentials/lightspeed/authorize-access-lightspeed.png" alt="appse ai Lightspeed Authorize Access" width="700"/>

:::warning

Unapproved apps can connect to a maximum of 30 stores. Submit your app for approval in the Developer Portal for production use.

:::

---

## Triggers

Here is the list of available triggers in Lightspeed:

| Trigger | Description |
| ------- | ----------- |
| **New product created** | Triggers when a new product is created in Lightspeed after the specified date and time. |
| **New customer created** | Triggers when a new customer is added to Lightspeed after the specified version checkpoint. |
| **New sale created** | Triggers when a new sale is processed in Lightspeed after the specified version checkpoint. |
| **Price book created or updated** | Triggers when a price book is created or updated in Lightspeed after the specified version checkpoint. |

:::note

Triggers use an incremental sync cursor (**Fetch data since** for products, **After Version** for customers, sales and price books). Set it to `0` (or an early date) on the first run — subsequent runs advance the cursor automatically.

:::

---

## Actions

Here is the list of available actions in Lightspeed:

| Action | Description |
| ------ | ----------- |
| **Get Product** | Retrieves a single product by its product ID. |
| **Update Product** | Updates an existing product by product ID. Only the fields provided are updated; family-level fields apply to every variant in the product family, while detail-level fields apply only to the product ID supplied. |
| **Create Customer** | Creates a new customer record in Lightspeed. |
| **Get Customer** | Retrieves a single customer by their customer ID. |
| **Update Customer** | Updates an existing customer by customer ID. Only the fields provided are updated; all other fields remain unchanged. |
| **Create Customer Address** | Adds a billing or shipping address to an existing customer. Requires the address type, address line 1, city, postcode and country code. A customer can hold multiple addresses of each type. |
| **List Customer Addresses** | Retrieves all billing and shipping addresses held against a customer, including the **Address ID** required by **Update Customer Address**. |
| **Update Customer Address** | Updates an existing address by customer ID and address ID. The full address must be supplied, as the address is replaced rather than merged. |
| **Create Sale** | Creates a sale with one or more line items. Requires the author (cashier) and a state — `closed`, `pending` or `parked`. Each line item requires a product, quantity, unit price and tax. |
| **Get Sale by ID** | Retrieves a single sale by its sale ID, including its customer, outlet, register and user references, line items, payments, pricing totals, state, invoice number, timestamps and any note. |
| **Update Sale** | Updates an existing sale by sale ID. The author (cashier) and sale state must be supplied on every update. Supplying a line item or payment with an existing ID updates that entry instead of creating a new one. |
| **Create Return** | Initiates a return against an existing closed sale. Creates a new return sale in the `parked` state with the original line items negated and no payments, linked back to the original sale. Multiple and partial returns are supported. |
| **Fulfill Sale** | Completes every fulfillment on a sale in a single call, marking all its items as fulfilled. Fulfillments are created automatically when a sale carries a delivery or pickup attribute. The call is idempotent and safe to retry. |
| **Get Quote** | Retrieves a single quote by its ID, including its customer, outlet and register references, product line items, pricing totals, status, timestamps and any note. |
| **Create Gift Card** | Creates and activates a gift card with an initial balance. The card is returned in the `ACTIVE` state with a single `ACTIVATION` transaction recorded against it. The gift card number must be unique across the store. |
| **Get Inventory by Product ID** | Retrieves the inventory records for a product across all outlets, including current stock level, average cost and reorder figures. Can optionally cover every variant of the product. |
| **Get Inventory Levels by Product ID** | Retrieves the aggregated inventory levels for a product across all outlets, including stock count, costs and reorder figures. |
| **Search Records** | Searches records in a Lightspeed module. Choose **Search (Products, Customers or Sales)** to query those record types by attribute — SKU, email, invoice number, date range and more — or select **Product Categories**, **Variant Attributes**, **Gift Cards**, **Outlets**, **Registers**, **Payment Types**, **Taxes**, **Users** or **Channels** to list that module's records. |

:::note

To finalise a refund, follow **Create Return** with **Update Sale** on the returned sale ID — set the state to `closed` and add a payment with a negative amount.

:::

:::note

Each **Search Records** module needs its matching read scope on the connection (for example `products:read`, `customers:read`, `sales:read`, `outlets:read`, `registers:read`, `payment_types:read`, `taxes:read`). Filters are entered as a URL query string; for the Search module, `type` is always required.

:::

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
