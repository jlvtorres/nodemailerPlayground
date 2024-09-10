// Import the nodemailer package
const nodemailer = require("nodemailer");

// Define the Mailer class
class Mailer {
      constructor() {
            // Create a transporter object using your email service credentials
            this.transporter = nodemailer.createTransport({
                  service: "gmail", // You can use any email service (Gmail, Outlook, etc.)
                  auth: {
                        user: "your-email@gmail.com", // Your email address
                        pass: "your-email-password", // Your email password or app-specific password
                  },
            });
      }

      // Method to send email
      async sendEmail(to, subject, text) {
            // Define the email options
            const mailOptions = {
                  from: "your-email@gmail.com", // Sender's email
                  to: to, // Recipient's email
                  subject: subject, // Subject of the email
                  text: text, // Body of the email
            };

            // Send the email
            try {
                  const info = await this.transporter.sendMail(mailOptions);
                  console.log(`Email sent: ${info.response}`);
                  return info;
            } catch (error) {
                  console.error(`Error sending email: ${error}`);
                  throw error;
            }
      }
}

module.exports = Mailer;
