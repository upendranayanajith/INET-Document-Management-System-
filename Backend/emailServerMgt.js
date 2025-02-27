// const nodemailer = require('nodemailer');

// SMTP Server Configuration
// const SMTP_CONFIG = {
//   host: "mail.lcbfinance.net",
//   port: 25,
//   user: 'inet@lcbfinance.net',
//   password: 'Password'
// };

// // Email Recipients Configuration
// const EMAIL_RECIPIENTS = {
//   ALL_USERS: 'allstaff@lcbfinance.net',
// //   DEPARTMENTS: {
// //     'IT Department': 'upendra.n@lcbfinance.net',
// //     'Human Resources': 'upendra.n@lcbfinance.net',
// //     'Finance': 'upendra.n@lcbfinance.net',
// //     'Credit': 'upendra.n@lcbfinance.net',
// //     'Risk Management Department': 'upendra.n@lcbfinance.net',
// //     'Compliance Department': 'upendra.n@lcbfinance.net',
// //     'All': 'upendra.n@lcbfinance.net',
// //     'Marketing': 'upendra.n@lcbfinance.net'
// // }

// };

// // Create Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   host: SMTP_CONFIG.host,
//   port: SMTP_CONFIG.port,
//   secure: false,
//   auth: {
//     user: SMTP_CONFIG.user,
//     pass: SMTP_CONFIG.password
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// const sendEmailMgt = async (action, documentInfo) => {
//   try {
//     let emailContent;
//     if (action === 'approve') {
//       emailContent = {
//         from: SMTP_CONFIG.user,
//         to: EMAIL_RECIPIENTS.ALL_USERS,
//         subject: `New Document Approved: ${documentInfo.pdfName}`,
//         html: `
//           <h2>New Document Available</h2>
//           <p>A new document has been approved and is now available for viewing.</p>
//           <p><strong>Document Details:</strong></p>
//           <ul>
//             <li>Name: ${documentInfo.pdfName}</li>
//             <li>Category: ${documentInfo.category}</li>
//             <li>Department: ${documentInfo.subCategory}</li>
//             <li>Approval Date: ${new Date().toLocaleDateString()}</li>
//           </ul>
//           <p>You can access this document through the document management system.</p>
//         `
//       };
//     } else if (action === 'reject') {
//       const departmentEmail = EMAIL_RECIPIENTS.DEPARTMENTS[documentInfo.subCategory];
//       if (!departmentEmail) {
//         throw new Error(`No email configured for department: ${documentInfo.subCategory}`);
//       }

//       emailContent = {
//         from: SMTP_CONFIG.user,
//         to: departmentEmail,
//         subject: `Document Rejected: ${documentInfo.pdfName}`,
//         html: `
//           <h2>Document Rejection Notice</h2>
//           <p>A document from your department has been rejected.</p>
//           <p><strong>Document Details:</strong></p>
//           <ul>
//             <li>Name: ${documentInfo.pdfName}</li>
//             <li>Category: ${documentInfo.category}</li>
//             <li>Department: ${documentInfo.subCategory}</li>
//             <li>Rejection Date: ${new Date().toLocaleDateString()}</li>
//           </ul>
//           <p>Please review the document and make necessary adjustments before resubmitting.</p>
//         `
//       };
//     } else {
//       throw new Error('Invalid action specified');
//     }

//     const info = await transporter.sendMail(emailContent);
//     return info;
//   } catch (error) {
//     console.error('Error in sendEmailMgt:', error);
//     throw error;
//   }
// };

// module.exports = {
//   sendEmailMgt
// };