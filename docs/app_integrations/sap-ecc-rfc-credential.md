---
title: "SAP ECC"
description: Step-by-step guide to set up SAP ECC (RFC) credentials for appse ai integration
slug: /app-integrations/sap-ecc-rfc/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SAP ECC (ERP Central Component) is SAP's on-premise ERP suite that runs an organization's core business processes — finance, controlling, sales and distribution, materials management, and logistics — on a single integrated platform. SAP ECC is an on-premise integration that connects your local SAP system to appse ai over the native **RFC/BAPI** protocol through a dedicated **On-Prem Connector**, so your SAP system is never exposed to the internet.

---

## Setup Credential

### Authentication Methods

**appse ai** supports two connection modes for SAP ECC: **Connect to one server (Direct)** and **Load balance across servers (Message Server)**. Choose the one that matches the details your SAP/Basis administrator gave you — if you were handed an _application server host + system number_, use **Direct**; if you were handed a _message server host + logon group_, use **Load Balancing**.

<Tabs>
  <TabItem value="direct" label="Connect to one server (Direct)" default>

### Connect to one server (Direct)

Connect directly to a single SAP application server. Best for a single-server system, dev/test, or demos.

#### Prerequisites

Before starting, make sure:

- You have an **RFC-enabled** SAP ECC or S/4HANA (on-premise) system and a dedicated SAP **RFC / service user** (created in transaction **SU01**) with least-privilege roles.
- Your **On-Prem Connector** is created, installed, and showing an **Online** status. If not, follow the [On-Prem Connector setup guide](/platform/key-concepts/on-premise-agent/on-premise-agent-setup) first.
- The connector host can reach the SAP server on the RFC gateway port **3300 + system number** (for system number `11`, that is port `3311`).

#### Required Fields

You'll be asked to fill in the following details:

| Field                   | Description                                                                                                               | Where to find it                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Application Server Host | Hostname or IP of the SAP application server (RFC `ASHOST`), e.g. `10.0.2.66`. Must be reachable from the connector host. | SAP Logon Pad → connection entry → **Application Server**; or **System → Status**; or from Basis.              |
| System Number           | Two-digit SAP instance / system number (00–99), e.g. `11`. Sets the RFC port `3300 + number`.                             | SAP Logon Pad → connection properties → **Instance Number**; or **System → Status → System Number**.           |
| Client                  | Three-digit SAP client (mandant), e.g. `800`. Keep leading zeros.                                                         | SAP logon screen → **Client**; or **System → Status → Client**. Confirm the productive client with Basis.      |
| RFC User                | SAP logon / RFC user the integration signs in as, e.g. `sapuser`.                                                         | Transaction **SU01**, or from Basis. Prefer a dedicated service / communication user.                          |
| Password                | Password for the RFC user.                                                                                                | Set in **SU01**. A brand-new user's initial password must be changed once via a dialog logon before RFC works. |
| Language                | Two-letter logon language ISO code, e.g. `EN`.                                                                            | SAP logon screen → **Language**. e.g. EN, DE, FR. Use EN if unsure.                                            |
| RFC Pool Size           | Concurrent RFC connections the connector keeps open (default 2, 5 recommended). Connector-side setting, not a SAP value.  | Nothing to look up in SAP. Start at 5; raise only with Basis.                                                  |
| SAP Router              | _(Optional)_ SAProuter string, only if SAP is reached through a SAProuter.                                                | Ask Basis for the exact string (e.g. `/H/host/S/port/`).                                                       |

---

#### Step-by-Step Guide

##### Step 1: Set up and verify the On-Prem Connector

Create, download, and install an On-Prem Connector on a machine that can reach your SAP server and the internet ([setup guide](/platform/key-concepts/on-premise-agent/on-premise-agent-setup)). On the **On-Prem Connectors** page, confirm the connector status shows **Online** before continuing.

##### Step 2: Open the Credentials page and select the connector

- In the appse ai portal, go to the **Credentials** page and select **SAP ECC** from the application list. When the **Select Authentication** dialog opens, choose **Connect to one server (Direct)**.
  <img src="/img/credentials/sap-ecc-rfc/direct/select-authentication.png" alt="select authentication type" width="420"/>

- Use the **On-Prem Connector** dropdown to choose the connector you installed. Only after selecting an active, online connector will the remaining fields appear.
  <img src="/img/credentials/sap-ecc-rfc/direct/select-connector.png" alt="select connector" width="420"/>

