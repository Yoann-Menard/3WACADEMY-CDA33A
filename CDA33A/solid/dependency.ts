interface INotification {
	send(message: string): void;
}

class EmailService implements INotification {
	sendEmail(message: string) {
		console.log(`Envoi de l'email: ${message}`);
	}
}

class SMSService implements INotification {
	send(message: string) {
		console.log(`Envoi du SMS: ${message}`);
	}
}

class NotificationService {
	constructor(
		// private emailService: EmailService = new EmailService(),
		// private smsService: SMSService = new SMSService()
		private notification: INotification
	) {}

	sendNotification(message: string) {
		this.notification.send(message);
		//   if (type == 'email') {
		//     this.emailService.sendEmail(message);
		//   } else if (type == 'sms') {
		//     this.smsService.sendSMS(message);
		//   })
		// }
	}
}

// On ne depend jamais d'une implementation mais toujours d'une abstraction