/*
import { Webhook } from "svix";
import userModel from "../models/userModel.js"; // adjust path

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // verify the webhook
    const event = whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body; // use the verified event

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };
        // create user in MongoDB
        await userModel.create(userData);
        res.json({});

        console.log("User Created");
        console.log(data);
        break;
      }

      case "user.updated":
        const userData = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        console.log("User Updated");
        console.log(data);
        break;

      case "user.deleted":
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        console.log("User Deleted");
        console.log(data);
        break;

      default:
        console.log("Unknown event type");
        break;
    }

    // respond to webhook
    res.status(200).json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(400).json({ error: "Invalid webhook" });
  }
};

export { clerkWebhooks };
*/
/*

import { Webhook } from "svix";
import userModel from "../models/userModel.js"; // adjust path

const clerkWebhooks = async (req, res) => {
  try {
    // Initialize Svix webhook with secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the webhook signature
    const event = whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    // Destructure verified data
    const { data, type } = event;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };
        await userModel.create(userData);
        console.log("User Created:", data);
        break;
      }

      case "user.updated": {
        const updatedData = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, updatedData);
        console.log("User Updated:", data);
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        console.log("User Deleted:", data);
        break;
      }

      default:
        console.log("Unknown event type:", type);
        break;
    }

    // Send one response to webhook
    res.status(200).json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(400).json({ error: "Invalid webhook" });
  }
};

export { clerkWebhooks };
*/

import { Webhook } from "svix";
import userModel from "../models/userModel.js";

const clerkWebhooks = async (req, res) => {
  try {
    console.log("🎣 Webhook received");
    console.log("Headers:", req.headers);
    console.log("Body type:", typeof req.body);
    console.log("CLERK_WEBHOOK_SECRET exists:", !!process.env.CLERK_WEBHOOK_SECRET);
    
    // Raw body ko string mein convert karo
    const payload = req.body.toString();
    console.log("Payload:", payload);
    
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // verify the webhook
    const event = whook.verify(payload, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = event;
    console.log("Event type:", type);

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0]?.email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };
        
        await userModel.create(userData);
        console.log("✅ User Created:", data.id);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0]?.email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        console.log("✅ User Updated:", data.id);
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        console.log("✅ User Deleted:", data.id);
        break;
      }

      default:
        console.log("Unknown event type:", type);
        break;
    }

    return res.status(200).json({ received: true });
    
  } catch (err) {
    console.error("❌ Webhook error:", err.message);
    return res.status(400).json({ error: "Invalid webhook", details: err.message });
  }
};

export { clerkWebhooks };