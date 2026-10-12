---
title: "SAP Business ByDesign"
description: "Step-by-step guide to set up SAP Business ByDesign credentials for appse ai integration"
slug: /app-integrations/sap-by-design/
---

SAP Business ByDesign (ByD) is a cloud ERP suite for mid-sized businesses, covering finance, sales, procurement, supply chain, and warehouse operations in a single system. With appse ai, you can connect your ByD tenant to sync customers, materials, sales orders, pricing, outbound deliveries, site logistics tasks, and POS transactions—without writing SOAP envelopes or XML.

---

## Setup Credential

appse ai connects to SAP Business ByDesign using **Basic Authentication** with a ByD **communication user** over the tenant's A2X SOAP web services.

Follow the steps below to quickly set up your credential.

### Required Fields

You'll be asked to fill in the following details:

| Field               | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| Connection Name     | A name to help you identify this connection                                                          |
| ByDesign Tenant URL | Your ByD tenant URL with no path after the host (e.g. `https://mycomp234.sapbydesign.com`)            |
| Communication User  | The user ID of the communication user created in ByD (these IDs often start with `_`)                |
| Password            | The password of the communication user                                                               |

### Step-by-Step Guide

#### 1. Log in to SAP Business ByDesign

Open your SAP Business ByDesign tenant in a browser and log in with an administrator account.

<img src="/img/credentials/sap-bydesign/byd-login.png" alt="SAP Business ByDesign login page" width="700"/>

:::tip

Note the tenant URL in the browser's address bar (for example `https://mycomp234.sapbydesign.com`). You'll enter it in appse ai later—without any path after the host.

:::

#### 2. Create a Communication System

From the launchpad, open **Application and User Management** in the left menu.

<img src="/img/credentials/sap-bydesign/byd-launchpad.png" alt="SAP Business ByDesign launchpad with Application and User Management menu" width="700"/>

Under **Input and Output Management**, click **Communication Systems**.

<img src="/img/credentials/sap-bydesign/byd-menu-communication-systems.png" alt="SAP Business ByDesign Communication Systems menu option" width="700"/>

Click **New** to open the **New Communication System** form.

<img src="/img/credentials/sap-bydesign/byd-new-communication-system.png" alt="SAP Business ByDesign New Communication System form" width="700"/>

Fill in the form using the following steps and format:

