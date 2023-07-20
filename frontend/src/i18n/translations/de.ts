export default {
  // Navbar
  "navbar.upload": "Hochladen",
  "navbar.signin": "Anmelden",
  "navbar.home": "Startseite",
  "navbar.signup": "Registrieren",
  "navbar.links.shares": "Meine Freigaben",
  "navbar.links.reverse": "Reverse Shares",
  "navbar.avatar.account": "Mein Konto",
  "navbar.avatar.admin": "Administration",
  "navbar.avatar.signout": "Abmelden",
  // END navbar
  // /
  "home.title": "Eine <h>selbst gehostete</h> Dateifreigabe-Plattform.",
  "home.description": "Do you really want to give your personal files in the hand of third parties like WeTransfer?",
  "home.bullet.a.name": "Selbst gehostet",
  "home.bullet.a.description": "Host Pingvin Share on your own machine.",
  "home.bullet.b.name": "Privatsphäre",
  "home.bullet.b.description": "Your files are your files and should never get into the hands of third parties.",
  "home.bullet.c.name": "Keine lästige Dateigrößenbegrenzung",
  "home.bullet.c.description": "Upload as big files as you want. Only your hard drive will be your limit.",
  "home.button.start": "Lege los",
  "home.button.source": "Quellcode",
  // END /
  // /auth/signin
  "signin.title": "Willkommen zurück",
  "signin.description": "Du hast noch kein Konto?",
  "signin.button.signup": "Registrieren",
  "signin.input.email-or-username": "Email oder Benutzername",
  "signin.input.email-or-username.placeholder": "Deine Email Adresse oder Benutzername",
  "signin.input.password": "Passwort",
  "signin.input.password.placeholder": "Dein Passwort",
  "signin.button.submit": "Anmelden",
  "signIn.notify.totp-required.title": "Zwei-Faktor-Authentifizierung benötigt",
  "signIn.notify.totp-required.description": "Bitte füge deinen Zwei-Faktor-Authentifizierungscode ein",
  // END /auth/signin
  // /auth/signup
  "signup.title": "Erstelle ein Konto",
  "signup.description": "Besitzt du bereits ein Konto?",
  "signup.button.signin": "Anmelden",
  "signup.input.username": "Benutzername",
  "signup.input.username.placeholder": "Dein Benutzername",
  "signup.input.email": "Email",
  "signup.input.email.placeholder": "Deine Emailadresse",
  "signup.button.submit": "Lass uns loslegen",
  // END /auth/signup
  // /auth/reset-password
  "resetPassword.title": "Passwort vergessen?",
  "resetPassword.description": "Gib deine Email Adresse ein, um dein Passwort zurückzusetzen.",
  "resetPassword.notify.success": "Ein Link zum Rücksetzen des Passwortes wurde an deine Emailadresse versandt.",
  "resetPassword.button.back": "Zurück zur Anmeldeseite",
  "resetPassword.text.resetPassword": "Passwort zurücksetzen",
  "resetPassword.text.enterNewPassword": "Gib dein neues Passwort ein",
  "resetPassword.input.password": "Neues Passwort",
  "resetPassword.notify.passwordReset": "Dein Passwort wurde erfolgreich zurückgesetzt.",
  // /account
  "account.title": "Mein Konto",
  "account.card.info.title": "Kontoinformationen",
  "account.card.info.username": "Benutzername",
  "account.card.info.email": "Email",
  "account.notify.info.success": "Konto erfolgreich aktualisiert",
  "account.card.password.title": "Passwort",
  "account.card.password.old": "Altes Passwort",
  "account.card.password.new": "Neues Passwort",
  "account.notify.password.success": "Passwort erfolgreich geändert",
  "account.card.security.title": "Sicherheit",
  "account.card.security.totp.enable.description": "Geben dein aktuelles Passwort ein, um TOTP zu aktivieren",
  "account.card.security.totp.disable.description": "Geben dein aktuelles Passwort ein, um TOTP zu deaktivieren",
  "account.card.security.totp.button.start": "Starten",
  "account.modal.totp.title": "TOTP aktivieren",
  "account.modal.totp.step1": "Step 1: Add your authenticator",
  "account.modal.totp.step2": "Step 2: Validate your code",
  "account.modal.totp.enterManually": "Enter manually",
  "account.modal.totp.code": "Code",
  "account.modal.totp.clickToCopy": "Klicken zum Kopieren",
  "account.modal.totp.verify": "Verify",
  "account.notify.totp.disable": "TOTP erfolgreich deaktiviert",
  "account.notify.totp.enable": "TOTP erfolgreich aktiviert",
  "account.card.language.title": "Sprache",
  "account.card.color.title": "Farbschema",
  // ThemeSwitcher.tsx
  "account.theme.dark": "Dunkel",
  "account.theme.light": "Hell",
  "account.theme.system": "System",
  "account.button.delete": "Konto löschen",
  "account.modal.delete.title": "Konto löschen",
  "account.modal.delete.description": "Do you really want to delete your account including all your active shares?",
  // END /account
  // /account/shares
  "account.shares.title": "My shares",
  "account.shares.title.empty": "It's empty here 👀",
  "account.shares.description.empty": "You don't have any shares.",
  "account.shares.button.create": "Erstelle eine",
  "account.shares.info.title": "Share informations",
  "account.shares.table.id": "ID",
  "account.shares.table.name": "Name",
  "account.shares.table.description": "Beschreibung",
  "account.shares.table.visitors": "Besucher",
  "account.shares.table.expiresAt": "Expires at",
  "account.shares.table.createdAt": "Created at",
  "account.shares.table.size": "Size",
  "account.shares.modal.share-link": "Share link",
  "account.shares.modal.delete.title": "Delete share {share}",
  "account.shares.modal.delete.description": "Do you really want to delete this share?",
  // END /account/shares
  // /account/reverseShares
  "account.reverseShares.title": "Reverse shares",
  "account.reverseShares.description": "A reverse share allows you to generate a unique URL that allows external users to create a share.",
  "account.reverseShares.title.empty": "It's empty here 👀",
  "account.reverseShares.description.empty": "You don't have any reverse shares.",
  // showCreateReverseShareModal.tsx
  "account.reverseShares.modal.expiration.label": "Expiration",
  "account.reverseShares.modal.expiration.minute-singular": "Minute",
  "account.reverseShares.modal.expiration.minute-plural": "Minutes",
  "account.reverseShares.modal.expiration.hour-singular": "Hour",
  "account.reverseShares.modal.expiration.hour-plural": "Hours",
  "account.reverseShares.modal.expiration.day-singular": "Day",
  "account.reverseShares.modal.expiration.day-plural": "Days",
  "account.reverseShares.modal.expiration.week-singular": "Week",
  "account.reverseShares.modal.expiration.week-plural": "Weeks",
  "account.reverseShares.modal.expiration.month-singular": "Month",
  "account.reverseShares.modal.expiration.month-plural": "Months",
  "account.reverseShares.modal.expiration.year-singular": "Year",
  "account.reverseShares.modal.expiration.year-plural": "Years",
  "account.reverseShares.modal.max-size.label": "Max share size",
  "account.reverseShares.modal.send-email": "Send email notification",
  "account.reverseShares.modal.send-email.description": "Send an email notification when a share is created with this reverse share link.",
  "account.reverseShares.modal.max-use.label": "Max uses",
  "account.reverseShares.modal.max-use.description": "The maximum amount of times this URL can be used to create a share.",
  "account.reverseShare.never-expires": "This reverse share will never expire.",
  "account.reverseShare.expires-on": "This reverse share will expire on {expiration}.",
  "account.reverseShares.table.no-shares": "No shares created yet",
  "account.reverseShares.table.count.singular": "share",
  "account.reverseShares.table.count.plural": "shares",
  "account.reverseShares.table.shares": "Freigaben",
  "account.reverseShares.table.remaining": "Verbleibende Verwendungen",
  "account.reverseShares.table.max-size": "Maximale Freigabegröße",
  "account.reverseShares.table.expires": "Läuft ab am",
  "account.reverseShares.modal.reverse-share-link": "Reverse share link",
  "account.reverseShares.modal.delete.title": "Delete reverse share",
  "account.reverseShares.modal.delete.description": "Do you really want to delete this reverse share? If you do, the associated shares will be deleted as well.",
  // END /account/reverseShares
  // /admin
  "admin.title": "Administration",
  "admin.button.users": "Benutzerverwaltung",
  "admin.button.config": "Konfiguration",
  "admin.version": "Version",
  // END /admin
  // /admin/users
  "admin.users.title": "Benutzerverwaltung",
  "admin.users.table.username": "Benutzername",
  "admin.users.table.email": "Email",
  "admin.users.table.admin": "Admin",
  "admin.users.edit.update.title": "Benutzer {username} aktualisieren",
  "admin.users.edit.update.admin-privileges": "Administratorrechte",
  "admin.users.edit.update.change-password.title": "Passwort ändern",
  "admin.users.edit.update.change-password.field": "Neues Passwort",
  "admin.users.edit.update.change-password.button": "Neues Passwort speichern",
  "admin.users.edit.update.notify.password.success": "Passwort erfolgreich geändert",
  "admin.users.edit.delete.title": "Delete user {username}",
  "admin.users.edit.delete.description": "Do you really want to delete this user and all his shares?",
  // showCreateUserModal.tsx
  "admin.users.modal.create.title": "Create user",
  "admin.users.modal.create.username": "Username",
  "admin.users.modal.create.email": "Email",
  "admin.users.modal.create.password": "Passwort",
  "admin.users.modal.create.manual-password": "Set password manually",
  "admin.users.modal.create.manual-password.description": "If not checked, the user will receive an email with a link to set their password.",
  "admin.users.modal.create.admin": "Admin privileges",
  "admin.users.modal.create.admin.description": "If checked, the user will be able to access the admin panel.",
  // END /admin/users
  // /upload
  "upload.title": "Upload",
  "upload.notify.generic-error": "An error occurred while finishing your share.",
  "upload.notify.count-failed": "{count} files failed to upload. Trying again.",
  // Dropzone.tsx
  "upload.dropzone.title": "Upload files",
  "upload.dropzone.description": "Drag'n'drop files here to start your share. We can accept only files that are less than {maxSize} in total.",
  "upload.dropzone.notify.file-too-big": "Your files exceed the maximum share size of {maxSize}.",
  // FileList.tsx
  "upload.filelist.name": "Name",
  "upload.filelist.size": "Size",
  // showCreateUploadModal.tsx
  "upload.modal.title": "Create Share",
  "upload.modal.link.error.invalid": "Can only contain letters, numbers, underscores, and hyphens",
  "upload.modal.link.error.taken": "This link is already in use",
  "upload.modal.not-signed-in": "You're not signed in",
  "upload.modal.not-signed-in-description": "You will be unable to delete your share manually and view the visitor count.",
  "upload.modal.expires.never": "never",
  "upload.modal.expires.never-long": "Never Expires",
  "upload.modal.link.label": "Link",
  "upload.modal.link.placeholder": "myAwesomeShare",
  "upload.modal.expires.label": "Expiration",
  "upload.modal.expires.minute-singular": "Minute",
  "upload.modal.expires.minute-plural": "Minutes",
  "upload.modal.expires.hour-singular": "Hour",
  "upload.modal.expires.hour-plural": "Hours",
  "upload.modal.expires.day-singular": "Day",
  "upload.modal.expires.day-plural": "Days",
  "upload.modal.expires.week-singular": "Week",
  "upload.modal.expires.week-plural": "Weeks",
  "upload.modal.expires.month-singular": "Month",
  "upload.modal.expires.month-plural": "Months",
  "upload.modal.expires.year-singular": "Year",
  "upload.modal.expires.year-plural": "Years",
  "upload.modal.accordion.description.title": "Description",
  "upload.modal.accordion.description.placeholder": "Note for the recipients of this share",
  "upload.modal.accordion.email.title": "Email recipients",
  "upload.modal.accordion.email.placeholder": "Enter email recipients",
  "upload.modal.accordion.email.invalid-email": "Invalid email address",
  "upload.modal.accordion.security.title": "Security options",
  "upload.modal.accordion.security.password.label": "Password protection",
  "upload.modal.accordion.security.password.placeholder": "No password",
  "upload.modal.accordion.security.max-views.label": "Maximum views",
  "upload.modal.accordion.security.max-views.placeholder": "No limit",
  // showCompletedUploadModal.tsx
  "upload.modal.completed.never-expires": "This share will never expire.",
  "upload.modal.completed.expires-on": "This share will expire on {expiration}.",
  "upload.modal.completed.share-ready": "Share ready",
  // END /upload
  // /share/[id]
  "share.title": "Share {shareId}",
  "share.description": "Look what I've shared with you!",
  "share.error.visitor-limit-exceeded.title": "Visitor limit exceeded",
  "share.error.visitor-limit-exceeded.description": "The visitor limit from this share has been exceeded.",
  "share.error.removed.title": "Share removed",
  "share.error.not-found.title": "Share not found",
  "share.error.not-found.description": "The share you're looking for doesn't exist.",
  "share.modal.password.title": "Password required",
  "share.modal.password.description": "To access this share please enter the password for the share.",
  "share.modal.password": "Password",
  "share.modal.error.invalid-password": "Invalid password",
  "share.button.download-all": "Download all",
  "share.notify.download-all-preparing": "The share is preparing. Try again in a few minutes.",
  "share.modal.file-link": "File link",
  "share.table.name": "Name",
  "share.table.size": "Size",
  "share.modal.file-preview.error.not-supported.title": "Preview not supported",
  "share.modal.file-preview.error.not-supported.description": "A preview for thise file type is unsupported. Please download the file to view it.",
  // END /share/[id]
  // /admin/config
  "admin.config.title": "Configuration",
  "admin.config.category.general": "General",
  "admin.config.category.share": "Share",
  "admin.config.category.email": "Email",
  "admin.config.category.smtp": "SMTP",
  "admin.config.general.app-name": "App name",
  "admin.config.general.app-name.description": "Name of the application",
  "admin.config.general.app-url": "App URL",
  "admin.config.general.app-url.description": "On which URL Pingvin Share is available",
  "admin.config.general.show-home-page": "Show home page",
  "admin.config.general.show-home-page.description": "Whether to show the home page",
  "admin.config.general.logo": "Logo",
  "admin.config.general.logo.description": "Change your logo by uploading a new image. The image must be a PNG and should have the format 1:1.",
  "admin.config.general.logo.placeholder": "Pick image",
  "admin.config.email.enable-share-email-recipients": "Enable share email recipients",
  "admin.config.email.enable-share-email-recipients.description": "Whether to allow emails to share recipients. Only enable this if you have enabled SMTP.",
  "admin.config.email.share-recipients-subject": "Share recipients subject",
  "admin.config.email.share-recipients-subject.description": "Subject of the email which gets sent to the share recipients.",
  "admin.config.email.share-recipients-message": "Share recipients message",
  "admin.config.email.share-recipients-message.description": "Message which gets sent to the share recipients. Available variables:\n {creator} - The username of the creator of the share\n {shareUrl} - The URL of the share\n {desc} - The description of the share\n {expires} - The expiration date of the share\n The variables will be replaced with the actual value.",
  "admin.config.email.reverse-share-subject": "Reverse share subject",
  "admin.config.email.reverse-share-subject.description": "Subject of the email which gets sent when someone created a share with your reverse share link.",
  "admin.config.email.reverse-share-message": "Reverse share message",
  "admin.config.email.reverse-share-message.description": "Message which gets sent when someone created a share with your reverse share link. {shareUrl} will be replaced with the creator's name and the share URL.",
  "admin.config.email.reset-password-subject": "Reset password subject",
  "admin.config.email.reset-password-subject.description": "Subject of the email which gets sent when a user requests a password reset.",
  "admin.config.email.reset-password-message": "Reset password message",
  "admin.config.email.reset-password-message.description": "Message which gets sent when a user requests a password reset. {url} will be replaced with the reset password URL.",
  "admin.config.email.invite-subject": "Invite subject",
  "admin.config.email.invite-subject.description": "Subject of the email which gets sent when an admin invites a user.",
  "admin.config.email.invite-message": "Invite message",
  "admin.config.email.invite-message.description": "Message which gets sent when an admin invites a user. {url} will be replaced with the invite URL and {password} with the password.",
  "admin.config.share.allow-registration": "Allow registration",
  "admin.config.share.allow-registration.description": "Whether registration is allowed",
  "admin.config.share.allow-unauthenticated-shares": "Allow unauthenticated shares",
  "admin.config.share.allow-unauthenticated-shares.description": "Whether unauthenticated users can create shares",
  "admin.config.share.max-size": "Max size",
  "admin.config.share.max-size.description": "Maximum share size in bytes",
  "admin.config.smtp.enabled": "Enabled",
  "admin.config.smtp.enabled.description": "Whether SMTP is enabled. Only set this to true if you entered the host, port, email, user and password of your SMTP server.",
  "admin.config.smtp.host": "Host",
  "admin.config.smtp.host.description": "Host of the SMTP server",
  "admin.config.smtp.port": "Port",
  "admin.config.smtp.port.description": "Port of the SMTP server",
  "admin.config.smtp.email": "Email",
  "admin.config.smtp.email.description": "Email address which the emails get sent from",
  "admin.config.smtp.username": "Username",
  "admin.config.smtp.username.description": "Username of the SMTP server",
  "admin.config.smtp.password": "Password",
  "admin.config.smtp.password.description": "Password of the SMTP server",
  "admin.config.smtp.button.test": "Send test email",
  // 404
  "404.title": "404",
  "404.description": "Oops this page doesn't exist.",
  "404.button.home": "Bring me back home",
  // Common translations
  "common.button.save": "Save",
  "common.button.create": "Create",
  "common.button.submit": "Submit",
  "common.button.delete": "Delete",
  "common.button.cancel": "Cancel",
  "common.button.confirm": "Confirm",
  "common.button.disable": "Disable",
  "common.button.share": "Share",
  "common.button.generate": "Generate",
  "common.button.done": "Done",
  "common.text.link": "Link",
  "common.text.or": "or",
  "common.button.go-back": "Go back",
  "common.notify.copied": "Your link was copied to the clipboard",
  "common.error": "Error",
  "common.error.unknown": "An unknown error occurred",
  "common.error.invalid-email": "Invalid email address",
  "common.error.too-short": "Must be at least {length} characters",
  "common.error.too-long": "Must be at most {length} characters",
  "common.error.exact-length": "Must be exactly {length} characters",
  "common.error.invalid-number": "Muss eine Zahl sein",
  "common.error.field-required": "Dieses Feld ist erforderlich"
};