---
slug: /platform/key-concepts/nodes/trigger/error
title: On workflow error
sidebar_position: 5
description: Starts a workflow whenever another workflow fails, with the full failure context of that run.
---

# On workflow error

The **On workflow error** node starts a workflow when a *different* workflow fails. A workflow that begins with this node becomes an **error workflow** — a workflow whose job is to react to other workflows' failures.

**appse ai** does not decide what happens on a failure. The On workflow error only captures the failure and hands it over. What you do with it — filter it, format it, post it to Slack or Teams, raise a ticket, call an API, start a remediation step — is whatever you build into the rest of that workflow.

This is a trigger node, so it has **no input channel**. It has a **single output channel** carrying one item: the failure payload described below.

:::note
This node requires no credentials and no configuration.
:::

---

## How it fits together

1. Build a workflow that starts with an **On workflow error** trigger node, then add whatever should happen on a failure.

<img src="/img/platform/error-trigger/on-workflow-error-node.png" alt="On workflow error node in the trigger selection" width="700"/>

2. Save it. It is now available as an error workflow.
3. Open the workflow you want to protect, click **Settings** in the designer toolbar, and pick your error workflow from the **Error notification workflow** dropdown.

<img src="/img/platform/error-trigger/workflow-settings-icon.png" alt="Workflow settings option in the designer toolbar" width="700"/>

<img src="/img/platform/error-trigger/error-notifier-dropdown.png" alt="Error notification workflow dropdown in Workflow settings" width="700"/>

4. Save. From the next run onward, any error in the protected workflow starts your error workflow with that run's context.

One workflow can be protected by exactly one error workflow at a time. The same error workflow can protect any number of workflows.

---

## What counts as a failure

The **On workflow error** node fires on **any node error inside the run** — not only when the run as a whole is marked failed.

