# Prerequisite

- Install Node (with NVM)
- Install Docker and enable Kubernetes
- Install helm, then [ingress](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)
- Install skaffold

# Set secret in kubectl

`kubectl create secret generic jwt-secret --from-literal JWT_KEY=asdf`

# Run

`skaffold dev`

# Cleanup

`skaffold delete`
