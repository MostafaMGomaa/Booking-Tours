const nodemailer = require('nodemailer');

const nodemailerSendgrid = require('nodemailer-sendgrid');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `${process.env.EMAIL_FROM}`;
  }

  // DEV
  newTransport() {
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
      from: 'gomaamostafa26@gmail.com',
      to: this.to,
      subject,
    };

    // 3) Create a transport and send email
    this.newTransport().sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  async sendWelcomeDev() {
    await this.send('welcome', 'Welcome to our Family!');
  }

  async sendPasswordResetDev() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  }

  // Prod
  sendEmailProd(subject, message, html) {
    const transport = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.SENDGRID_PASSWORD,
      })
    );

    return transport.sendMail(
      {
        from: this.from,
        to: this.to,
        subject,
        html,
        message,
      },
      function (err, info) {
        if (err) console.log(err.response.body);
      }
    );
  }

  sendWelcomeProd() {
    return this.sendEmailProd(
      'Welcome',
      'Welcome to our Family!',
      '<h1>Booking Flights</h1>'
    );
  }
  sendPasswordResetProd() {
    this.sendEmailProd(
      'Your password reset token (valid for only 10 minutes)',
      `Submit PATCH request to ${this.url} if you forget your password \nOherwise forget about this email.`,
      `<h1>Your token is ${this.url}</h1>`
    );
  }
};
