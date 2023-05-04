# This repo is from Udemy tutorial: Microservices with Node JS and React by Stephen Grider

---

# Prerequisite

- Install Node (with NVM)
- Install Docker and enable Kubernetes
- Install helm, then [ingress](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)
- Install skaffold
- add dev domain to /etc/hosts  
  ex: `127.0.0.1 ticketing.test`

# Prepare Stripe

stripe.com

# Set secret in kubectl

`kubectl create secret generic jwt-secret --from-literal JWT_KEY=asdf`

`kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<stripe-secret-key>`

# Run

`skaffold dev`

# Cleanup

`skaffold delete`

---

# Production and dev differences

- adjust domain names
  A: <domain> to -> kubernetes
  CNAME: www.<domain> to <domain>

- in client/api/build-client.js, use  
  `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local`  
  instead of domain
