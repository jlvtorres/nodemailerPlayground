// Import the nodemailer package
const nodemailer = require("nodemailer");
const emailUsedToSend = process.env.EMAIL_CONFIG_EMAIL;

// Define the Mailer class
class Mailer {
      constructor() {
            // Create a transporter object using your email service credentials
            this.transporter = nodemailer.createTransport({
                  host: process.env.EMAIL_CONFIG_HOST, // e.g., 'smtp.gmail.com'
                  port: 465, // Common port for secure connections
                  secure: true, // Use true for 465, false for other ports
                  auth: {
                        user: emailUsedToSend, // Your email address
                        pass: process.env.EMAIL_CONFIG_PASS, // Your email password or app-specific password
                  },
            });
      }

      // Method to send email
      async sendEmail(to, subject, text) {
            // Define the email options
            const mailOptions = {
                  from: emailUsedToSend, // Sender's email
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
