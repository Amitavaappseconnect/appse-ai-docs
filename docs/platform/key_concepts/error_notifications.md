---
slug: /platform/key-concepts/error-notifications
title: Hourly and Daily Error Notifications
sidebar_position: 8
description: Turn on an hourly or daily email summarising every workflow failure across your organization.
---

# Hourly and Daily Error Notifications

The **failure digest** is an opt-in email that tells you what broke across your organization — the workflows that failed, the nodes inside them, how many errors each one had, and the actual error messages.

It is the quickest way to get proactive notice of failures. You do not have to build anything: turn a switch on and the first digest arrives at the end of the next window.

If you want full control over what happens on a failure instead — route it to Slack, raise a ticket, trigger a retry — build an error workflow with the [Error Trigger](/platform/key-concepts/nodes/trigger/error) node. The two work side by side and neither replaces the other.

---

## Turning a digest on

1. Click on **Notifications** in the left sidebar

<img src="/img/platform/error-notifications/notifications-menu.png" alt="Notifications option in the left sidebar" width="700" style={{border: '1px solid #d0d7de'}}/>

2. Switch on **Hourly digest**, **Daily digest**, or both.

<img src="/img/platform/error-notifications/digest-toggles.png" alt="Hourly digest and Daily digest toggles" width="700" style={{border: '1px solid #d0d7de'}}/>

That is the whole setup. Behind the scenes appse ai creates a small workflow that fetches the summary and sends the mail, schedules it, and starts it — all from that one switch.

| Digest | When it sends | What it covers |
| :--- | :--- | :--- |
| **Hourly** | Every hour, on the hour | The previous 60 minutes |
| **Daily** | Every day at 08:00 UTC (*configurable*) | The previous 24 hours |

The window always ends when the mail is prepared. The daily digest covers the last 24 hours, not the previous calendar day.

---

## The workflow behind the digest

The digest is not a hidden, hardcoded mailer. It is an ordinary workflow, and once a digest is on you will see it in your workflow list with a link to it from the Notifications page.

<img src="/img/platform/error-notifications/digest-workflows.png" alt="Hourly and Daily failure digest workflows in the workflow list" width="700" style={{border: '1px solid #d0d7de'}}/>

Open it and you will find three nodes:

1. **On schedule** — when the digest runs.
2. **Error Digest** — fetches the summary and sends the mail. See the [Error Digest node](/platform/key-concepts/nodes/built-in/error-digest).
3. A **note** reminding you which nodes not to delete.

You can edit it like any other workflow. The common changes are:

- **Change when it runs** — open the schedule node and set a different time.
- **Change who receives it** — open the Error Digest node and edit **Send To**, a comma-separated list.
- **Send it somewhere else** — switch the Error Digest node to the operation *without* email and add a Slack, Teams or HTTP node after it.

Your edits are kept. Switching a digest off and on again does **not** rebuild the workflow or discard your changes.

:::note
Do not delete the schedule node or the Error Digest node. Without either one the digest stops and nothing tells you it has.
:::

---

## What the email contains

For the window just passed, grouped by workflow:

- the **workflow** that failed
- each **node** inside it that failed, and how many errors it had
- the **error messages** themselves, so you can usually tell what went wrong without opening anything

**If nothing failed, no email is sent.**

---

## What counts as a failure

A workflow does not have to end in a failed state to appear in your digest.

A node that processes 50 records and rejects 2 of them keeps going, and the run is marked **successful** — but those 2 records did fail, and the digest reports them. This is usually the more important case, because nothing else in the product draws attention to it.

---

## Which workflows are covered

Every workflow in your organization, except:

- **deleted workflows**, and
- **the digest workflows themselves**.

There is no per-workflow opt-out. To take an erroneous workflow out of the digest, delete it.

---

## Turning a digest off

Switch it off on the **Notifications** page. That stops the schedule and deactivates the workflow, but keeps the workflow and your edits, so switching it back on resumes exactly where you left off.

Digests can only be switched from the Notifications page. The toggle in the workflow list and in the workflow designer will not act on them, and deleting a digest workflow is blocked — in each case a message points you back here.

This is because a digest is three things created together: the workflow, its schedule, and your organization's notification setting. Changing only one of them would leave a digest that is switched off but still sending, or switched on but never firing.

---

## Billing

Digest workflows do not count against your plan's active-workflow allowance. Only your ordinary business workflows draw that balance down.

---

## Limitations / Notes

- Email is the only delivery channel for the built-in digest. For Slack, Teams or anything else, edit the digest workflow or build your own with the [Error Digest node](/platform/key-concepts/nodes/built-in/error-digest).
- Windows are measured in **UTC**.
- Recipients are set on the digest workflow's Error Digest node, not on the Notifications page.
- If a scheduled run is missed, that window is not re-sent — the next digest covers its own window only.

---

## Support
If you’re unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
