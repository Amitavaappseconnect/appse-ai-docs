---
title: "NetSuite"
description: Step-by-step guide to set up NetSuite credentials and automate ERP workflows in appse ai.
slug: /app-integrations/netsuite/
---

**NetSuite** is a cloud-based ERP platform that helps businesses manage finance, inventory, CRM, and operations in one unified system. With **appse ai**, you can connect your NetSuite account to SuiteTalk REST and automate order-to-cash, procure-to-pay, and inventory workflows end to end — no SOAP or custom scripting required.

---

## Key Features

- **Order & Fulfillment Automation** — Create sales orders, item fulfillments, and item receipts, and trigger workflows as new orders and deliveries land in NetSuite.
- **Customer & Vendor Management** — Create and update customer records, look them up by email or external ID, and pull full customer or vendor detail including address books, contacts, and terms.
- **Financial Document Automation** — Create invoices, credit memos, customer payments, and estimates, optionally linked back to their source sales order or invoice.
- **Procurement Automation** — Create purchase orders and vendor bills, receive against open purchase orders, and trigger workflows when new ones are created.
- **Inventory Sync** — Create inventory items, adjust on-hand quantities, monitor items falling out of stock, and trigger workflows when items or their pricing are created or updated.
- **Returns Management** — Create return authorizations (RMAs) linked back to the original sales order so pricing and items carry over.
- **Ad Hoc Data Access** — Run SuiteQL searches against any NetSuite record type with custom fields, filters, and sorting.

---

## Setup Credential

NetSuite authenticates over **OAuth 2.0 (Authorization Code Grant)**, so you first register an Integration record in NetSuite, then connect it in appse ai.

### Required Fields

| Field              | Description                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Connection Name    | A name to help you identify this connection                                                                      |
| NetSuite Account ID | Your NetSuite account ID, found in the URL when logged in, or under Setup → Company → Company Information       |
| Client ID          | The Consumer Key generated from your NetSuite Integration record                                                  |
| Client Secret      | The Consumer Secret generated from your NetSuite Integration record                                               |

:::info
The NetSuite user completing authorization must have the **REST Web Services** and **RESTlets** permissions assigned to their role.
:::

---

### Step-by-Step Guide

#### 1. Create an Integration Record in NetSuite

Log in to NetSuite and go to **Setup → Integrations → Manage Integrations → New**.

<img src="/img/credentials/netsuite/oauthclient.png" alt="appse ai NetSuite - Setup, Integrations, Manage Integrations navigation" width="700"/>

<br/>

#### 2. Add Basic Details

Give the integration record a **Name** and **Description**, and set **State** to **Enabled**.

<img src="/img/credentials/netsuite/basicoauthdetails.png" alt="appse ai NetSuite - Integration record name and state" width="700"/>

<br/>

#### 3. Configure OAuth 2.0

Scroll to the **OAuth 2.0** section and:

1. Check **Authorization Code Grant**.
2. Paste the **Redirect URI** — copy the Callback URL shown on the appse ai NetSuite credential form (e.g. `https://embedded-ui.appse.ai/oauth-callback.html`).
3. Under **Scope**, check **REST Web Services** and **RESTLETS**.

<img src="/img/credentials/netsuite/oauth-config.png" alt="appse ai NetSuite - OAuth 2.0 redirect URI and scope configuration" width="700"/>

<br/>

Click **Save**.

#### 4. Copy the Client Credentials

NetSuite displays the **Consumer Key / Client ID** and **Consumer Secret / Client Secret** only once, right after saving. Copy and store both securely.

<img src="/img/credentials/netsuite/oauth-credentials.png" alt="appse ai NetSuite - Consumer Key and Consumer Secret displayed after saving" width="700"/>

<br/>

:::warning
NetSuite cannot redisplay the Client Secret. If you lose it, you'll need to reset the credentials on the Integration record to generate a new pair.
:::

#### 5. Enter Credentials in appse ai

Return to **appse ai**, open the NetSuite **Configure Credentials** form, and fill in:

- **Connection Name**
- **NetSuite Account ID** (e.g. `3639476-sb2`)
- **Client ID** and **Client Secret** from Step 4

Click **Save & Authorize** and sign in to NetSuite to complete the connection.

<img src="/img/credentials/netsuite/credential-configure.png" alt="appse ai NetSuite - Configure Credentials form with Account ID, Client ID, and Client Secret" width="400"/>

---

## Triggers

Here is the list of available triggers in NetSuite. All triggers poll NetSuite via SuiteQL from a **Fetch Data Since** timestamp you provide, and advance automatically on each run.

