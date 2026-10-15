---
slug: /platform/key-concepts/nodes/built-in/error-digest
title: Error Digest Node
description: Summarises your organization's workflow failures for the last hour or day, and optionally emails the summary.
---

# Error Digest

The **Error Digest** node collects every workflow failure in your organization over a fixed window — the last hour or the last 24 hours — and gives you one summary of what broke. It can email that summary for you, or hand it to the rest of your workflow so you can send it wherever you like.

This is the node behind the **Hourly** and **Daily** digests on the [Notifications](/platform/key-concepts/error-notifications) page. Those digests are ordinary workflows built around this Error Digest node. You can open those workflows and edit them as per your business need.

It has a **single input channel** and a **single output channel**.

:::note
This node requires no credentials. The organization, the services it reads from, and the email template are all resolved for you.
:::

---

## Configuration

The node has two configuration fields:

### 1. Operation

| Operation | Window | Sends email |
| :--- | :--- | :--- |
| **Hourly Digest Summary** | the last hour | No |
| **Daily Digest Summary** | the last 24 hours | No |
| **Hourly Digest Summary with Email** | the last hour | Yes |
| **Daily Digest Summary with Email** | the last 24 hours | Yes |

The two options **with Email** send the digest for you, using the standard appse ai digest email template. The other two only produce the summary as node output, so you can route it somewhere else — a Slack node, a Teams message, a ticketing system, or a Filter node that only forwards certain workflows.

Each digest looks back from the moment the node runs, for the length of the window — **1 hour** for Hourly, **24 hours** for Daily. It is a rolling window, not a fixed calendar period.

**Example:** 
- A Daily digest that runs at 08:00 UTC on 9 October covers failures from **08:00 UTC on 8 October to 08:00 UTC on 9 October**. It does *not* cover "8 October" as a calendar day (00:00–23:59). 
- Similarly, an Hourly digest that runs at 14:00 UTC covers **13:00–14:00 UTC**.

### 2. Send To

Only shown for the two **with Email** operations. Enter one or more email addresses **separated by commas**:

```
ops@acme-corp.com, team-lead@acme-corp.com
```

### Example configuration

<img src="/img/platform/error-digest/error-digest-configuration.png" alt="Example configuration of the Error Digest node" width="700"/>

---

## When a window has no failures

**No email is sent.** If nothing failed in the hour or the day, the node completes without mailing anyone.

This is deliberate. An hourly digest that mailed every hour regardless would send up to 24 "nothing broke" messages a day, and people stop reading those — including on the day something does break.

The node still produces its output item, so a workflow built on the non-email operations can decide for itself what a clean window should do.

---

## Which workflows are included

Every workflow in your organization is covered, except:

- **deleted workflows**, and
- **the digest workflows themselves** — a digest never reports on its own failures.

---

## Output

One item, whichever operation you choose:

```json
{
  "windowStart": "2026-10-07T08:00:00Z",
  "windowEnd": "2026-10-08T08:00:00Z",
  "emailSent": true,
  "errorSummary": [
    {
      "workflowId": "3f2a...",
      "workflowName": "Shopify to SAP orders",
      "errorNodes": [
        {
          "nodeId": "c1d2...",
          "nodeName": "Create Sales Order",
          "errorCount": 10,
          "errorMessages": [
            "401 Unauthorized from SAP Service Layer",
            "CardCode C10432 not found"
          ]
        }
      ]
    }
  ]
}
```

| Field | What it holds |
| :--- | :--- |
| `windowStart`, `windowEnd` | The period covered, in UTC. |
| `emailSent` | `true` only when an email actually went out — so `false` on a clean window, and on the two non-email operations. |
| `errorSummary[]` | One entry per workflow that had failures. Empty when nothing failed. |
| `errorSummary[].workflowName` | The workflow that failed. |
| `errorNodes[].errorCount` | How many errors that node had in the window. |
| `errorNodes[].errorMessages[]` | The distinct error messages, up to ten. |

To branch on whether anything failed, test the length of `errorSummary`, or read `emailSent`.

---

## Example — send the digest to Slack instead of email

1. Add an **On schedule** trigger and set it to run every hour.
2. Add an **Error Digest** node and choose **Hourly Digest Summary** (not the email one).
3. Add a **Filter** node if you only care about certain workflows.
4. Add your Slack or Teams node, and build the message as a normal workflow app node.

---

## Limitations / Notes

- The window is measured in **UTC**.
- The digest covers the whole organization. There is no per-workflow opt-out — delete a workflow to take it out of the digest.
- The node runs **once per execution**, not once per input record, so the schedule drives it rather than the data.
- The two **with Email** operations will execute the workflow with an error if the **Send To** field contains an address that cannot be delivered to.

---

## Support
If you’re unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
