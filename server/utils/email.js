const nodemailer = require('nodemailer');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `gomaamostafa26@gmail.com`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'development') {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'sendGrid',
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(subject) {
    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
    };

    // 3) Create a transport and send email
    return this.newTransport().sendMail(
      {
        from: 'gomaamostafa26@gmail.com', // verified sender email
        to: 'mostafa@mailsac.com', // recipient email
        subject: 'Test message subject', // Subject line
        text: 'Hello world!', // plain text body
        html: '<b>Hello world!</b>', // html body
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }
    );
  }

  async sendWelcome() {
    await this.send('Welcome', 'Welcome to our Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
};