1. In **ID**, enter a name for this system, for example `APPSEAI`.
2. Add a **Host Name**. SAP allows any name for this setup, so use one that identifies the system, for example `appse.ai`. See [SAP's guide](https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/sap-business-bydesign-side-by-side-extensions-on-sap-cloud-platform/ba-p/13416911).
3. Set **System Access Type** to **Internet**.
4. Optionally, under **Technical Contact**, enter the name and email of the person who owns this system.
5. Under **System Instances**, click **Add Row** and enter a **System Instance ID**, for example `APPSEAI_01`.
6. Set **Preferred Application Protocol** to **5 - Web Service**.

<img src="/img/credentials/sap-bydesign/byd-communication-system-web-service.png" alt="SAP Business ByDesign communication system with Web Service selected as preferred application protocol" width="700"/>

Click **Save**, then go to **Actions** → **Set to Active**.

<img src="/img/credentials/sap-bydesign/byd-communication-system-set-active.png" alt="SAP Business ByDesign communication system Actions menu with Set to Active" width="700"/>

#### 3. Create a Communication Arrangement

Go back to **Application and User Management** and, under **Input and Output Management**, click **Communication Arrangements**.

<img src="/img/credentials/sap-bydesign/byd-menu-communication-arrangements.png" alt="SAP Business ByDesign Communication Arrangements menu option" width="700"/>

Click **New** to start the **New Communication Arrangement** wizard. In **Select Scenario**, choose the communication scenario that contains the web services you need, then click **Next**.

The web services appse ai uses come from several standard ByD scenarios. The simplest approach is to create one custom communication scenario that includes every service in the [Web Services Used](#web-services-used) table. Go to **Application and User Management → Communication Scenarios**, click **New**, add the inbound services you need, and save it. Then select that scenario here.

<img src="/img/credentials/sap-bydesign/byd-new-communication-arrangement.png" alt="SAP Business ByDesign New Communication Arrangement wizard, Select Scenario step" width="700"/>

Continue through the wizard:

- **Define Business Data:** select the communication system you created in Step 2.
- **Define Technical Data:** select **User ID and Password** as the authentication method, then set the communication user's password (see Step 4).
- **Review**, then click **Finish**.

In the arrangement, enable every web service your workflows will use. See [Web Services Used](#web-services-used) below for the full list.

:::important

Always enable the **Query Materials** service (`querymaterialin`), even if your workflows don't use it. appse ai calls it to validate the credential when you save it, so without it the credential can't be saved.

:::

:::note

A communication user alone is not enough. Each web service must also be published to that user through a **communication arrangement**. If a service is missing from the arrangement, ByD returns `401 Unauthorized` even when the host, user, and password are all correct.

:::

#### 4. Note the Communication User and Password

In the **Define Technical Data** step of the communication arrangement wizard, the generated communication user appears in the **User ID** field. Copy the user ID, then click **Edit Credentials** next to the **User ID** field and set a password. Do this before you click **Finish**. You'll need both the user ID and the password in appse ai.

For more detail, see SAP's [Set Up SAP Business ByDesign](https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/setup-managed-services/setup-byd.html) guide and the [Security Guide for SAP Business ByDesign](https://help.sap.com/doc/e9674bba2e9f423da76f05c02c4a8554/2305/en-US/05dbf9dfe2be49e29f4ebf4c1557177a.pdf).

#### 5. Add the Credential in appse ai

In your appse ai workflow, add an SAP Business ByDesign action and create a new credential. The **Configure Credentials** form opens.

<img src="/img/credentials/sap-bydesign/configure-credentials.png" alt="appse ai Configure Credentials form for SAP Business ByDesign" width="700"/>

Enter a connection name, your ByDesign tenant URL, the communication user, and its password, then click **Save**.

<img src="/img/credentials/sap-bydesign/configure-credentials-filled.png" alt="appse ai SAP Business ByDesign credential form filled in" width="700"/>

If the details are correct, your credential is connected.

---

## Actions

Here is the list of available actions for SAP Business ByDesign:

| Action                                | Description                                                                                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Calculate prices**                  | Gets the price that ByD calculates for one or more products, quantities, and a currency.                                                    |
| **Call ByD SOAP service (advanced)**  | Calls any ByD SOAP service, including custom (`yy*`) services built on your own tenant. Accepts the payload as JSON or as ByD XML.          |
| **Create or update customer**         | Creates or updates a ByD customer (person or organization), including addresses, communication data, and account details.                   |
| **Manage outbound delivery**          | Reads, releases, unreleases, or updates an outbound delivery, including writing a carrier tracking number back to it.                       |
| **Post POS transaction**              | Posts a point-of-sale transaction bundle into ByD.                                                                                          |
| **Create or update sales order**      | Creates a sales order with line items and pricing, or updates an existing one (freight, discount, tax code, or external payment reference). |
| **Manage site logistics task**        | Confirms or updates a site logistics task, such as confirming a pick.                                                                       |
| **Get business partner by ID**        | Finds a business partner (customer, supplier, or contact) by its ByD business partner ID.                                                   |
| **Get customer by email**             | Finds a customer by email address. Enter the email; all other query settings are preset.                                                    |
| **Query materials**                   | Finds materials by internal ID, search text, extension field, or any other ByD selection field.                                             |
| **Query outbound deliveries by date** | Finds outbound deliveries whose arrival date/time falls within a date range.                                                                |
| **Query outbound deliveries**         | Finds outbound deliveries by ID or arrival-date window and returns the `UUID` and `ChangeStateID` needed to act on them.                    |
| **Query sales orders**                | Finds sales orders by ID, buyer ID, date, or any other ByD selection field.                                                                 |
| **Query service products**            | Finds service products by search text, ID, or any other ByD selection field.                                                                |
| **Query site logistics tasks**        | Finds site logistics tasks (pick, putaway, and similar warehouse tasks) by ID, process type, or any other ByD selection field.              |

:::note

**Release** and **Update** on an outbound delivery both need the delivery's current `ChangeStateID`, and ByD rejects a stale one. Run **Query outbound deliveries** first, then pass the returned `UUID` and `ChangeStateID` to **Manage outbound delivery**.

:::

:::note

**Call ByD SOAP service (advanced)** sends your service path and payload to ByD as written, and can call any service the communication user has access to, including custom ones. Restrict who can configure this action to trusted workflow builders.

:::

---

## Web Services Used

The table below lists the ByD web services each action calls. Make sure every service you need is enabled in your **communication arrangement**.

SOAP services are called at `https://<tenant-host>/sap/bc/srt/scs/sap/<service>`.

| Web Service                      | Operation (Message Root)                                                                                             | Used By                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `querycustomerin1`               | `CustomerByCommunicationDataQuery_sync`                                                                              | Get customer by email                                        |
| `querybusinesspartnerin1`        | `BusinessPartnerByIdentificationQuery_sync`                                                                          | Get business partner by ID                                   |
| `managecustomerin1`              | `CustomerBundleMaintainRequest_sync_V1`, `CustomerBundleMaintenanceCheckRequest_sync_V1`                             | Create or update customer                                    |
| `querymaterialin`                | `MaterialByElementsQuery_sync`                                                                                       | Query materials, credential validation                       |
| `queryserviceproductin`          | `ServiceProductByElementsQuery_sync`                                                                                 | Query service products                                       |
| `querysalesorderin3`             | `SalesOrderByElementsQuery_sync`                                                                                     | Query sales orders                                           |
| `managesalesorderin5`            | `SalesOrderBundleMaintainRequest_sync`                                                                               | Create or update sales order                                 |
| `calculatepricein`               | `CalculatePricesRequest_sync`                                                                                        | Calculate prices                                             |
| `queryoutbounddeliveryin`        | `OutboundDeliveryFindByElementsQuery_sync`                                                                           | Query outbound deliveries, Query outbound deliveries by date |
| `manageodin`                     | `ODByIDQuery_sync`, `OutboundDeliveryReleaseReq_sync`, `OutboundDeliveryUndoReleaseReq_sync`, `ODUpdateRequest_sync` | Manage outbound delivery                                     |
| `querysitelogisticstaskin`       | `SiteLogisticsTaskByElementsQuery_sync`                                                                              | Query site logistics tasks                                   |
| `managesitelogisticstaskin`      | `SiteLogisticsTaskBundleMaintainRequest_sync_V1`                                                                     | Manage site logistics task                                   |
| `pointofsaletransactionprocessi` | `PointOfSaleTransactionBundleNotification`                                                                           | Post POS transaction                                         |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
