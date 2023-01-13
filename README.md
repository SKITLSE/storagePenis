# <div align="center"><img  src="https://user-images.githubusercontent.com/58886915/166198400-c2134044-1198-4647-a8b6-da9c4a204c68.svg" width="40"/> </br>Pingvin Share</div>

Pingvin Share is self-hosted file sharing platform and an alternative for WeTransfer.

## ✨ Features

- Create a share with files that you can access with a link
- No file size limit, only your disk will be your limit
- Set a share expiration
- Optionally secure your share with a visitor limit and a password
- Email recepients
- ClamAV integration

## 🐧 Get to know Pingvin Share

- [Demo](https://pingvin-share.dev.eliasschneider.com)
- [Review by DB Tech](https://www.youtube.com/watch?v=rWwNeZCOPJA)

<img src="https://user-images.githubusercontent.com/58886915/167101708-b85032ad-f5b1-480a-b8d7-ec0096ea2a43.png" width="700"/>

## ⌨️ Setup

> Pleas note that Pingvin Share is in early stage and could include some bugs

### Recommended installation

1. Download the `docker-compose.yml` file
2. Run `docker-compose up -d`

The website is now listening available on `http://localhost:3000`, have fun with Pingvin Share 🐧!

### Integrations

#### ClamAV

With ClamAV the shares get scanned for malicious files and get removed if any found.

1. Add the ClamAV container to the Docker Compose stack (see `docker-compose.yml`) and start the container.
2. Docker will wait for ClamAV to start before starting Pingvin Share. This may take a minute or two.
3. The Pingvin Share logs should now log "ClamAV is active"

Please note that ClamAV needs a lot of [ressources](https://docs.clamav.net/manual/Installing/Docker.html#memory-ram-requirements).

### Additional resources

- [Synology NAS installation](https://mariushosting.com/how-to-install-pingvin-share-on-your-synology-nas/)

### Upgrade to a new version

Run `docker compose pull && docker compose up -d` to update your docker container

## 🖤 Contribute

You're very welcome to contribute to Pingvin Share! Follow the [contribution guide](/CONTRIBUTING.md) to get started.
