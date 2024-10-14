# todo-ui-react

todo-ui-react repository is a frontend web application built with React to demonstrate a Todo CRUD UI.

The main focus is to keep business logic simple and leverage React features in depth. The application features user registration, login, creating a todo, updating a todo, and showing a list of todos to the user.

The application leverages the use of core React concepts, such as:
- Common Hooks (`useState`, `useEffect`, `useContext` etc.)
- React Router for navigation
- Fetch API for HTTP requests


## Repository Branches

The repository consists of three different branches, each showcasing different approaches to React application development and deployment.

### - master branch
- **Development:** Leverages TypeScript to build the React application.
- **Deployment:** Utilizes GitHub Actions to create a CI/CD pipeline, builds Docker images, and configures NGINX for hosting.

### - s3-production branch
- **Development:** Leverages TypeScript to build the React application.
- **Deployment:** Utilizes GitHub Actions to build an efficient and maintainable CI/CD pipeline and securely deploys the application to an AWS S3 bucket.

### - vanila_js branch
- **Development:** Uses Vanilla JavaScript to build the React application.
- **Deployment:** Focuses on development using pure JavaScript features.


### In order to run the application:

- **Node version:** 20
- **NPM version:** 10.2.4

Most importantly, the application securely communicates with an API created in Java. To run the application, follow these options:

1. Clone the API server from the link below:
   - [Todo API Spring Server](https://github.com/Mruruc/todo-api-spring)

2. Run the API server locally. You'll need the following:

   - **Java Version:** 21
   - **Maven Version:** 3.9.5
   - **PostgreSQL Database**

3. After cloning the repository, provide your database credentials in the `app.yaml` file:

```yaml
application:
  name: to-do-api
  server:
    port: 8080

  security:
    allowed-origins: http://localhost:8080
    jwt:
      signing-key: kKJ1broVO1hn2yoRK19jCOfSO0iEyxcH38x3s5VJyEs=
      TOKEN_EXPIRATION_TIME: 3600000

spring:
  datasource:
    url: your-database-url
    username: your-database-username
    password: your-database-password
```
4. Build the application using Maven and run it as follows:

```bash
mvn clean package
java -jar your-jar-location.jar --spring.config.location=file:/your-app-yaml-file-location/app.yaml

```

### Another Way to Run the Application

You can also run the application using the server's Docker images. Follow the steps below:

1. Find the latest Docker image from the link below:
   - [Docker Hub - Todo API Tags](https://hub.docker.com/r/mruruc/todo-api/tags)

2. Pull the latest image:

```bash
docker pull mruruc/todo-api:1.0.2
```
3. Create your .env file with the following setup:

```
# Application Settings
APPLICATION_NAME=to-do-api
APPLICATION_SERVER_PORT=8080

# Security Settings
APPLICATION_SECURITY_ALLOWED_ORIGINS=http://localhost:8080
APPLICATION_SECURITY_JWT_SIGNING_KEY=kKJ1broVO1hn2yoRK19jCOfSO0iEyxcH38x3s5VJyEs=
APPLICATION_SECURITY_JWT_TOKEN_EXPIRATION_TIME=3600000

# Spring DataSource Settings
SPRING_DATASOURCE_URL=your-db-url
SPRING_DATASOURCE_USERNAME=your-db-username
SPRING_DATASOURCE_PASSWORD=your-db-password
```

4. Create a docker-compose.yml file with the following setup:

```yaml 
services:
  todo-api:
    container_name: todo-api
    image: mruruc/todo-api:1.0.2
    ports:
      - "8083:8080"
    env_file:
      - .env # your .env file location
    networks:
      - todo_network

networks:
  todo_network:
    driver: bridge

```

5. Run the following command to start the application:

```bash 
docker-compose up
```

The API server will now be ready to accept and process requests.