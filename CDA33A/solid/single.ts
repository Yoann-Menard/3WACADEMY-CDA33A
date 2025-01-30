class User {}

class UserService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly emailNotification: EmailNotification
	) {}
	addUser(user: User) {
		// logique metier pour ajouter un utilisateur
		console.log("Ajout de l'utilisateur");
		this.emailNotification.sendWelcomeEmail(user);
		this.userRepository.save(user);
	}
	sendWelcomeEmail(user: User) {
		// bcp de codes
	}

	saveToDB(user: User) {
		// bcp de codes
	}
}

class UserRepository {
	save(user: User) {}
}

class EmailNotification {
	sendWelcomeEmail(user: User) {}
	sendResetPasswordEmail(user: User) {}
	sendOTP(user: User) {}
}
