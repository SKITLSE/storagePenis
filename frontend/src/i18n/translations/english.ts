export const english = {
  // Navbar
  "navbar.upload": "Upload",
  "navbar.signin": "Sign in",
  "navbar.home": "Home",
  "navbar.signup": "Sign Up",

  "navbar.links.shares": "My shares",
  "navbar.links.reverse": "Reverse shares",

  "navbar.avatar.account": "My account",
  "navbar.avatar.admin": "Administration",
  "navbar.avatar.signout": "Sign out",
  // END navbar

  // /
  "home.title": "A <h>self-hosted</h> file sharing platform.",

  "home.description":
    "Do you really want to give your personal files in the hand of third parties like WeTransfer?",
  "home.bullet.a.name": "Self-Hosted",
  "home.bullet.a.description": "Host Pingvin Share on your own machine.",
  "home.bullet.b.name": "Privacy",
  "home.bullet.b.description":
    "Your files are your files and should never get into the hands of third parties.",
  "home.bullet.c.name": "No annoying file size limit",
  "home.bullet.c.description":
    "Upload as big files as you want. Only your hard drive will be your limit.",

  "home.button.start": "Get started",
  "home.button.source": "Source code",
  // END /

  // /account
  "account.title": "My account",

  "account.card.info.title": "Account info",
  "account.card.info.username": "Username",
  "account.card.info.email": "Email",
  "account.notify.info.success": "Account updated successfully",

  "account.card.password.title": "Password",
  "account.card.password.old": "Old password",
  "account.card.password.new": "New password",
  "account.notify.password.success": "Password changed successfully",

  // TODO: Add translations for disable totp
  "account.card.security.title": "Security",
  "account.card.security.totp.enable.description":
    "Enter your current password to start enabling TOTP",
  "account.card.security.totp.disable.description":
    "Enter your current password to start enabling TOTP",
  "account.card.security.totp.button.start": "Start",
  "account.modal.totp.title": "Enable TOTP",
  "account.modal.totp.step1": "Step 1: Add your authenticator",
  "account.modal.totp.step2": "Step 2: Validate your code",
  "account.modal.totp.enterManually": "Enter manually",
  "account.modal.totp.code": "Code",
  "account.modal.totp.clickToCopy": "Click to copy",
  "account.modal.totp.verify": "Verify",
  "account.notify.totp.disable": "TOTP disabled successfully",
  "account.notify.totp.enable": "TOTP enabled successfully",

  "account.card.color.title": "Color scheme",

  // ThemeSwitcher.tsx
  "account.theme.dark": "Dark",
  "account.theme.light": "Light",
  "account.theme.system": "System",

  "account.button.delete": "Delete Account",
  "account.modal.delete.title": "Delete Account",
  "account.modal.delete.description":
    "Do you really want to delete your account including all your active shares?",
  // END /account

  // /account/shares
  "account.shares.title": "My shares",
  "account.shares.title.empty": "It's empty here 👀",
  "account.shares.description.empty": "You don't have any shares.",
  "account.shares.button.create": "Create one",

  "account.shares.table.id": "ID",
  "account.shares.table.name": "Name",
  "account.shares.table.description": "Description",
  "account.shares.table.visitors": "Visitors",
  "account.shares.table.expiresAt": "Expires at",
  "account.shares.table.createdAt": "Created at",
  "account.shares.table.size": "Size",

  "account.shares.modal.delete.title": "Delete {share}",
  "account.shares.modal.delete.description":
    "Do you really want to delete this share?",

  // END /account/shares

  // /account/reverseShares
  "account.reverseShares.title": "Reverse shares",
  "account.reverseShares.description":
    "A reverse share allows you to generate a unique URL that allows external users to create a share.",

  "account.reverseShares.title.empty": "It's empty here 👀",
  "account.reverseShares.description.empty":
    "You don't have any reverse shares.",

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
  "account.reverseShares.modal.send-email.description":
    "Send an email notification when a share is created with this reverse share link.",

  "account.reverseShares.modal.max-use.label": "Max uses",
  "account.reverseShares.modal.max-use.description":
    "The maximum amount of times this URL can be used to create a share.",
  "account.reverseShare.never-expires": "This reverse share will never expire.",
  "account.reverseShare.expires-on":
    "This reverse share will expire on {expiration}.",

  "account.reverseShares.table.no-shares": "No shares created yet",
  "account.reverseShares.table.count.singular": "share",
  "account.reverseShares.table.count.plural": "shares",
  "account.reverseShares.table.shares": "Shares",
  "account.reverseShares.table.remaining": "Remaining uses",
  "account.reverseShares.table.max-size": "Max share size",
  "account.reverseShares.table.expires": "Expires at",

  "account.reverseShares.delete.confirm":
    "Do you really want to delete this reverse share? If you do, the associated shares will be deleted as well.",

  // END /account/reverseShares

  // /admin
  "admin.title": "Administration",
  "admin.button.users": "User management",
  "admin.button.config": "Configuration",
  "admin.version": "Version",
  // END /admin

  // /admin/users
  "admin.users.title": "User management",
  "admin.users.table.username": "Username",
  "admin.users.table.email": "Email",
  "admin.users.table.admin": "Admin",

  "admin.users.edit.update.title": "Update user {username}",
  "admin.users.edit.update.admin-privileges": "Admin privileges",
  "admin.users.edit.update.change-password.title": "Change password",
  "admin.users.edit.update.change-password.field": "New password",
  "admin.users.edit.update.change-password.button": "Save new password",
  "admin.users.edit.update.notify.password.success":
    "Password changed successfully",

  "admin.users.edit.delete.title": "Delete",
  "admin.users.edit.delete.description":
    "Do you really want to delete {username} and all their shares?",

  // showCreateUserModal.tsx
  "admin.users.modal.create.title": "Create user",
  "admin.users.modal.create.username": "Username",
  "admin.users.modal.create.email": "Email",
  "admin.users.modal.create.password": "Password",
  "admin.users.modal.create.manual-password": "Set password manually",
  "admin.users.modal.create.manual-password.description":
    "If not checked, the user will receive an email with a link to set their password.",
  "admin.users.modal.create.admin": "Admin privileges",
  "admin.users.modal.create.admin.description":
    "If checked, the user will be able to access the admin panel.",

  // END /admin/users

  // /upload
  "upload.title": "Upload",

  "upload.notify.generic-error":
    "An error occurred while finishing your share.",
  "upload.notify.count-failed": "{count} filed failed to upload. Trying again.",

  // Dropzone.tsx
  "upload.dropzone.title": "Upload files",
  "upload.dropzone.description":
    "Drag'n'drop files here to start your share. We can accept only files that are less than {maxSize} in total.",
  "upload.dropzone.notify.file-too-big":
    "Your files exceed the maximum share size of {maxSize}.",

  // FileList.tsx
  "upload.filelist.name": "Name",
  "upload.filelist.size": "Size",

  // showCreateUploadModal.tsx
  "upload.modal.title": "Create Share",
  "upload.modal.link.error.invalid":
    "Can only contain letters, numbers, underscores, and hyphens",
  "upload.modal.link.error.taken": "This link is already in use",
  "upload.modal.not-signed-in": "You're not signed in",
  "upload.modal.not-signed-in-description":
    "You will be unable to delete your share manually and view the visitor count.",

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
  "upload.modal.accordion.description.placeholder":
    "Note for the recipients of this share",

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
  "upload.modal.completed.expires-on":
    "This share will expire on {expiration}.",
  "upload.modal.completed.share-ready": "Share ready",

  // END /upload

  // Common translations
  "common.button.save": "Save",
  "common.button.create": "Create",
  "common.button.delete": "Delete",
  "common.button.cancel": "Cancel",
  "common.button.confirm": "Confirm",
  "common.button.disable": "Disable",
  "common.button.share": "Share",
  "common.button.generate": "Generate",
  "common.button.done": "Done",
  "common.text.link": "Link",
  "common.text.or": "or",
  "common.notify.copied": "Your link was copied to the clipboard",
};
