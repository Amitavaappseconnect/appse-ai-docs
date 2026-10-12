---
title: "ERPNext"
description: "Step by step guide to configure ERPNext credentials in appse ai to automate sales-cycle workflows"
slug: /app-integrations/erpnext/
---

ERPNext is an open-source ERP built on the Frappe framework for managing accounting, inventory, manufacturing, CRM, and HR in one unified platform. Integrating ERPNext into appse ai enables you to automate the full sales cycle — quotations, sales orders, delivery notes, sales invoices, and incoming payments — directly within your AI-powered workflows.

---

## Set Up Credential

:::info

appse ai connects to ERPNext using **OAuth 2.0**. Before you can authorize the connection, you need to create an **OAuth Client** in your own ERPNext site to obtain a **Client ID** and **Client Secret**. ERPNext does not provide shared OAuth credentials, so every site connection requires its own client.

:::

### Required Fields

| Field | Description |
|---|---|
| **Connection Name** | A label to identify this credential within appse ai. |
| **ERPNext Site URL** | Your ERPNext/Frappe site URL, e.g. `https://mycompany.erpnext.com`. |
| **Client ID** | The Client ID from the OAuth Client you create in ERPNext. |
| **Client Secret** | The Client Secret from the same OAuth Client. |
| **API Access Scope** | Space-separated OAuth scopes granted to the client (defaults to `all openid`). |
| **Callback API URL** | Auto-filled by appse ai. Copy this value and add it as a Redirect URI on your ERPNext OAuth Client — do not edit it. |

### Step-by-Step Guide

#### 1. Start the Credential in appse ai

Open the ERPNext credential form in appse ai and add your **Connection Name** and **ERPNext Site URL**. Copy the auto-filled **Callback API URL** — you'll need it in a moment.

#### 2. Open the Framework Workspace

Log in to your ERPNext site, go to the Desk home page, and click the **Framework** workspace tile.

<img src="/img/credentials/erpnext/Step1.png" alt="appse ai ERPNext Desk home, Framework workspace" width="700"/>

#### 3. Go to Integrations

From the Framework workspace picker, click **Integrations**.

<img src="/img/credentials/erpnext/Step2.png" alt="appse ai ERPNext Framework workspace, Integrations" width="700"/>

#### 4. Add an OAuth Client

In the Integrations sidebar, select **OAuth Client**, then click **+ Add OAuth Client**.

<img src="/img/credentials/erpnext/Step3.png" alt="appse ai ERPNext OAuth Client list" width="700"/>

#### 5. Configure the OAuth Client

Enter an **App Name (Client Name)**, e.g. `appse ai`. Paste the Callback API URL from Step 1 into **Default Redirect URI** (and add it under **Redirect URIs** as well). Set **Scopes** to `all openid`. Click **Save** — ERPNext generates a **Client ID** and **Client Secret** for this app.

<img src="/img/credentials/erpnext/Step4.png" alt="appse ai ERPNext OAuth Client Client ID, Client Secret, Redirect URIs and Scopes" width="700"/>

:::warning
Treat the Client Secret like a password. Do not share it publicly, and regenerate it in ERPNext if you suspect it has been exposed.
:::

#### 6. Enter Credentials in appse ai

Back in the ERPNext credential form in appse ai, paste the **Client ID**, **Client Secret**, and **API Access Scope** copied from ERPNext.

#### 7. Save and Authorize

Click **Save & Authorize**. You'll be redirected to your ERPNext site to log in (if not already) and approve access for the app. Once approved, you'll be redirected back to appse ai and your credential will be validated and saved.

:::tip
If authorization fails, confirm the Callback API URL was added exactly as shown to both **Default Redirect URI** and **Redirect URIs** on the OAuth Client, and that **Scopes** includes `all openid`.
:::

---

## Triggers and Actions

Here is a list of the available triggers, actions and tools for ERPNext:

:::note
Actions create records as **Draft** (`docstatus: 0`) by default unless you set **Document Status** to **Submitted**. Downstream steps that depend on a document being final — delivery, billing, payment reconciliation — require the upstream document to be Submitted first.
:::

