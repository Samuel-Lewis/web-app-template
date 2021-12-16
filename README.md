# Deployment

Deployment is down automatically on merges to master. Make sure to generate a **ssh key** for the GitHub action using:

- Generate keys with

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```

- Add the **public key** (`./gh-pages.pub`) to Settings -> Deploy Keys section and Enable Write Access
- Add the **private key** (`./gh-pages`) as `ACTIONS_DEPLOY_KEY ` to Settings -> Secret Keys

See [Deploy React App using GitHub actions](https://dev.to/achukka/deploy-react-app-using-github-actions-157d) for more details.
