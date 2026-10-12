---
title: "PrestaShop"
description: "Step-by-step guide to set up PrestaShop Admin API credentials for appse ai integration"
slug: /app-integrations/prestashop/
---

PrestaShop is an open-source e-commerce platform used to build and run online stores, with built-in catalog, order, customer, and stock management. With appse ai, you can connect your PrestaShop store through the **Admin API** to automate product, order, and customer workflows across your business systems.

This guide explains how to configure a PrestaShop credential in appse ai using the **Admin API**.

:::info

The **Admin API** is PrestaShop's modern REST API, secured with OAuth 2.0 client credentials. It is **not** the same as the legacy **Webservice API** (Advanced Parameters → Webservice), which uses a basic-auth API key. appse ai connects using the Admin API — make sure you configure an **API Client**, not a Webservice key.

:::

---

## Setup Credential

Follow the steps below to set up your PrestaShop Admin API credential.

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection.                                                                                                            |
| Shop URL        | Your PrestaShop shop domain only, e.g. `yourshop.com`. appse ai adds `https://` and `/admin-api/` for you, so do **not** include them.                  |
| Client ID       | The Client ID of the API Client created in your PrestaShop back office.                                                                                 |
| Client Secret   | The Client Secret generated when the API Client was saved. PrestaShop shows it **only once**.                                                           |
| Scope           | The scopes appse ai requests, separated by spaces. Pre-filled with the default scopes; each one must also be authorized on the API Client (see Step 5). |

---

### Step-by-Step Guide

#### 1. Log in to the PrestaShop back office

Open your PrestaShop back office and log in with an employee account that can access **Advanced Parameters**.

<img src="/img/credentials/prestashop/ps-login.png" alt="PrestaShop back office login page" width="700"/>

After logging in, check your PrestaShop version in the badge next to the logo. The Admin API is enabled by default on **PrestaShop version 9.0 and later**.

<img src="/img/credentials/prestashop/ps-dashboard.png" alt="PrestaShop dashboard showing the version badge" width="700"/>

:::note

On **PrestaShop 8.1**, the Admin API is an experimental feature. Go to **Advanced Parameters → New & Experimental Features**, enable the **Admin API** feature flag, and click **Save** before continuing.

:::

#### 2. Open the Admin API page

In the left menu, go to **Advanced Parameters → Admin API**.

<img src="/img/credentials/prestashop/ps-menu-admin-api.png" alt="PrestaShop Advanced Parameters menu with Admin API" width="700"/>

#### 3. Enable the Admin API and add a new API Client

Under **Configuration**, make sure **Admin API** is set to **Enabled**, then click **Save**.

Next, click **Add new API Client** at the top right of the page.

<img src="/img/credentials/prestashop/ps-admin-api-page.png" alt="PrestaShop Admin API page with Add new API Client and Save" width="700"/>

#### 4. Fill in the API Client details

Fill in the **New API Client** form:

| Field       | Required | Value                                                                                                                            |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Client Name | Yes      | A friendly name to identify this client, e.g. `appse ai`.                                                                        |
| Client ID   | Yes      | A unique identifier, e.g. `appse-ai`. Only lowercase letters, numbers, and hyphens are allowed. You'll paste this into appse ai. |
| Description | No       | Optional, e.g. _Integration client for appse ai workflows._                                                                      |
| Lifetime    | No       | How long an access token stays valid, in seconds. Keep the default `3600`; appse ai refreshes tokens automatically.              |

<img src="/img/credentials/prestashop/ps-new-api-client.png" alt="PrestaShop New API Client form with Client Name and Client ID" width="700"/>

#### 5. Enable the client and assign scopes

Set **Enabled** to **Yes**. Under **Scopes**, you can use **Enable all** or **Disable all**, or switch on individual scopes.

<img src="/img/credentials/prestashop/ps-enabled-scopes.png" alt="PrestaShop API Client Enabled toggle and Scopes buttons" width="700"/>

To grant a scope, switch its toggle on so it shows **Access: authorized**.

<img src="/img/credentials/prestashop/ps-scope-authorized.png" alt="PrestaShop scope toggle set to Access: authorized" width="700"/>

Authorize every scope listed in the appse ai **Scope** field. By default, these are:

| Scope                              | Used for                                         |
| ---------------------------------- | ------------------------------------------------ |
| `customer_read` / `customer_write` | Reading and creating customers and companies.    |
| `customer_group_read`              | Reading customer groups when creating customers. |
| `product_read` / `product_write`   | Reading and managing catalog products.           |
| `supplier_read` / `supplier_write` | Reading and managing suppliers.                  |

:::important

You can authorize additional scopes in the **PrestaShop Admin API dashboard** as per your requirements. Make sure you add the same scopes, separated by spaces, to the **Scope** field in the **appse ai credential form**. The scopes in both places must match for appse ai to validate and save the credential.

:::

<img src="/img/credentials/prestashop/ps-customer-scopes.png" alt="PrestaShop customer_group_read, customer_read and customer_write scopes" width="700"/>

:::warning

A scope that appse ai requests but the API Client doesn't authorize will cause token or authorization errors. If you add or remove scopes in appse ai later, update the API Client to match.

:::

#### 6. Generate and copy the Client Secret

Scroll to the bottom of the form and click **Generate client secret and save**.

<img src="/img/credentials/prestashop/ps-generate-secret.png" alt="PrestaShop Generate client secret and save button" width="700"/>

PrestaShop saves the API Client and shows the **Client secret** in a green banner at the top of the page. Click **Copy** and store it somewhere safe—it's displayed **only once**.

<img src="/img/credentials/prestashop/ps-client-secret.png" alt="PrestaShop generated client secret banner" width="700"/>

#### 7. Add the credential in appse ai

In appse ai, open the PrestaShop **Configure Credentials** form and fill in:

- **Connection Name:** a name to identify this connection.
- **Shop URL:** your shop domain only, e.g. `yourshop.com`.
- **Client ID:** the Client ID from Step 4.
- **Client Secret:** the secret copied in Step 6.

<img src="/img/credentials/prestashop/appseai-credential-form.png" alt="appse ai PrestaShop Configure Credentials form" width="700"/>

Scroll down to **Scope** and check that it lists only scopes you authorized in Step 5. Then click **Save**.

<img src="/img/credentials/prestashop/appseai-credential-form-scope.png" alt="appse ai PrestaShop credential Scope field and Save button" width="700"/>

On successful authorization, your credential is saved and your PrestaShop store is connected to **appse ai**.

---

## Triggers

Here is the list of available triggers for PrestaShop:

| Trigger                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| **New customers created** | Triggers when new customers are created in PrestaShop. |

---

## Actions

Here is the list of available actions for PrestaShop:

| Action                 | Description                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| **Create Customer**    | Creates a new customer in PrestaShop.                                                                 |
| **Create Company**     | Creates a new B2B company customer in PrestaShop, including company name, website, and payment terms. |
| **Get Customer by ID** | Retrieves a PrestaShop customer by their numeric ID.                                                  |

---

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)
