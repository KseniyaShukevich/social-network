import nodemailer from 'nodemailer';

class mailService {
  static transporter: any = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  static async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Activation account in ' + process.env.API_URL,
      text: '',
      html: `
          <div>
            <h1>Follow link for account activation</h1>
            <a href="${link}">${link}</a>
          </div>
        `,
    });
  }
}

export default mailService;