##### Step 3: Enter the connection details

With **Connect to one server (Direct)** selected, fill in the fields from the [Required Fields](#required-fields) table above.
<img src="/img/credentials/sap-ecc-rfc/direct/direct-credential.png" alt="direct connection credential form" width="420"/>

<img src="/img/credentials/sap-ecc-rfc/direct/direct-credential-fields.png" alt="direct connection client and user fields" width="420"/>

<img src="/img/credentials/sap-ecc-rfc/direct/direct-credential-options.png" alt="direct connection language and pool options" width="420"/>

##### Step 4: Save and validate

- Click **Save**. A “Connection Data Saved” message confirms the values are accepted.
- Click **Validate**. A “Test Connection Successful” message confirms the connector can authenticate to SAP. The credential is saved with a green tick and ready to use in workflows.

</TabItem>
<TabItem value="loadbalanced" label="Load balance across servers (Message Server)">

### Load balance across servers (Message Server)

Connect through the SAP message server with a logon group — load is balanced and failed over across multiple application servers. Recommended for production.

#### Prerequisites

Before starting, make sure:

- You have an **RFC-enabled** SAP ECC or S/4HANA (on-premise) system with a **message server** and a **logon group** configured (transaction **SMLG**), and a dedicated SAP **RFC / service user** (transaction **SU01**).
- Your **On-Prem Connector** is created, installed, and showing an **Online** status. If not, follow the [On-Prem Connector setup guide](/platform/key-concepts/on-premise-agent/on-premise-agent-setup) first.
- The connector host can reach the SAP **message server** port **3600 + system number** (for system number `11`, that is port `3611`).

#### Required Fields

You'll be asked to fill in the following details:

| Field               | Description                                                                                               | Where to find it                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Message Server Host | Hostname or IP of the SAP message server (RFC `MSHOST`).                                                  | SAP Logon Pad → **Group/Server Selection** → Message Server; or from Basis.                                           |
| System ID (SID)     | Three-character SAP System ID (RFC `R3NAME`), upper-case, e.g. `SIR`.                                     | SAP Logon Pad → connection properties → **System ID**; or **System → Status → SAP System data**.                      |
| Logon Group         | SAP logon group defined in transaction **SMLG**, e.g. `PUBLIC`. Must already exist on the message server. | SAP Logon Pad → **Group/Server Selection** → Group; or run **SMLG** in SAP to list groups (create one if none exist). |
| Message Server Port | Message server port = `3600 + system number`, e.g. `3611`.                                                | Optional only if `sapms<SID>` is in the connector host's services file — recommended to set it. Confirm with Basis.   |
| Client              | Three-digit SAP client (mandant), e.g. `800`. Keep leading zeros.                                         | SAP logon screen → **Client**; or **System → Status → Client**.                                                       |
| RFC User            | SAP logon / RFC user the integration signs in as, e.g. `sapuser`.                                         | Transaction **SU01**, or from Basis. Prefer a dedicated service / communication user.                                 |
| Password            | Password for the RFC user.                                                                                | Set in **SU01**. Initial password must be changed once before RFC works.                                              |
| Language            | Two-letter logon language ISO code, e.g. `EN`.                                                            | SAP logon screen → **Language**. e.g. EN, DE, FR. Use EN if unsure.                                                   |
| RFC Pool Size       | Concurrent RFC connections the connector keeps open (default 2, 5 recommended).                           | Nothing to look up in SAP. Start at 5; raise only with Basis.                                                         |
| SAP Router          | _(Optional)_ SAProuter string, only if SAP is reached through a SAProuter.                                | Ask Basis for the exact string.                                                                                       |

:::note
**Finding the logon group:** run transaction **SMLG** in SAP — it lists the logon groups and their instances; use one of those exact names. If none exist (common on a single-server system), create one in SMLG (Create Assignment → group name → assign the instance) and use that name.
:::

---

#### Step-by-Step Guide

##### Step 1: Set up and verify the On-Prem Connector

Create, download, and install an On-Prem Connector on a machine that can reach your SAP message server and the internet ([setup guide](/platform/key-concepts/on-premise-agent/on-premise-agent-setup)). On the **On-Prem Connectors** page, confirm the connector status shows **Online** before continuing.

##### Step 2: Open the Credentials page and select the connector

- In the appse ai portal, go to the **Credentials** page and select **SAP ECC** from the application list. When the **Select Authentication** dialog opens, choose **Load balance across servers (Message Server)**.
  <img src="/img/credentials/sap-ecc-rfc/load-balance/select-authentication.png" alt="select authentication type" width="420"/>

- Use the **On-Prem Connector** dropdown to choose the connector you installed. Only after selecting an active, online connector will the remaining fields appear.
  <img src="/img/credentials/sap-ecc-rfc/load-balance/select-connector.png" alt="select connector" width="420"/>

##### Step 3: Enter the connection details

With **Load balance across servers (Message Server)** selected, fill in the fields from the [Required Fields](#required-fields-1) table above.
<img src="/img/credentials/sap-ecc-rfc/load-balance/load-balanced-credential.png" alt="load balanced credential form" width="420"/>

<img src="/img/credentials/sap-ecc-rfc/load-balance/load-balanced-credential-fields.png" alt="load balanced logon group and client fields" width="420"/>

<img src="/img/credentials/sap-ecc-rfc/load-balance/load-balanced-credential-user.png" alt="load balanced user and password fields" width="420"/>

<img src="/img/credentials/sap-ecc-rfc/load-balance/load-balanced-credential-options.png" alt="load balanced language and pool options" width="420"/>

##### Step 4: Save and validate

- Click **Save**. A “Connection Data Saved” message confirms the values are accepted.
- Click **Validate**. A “Test Connection Successful” message confirms the connector can authenticate to SAP through the message server. The credential is saved with a green tick and ready to use in workflows.

</TabItem>
</Tabs>

---

## Actions

Every application has a pre-defined set of actions that let you perform application-specific activities within the platform. Here is the current SAP ECC action set available in the platform.

| Action                            | Description                                                                                                                                                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Create Sales Order**            | Creates a sales order in SAP using `BAPI_SALESORDER_CREATEFROMDAT2` and commits it automatically.                                                                                                                    |
| **Simulate Sales Order**          | Simulates a sales order using `BAPI_SALESORDER_SIMULATE` (read-only) — returns pricing, schedule lines, and availability without creating a document.                                                                |
| **Get Sales Order Detailed List** | Reads detailed data for one or more sales orders using `BAPISDORDER_GETDETAILEDLIST`.                                                                                                                                |
| **Get Customer List**             | Lists customers using `BAPI_CUSTOMER_GETLIST`. Optionally filter by a customer-number range (select-options).                                                                                                        |
| **Get Customer Detail**           | Reads customer master data for a single customer using `BAPI_CUSTOMER_GETDETAIL2`.                                                                                                                                   |
| **Check Material Availability**   | Checks ATP material availability using `BAPI_MATERIAL_AVAILABILITY`. Plant, Material, and Unit are mandatory.                                                                                                        |
| **Advance Action (Custom BAPI)**  | Calls any RFC-enabled function module — including custom `Z*` BAPIs. Pick the object; its parameters load dynamically from the SAP interface metadata. Map your values and choose whether to commit (write) or read. |

:::note
The **Advance Action** lets you run any custom or standard BAPI that isn't covered by a dedicated action above. Select the BAPI, and its fields are fetched live from SAP so you can map source data directly to the RFC structure — no predefined schema required.
:::

---

## Troubleshoot

| Symptom                                    | Likely cause                                                    | Action                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| “partner not reached” / connection refused | RFC port blocked, or wrong host/IP                              | Confirm the host and that port `3300 + system number` is open from the connector host    |
| Logon failed / user locked                 | Wrong password, initial password not changed, or account locked | Reset the service user; change any initial password via one dialog logon; unlock in SU01 |
| “Group … not found” (load-balanced)        | Logon group doesn't exist on the message server                 | Use a group listed in **SMLG**, or create one and assign the instance                    |
| “Source data not found” though data exists | Wrong client                                                    | Verify the client is the productive one                                                  |
| Texts / messages in wrong language         | Language not installed or wrong code                            | Set language to `EN`, or a code installed on the system                                  |

:::note
Uploaded credentials and connection details are confidential. Use a dedicated, least-privilege SAP service user, collect the password through a secure channel, and flag GDPR / DPDP / SOC 2 scope with the customer before go-live.
:::

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)
