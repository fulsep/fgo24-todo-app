# Todo App

This is a simple todo app built with ReactJS and Redux for the global state management.

## Preview

![Preview](/docs/preview.png)

## Dependencies

To develop this app, we are using some dependencies:
- ReactJS
- TailwindCSS
- Redux Toolkit
- Redux Persist
- Lucide Icon

And frontend tooling, the one and only:
- Vite

## How to Run

### Manual

1. Clone this repository
```bash
git clone https://github.com/fulsep/fgo24-todo-app.git
```
2. Get into the path
```bash
cd fgo24-todo-app
```
3. Install the dependencies
```bash
npm install
```
4. Run the project
```bash
npm run dev
```

### With Docker

1. Clone this repository
```bash
git clone https://github.com/fulsep/fgo24-todo-app.git
```
2. Get into the path
```bash
cd fgo24-todo-app
```
3. Build image
```bash
docker build . -t todoapp:latest
```
4. Run image with docker
```bash
docker run -p 8080:80 -d todoapp:latest
```
5. Visit your app in http://localhost:8080

## Running the app locally

This project is built with Vite, which provides fast development with hot-reloading.

1. Access the app:
   - After starting the dev server, open:
🔗 http://localhost:5173

2. Hot Reloading:
    - Any changes you make will automatically reflect in the browser.

## Contributing rules

- Create a Pull Request (PR) to the branch assigned to you (named after you).
- Follow these guidelines:
  - Semantic Commit Messages – Use clear, structured commit messages (e.g., feat: add user login, fix: resolve auth validation bug).
  - Semantic Branching (for local work) – Prefix your local branches with the commit type (e.g., feat/user-login, fix/auth-validation).

## ⚠️Cautions Bug🐞

There is some bug in this app that I'll leave for you to solve.

## License

MIT