### Triggers

All ERPNext triggers are polling triggers and require **Fetch Data Since** and **Limit** (default 10, maximum 20 records per request).

#### Sales

| Trigger | Description |
|---|---|
| **New Quotation Created** | Fires when a new quotation is created in ERPNext. |
| **New Sales Order Created** | Fires when a new sales order is created in ERPNext. |
| **Sales Order Submitted** | Fires when a sales order is submitted (`docstatus: 1`), i.e. confirmed and ready to deliver and bill. Use it to start fulfilment, credit or stock-reservation flows only for confirmed demand. |
| **Sales Order Completed** | Fires when a sales order reaches the **Completed** status, i.e. fully delivered and fully billed. |
| **New Delivery Note Created** | Fires when a new delivery note is created in ERPNext. |
| **Delivery Note Submitted** | Fires when a delivery note is submitted, i.e. stock has actually moved out. Use it to write tracking and fulfilment status back to the sales channel. |
| **New Sales Invoice Created** | Fires when a new sales invoice is created in ERPNext. |
| **Sales Invoice Submitted** | Fires when a sales invoice is submitted and becomes a real receivable. Use it to raise a payment link, push AR to CRM, or start collections. |
| **New Incoming Payment Created** | Fires when a new incoming (customer) Payment Entry is created in ERPNext. |

#### Master Data

| Trigger | Description |
|---|---|
| **Customer Created or Updated** | Fires when a customer is created or changed. Use it to keep a CRM account, storefront customer or marketplace account in step with the ERP billing entity, tax ID and payment terms. |
| **Contact Created or Updated** | Fires when a contact is created or changed. Use it alongside the customer trigger to keep contact people in sync across CRM, storefront and ERP. |
| **Item Created or Updated** | Fires when an item is created or changed. Use it to publish new SKUs to a storefront or marketplace, or keep product masters aligned. |
| **Item Price Created or Updated** | Fires when an item price is created or changed. Use it to push price-list and customer-specific pricing to a storefront, marketplace or CRM pricebook. |
| **Pricing Rule Created or Updated** | Fires when a pricing rule is created or changed. Use it to translate ERPNext discount and promotion logic into storefront price lists, customer-group pricing or coupons. |

#### Inventory

| Trigger | Description |
|---|---|
| **New Stock Entry Created** | Fires when a new stock entry (material receipt, issue, transfer or repack) is created. Use it to mirror warehouse transfers, returns-to-stock and adjustments. |
| **New Stock Ledger Entry Created** | Fires for every individual stock movement posted to the stock ledger. Cancelled entries are excluded. Use it when you need the movement itself rather than the resulting balance. |
| **Stock Level Changed** | Fires when an item's stock position at a warehouse (ERPNext **Bin**) changes. Returns actual, reserved, ordered, planned and projected quantities plus valuation rate, so a sellable quantity can be pushed to a storefront or marketplace. |

### Actions

#### Sales

| Action | Description |
|---|---|
| **Create Quotation** | Creates a new Quotation for a Customer or Lead, with one or more line items. |
| **Update Quotation** | Updates an existing **Draft** Quotation — pricing, validity, terms or line items. Only the fields you supply are changed. |
| **Create Sales Order** | Creates a new Sales Order for a Customer, with one or more line items. |
| **Update Sales Order Status** | Puts a submitted sales order **On Hold**, resumes it, or closes it short, using the ERPNext status method so delivery and billing counters stay consistent. Use it for credit gates, fraud holds and short-shipment closure. |
| **Create Delivery Note** | Creates a new Delivery Note, optionally against an existing Sales Order line, so stock moves and delivery status stays reconciled. |
| **Create Sales Invoice** | Creates a new Sales Invoice, optionally against an existing Sales Order or Delivery Note line, or with **Update Stock** enabled for direct/POS sales. |
| **Create Sales Return / Credit Note** | Creates a return sales invoice against an original submitted sales invoice. Quantities and amounts must be **negative**. Use it to mirror a storefront, marketplace or payment-provider refund. |

