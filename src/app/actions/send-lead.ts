"use server";

import { contactSchema, ContactFormValues } from "@/lib/validations/contact";

export interface SendLeadResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function sendLead(formData: ContactFormValues): Promise<SendLeadResponse> {
  try {
    // 1. Server-side validation using shared Zod schema
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      return {
        success: false,
        message: "Invalid form inputs. Please check your data.",
        errors: fieldErrors,
      };
    }

    const data = parsed.data;

    // 2. Honeypot check for bots
    if (data.honeypot && data.honeypot.length > 0) {
      console.warn("Spam attempt detected via Honeypot field. Silent blocking.");
      // Return a fake success to confuse bots and avoid throwing stack errors
      return {
        success: true,
        message: "Inquiry processed successfully.",
      };
    }

    // 3. Configure emails parameters
    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "shreelabhconsultancy@yahoo.in";

    // Format Indian Standard Time (IST)
    const now = new Date();
    const submissionDate = now.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const submissionTime = now.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // 4. Draft clean, premium HTML email layout
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Lead Inquiry - ShreeLabh Consultancy</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
            .header { background-color: #1D4E89; padding: 30px; text-align: center; border-bottom: 4px solid #F59E0B; }
            .logo { color: #ffffff; font-size: 24px; font-weight: bold; margin: 0; letter-spacing: 0.5px; }
            .subtitle { color: #f59e0b; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-top: 4px; letter-spacing: 1.5px; }
            .content { padding: 30px; }
            h2 { font-size: 18px; color: #0f172a; margin-top: 0; margin-bottom: 20px; border-bottom: 2px dashed #f1f5f9; padding-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            td { padding: 12px 8px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
            .label { font-weight: bold; color: #475569; width: 35%; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { color: #0f172a; font-size: 14px; }
            .message-box { background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; padding: 16px; font-size: 13px; line-height: 1.6; color: #334155; margin-top: 5px; white-space: pre-wrap; }
            .footer { background-color: #f8fafc; text-align: center; padding: 20px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
            .footer a { color: #1D4E89; text-decoration: none; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">ShreeLabh Consultancy</div>
              <div class="subtitle">Revenue & Tax Consultants</div>
            </div>
            
            <div class="content">
              <h2>New Client Inquiry Received</h2>
              <table>
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value font-bold" style="font-weight: 700;">${data.fullName}</td>
                </tr>
                <tr>
                  <td class="label">Mobile Number</td>
                  <td class="value">
                    <a href="tel:+91${data.mobileNumber.replace(/\s+/g, "")}" style="color: #1D4E89; font-weight: bold;">
                      +91 ${data.mobileNumber}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value">${data.email ? `<a href="mailto:${data.email}" style="color: #1D4E89;">${data.email}</a>` : '<em style="color: #94a3b8;">Not Provided</em>'}</td>
                </tr>
                <tr>
                  <td class="label">Required Service</td>
                  <td class="value font-bold" style="color: #1D4E89; font-weight: 700;">${data.service}</td>
                </tr>
                <tr>
                  <td class="label">Submission Date</td>
                  <td class="value">${submissionDate}</td>
                </tr>
                <tr>
                  <td class="label">Submission Time</td>
                  <td class="value">${submissionTime} (IST)</td>
                </tr>
              </table>
              
              <div class="label" style="width: 100%; margin-bottom: 8px;">Client Message</div>
              <div class="message-box">
                ${data.message ? data.message : '<span style="color: #94a3b8; font-style: italic;">No message submitted.</span>'}
              </div>
            </div>
            
            <div class="footer">
              This email was automatically generated by the lead generation form on the <br>
              <a href="https://shreelabhconsultancy.com" target="_blank">ShreeLabh Consultancy Website</a>.
            </div>
          </div>
        </body>
      </html>
    `;

    // 5. If RESEND_API_KEY is not defined, run simulated console logger for development
    if (!apiKey) {
      console.info("=========================================");
      console.info("DEVELOPMENT SIMULATION MODE - NO RESEND API KEY FOUND");
      console.info(`To: ${receiverEmail}`);
      console.info(`Subject: New Inquiry: ${data.service} - ${data.fullName}`);
      console.info(`Name: ${data.fullName}`);
      console.info(`Phone: +91 ${data.mobileNumber}`);
      console.info(`Email: ${data.email || "N/A"}`);
      console.info(`Service: ${data.service}`);
      console.info(`Message: ${data.message || "N/A"}`);
      console.info(`Timestamp: ${submissionDate} @ ${submissionTime}`);
      console.info("=========================================");

      // Simulate a small network delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      return {
        success: true,
        message: "Lead processed successfully in development simulation mode.",
      };
    }

    // 6. Send API request directly to Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "ShreeLabh Website <onboarding@resend.dev>",
        to: receiverEmail,
        subject: `New Inquiry: ${data.service} - ${data.fullName}`,
        html: emailHtml,
        replyTo: data.email || undefined,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Resend API Email Dispatch Error:", responseData);
      return {
        success: false,
        message: responseData.message || "Failed to submit inquiry. Please try again or call us.",
      };
    }

    return {
      success: true,
      message: "Your inquiry has been submitted successfully!",
    };
  } catch (error) {
    console.error("Server Action Exception in sendLead:", error);
    return {
      success: false,
      message: "Something went wrong. Please check your network and try again.",
    };
  }
}