| Trigger                      | Description                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------- |
| **New Customer Created**      | Triggers when a new customer record is created.                             |
| **Customer Updated**          | Triggers when an existing customer record is modified.                      |
| **Inventory Item Created**    | Triggers when a new inventory item is created, including its standard price. |
| **Item Updated**              | Triggers when an existing inventory item or its price is modified.          |
| **New Estimate Created**      | Triggers when a new estimate (quotation) is created.                        |
| **New Sales Order Created**   | Triggers when a new sales order is created.                                 |
| **New Invoice Created**       | Triggers when a new invoice is created.                                     |
| **New Credit Memo Created**   | Triggers when a new credit memo is created.                                 |
| **New Customer Payment Created** | Triggers when a new customer payment is created.                         |
| **New Purchase Order Created** | Triggers when a new purchase order is created.                             |
| **New Vendor Bill Created**   | Triggers when a new vendor bill (AP invoice) is created.                    |
| **New Item Fulfillment Created** | Triggers when a sales order is fulfilled (shipped).                      |
| **New Item Receipt Created**  | Triggers when a purchase order delivery is received.                       |

---

## Tools

AI tools expose the same underlying NetSuite operations as [Actions](#actions) below, but are written for an AI agent to call autonomously within an appse ai agentic workflow — the agent picks the tool and fills its parameters from conversation context, rather than a workflow builder configuring it upfront. Lookup tools are geared toward resolving a name into the internal ID another tool needs; the create tools commit a live transaction in NetSuite.

| Tool                                       | Description                                                                                          |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Get Customers**                          | Searches or lists customers by name, company, or email — used to resolve a customer's internal ID.  |
| **Get Customer Details**                   | Retrieves a single customer's header details by internal ID or entity ID.                            |
| **Get Full Customer**                      | Retrieves a customer's complete record by internal ID, including the address book, contacts, terms, and credit limit. Use when an address is needed. |
| **Get Vendors**                            | Searches or lists vendors (suppliers) by name, company, or email — used to resolve a vendor's internal ID. |
| **Get Vendor Details**                     | Retrieves a single vendor's details by internal ID or entity ID.                                     |
| **Get Items**                              | Searches or lists inventory items by SKU or name — used to resolve an item's internal ID for order lines. |
| **Get Chart Of Accounts**                  | Searches the chart of accounts by name and/or type, to resolve income/asset/COGS/expense account IDs. |
| **Get Sales Orders**                       | Lists or searches sales orders, optionally filtered by customer.                                     |
| **Get Sales Order Details**                | Retrieves a single sales order's header by internal ID, external ID, or PO number.                   |
| **Get Full Sales Order**                   | Retrieves a sales order's complete record by internal ID, including line items, addresses, and shipping/payment method. |
| **Get Purchase Orders**                    | Lists or searches purchase orders, optionally filtered by vendor.                                    |
| **Get Full Purchase Order**                | Retrieves a purchase order's complete record by internal ID, including line items, ship-to address, and per-line receipt status. |
| **Get Vendor Bills**                       | Lists or searches AP vendor bills, optionally filtered by vendor.                                    |
| **Get Item Fulfillments (Deliveries)**     | Lists or searches shipments/deliveries, optionally filtered by customer.                             |
| **Get Full Item Fulfillment**              | Retrieves an item fulfillment's complete record by internal ID, including package tracking numbers and carrier/method — the only way to get tracking numbers. |
| **Get Customer Payments (Incoming Payments)** | Lists or searches customer payments received, optionally filtered by customer.                    |
| **Search Invoices**                        | Searches AR invoices, optionally filtered by customer.                                               |
| **Get Full Invoice**                       | Retrieves an invoice's complete record by internal ID, including line items, addresses, terms, and due date. |
| **Create Purchase Order**                  | Creates a live purchase order against a vendor. Resolve the vendor and items first with the lookup tools above. |
| **Create Item Receipt (Receive Purchase Order)** | Receives goods against an existing purchase order, creating a live item receipt.               |
| **Create Vendor Payment**                  | Records a live vendor payment against a vendor's open bills.                                         |

---

## Actions

Here is the list of available actions in NetSuite.

### Customers

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Create Customer**              | Creates a new customer record with entity status, subsidiary, sales rep, price level, terms, and an address book. |
| **Update Customer**              | Updates the name, company name, email, phone, or inactive flag on an existing customer. |
| **Get Customer by Email**        | Looks up a customer by email address.                                            |
| **Get Customer by External ID**  | Looks up a customer by the external ID you set when creating it.                 |
| **Get Full Customer (with address book and contacts)** | Fetches a complete customer by internal ID, including the address book, contact roles, currencies, terms, and credit limit. |

### Vendors

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Get Full Vendor (with address book and contacts)** | Fetches a complete vendor by internal ID, including the address book, contact roles, currencies, terms, and payment details. |

### Sales

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Create Sales Order**           | Creates a new sales order for a customer, with line items (quantity, rate, amount, tax code) and shipping/billing addresses. |
| **Update Sales Order**           | Updates an existing sales order by internal ID — header fields (PO number, external ID, memo, customer message, email, order/ship/start/end dates), terms, sales rep, payment method, department, class, location, shipping method and cost, discount, addresses, and line items (quantity, rate, price level, location, tax code, expected ship date, closed). |
| **Get Sales Order by PO Number or External ID** | Looks up a sales order by its PO number (`otherrefnum`) or external ID.  |
| **Get Full Sales Order (with line items and addresses)** | Fetches a complete sales order by internal ID, including line items, shipping/billing addresses, payment method, and shipping method. |
| **Create Estimate (Quotation)**  | Creates a new estimate for a customer, with line items and tax codes.            |
| **Get Full Estimate (with line items and addresses)** | Fetches a complete estimate by internal ID, including line items, addresses, and expected close date. |
| **Create Item Fulfillment (Delivery)** | Fulfills (ships) an existing sales order, in full or by specific lines, with ship status and fulfillment location. |
| **Get Full Item Fulfillment (with packages and tracking)** | Fetches a complete item fulfillment by internal ID, including the package sublist with tracking numbers, ship-to address, and shipping carrier and method. |

### Billing & Payments

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Create Invoice**               | Creates a new invoice, optionally billed against an existing sales order, with subsidiary, location, tax codes, and serial/lot inventory detail. |
| **Get Full Invoice (with line items and addresses)** | Fetches a complete invoice by internal ID, including line items, addresses, terms, and the sales order it was created from. |
| **Create Credit Memo**           | Creates a new credit memo, optionally against an existing invoice, with posting period, subsidiary, location, and serial/lot inventory detail. |
| **Get Full Credit Memo (with line items and addresses)** | Fetches a complete credit memo by internal ID, including line items, addresses, and the invoices it's applied to. |
| **Create Customer Payment**      | Records a customer payment and optionally applies it to open invoices.           |
| **Get Full Customer Payment (with applied invoices)** | Fetches a complete customer payment by internal ID, including the apply sublist showing which invoices it settles, plus payment method and account. |

### Returns

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Create a Return Authorization (RMA)** | Creates a customer return authorization with custom form, subsidiary, currency, and status, optionally linked to the original sales order (Created From) so NetSuite carries over the customer, pricing, and item lines. |

### Procurement

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Create Purchase Order**        | Creates a new purchase order for a vendor, with subsidiary, location, receive-by date, and per-line expected receipt dates. |
| **Get Full Purchase Order (with line items and addresses)** | Fetches a complete purchase order by internal ID, including line items, ship-to address, vendor terms, and receipt status per line. |
| **Create Vendor Bill**           | Creates a new vendor bill (AP invoice), optionally against an existing purchase order, with subsidiary, item lines, and expense lines (GL account, tax code, department, class, location). |
| **Get Full Vendor Bill (with item and expense lines)** | Fetches a complete vendor bill by internal ID, including item lines, expense lines with GL accounts, terms, and due date. |
| **Create Item Receipt (Purchase Delivery)** | Receives an existing purchase order, in full or by specific lines, with per-line location and an optional exchange rate. |
| **Get Full Item Receipt (with line items)** | Fetches a complete item receipt by internal ID, including received item lines, the purchase order it receives against, and inventory detail. |
| **Get Full Vendor Payment (with applied bills)** | Fetches a complete vendor payment by internal ID, including the apply sublist showing which vendor bills it settles, plus the paying account. |

### Inventory

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Create Inventory Item**        | Creates a new inventory item with subsidiaries, income/asset/COGS and purchase price variance accounts, tax schedule, costing method, and purchase cost. |
| **Get Item by SKU**              | Looks up an inventory item by SKU or item number.                                |
| **Get Full Inventory Item (with pricing and locations)** | Fetches a complete inventory item by internal ID, including the price sublist for every price level/currency, per-location quantities and reorder points, and preferred vendors. |
| **Adjust Inventory Quantity**    | Creates an inventory adjustment to change the on-hand quantity of one or more items at a location, including serial/lot, bin, and inventory status detail. Use a positive quantity to increase stock and a negative one to decrease it. |
| **Get Out of Stock Items**       | Returns inventory and assembly items whose available quantity has fallen to or below a threshold you set — drives reorder, back-in-stock, or channel de-listing workflows. |

### Advanced

| Action                          | Description                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- |
| **Search Records**               | Runs an ad hoc SuiteQL search against any supported NetSuite record type (Customer, Vendor, Item, Transaction, and more) with custom select fields, filter, and sort. |

:::note
**Search Records** passes your select fields, filter, and sort directly into the SuiteQL query without additional escaping. Restrict who can configure this action to trusted workflow builders.
:::

---

## Support

If you need assistance, contact the appse ai support team at [support@appse.ai](mailto:support@appse.ai).