#### Payments and Banking

| Action | Description |
|---|---|
| **Create Incoming Payment** | Creates an incoming Payment Entry for a customer, optionally reconciled against one or more Sales Invoices to close out the sales cycle. |
| **Create Outgoing Payment** | Creates an outgoing Payment Entry — a customer refund or supplier payment — optionally allocated against invoices, with processing fees on the deductions table. |
| **Create Payment Request** | Creates a Payment Request against a sales invoice or sales order to hold a hosted payment link and its status, keeping the invoice, link and payment tied together. |
| **Reconcile Bank Transaction** | Allocates one or more payment or journal entries against a submitted Bank Transaction and sets their clearance date. Post the payments and fee entry first, then allocate them to the single bank line. |

#### Master Data

| Action | Description |
|---|---|
| **Create Customer** | Creates a new Customer master, optionally with per-company credit limits. Use it when a storefront, marketplace or CRM buyer doesn't exist in the ERP yet. |
| **Update Customer** | Updates an existing Customer — billing entity, tax registration, terms, credit limit, or disabled status. Only the fields you supply are changed. |
| **Create Contact** | Creates a new Contact and links it to a Customer, Supplier or Lead. Use the **Email Addresses** and **Phone Numbers** inputs (child tables) rather than top-level fields. |
| **Update Contact** | Updates an existing Contact. Emails, phone numbers and links are child tables — each one you send **replaces the whole table**, so include every row you want to keep. |
| **Create Address** | Creates a new Address and links it to a Customer, Supplier, Lead or Contact via the Dynamic Link table. |
| **Create Item** | Creates a new Item (product or service) master, with optional variant attributes and per-company defaults. |
| **Update Item** | Updates an existing Item — write back a storefront/marketplace product ID, refresh descriptions and weights, or disable a delisted SKU. Custom fieldnames can be added as extra inputs. |
| **Create Item Price** | Creates an Item Price row for an item and price list, optionally scoped to a customer or supplier and a validity window. |
| **Update Item Price** | Updates an existing Item Price. To retire a price, set **Valid Upto** rather than deleting it, so pricing history stays auditable. |

#### Inventory

| Action | Description |
|---|---|
| **Create Stock Entry** | Creates a Stock Entry to receive, issue, transfer or repack stock. A receipt needs a target warehouse, an issue a source warehouse, and a transfer both. |
| **Create Stock Reconciliation** | Sets the counted quantity and valuation of items at a warehouse (rather than moving stock by a delta), to true up against a 3PL, marketplace fulfilment centre or physical count. |

#### Service and Work Queue

| Action | Description |
|---|---|
| **Create Warranty Claim** | Creates a Warranty Claim against a customer and, for serialised items, a specific serial number. |
| **Create ToDo** | Creates a ToDo, optionally assigned to a user and linked to a document. Use it whenever a flow needs a human decision — credit approval, hold review, data fix, or marketplace claim. |

#### Lookup

| Action | Description |
|---|---|
| **Search Records** | Looks up records from any ERPNext object (DocType) — Customer, Sales Order, Sales Invoice, Item, Bin and more — using Frappe filter syntax, field selection, sorting, and paging. |
| **Get Record by ID** | Retrieves a single complete record from any DocType by its name (ID), including all child tables such as items, taxes, references and links. |

### Tools

Tools expose ERPNext operations to the AI layer so an agent can call them directly while reasoning over a task.

| Tool | Description |
|---|---|
| **Get Record by ID** | Retrieves a complete record from any ERPNext DocType by its name (ID), including all child tables. Use it after a search or trigger when the agent needs the full document. |
| **Create Address** | Creates a new Address and links it to a Customer, Supplier, Lead or Contact. |
| **Update Contact** | Updates an existing Contact. Child tables (emails, phones, links) are replaced in full, so include every row to keep. |
| **Update Quotation** | Updates an existing **Draft** Quotation. Submitted quotations reject the update with a `403 No permission for Quotation Item` error rather than a clear draft-only message. |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
