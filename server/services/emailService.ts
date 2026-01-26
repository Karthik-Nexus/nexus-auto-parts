import nodemailer from 'nodemailer';

// Helper to create transporter
const createTransporter = (user: string, pass: string) => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Use 465 for SSL/TLS, or 587 for STARTTLS
        secure: true, // true for 465
        auth: { user, pass },
    });
};

interface LeadData {
    name: string;
    email: string;
    phone: string;
    year?: string;
    make?: string;
    model?: string;
    part?: string;
    vin?: string;
    message?: string;
}

export async function sendLeadEmails(lead: LeadData) {
    const adminUser = process.env.ADMIN_EMAIL_USER;
    const adminPass = process.env.ADMIN_EMAIL_PASS;
    const salesUser = process.env.SALES_EMAIL_USER;
    const salesPass = process.env.SALES_EMAIL_PASS;

    if (!adminUser || !adminPass || !salesUser || !salesPass) {
        console.warn("Missing Email Credentials in .env. Skipping emails.");
        return;
    }

    const adminTransporter = createTransporter(adminUser, adminPass);
    const salesTransporter = createTransporter(salesUser, salesPass);

    // 1. Internal Notification (From Admin -> To Sales)
    const internalMailOptions = {
        from: `"System Admin" <${adminUser}>`,
        to: salesUser, // Send to Sales Team
        subject: `Part Request: ${lead.year || 'Unknown'} ${lead.make || 'Vehicle'} - ${lead.part || 'Part'}`,
        html: `
            <h2>Part Request Received</h2>
            <p><strong>Customer:</strong> ${lead.name}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Phone:</strong> ${lead.phone}</p>
            <hr />
            <h3>Vehicle Details</h3>
            <p><strong>Year:</strong> ${lead.year || 'N/A'}</p>
            <p><strong>Make:</strong> ${lead.make || 'N/A'}</p>
            <p><strong>Model:</strong> ${lead.model || 'N/A'}</p>
            <p><strong>Part:</strong> ${lead.part || 'N/A'}</p>
            <p><strong>VIN:</strong> ${lead.vin || 'N/A'}</p>
            <p><strong>Message:</strong> ${lead.message || 'N/A'}</p>
        `
    };

    // 2. Customer Confirmation (From Sales -> To Customer)
    const customerMailOptions = {
        from: `"Nexus Auto Parts" <${salesUser}>`,
        to: lead.email,
        subject: 'We Received Your Parts Request!',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Thank you for your request, ${lead.name.split(' ')[0]}!</h2>
                <p>We have received your inquiry for a <strong>${lead.year || ''} ${lead.make || ''} ${lead.model || ''} - ${lead.part || 'part'}</strong>.</p>
                <p>A dedicated parts specialist is reviewing our inventory and will be reaching out to you by phone within the next <strong>5–10 minutes</strong> with a quote.</p>
                <p>Please make sure you are available to take the call at <strong>866-317-1665</strong>.</p>
                <br />
                <p>If you need immediate assistance, please call us at:</p>
                <h3 style="color: #d32f2f;">866-317-1665</h3>
                <br />
                <p>Best Regards,<br/>Nexus Auto Parts Team</p>
            </div>
        `
    };

    try {
        await adminTransporter.sendMail(internalMailOptions);
        console.log('Internal notification sent to Sales');

        await salesTransporter.sendMail(customerMailOptions);
        console.log('Confirmation email sent to Customer');
    } catch (error) {
        console.error('Error sending emails:', error);
    }
}