This matters more than it sounds. A node that processes 50 records and rejects 2 of them keeps running, and the run finishes with a **Success** status in execution history. That is still a failure of 2 records, and the **On workflow error** node fires for it. In the payload, `execution.status` is `partial` for this case (see the [field reference](#field-reference)).

| Situation | Run status (execution history) | `execution.status` in payload | On workflow error fires |
| :--- | :--- | :--- | :--- |
| A node throws and stops the run | Failed | `failed` | Yes |
| A node rejects some records and the run continues | Success | `partial` | Yes |
| A node rejects records *and* another node throws | Failed | `failed` | Yes, once, with both nodes listed |
| Every node succeeds with every record | Success | N/A | No |

---

## Configuration

There is nothing to configure. Open the node and Run to see a sample of the payload it produces, so you can map fields in downstream nodes before a real failure has ever happened.

Running the workflow manually from the designer emits that same sample payload, which lets you build and test the rest of the error workflow without having to break something first.

---

## Output

The node outputs a single item. Use it in downstream nodes with expressions, for example `{{$payload.workflow.name}}` or `{{$payload.execution.url}}`.

```json
{
  "execution": {
    "id": "8a3e4f10-2c7b-4d9e-9f1a-0b6c5d4e3f21",
    "url": "https://workflow.appse.ai/workflows/3f2a.../execution-history?execution=8a3e...",
    "status": "partial",
    "startedAt": "2026-10-01T05:15:02Z",
    "finishedAt": "2026-10-01T05:15:09Z",
    "error": {
      "message": "401 Unauthorized from SAP Service Layer",
      "type": "AppError",
      "code": null,
      "details": { "error": { "code": -2028, "message": "Invalid session" } },
      "nodeId": "c1d2...",
      "nodeName": "Create Sales Order",
      "nodeType": "AppNode"
    },
    "failedNodeCount": 1,
    "failedItemCount": 2
  },
  "workflow": { "id": "3f2a...", "name": "Shopify to SAP orders" },
  "failedNodes": [
    {
      "nodeId": "c1d2...",
      "nodeName": "Create Sales Order",
      "nodeType": "AppNode",
      "status": "partial",
      "totalRecords": 50,
      "successRecords": 48,
      "failedRecords": 2,
      "error": { "message": "401 Unauthorized from SAP Service Layer", "type": "AppError", "code": null, "details": {} },
      "failedItems": [
        {
          "index": 3,
          "error": { "message": "401 Unauthorized from SAP Service Layer", "type": "AppError", "code": null, "details": {} },
          "actualData": "{\"CardCode\":\"C10432\"}",
          "prevInputs": [
            {
              "nodeId": "a9b8...",
              "nodeName": "Shopify Orders",
              "nodeType": "AppTriggerNode",
              "items": [{ "_pair_index": 3, "id": "10432", "cust_email": "buyer@acme-corp.com" }]
            }
          ],
          "prevInputsTruncated": false
        }
      ],
      "truncated": false,
      "omittedItems": 0
    }
  ]
}
```

### Field reference

| Field | What it holds |
| :--- | :--- |
| `execution.id` | The failed run's execution id. |
| `execution.url` | Direct link to that run in execution history. Handy as the "View run" link in an alert. |
| `execution.status` | `failed` when a node threw, `partial` when nodes only rejected records. In the latter case the run itself is still shown as **Success** in execution history. |
| `execution.startedAt`, `finishedAt` | Run start and end, in UTC. |
| `execution.error` | A shortcut to the first failed node's error, with the node's id, name and type added. Use this when you only want one line for an alert. |
| `error.message` | The error message returned by the app or node. |
| `error.type` | The category of error, for example `AppError`. |
| `error.code` | The error code, when the source provides one; otherwise `null`. |
| `error.details` | The raw error body returned by the source system, when available; otherwise an empty object. |
| `execution.failedNodeCount` | How many nodes failed, counted before any caps are applied. |
| `execution.failedItemCount` | How many individual records failed across all nodes. |
| `workflow.id`, `workflow.name` | The workflow that failed — not the error workflow. |
| `failedNodes[]` | One entry per failed node, in the order they ran. |
| `failedNodes[].nodeId`, `nodeName`, `nodeType` | The id, name and type of the failed node. |
| `failedNodes[].status` | `failed` if the node threw, `partial` if it only rejected records. |
| `failedNodes[].totalRecords`, `successRecords`, `failedRecords` | Record counts for that node in that run. |
| `failedNodes[].failedItems[]` | The individual records that failed, each with its own error. |
| `failedItems[].index` | Position of the record in that node's input. |
| `failedItems[].actualData` | The record itself, as the node received it. |
| `failedItems[].prevInputs[]` | The matching input from each earlier node, so you can trace a failed record back to where it came from. |
| `truncated`, `omittedItems`, `prevInputsTruncated` | Set when a very large failure was capped. The counts above always reflect the real totals. |

:::warning Personal data
The payload includes the failed record (`actualData`) and the inputs from earlier nodes (`prevInputs`), so it can contain personal data such as customer names and email addresses. Only credentials are redacted. If you forward the payload to Slack, Teams, a ticketing system or email, handle it under your data-protection rules (for example GDPR or DPDP), and send only the fields you need.
:::

---

## Limitations / Notes

- **On workflow error must be the first node.** It is a trigger, so it starts a workflow and cannot sit mid-flow.
- **An error workflow cannot be activated.** It runs because another workflow failed, never on its own. The Activate toggle is blocked, and attempting it shows a message explaining why. This is expected — linking it is all that is required.
- **Error workflows do not chain.** If your error workflow itself fails, no further error workflow is started, so a loop cannot form.
- **Deleting an error workflow is not blocked.** Any workflow still pointing at it simply stops having an error workflow, and nothing is sent on its next failure.
- **Manual test runs count.** Failing a protected workflow from the designer triggers the error workflow just like a live run does.
- **The sample output payload is generic.** The detailed error message path varies by node. The detailed error message may display in a different field inside the `error` object depending on the node and the source system that failed. When mapping the detailed message in downstream nodes, make sure you use the exact path of field as per the node used.
- If a workflow has no error workflow linked, nothing is sent on failure. That is the default — this feature never sends anything on its own.

---

## Support
If you’re unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
