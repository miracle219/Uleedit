import { format } from "date-fns";

// import { MailerLite } from 'mailerlite';
import MailerLite from "@mailerlite/mailerlite-nodejs";
import { NextRequest, NextResponse } from "next/server";
// TODO: fix the initialization of .env vars in nextjs
// Initialize MailerLite with the API key from environment variables
console.log(process.env.MAILERLITE_API_KEY || "ENV IS NOT INITIALIZED");

const mailerlite = new MailerLite({
  api_key:
    process.env.MAILERLITE_API_KEY ||
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDY2N2VkYTg0MjA5MDI5MGZlYzgyZWZkYmJiZTZjY2NlYzhkMmM5ZTkzYzdhZDNkZGU4Zjc4MzE0YjU1ZGZhNmQyMWExYWJmOTc4ZTA1NDEiLCJpYXQiOjE3MjQ1NzMyMjguMDYzODI5LCJuYmYiOjE3MjQ1NzMyMjguMDYzODMxLCJleHAiOjQ4ODAyNDY4MjguMDYxMDQ1LCJzdWIiOiIxMDc4NDYyIiwic2NvcGVzIjpbXX0.eFMfbl753o4fXz4nkFjTD7znTim03xrRjaZufuKuHK1EwDF-D0MKlCSc8cFLFliri2lba06dLjryMjZM9-w_JAsSBKMlpSrXr72n12ghEokS642kO8rn0LJci3Y_NB92TV6oEjmFA5kG8mG7SUd_RaKN-YJ7aCe-edtxfat14ksx46memqD2V1-tprfBU3ISIvkJdtbls4exYJNlTRoTR8peKGx33DSeE-lJYzeBCJKn4x-p0mA7857-Ou4mYLH7a4ldmPKYjRTsNSW1bXB6_ootN6rS8D5UPMf7XATDD-p-nni5WAdiAa9pPsYx4GT3_uR8erKD6cwoJMZWHrGUp7QjrVxpUPzTpdydr8ReJmmRPK_E5lnCQcNKMV4UcbqzGDh6APgnmiQ9veFCeFuNIrGGyH4_aAONWfl0O2CUVXBKAsoeAimlFwn5ojnFk1AV1ICmQptK8FRu79N9zgnFkP11NfqgA0Ki66GNwK5EP3xcffvuPIO7tWZ-l_AfU1LjpqxvJv-DNXL-GDcJDKEIgJ6o8RldCM8gfp5lH1atp-qNjrtDoPi2RyC29ahaM_funLna1y2dpJpAMR1keaUa4ZqlU04As8HicM8954c-7MJQEsUi5rnqS3QKsDY41TZC6bxj0LJjkibf5tDo6udTFwp4aRZ7AaZOaWObgFwb3GY",
});

// Define the type for the response data
type Data = {
  message?: string;
  error?: string;
  data?: any;
};

export async function POST(request: NextRequest) {
  // return new Response("Hello, Next.js!");
  try {
    const { email }: { email: string } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" });
    }
    // Create or update a subscriber in your MailerLite audience list
    const response = await mailerlite.subscribers.createOrUpdate({
      email: email, // Ensure the email field is correctly populated
      opted_in_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"), // Correct format for the opted_in_at field
      groups: ["130728130110293353"], // Ensure this is the correct group ID or name
      status: "active", // Ensure this status is valid
      subscribed_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"), // Correct format for the subscribed_at field
      ip_address:
        request.ip || request.headers.get("x-forwarded-for") || undefined, // Corrected header name to 'x-forwarded-for'
      // Additional fields can be added here, such as name, etc.
    });
    return NextResponse.json({
      message: "Subscription successful!",
      data: response?.data,
    });
  } catch (error: Error | any) {
    console.log(error.message);
    return NextResponse.json({ error: error?.response?.data?.message });
  }
}

async function updateASubscriber(subscriber_id: string, params: object) {
  try {
    const response = await mailerlite.subscribers.update(subscriber_id, params);
    return response.data;
  } catch (error: Error | any) {
    return error?.response?.data;
  }
}

async function getASubscriber(subscriber_id: string) {
  try {
    const response = await mailerlite.subscribers.find(subscriber_id);
    return response.data;
  } catch (error: Error | any) {
    return error?.response?.data;
  }
}

async function totalCount() {
  try {
    const response = await mailerlite.subscribers.getCount();
    return response.data;
  } catch (error: Error | any) {
    return error?.response?.data;
  }
}

async function getListSubscribers(
  limit: number,
  status: "active" | "unsubscribed" | "unconfirmed" | "bounced" | "junk",
) {
  try {
    const params = {
      filter: {
        status: status, // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
      },
      limit: limit,
    };
    const response = await mailerlite.subscribers.get(params);
    return response.data;
  } catch (error: Error | any) {
    return error?.response?.data;
  }
}

async function deleteASubscriber(subscriber_id: string) {
  try {
    const response = await mailerlite.subscribers.delete("SUBSCRIBER_ID");
    return response.data;
  } catch (error: Error | any) {
    return error?.response.data;
  }
}

async function forgetASubscriber(subscriber_id: string) {
  try {
    const response = await mailerlite.subscribers.forget(subscriber_id);
    return response.data;
  } catch (error: Error | any) {
    return error?.response.data;
  }
}
